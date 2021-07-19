const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  driverId: {
    type: Number,
    required: true
  },
  driverName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  passWord: {
    type: String,
    required: true,
  },
  licenseNumber: {
    type: Number,
    required: true,
    minlength: 11,
    maxlength: 12
  },
  Email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email ex:abc@gmail.com"
    },
    required: [true, "Email required"]
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  }
})

const Driver = mongoose.model('drivers', driverSchema)

module.exports = Driver
