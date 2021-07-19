const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  Id: {
    type: String,
  },
  DOB: {
    type: String,
  },
  collegeLogo: {
    type: String,
  },
  collegeName: {
    type: String,
  },
  collegeNameError: {
    type: String,
  },

  dateError: {
    type: String,
  },
  email: {
    type: String,
  },
  ffname: {
    type: String,
  },
  fmname: {
    type: String,
  },
  flname: {
    type: String,
  },
  fname: {
    type: String,
  },
  mname: {
    type: String,
  },
  lname: {
    type: String,
  },

  selectedCountry: {
    type: String,
  },
  selectedDegree: {
    type: String,
  },
  selectedState: {
    type: String,
  },
  studentImage: {
    type: String,
  },
  selectedCity:{
    type:String
  }
});
module.exports = StudentSchema;
