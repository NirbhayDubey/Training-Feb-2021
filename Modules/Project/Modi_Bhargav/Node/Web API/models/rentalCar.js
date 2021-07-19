const mongoose = require("mongoose");

const rentalcarSchema = new mongoose.Schema({
  driverName: {
    type: String,
  },
  Img: {
    type: String,
  },
  passWord: {
    type: String,
  },
  Gender: {
    type: String,
  },
  licenseNumber: {
    type: Number,
  },
  Email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  pickUp: {
    type: String,
  },
  Package: [],
  registrationNumber: {
    type: Number,
  },
  carType: {
    type: String,
  },
  carNumber: {
    type: String,
  },
  carModel: {
    type: String,
  },
  kilometerPrice: {
    type: Number,
  },
});

const rentalCars = mongoose.model("rentalCar", rentalcarSchema);

module.exports = rentalCars;
