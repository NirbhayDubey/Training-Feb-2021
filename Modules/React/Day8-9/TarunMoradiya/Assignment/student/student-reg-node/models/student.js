const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
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
  email: String,
  qualification: String,
  profession: String,
  designation: String,
  phone: Number,
});

const studentSchema = new mongoose.Schema({
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
  email: String,
  dob: Date,
  birthPlace: String,
  city: String,
  state: String,
  country: String,
  pin: Number,
  lang: String,
  img: String,
  imgId: String,
  collegeName: String,
  collegeLogo: String,
  logoId: String,
  refDetail: String,
  refThrough: String,
  phone: Number,
  addr: String,
  mother: parentSchema,
  father: parentSchema,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
