const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const config = require("config");
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
    required: true,
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
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology",
    },
  ],
});

//create method

userSchema.methods.setPermission = async function () {
  this.permissions = this.department.permissions;
  console.log(this.permissions);
  await this.save();
};

userSchema.methods.getAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      isAdmin: this.isAdmin,
      department: this.department,
      permissions: this.permissions,
    },
    config.get("secretKey"),
    {
      algorithm: config.get("algorithm"),
      expiresIn: "50m",
    }
  );
  return token;
};

//create class
const User = mongoose.model("User", userSchema);

//validate
async function validate(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    // password: Joi.passwordComplexity().required(),
    password: Joi.string().required(),
    department: Joi.string(),
    isAdmin: Joi.boolean(),
  });

  return await schema.validate(user);
}

//exports
module.exports = {
  User,
  validate,
};
