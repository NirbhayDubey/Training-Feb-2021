const mongoose = require("mongoose");

const nomineeSchema = new mongoose.Schema({
  accountNo: {
    type: Number,
  },

  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
  equity: {
    type: String,
    required: true,
  },
  
});

module.exports = nomineeSchema;
