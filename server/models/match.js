/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var profileSchema = new Schema({
  Id: {
    type: String, 
    required: true
  }, 
  name:{
    value:String,
    score:Number
  },
  ethnicity:{
    value:String,
    score:Number
  },
  sexualOrientation:{
    value:String,
    score: Number
  },
  gender: {
    value:String,
    score:Number
  },
  Major:{
    value:String,
    score:Number
  },
  bio:String,
  isMentor:String,
  mbti:{
    value:String,
    score:Number
  },
  interest:{
    value:String,
    score:Number
  },
  language:{
    value:String,
    score:Number
  },
  location:{
    country:String,
    city:String,
    score:Number

  },

  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
profileSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Profile = mongoose.model('Profile', profileSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Profile;
