/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
 Schema = mongoose.Schema;

/* Create your schema */
var profileSchema = new Schema({
  name : 'string',
  email: 'string',
  password: 'string',
  department: 'string',
  phone: 'string',
  gender: 'string', 
  grade : 'string', // 학년
  age : 'number', //default 값이 있음
  address : {type: 'string', default: "Daegu"}, // 출신지역 
  isMentor : {type: 'boolean', default: false},//T : 멘토, F: 멘티 
  priority : {type: 'boolean', default: true}, // T :study, F: school life
  m_department : {type: 'boolean', default: true}, // T: 같은 과, F : 타과
  m_age : {type: 'boolean', default: true}, // t: 불편 f: 상관없음
  m_gender : {type: 'boolean', default: true}, // t: 동성 f: 상관없음

  whoIsMentor : 'string',
  whoIsMentee : ["mentor1","mentor2","mentor3"],
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
const Profile = mongoose.model('Profile', profileSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = { Profile };