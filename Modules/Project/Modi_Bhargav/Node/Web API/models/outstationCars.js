const mongoose = require("mongoose");

const outstationcarSchema = new mongoose.Schema({
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
  Source: {
    type: String,
  },
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

const outstationCars = mongoose.model("outstationCar", outstationcarSchema);

module.exports = outstationCars;
