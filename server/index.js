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

    console.log(req.body.name);
    console.log(req.body.residence);
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
        if(_m_age)
        {
            const _age = req.body.age;
            await Profile.update({_id : id}, { age: _age});//나이가 상관있으므로 저장
        }
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
    console.log("값 계산 전 확인 " + A);
	var weights = [2, 4, 1, 3];

	for (var i = 0; i < A.length; i++) {
			score += weights[i]*A[i];	
		}
        console.log("score 값은?"+score);
	return score;
}

function checkMatches (A, B, C, D) {//A=menteeList B=mentorList C=menteePriorityList D=mentorPriorityList
	// initial match matrix
    //priority,m_department, m_age, m_gender
	var R = [];
	//  Loop through the entries to find if there are common entries
	for (var i = 0; i < A.length; i++) {
            console.log(C[i] + D[i]);
			// Determine if the entries are the same
			if (C[i] + D[i] == 2)//학업생활관련 , 과 상관없이, 성별 상관없음, 멘티의 나이를 나보다 적게 혹은 멘토의 나이를 나보다 많게
            {
                R[i] = 10;
                if(i==4)//멘티 나이 상관 없음
                {
                    if(A[i] == B[i])
                    {
                        R[i]= 20;
                    }
                    else
                    {
                        R[i] = 0;
                    }
                }
            }
            else if (C[i] + D[i] == 0)//학업적 측면, 같은과, 성별 동성으로만, 멘티 나이 상관 없음
            {
                if(i==4)//멘티 나이 상관 없음
                {
                    R[i] = 10;
                }
                else
                {
                    if(A[i] == B[i])
                    {
                        R[i]= 20;
                    }
                    else
                    {
                        R[i] = 0;
                    }
                }
        
            }
			else//1인경우
            {
				R[i] = 10
            }
	}
	// return the match matrix
    //console.log("우선순위에 따라 변화된 값은?"+R);
	return R;
}

app.post('/user/matchingResult', async (req, res) => {
    //priority,m_department, m_age, m_gender
      var numCols = 4;
      
      menteePriorityList = [];
      mentorPriorityList = [];
      mentorList = [];
      menteeList = [];
      
      //var A = [0,0,0,0]; 이러한 형태들로 이루어 질 것임.
      //var list = [A, B, C, D];
      //var matchList = {};
     const posts = await Profile.find({});
      
      var menteeTotalNum = 0;
      var mentorTotalNum = 0;
      var id = [];
//데이터 베이스의 값이 posts에 할당된다
      //멘토멘티분류
      for (var i = 0; i < posts.length; i++)
      {
        results = false
        menteePriority = [];
        mentorPriority = [];
        mentee = [];
        mentor = [];
        
        if(posts[i].grade == 1)
        {
          //저학년이면 멘토로 분류
          mentee[0] = posts[i].id;
          mentee[1] = posts[i].department[1];
          mentee[2] = posts[i].age;
          mentee[3] = posts[i].gender;

          menteePriority[0] = posts[i].priority;
          menteePriority[1] = posts[i].m_department;
          menteePriority[2] = posts[i].m_age;
          menteePriority[3] = posts[i].m_gender;
       
          menteeList[menteeTotalNum] = mentee;
          menteePriorityList[menteeTotalNum] = menteePriority;

          menteeTotalNum = menteeTotalNum + 1;
        }
        else{
          mentor[0] = posts[i]._id;
          mentor[1] = posts[i].department[1];
          mentor[2] = posts[i].age;
          mentor[3] = posts[i].gender;

          mentorPriority[0] = posts[i].priority;
          mentorPriority[1] = posts[i].m_department;
          mentorPriority[2] = posts[i].m_age;
          mentorPriority[3] = posts[i].m_gender;
       
          mentorList[mentorTotalNum] = mentor;
          mentorPriorityList[mentorTotalNum] = mentorPriority;

          mentorTotalNum = mentorTotalNum + 1;
        }
      }

    //menteePriorityList 와 mentorPriorityList는 무슨 값을 중요하게 생각하는지 받는 배열
    //mentorList와 menteeList는 중요도에 따라 비교하는 값

      var max = 0;
      var matchingResult = []
    
      for (var i = 0; i < menteeTotalNum; i++)
      {
        matchingResult[i] = -1;
      }
    
    //  Match each Matrix against another matrix
      for (var i = 0; i < menteeList.length; i++) {
        var max = 0;
        for (var j = 0; j < mentorList.length; j++) {
          
            // console.log("시작 "+i);
            // console.log("멘티"+menteeList[i]);
            // console.log("멘티 밸류"+menteePriorityList[i]);
            // console.log("멘토"+mentorList[j]);
            // console.log("멘토 밸류"+mentorPriorityList[j]);
            // console.log(" ");
            var score = scoreMatch(checkMatches(menteeList[i], mentorList[j],menteePriorityList[i],mentorPriorityList[j]));
            
            if(score > max)//만약 우선쉬위 결과 가중치가 이전의 우선쉬위 결과 가중치보다 크다면
            {
                //이미 할당을 완료 받은 멘토인지 확인
              var count =0;
              for(var k=0; k<menteeTotalNum; k++)
              {
                  console.log("count 값은? 전"+count );
                if(matchingResult[k] == j)//할당 받은 멘토의 id가 최대 2명까지 할당되어 있는지 확인
                {
                  count = count + 1;
                }
            }
            //console.log("멘토 인덱스 저장한 배열:"+matchingResult);
            //console.log("count 값은? 후" +count);

              if(count<2)
              {
                //console.log("가장 큰 값이 들어감");
                max = score;
                matchingResult[i] = j; //i는 mentee j는 mentor
                //console.log("멘토 인덱스 저장한 배열 저장후:"+matchingResult);

                try
                {
                    var id = menteeList[i][0];
                    var id2 = mentorList[matchingResult[i]][0]
                    //console.log(id + " " +id2 )

                    await Profile.update({_id : id}, {whoIsMentor: id2 }); 
                    await Profile.updateOne({_id : id2}, {$addToSet: {"whoIsMentee": id }} );
                    //await Profile.update({_id : id2}, {$addToSet : {whoIsMentee: id }});  
                }
                catch(e)
                {
                    return res.send(results);
                }
               
              }
            }
          
         
        }
    }
    results=true
    return res.send(results);
});

app.post('/user/whoIs', async (req, res) => {

    console.log("111")
    const ID = req.body.uid;  
    const posts = await Profile.find({_id :ID});

    if(posts[0].grade === 1)
    {
        var mentorId = posts[0].whoIsMentor;
        const posts1 = await Profile.find({_id :mentorId});
        var name = posts1[0].name
        console.log(name);
        res.send(name[0]);
    }
    else{
        var menteeId = posts[0].whoIsMentee;
        const posts2 = await Profile.find({_id :menteeId[0]});
        const posts3 = await Profile.find({_id :menteeId[1]});
        var name = [];
        name[0] = posts2[0].name;
        name[1] = posts3[0].name;
        console.log(name);
        res.send(name);
    }
    
  });
  
app.post('/user/mypage', async (req, res) => {
    const user = (await Profile.findById(req.body.uid))
    console.log(user)
    u = {
        name : user.name,
        isMentor : user.isMentor
    }
    return res.send(u)
})
