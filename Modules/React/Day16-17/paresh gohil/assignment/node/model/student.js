const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  id : Number,
  images : String,
  firstName : String,
  middleName : String,
  lastName : String,
  DOB : String,
  PlaceofBirth : String,
  age : Number,
  first_language : String,
  city : String,
  State : String,
  country : String,
  pin: Number,
  F_FirstName : String,
  F_LastName : String,
  F_MiddleName : String,
  F_Email : String,
  F_Education_Qualification : String,
  F_Profession : String,
  F_Designation : String,
  F_Phone : Number,
  M_FirstName : String,
  M_LastName : String,
  M_MiddleName : String,
  M_Email : String,
  M_Education_Qualification : String,
  M_Profession : String,
  M_Designation : String,
  M_Phone : Number,
  Emergency_Contact : Number,
  R_Name : String,
  R_Relation : String,
  R_Number : Number,
  R_Address : String,  
  collegeName : String,
  logoimage : String
});
  const Student = mongoose.model('Student', studentSchema);
  
  exports.Student = Student
  exports.studentSchema = studentSchema