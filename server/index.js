var express = require('express');
const session = require('express-session');
const { AutoEncryptionLoggerLevel } = require('mongodb');
var router = express.Router();
var mongoose = require('mongoose');

const app = express();
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server");
});
mongoose.connect("mongodb+srv://subin:qls1256@bombay.gcd0b.mongodb.net/bombay?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
});

//로그인
app.post('/login', async (req, res) => {
    const info = {
        email : req.body.email,
        password : req.body.password
    }

    if (!db.getCollection('Profile').find({"email" : info.email, "password": info.password})){
        return res.send(false);
    };
    
    const query = db.getCollection('Profile').find({"email" : info.email});

    req.session.account = {
        isMentor: query.isMentor,
        uid: query._id,
    }

    return res.send(true);
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
    
    const query = db.getCollection('Post').find({"Pid" : Pid});
    
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

    const query = db.getCollection('Notice').find({"Nid" : Nid});
    
    return res.send(query);

})

app.listen(5000);