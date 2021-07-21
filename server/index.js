var express = require('express');
const expressSession = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { AutoEncryptionLoggerLevel } = require('mongodb');
const { Profile } = require("./models/profile")
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
    return res.send(true)
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

//로그아웃 - 세션만료
app.get('/logout', (req, res) => {
    delete req.session.account;
})

// 번개모임 게시판 목록 보여주기
app.post('/speedmatch', async (req, res) => {
    const posts = await Post.find({}).sort({"updated_at":1});

    res.render({posts});
})

// 번개모임 게시판 글 작성
app.post('/newPost', async (req, res) => {

    const {uid} = req.session.account;
    const title = req.body.title;
    const content = req.body.content;

    try {
        db.Profile.insertOne({
            "author" : uid, "title" : title, "content" : content
        })
        return res.send(true);
    } catch (e) {
        return res.send(false);
    }
    
})

// 번개모임 count 추가
app.get('/speedmatch', async (req, res) => {
    
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
app.post('/notice', async (req, res) => {
    const Nid = req.body.nid;

    const query = db.Notice.find({"Nid" : Nid});
    
    return res.send(query);

})

app.listen(5000);
