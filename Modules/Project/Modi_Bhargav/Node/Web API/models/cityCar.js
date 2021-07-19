const mongoose = require("mongoose");

const citycarSchema = new mongoose.Schema({
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
  Destination: {
    type: String,
  },
  fareDetails: {
    type: Number,
  },
  registrationNumber: {
    type: String,
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
});

const CityCar = mongoose.model("Citycars", citycarSchema);

module.exports = CityCar;
