// import modules
const mongoose= require('mongoose')
const{User} = require('./userModel')

//create schema
const packersAndMoversSchema = new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    ReloacteFrom:{
        type:String,
        rerqired:true
    },
    ReloacteTO:{
        type:String,
        reuired:true
    },
    TentativeDateOfMovement:{
        type:Date,
    }
});

//create model
const PackersAndMovers = mongoose.model('packersMovers',packersAndMoversSchema) 

//exports module
module.exports = {PackersAndMovers}
