// import module
const mongoose = require("mongoose");

//create schema
const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    //required:true
  },
  middleName: {
    type: String,
    //required:true
  },
  lastName: {
    type: String,
    //required:true
  },

  DOB: {
    type: Date,
    //required:true
  },
  birthPlace: {
    type: String,
    //required:true
  },
  firstLanguage: {
    type: String,
    //required:true
  },
  city: {
    type: String,
    //required:true
  },
  State: {
    type: String,
    //required:true
  },
  pinCode: {
    type: Number,
    //required:true
  },
  fatherName: {
    type: String,
    //required:true
  },
  fatherMiddleName: {
    type: String,
    //required:true
  },
  fatherLastName: {
    type: String,
    //required:true
  },
  fatherEmail: {
    type: String,
    //required:true
  },
  fatherQulification: {
    type: String,
    //required:true
  },
  fatherProfession: {
    type: String,
    //required:true
  },
  fatherDesignation: {
    type: String,
    //required:true
  },
  fatherPhoneNo: {
    type: String,
    //required:true
  },
  motherName: {
    type: String,
    //required:true
  },
  motherMiddleName: {
    type: String,
    //required:true
  },
  motherLastName: {
    type: String,
    //required:true
  },
  motherEmail: {
    type: String,
    //required:true
  },
  motherQulification: {
    type: String,
    //required:true
  },
  motherProfession: {
    type: String,
    //required:true
  },
  motherDesignation: {
    type: String,
    //required:true
  },
  motherPhoneNo: {
    type: String,
    //required:true
  },
  EmergencyContact: {
    type: String,
    //required:true
  },
  relation: {
    type: String,
    //required:true
  },
  referenceName: {
    type: String,
    //required:true
  },
  gender: {
    type: String,
    //required:true
  },
  Img: {
    type: String,
    //required:true
  },
});

//create model
const Student = mongoose.model("Student", studentSchema);

//export model
module.exports = Student;
