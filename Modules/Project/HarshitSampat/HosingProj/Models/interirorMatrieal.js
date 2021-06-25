//import modules
const mongoose = require('mongoose')
const {User} = require('./userModel')

//create schema
const interiorSchema = new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true
    },
    vendor:{
        type:String,
        required:true
    },
    Budget:
    {
        type:Number,
        required:true
    },
    Scope_Of_Work:{
        type:String,
        required:true
    },
    Type_Of_Appartment:{
        type:String,
        required:true
    },
    PosesetionTimeLine:{
        type:String,
        required:true
    },
    Comments:[{
        type:String
    }]

});

//create model
const Interior = mongoose.model('interiors',interiorSchema)

//exports module
module.exports={Interior}