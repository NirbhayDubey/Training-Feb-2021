const mongoose = require('mongoose');
const netBankingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    fname:{
        type:String,
        required: true,
    },
    mname:{
        type:String,
        required: true,
    },
    lname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    branchName:{
        type:String,
        required:true
    },
    branchCity:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    accountNo:{
        type:Number,
        required:true
    },
    CIF:{
        type:Number,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    IFSC:{
        type:Number,
        required:true
    },
    CRN:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }



})
module.exports = netBankingSchema;