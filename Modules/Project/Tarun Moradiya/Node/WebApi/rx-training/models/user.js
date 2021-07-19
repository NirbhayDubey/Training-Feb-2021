const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const jwt = require("jsonwebtoken");

const { Department } = require("./department");

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: function () {
      return !this.isAdmin;
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology",
    },
  ],
});

//create method

userSchema.methods.setPermission = async function () {
  const dept = await Department.findById(this.department);
  this.permissions = dept.permissions;
  console.log(this.permissions);
  await this.save();
};

userSchema.methods.getAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.rx_training_secretKey,
    {
      algorithm: process.env.rx_training_algorithm,
      expiresIn: "30d",
    }
  );
  return token;
};

userSchema.methods.generateRecoverToken = async function () {
  const min = 1000;
  const max = 9999;
  this.resetPasswordToken = Math.floor(Math.random() * (max - min + 1)) + min;
  await this.save();
  return this.resetPasswordToken;
};

//create class
const User = mongoose.model("User", userSchema);

//validate
async function validate(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    isAdmin: Joi.boolean(),
  });

  return await schema.validate(user);
}

//exports
module.exports = {
  User,
  validate,
};
