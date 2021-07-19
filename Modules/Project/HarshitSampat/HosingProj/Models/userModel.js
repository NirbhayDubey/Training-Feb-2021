//import modules
const mongoose = require('mongoose')

//const config = require('config');
const jwt = require('jsonwebtoken');

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.methods.generateAuthToken = ()=>{
  
  const token = jwt.sign({_id:this._id},global.config('jwtPrivatKey'))
  return token
}

//create model
const User = mongoose.model('User', userSchema)

//export model
module.exports = { User }