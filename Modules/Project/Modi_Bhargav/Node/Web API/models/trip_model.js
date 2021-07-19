const mongoose = require("mongoose");

const citytripSchema = new mongoose.Schema({
  customerNumber: {
    type: Number,
  },
  driverEmail: {
    type: String,
  },
  driverNumber: {
    type: String,
  },
  ScheduleDate: {
    type: Date,
  },
  Schedule: {
    type: String,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  Source: {
    type: String,
  },
  Destination: {
    type: String,
  },
  carType: {
    type: String,
  },
  carModel: {
    type: String,
  },
  carNumber: {
    type: String,
  },
  fareDetails: {
    type: Number,
  },
  Reason: {
    type: String,
  },
});

const CityTrip = mongoose.model("cityTrip", citytripSchema);

module.exports = CityTrip;
