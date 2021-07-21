
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
  profile.name.value = req.body.name.value;
  profile.ethnicity.value = req.body.ethnicity.value;
  profile.ethnicity.score = req.body.ethnicity.score;
  profile.gender.value = req.body.gender.value;
  profile.gender.score = req.body.gender.score;
  profile.major.value = req.body.major.value;
  profile.major.score = req.body.major.score;
  profile.bio = req.body.bio;
  profile.isMentor = req.body.isMentor;
  profile.isMentee = req.body.isMentee;
  profile.language.value = req.body.language.value;
  profile.language.score = req.body.language.score;
  profile.location.country = req.body.location.country;
  profile.location.city = req.body.location.city;
  profile.location.score = req.body.location.score;
  
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

exports.match = function(req, res) {

}
