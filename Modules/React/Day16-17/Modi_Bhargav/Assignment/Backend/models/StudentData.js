const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Img: {
    type: String,
    required: true,
  },
  Logo: {
    type: String,
    required: true,
  },
  enrollNumber: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  placeOfBirth: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Pin: {
    type: Number,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  Ccity: {
    type: String,
    required: true,
  },
  Cstate: {
    type: String,
    required: true,
  },
  Ccountry: {
    type: String,
    required: true,
  },
  Cpin: {
    type: Number,
    required: true,
  },
  ffirstName: {
    type: String,
    required: true,
  },
  fmiddleName: {
    type: String,
    required: true,
  },
  flastName: {
    type: String,
    required: true,
  },
  Femail: {
    type: String,
    required: true,
  },
  Fnumber: {
    type: Number,
    required: true,
  },
  feduQualific: {
    type: String,
    required: true,
  },
  Fprofession: {
    type: String,
    required: true,
  },
  Fdesignation: {
    type: String,
    required: true,
  },
  mfirstName: {
    type: String,
    required: true,
  },
  mmiddleName: {
    type: String,
    required: true,
  },
  mlastName: {
    type: String,
    required: true,
  },
  Memail: {
    type: String,
    required: true,
  },
  Mnumber: {
    type: String,
    required: true,
  },
  meduQualific: {
    type: String,
    required: true,
  },
  Mprofession: {
    type: String,
    required: true,
  },
  Mdesignation: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
