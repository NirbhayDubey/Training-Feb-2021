const mongoose = require("mongoose");
const Joi = require("joi");
const { Technology } = require("./technology");

//create schema
const deptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology",
    },
  ],
});

//create class
const Department = mongoose.model("Department", deptSchema);

//validate
async function validate(dept) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return await schema.validate(dept);
}

//exports
module.exports = {
  Department,
  validate,
};
