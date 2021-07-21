
/* Dependencies */
var mongoose = require('mongoose'),
    Profile = require('../models/signUp.js');//값 가져옴

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
  await Profile.findByIdAndUpdate(id, {"isMentor" : _isMentor}, function(err, docs){
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

};

exports.match = function(req, res) {
//isMentor,priority,m_department, m_age, m_gender
  
  var numCols = 5;

  menteeList = [];
  mentee = [];
  mentorList = [];
  mentor = [];
  //var A = [0,0,0,0,0]; 이러한 형태들로 이루어 질 것임.
  //var list = [A, B, C, D];
  //var matchList = {};

  if()
  {
   //저학년이면 멘티로 분류
  }
  else{
   //고학년이면 멘토로 분류
  }
  
  Schema.findById

  var max = 0;
  var mentorNum = 0;
  var mentor;

//  Match each Matrix against another matrix
  for (var i = 0; i < list.length; i++) {
      var score = scoreMatch(checkMatches(baby, list[i]));
		  console.log(score);
      if(score > max)
      {
        max = score;
        mentorNum = i;
      }
	  }
    mentor = list[i];
    return mentor;
  };

function scoreMatch (A) {
	var score = 0;
	// 4개의 요소 가중치 두기(priority,과,나이,성별)
	var weights = [2, 4, 1, 3];

	for (var i = 0; i < numRows; i++) {
		for (var j = 0; j < numCols; j++) {
			score += weights[i]*A[i][j];	
		}
	}
	return score;
}

function checkMatches (A, B) {//A=mentor B=mentee
	// initial match matrix
	var D = [[], [], [], []];
	//  Loop through the entries to find if there are common entries
	for (var i = 0; i < numRows; i++) {
		for (var j = 0; j < numCols; j++) {
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