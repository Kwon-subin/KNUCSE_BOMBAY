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

app.post('/user/register', async(req, res) => {

    //회원 가입 할떄 필요한 정보들을  client에서 가져오면 
    //그것들을  데이터 베이스에 넣어준다. 
    const user = new Profile(req.body)
  
    let isuser = await(await(Profile.findOne({"email" : user.email})))
    if (isuser){
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
    console.log('sep')
    const posts = await Post.find({}).sort({"updated_at":1});

    if(posts) res.status(200)
    else res.status(400)
    res.send({posts});
})

// 번개모임 게시판 글 작성
app.post('/user/newPost', async (req, res) => {

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

// 값 받아오기

//멘토 신청
app.post('/user/matching', async (req, res) => {
    const id = req.body.uid
    const _priorityTemp = req.body.focus;
    var _priority;

    if(_priorityTemp=="a")
    {
        _priority = false;
    }
    else
    {
        _priority = true;
    }
    const _m_departmentTemp = req.body.major;
    
    var _m_department;
    if(_m_departmentTemp=="a")
    {
        _m_department = false;
    }
    else
    {
        _m_department = true;
    }
    
    const _m_ageTemp = req.body.isAge;
    var _m_age;
    if(_m_ageTemp=="a")
    {
        _m_age = false;
    }
    else
    {
        _m_age = true;
    }
    
    const _m_genderTemp = req.body.gender;
    var _m_gender;

    if(_m_genderTemp=="a")
    {
        _m_gender = false;
    }
    else
    {
        _m_gender = true;
    }
    try
    {
        await Profile.update({_id : id}, {priority : _priority});
        await Profile.update({_id : id}, {m_department : _m_department});
        await Profile.update({_id : id}, {m_age : _m_age});
        await Profile.update({_id : id}, {m_gender : _m_gender});
        await Profile.update({_id : id}, {isMentor : true});
        return res.send(true);
    }
    catch(e)
    {
        return res.send(false);
    }

})

//멘티 신청
app.post('/user/matching2', async (req, res) => {
    const id = req.body.uid
    const _priorityTemp = req.body.focus;
    var _priority;

    if(_priorityTemp=="a")
    {
        _priority = false;
    }
    else
    {
        _priority = true;
    }
    const _m_departmentTemp = req.body.major;
    
    var _m_department;
    if(_m_departmentTemp=="a")
    {
        _m_department = false;
    }
    else
    {
        _m_department = true;
    }
    
    const _m_ageTemp = req.body.isAge;
    var _m_age;
    if(_m_ageTemp=="a")
    {
        _m_age = false;
    }
    else
    {
        _m_age = true;
    }
    
    const _m_genderTemp = req.body.gender;
    var _m_gender;

    if(_m_genderTemp=="a")
    {
        _m_gender = false;
    }
    else
    {
        _m_gender = true;
    }
    try
    {
        await Profile.update({_id : id}, {priority : _priority});
        await Profile.update({_id : id}, {m_department : _m_department});
        await Profile.update({_id : id}, {m_age : _m_age});
        await Profile.update({_id : id}, {m_gender : _m_gender});
        return res.send(true);
    }
    catch(e)
    {
        return res.send(false);
    }

})

function scoreMatch (A) {
	var score = 0;
	// 4개의 요소 가중치 두기//priority,m_department, m_age, m_gender
	var weights = [2, 4, 1, 3];

	for (var i = 0; i < numRows; i++) {
		for (var j = 0; j < numCols; j++) {
			score += weights[i]*A[i][j];	
		}
	}
	return score;
}

function checkMatches (A, B) {//A=mentee B=mentor
	// initial match matrix
	var D = [[], []];
	//  Loop through the entries to find if there are common entries
	for (var i = 1; i < numRows; i++) {
		for (var j = 1; j < numCols; j++) {
			// Determine if the entries are the same
			if (A[i][j] + B[i][j] == 2)
				D[i].push(1);
			else
				D[i].push(0);
		}
	}
	// return the match matrix
	return D;
}

app.post('/user/match', async (req, res) => {
    //isMentor,priority,m_department, m_age, m_gender
    
      menteeList = [];
      mentee = [];
      mentorList = [];
      mentor = [];
      //var A = [0,0,0,0]; 이러한 형태들로 이루어 질 것임.
      //var list = [A, B, C, D];
      //var matchList = {};
    
      const posts = await Profile.find({});
      var menteeTotalNum = 0;
      var mentorTotalNum = 0;
      var id = [];
    
      //멘토멘티분류
      for (var i = 0; i < posts.length; i++)
      {
        if(posts[i].grade == 1)
        {
          //저학년이면 멘토로 분류
          mentee[0] = posts[i]._id;
          mentee[1] = posts[i].priority;
          mentee[2] = posts[i].m_department;
          mentee[3] = posts[i].m_age;
          mentee[4] = posts[i].m_gender;
       
          menteeList[menteeTotalNum] = mentee;
          menteeTotalNum = menteeTotalNum + 1;
        }
        else{
         //고학년이면 멘토로 분류
         mentor[0] = posts[i]._id;
         mentor[1] = posts[i].priority;
         mentor[2] = posts[i].m_department;
         mentor[3] = posts[i].m_age;
         mentor[4] = posts[i].m_gender;
         mentorList[mentorTotalNum] = mentor;
         mentorTotalNum = mentorTotalNum + 1;
        }
      }
    
      var max = 0;
      var matchingResult = []
    
      for (var i = 0; i < menteeList.length; i++)
      {
        matchingResult[i] = 0;
      }
    
    //  Match each Matrix against another matrix
      for (var i = 0; i < menteeList.length; i++) {
        for (var j = 0; j < mentorList.length; j++) {
          if(mentee[i] == 0)
          {
            var score = scoreMatch(checkMatches(menteeList[i], mentorList[j]));
            console.log(score);
            if(score > max)
            {
              var count =0;
              for(var k=0; k<matchingResult.list; k++)
              {
                if(matchingResult[k]==mentorList[j])
                {
                  count = count + 1;
                }
              }
              if(count<3)
              {
                max = score;x
                matchingResult[i] = j; //i는 mentee j는 mentor
                try {
                        await Profile.update({_id : mentorList[i]._id}, {whoIsMentee: menteeList[i]._id});
                        await Profile.update({_id : menteeList[i]._id}, {whoIsMentee: mentorList[i]._id});
                        return res.send(true);
                    } catch (e) {
                        return res.send(false);
              }
              
              }
            }
          }
         
        }
    }
});

app.post('/user/whoIsMyMento', async (res, req) => {
    const menteeID = req.body.menteeid;
    const posts = await Profile.find({_id :menteeId});
    return res.send(posts.whoIsMentor);
  
  });
  
app.post('/user/whoIsMyMentee', async (res, req) =>{
    const mentorID = req.body.mentorid;
      const posts = await Profile.find({_id :mentorId});
      return res.send(posts.whoIsMentee);
    
});