
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

  _pointOfMentoring.save(function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.json(_pointOfMentoring);
    }
});

  _majorOfMente.save(function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.json(_majorOfMente);
    }
  });

  _genderOfMentee.save(function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.json(_genderOfMentee);
    }
  });

  _isOld.save(function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.json(_isOld);
    }
  });

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

exports.match = function(req, res, mentor,mentee) {
  

}



