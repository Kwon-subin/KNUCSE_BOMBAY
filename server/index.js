var express = require('express');
const expressSession = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { AutoEncryptionLoggerLevel } = require('mongodb');
const { Profile } = require("./models/profile")
const {Post} = require("./models/post")
var router = express.Router();
var mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server");
});
mongoose.connect("mongodb+srv://subin:qls1256@bombay.gcd0b.mongodb.net/bombay?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
});

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret:'keyboard cat'
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(5000, () => console.log('listen on port 5000...'));

app.get('/user/logout', (req, res) => {
    delete req.session
    if(!req.session) res.send(true)
    else res.send(false)
})

//로그인
app.post('/user/login', async (req, res) => {
    const info = {
        email : req.body.email,
        password : req.body.password
    }
    console.log(info)
    console.log()

    let user = await(await(Profile.findOne({"email" : info.email, "password": info.password})))
    if (!user){
        return res.send(false);
    };
    
    req.session.uid = user._id
    req.session.isMentor = user.isMentor


    return res.send(req.session);
})

app.post('/user/register', (req, res) => {

    //회원 가입 할떄 필요한 정보들을  client에서 가져오면 
    //그것들을  데이터 베이스에 넣어준다. 
    const user = new Profile(req.body)
  
    let isuser = await(await(Profile.findOne({"email" : info.email})))
    if (!isuser){
        return res.send(false);
    };
    
    Profile.create(req.body, (err, user) =>{
        if(err){
            console.log(err)
            return res.status(400).json()
        }
        return res.status(200).json()
    })
  })

// 번개모임 게시판 목록 보여주기
app.get('/user/speedmatch', async (req, res) => {
    const posts = await Post.find({}).sort({"updated_at":1});

    if(posts) res.status(200)
    else res.status(400)
    res.send({posts});
})

app.post('/user/speedmatch', async(req, res)=>{
    const id = req.body.id
    const posts = await (await Post.findById(id))
    const count = posts.count+1
    await Post.findByIdAndUpdate(id, {$addToSet:{"mentee" : req.body.mentee}}, function(err, docs){
    })
    await Post.findByIdAndUpdate(id, {"count":count}, function(err, docs){
    })

    res.send(true)
})

// 번개모임 게시판 글 작성
app.post('/user/newPost', async (req, res) => {

    const uid = req.body.uid;
    const title = req.body.title;
    const content = req.body.content;
    const body = {
        "author" : uid, "title" : title, "content" : content
    }
    Post.create(body, (err, user) =>{
        if(err){
            console.log(err)
            res.send(false)
        }
        return res.send(true)
    })
    
    
})

// 번개모임 count 추가
app.get('/user/speedmatch', async (req, res) => {
    
    const {uid} = req.session.account;
    const Pid = req.body.pid;
    
    const query = db.Post.find({"Pid" : Pid});
    
    try {
        db.Post.updateOne({Pid : Pid}, {$set :{"count" : query.count + 1}, $addToSet: {"mentee" : uid}} );
        return res.send(true);
    } catch (e) {
        return res.send(false);
    }

})

//공지사항 더 알아보기
app.post('/user/notice', async (req, res) => {
    const Nid = req.body.nid;

    const query = db.Notice.find({"Nid" : Nid});
    
    return res.send(query);

})

app.post('/user/mypage', async (req, res) => {
    const user = (await Profile.findById(req.body.uid))
    console.log(user)
    u = {
        name : user.name,
        isMentor : user.isMentor
    }
    return res.send(u)
})