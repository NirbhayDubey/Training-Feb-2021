const mongoose = require("mongoose");

const outstationtripSchema = new mongoose.Schema({
  customerNumber: {
    type: Number,
  },
  Source: {
    type: String,
  },
  Destination: {
    type: String,
  },
  ScheduleDepart: {
    type: Date,
  },
  dateTimeReturn: {
    type: Date,
  },
  Journey: {
    type: String,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  driverEmail: {
    type: String,
  },
  driverNumber: {
    type: String,
  },
  registrationNumber: {
    type: String,
  },
  carType: {
    type: String,
  },
  fareAmount: {
    type: Number,
  },
  Reason: {
    type: String,
  },
});

const OutstationTrip = mongoose.model("outstationTrip", outstationtripSchema);

module.exports = OutstationTrip;
