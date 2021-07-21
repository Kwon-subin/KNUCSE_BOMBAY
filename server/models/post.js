/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var post = new Schema({
    Pid : mongoose.Schema.Types.ObjectId,
  title: 'string',
  content: 'string',
  author: {type: mongoose.Schema.Types.ObjectId, ref:'Profile'},
  count: {type: 'number', default: 0},
  mentee: [{type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}],
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
var Post = mongoose.model('Post', post);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Post;
