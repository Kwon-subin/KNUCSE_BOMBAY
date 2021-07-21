
/* Dependencies */
<<<<<<< HEAD

  var mongoose = require('mongoose'),
  Profile = require('../models/match.js');//값 가져옴

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server");
});
mongoose.connect("mongodb+srv://subin:qls1256@bombay.gcd0b.mongodb.net/bombay?retryWrites=true&w=majority");


exports.sensortiveIn = function(req, res, id, _priority, _m_department, _m_age, _m_gender) {
app.post('/')
  try {
    db.Profile.updateOne({_id : id}, { $addToSet: {"isMentor" : _isMentor}} );
    db.Profile.updateOne({_id : id}, { $addToSet: {"priority" : _priority}} );
    db.Profile.updateOne({_id : id}, { $addToSet: {"m_department" : _m_department}} );
    db.Profile.updateOne({_id : id}, { $addToSet: {"m_age" : _m_age}} );
    db.Profile.updateOne({_id : id}, { $addToSet: {"m_gender" : _m_gender}} );
    return res.send(true);
} catch (e) {
    return res.send(false);
}
=======
var mongoose = require('mongoose'),
    Profile = require('../models/match.js');//값 가져옴

/* Create a profile */
exports.create = function(req, res) {

  /* Instantiate a Person */
  var profile = new Profile(req.body);
 
  /* Then save the profile */
  profile.save(function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.json(profile);
    }
  });
};

/* Show the current profile */
exports.read = function(req, res) {
  /* send back the profile as json from the request */
  res.json(req.profile);
};

/* Update a profile */
exports.update = function(req, res) {

  var profile = new Profile();
  profile.name = req.body.name;
  profile.email= req.body.email;
  profile.password = req.body.password;
  profile.departmen = req.body.departmen;
  profile.phone = req.body.phone;
  profile.gender = req.body.gender;
  profile.grade = req.body.grade;
  profile.age = req.body.age;
  profile.address = req.body.address;

  profile.save(function(err) {
      if(err) {
        console.log(err);
        res.status(404).send(err);
      } else {
        res.status(200).send('success');
      }
  });

};

/* Delete a profile */
exports.delete = function(req, res) {
  var profile = req.profile;
  profile.remove(function(err) {
    if(err) {
      res.status(404).send(err);
    }
    else {
      res.end();
    }
  })
};

/* Retreive all the directory profiles, sorted alphabetically by profile code */
exports.list = function(req, res) {
  Profile.find({}, null, {sort: {code: 1}}, function(err, obj){
    res.json(obj);
  });
};    

exports.listingByID = function(req, res, next, id) {
  Profile.findById(id).exec(function(err, profile) {
    if(err) {
      res.status(404).send(err);
    } else {
      req.profile = profile;
      next();
    }
  });
};



exports.sensortiveIn = function(req, res, id, _isMentor, _priority, _m_department, _m_age, _m_gender) {
  await profile.findByIdAndUpdate(id, {"isMentor" : _isMentor}, function(err, docs){
    if (err){
    console.log(err)
    }
    else{
      console.log("Updated User : ", docs);
    }
  });
  await Profile.findByIdAndUpdate(id, {"priority" : _priority}, function(err, docs){
    if (err){
      console.log(err)
      }
      else{
        console.log("Updated User : ", docs);
      }
  });
  await Profile.findByIdAndUpdate(id, {"m_department" : _m_department}, function(err, docs){
    if (err){
      console.log(err)
      }
      else{
        console.log("Updated User : ", docs);
      }
  });
  await Profile.findByIdAndUpdate(id, {"m_age" : _m_age}, function(err, docs){
    if (err){
      console.log(err)
      }
      else{
        console.log("Updated User : ", docs);
      }
  });
  await Profile.findByIdAndUpdate(id, {"m_gende" : _m_gende}, function(err, docs){
    if (err){
      console.log(err)
      }
      else{
        console.log("Updated User : ", docs);
      }
  });
};

exports.whoIsMyMentor = function(req, res, mentor) {

>>>>>>> 4e174d733bfd320f2f076f66980fd550eb899098
};

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

<<<<<<< HEAD
const match = async function(req, res) {
=======
exports.match = function(req, res) {
>>>>>>> 4e174d733bfd320f2f076f66980fd550eb899098
//isMentor,priority,m_department, m_age, m_gender
  var matchresult = {
    mento : '',
    mentees : []
  }  

  var numCols = 4;
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
              db.Profile.updateOne({_id : mentorList[i]._id}, { $addToSet: {"whoIsMentee" : menteeList[i]._id}} );
              db.Profile.updateOne({_id : menteeList[i]._id}, { $addToSet: {"whoIsMentor" : mentorList[i]._id}} );
              return res.send(true);
          } catch (e) {
              return res.send(false);
          }
          
          }
        }
      }
     
	  }
    mentor = list[i];
    return mentor;
  }
};

<<<<<<< HEAD
exports.whoIsMyMentor = async function(re, menteeId) {
  const posts = await Profile.find({_id :menteeId});
  return res.send(posts.whoIsMentor);

};

exports.whoIsMyMentee = async function(re, mentorId) {
  const posts = await Profile.find({_id :mentorId});
  return res.send(posts.whoIsMentee);

};

=======
>>>>>>> 4e174d733bfd320f2f076f66980fd550eb899098
