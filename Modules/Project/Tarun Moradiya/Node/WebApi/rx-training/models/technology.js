const mongoose = require("mongoose");
const Joi = require("joi");
const { TechGroup } = require("./techGroup");

//create schema

const techSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  techGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TechGroup",
  },
});

//create class
const Technology = mongoose.model("Technology", techSchema);

//validate tech
async function validateTech(tech) {
  const schema = Joi.object({
    name: Joi.string().required(),
    techGroup: Joi.ObjectId().required(),
  });

  return await schema.validate(tech);
}

//validate module
async function validateContents(tech) {
  const schema = Joi.object({
    topic: Joi.string(),
    description: Joi.string(),
    contents: Joi.array().items(
      Joi.object({
        contentName: Joi.string(),
        contentUrl: Joi.string(),
      })
    ),
  });

  return await schema.validate(tech);
}

//validate content
async function validateContent(tech) {
  const schema = Joi.object({
    contentName: Joi.string(),
    contentUrl: Joi.string(),
  });

  return await schema.validate(tech);
}

//exports
module.exports = {
  Technology,
  validateTech,
  validateContents,
  validateContent,
};
