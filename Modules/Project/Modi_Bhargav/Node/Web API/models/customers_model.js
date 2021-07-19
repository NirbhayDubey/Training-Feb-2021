const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Customer = mongoose.model("customers", customerSchema);

module.exports = Customer;
