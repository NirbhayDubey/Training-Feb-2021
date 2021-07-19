const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  driverName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  City: {
    type: String,
  },
});

const EnquiryData = mongoose.model("enquiryData", enquirySchema);

module.exports = EnquiryData;
