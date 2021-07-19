const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  driverData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "drivers"
  },
  carId: {
    type: Number,
    required: true
  },
  carLocation: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  registrationNumber: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  carType1: {
    type: String,
    required: true
  }
})

const Cars = mongoose.model('cars', carSchema)

module.exports = Cars
