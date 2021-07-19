const mongoose = require("mongoose");
const Joi = require("joi");

const contentSchema = require("./contents");

//create schema

const techSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  techType: {
    type: String,
    enum: ["frontend", "backend", "common"],
    required: true,
    lowercase: true,
    trim: true,
  },
  ppts: [contentSchema],
  videos: [contentSchema],
  supports: [contentSchema],
});

//create class
const Technology = mongoose.model("Technology", techSchema);

//validate tech
async function validateTech(tech) {
  const schema = Joi.object({
    name: Joi.string().required(),
    techType: Joi.string().valid("frontend", "backend", "common").required(),
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
