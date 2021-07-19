//import modules
const mongoose = require('mongoose')
const { User } = require("./userModel");

//create schema
const propertySchema = new mongoose.Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    Address: {
        type: String,
        required: true
    },
    Property_Type: {
        type: String,
        required: true
    },
    Bhk: {
        type: String,
        required: true
    },
     Image:{
        data:Buffer,
        contentType:String
    }
})

//create model
const Property = mongoose.model('Property', propertySchema)

//export mmodule
module.exports = {Property}