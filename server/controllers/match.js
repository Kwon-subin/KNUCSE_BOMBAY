
/* Dependencies */
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
  profile.id = req.body.id;
  profile.ethnicity.value = req.body.ethnicity.value;
  profile.gender.value = req.body.gender.value;
  profile.major.value = req.body.major.value;
  profile.bio = req.body.bio;
  profile.isMentor = req.body.isMentor;
  profile.isMentee = req.body.isMentee;
  profile.language.value = req.body.language.value;
  profile.location.country = req.body.location.country;
  profile.location.city = req.body.location.city;
  
  profile.save(function(err) {
      if(err) {
        console.log(err);
        res.status(404).send(err);
      } else {
        res.json(profile);
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

/*
  Middleware: find a profile by its ID, then pass it to the next request handler.

  Find the profile using a mongoose query,
        bind it to the request object as the property 'profile',
        then finally call next
 */
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

var _pointOfMentoring;
var _majorOfMentee;
var _genderOfMentee;
var _isOld; 

exports.sensortiveIn = function(pointOfMentoring,majorOfMentee,genderOfMentee,isOld) {
  _pointOfMentoring = pointOfMentoring;
  _majorOfMentee = majorOfMentee;
  _genderOfMentee = genderOfMentee;
  _isOld = isOld;
};

exports.match = function(req, res, mentee) {

  var numRows = 4;
  var numCols = 4;


 mentee = [1, 0, 1, 1];

  //멘토 리스트
  var A = [1, 0, 1, 1];
  var B = [0, 1, 1, 0];
  var C = [0, 1, 1, 1];
  var D = [1, 1, 0, 0];
  var list = [A, B, C, D];

  var matchList = {};
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
	var weights = [0, 0, 0, 0];//지금은 동등하게

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



