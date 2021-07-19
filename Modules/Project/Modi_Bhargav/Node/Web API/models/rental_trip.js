const mongoose = require("mongoose");

const rentaltripSchema = new mongoose.Schema({
  customerNumber: {
    type: Number,
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
  pickUp: {
    type: String,
  },
  Package: {
    type: String,
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

const RentalTrip = mongoose.model("rentalTrip", rentaltripSchema);

module.exports = RentalTrip;
