const mongoose = require('mongoose')

// model

const Student = mongoose.model(
  "students",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      required: true,
      trim: true,
    },
    birthplace: {
      type: String,
      required: true,
      trim: true,
    },
    firstLanguage: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    pinCode: {
      type: String,
      required: true,
      trim: true,
    },
    fatherFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherLastName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherEmail: {
      type: String,
      required: true,
      trim: true,
    },
    fatherEducation: {
      type: String,
      required: true,
      trim: true,
    },
    fatherProfession: {
      type: String,
      required: true,
      trim: true,
    },
    fatherDesignation: {
      type: String,
      required: true,
      trim: true,
    },
    fatherPhoneNo: {
      type: String,
      required: true,
      trim: true,
    },

    motherFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    motherMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    motherLastName: {
      type: String,
      required: true,
      trim: true,
    },
    motherEmail: {
      type: String,
      required: true,
      trim: true,
    },
    motherEducation: {
      type: String,
      required: true,
      trim: true,
    },
    motherProfession: {
      type: String,
      required: true,
      trim: true,
    },
    motherDesignation: {
      type: String,
      required: true,
      trim: true,
    },
    motherPhoneNo: {
      type: String,
      required: true,
      trim: true,
    },
    relation: {
      type: String,
      required: true,
      trim: true,
    },
    refereceThrough: {
      type: String,
      required: true,
      trim: true,
    },
    refereceAddress: {
      type: String,
      required: true,
      trim: true,
    },
    studentImage: {
      type: String,
      required: true,
      trim: true,
    },
  })
);

module.exports.Student = Student