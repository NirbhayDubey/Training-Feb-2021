const mongoose = require("mongoose");
const Joi = require("joi");

//create schema
const techGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

//create class
const TechGroup = mongoose.model("TechGroup", techGroupSchema);

//validate
async function validate(grp) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return await schema.validate(grp);
}

//exports
module.exports = {
  TechGroup,
  validate,
};
