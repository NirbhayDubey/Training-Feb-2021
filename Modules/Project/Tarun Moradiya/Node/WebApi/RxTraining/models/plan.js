const mongoose = require("mongoose");
const Technology = require("./technology");
const Joi = require("joi");

//create schema

const planSchema = new mongoose.Schema({
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technology",
  },
  name: {
    type: String,
    required: true,
  },
  whatToLearn: {
    type: String,
    required: function () {
      return !(this.practiceExercise && this.assignments);
    },
  },
  practiceExercise: {
    type: String,
    required: function () {
      return !(this.whatToLearn && this.assignments);
    },
  },
  assignments: {
    type: String,
    required: function () {
      return !(this.practiceExercise && this.whatToLearn);
    },
  },
  references: String,
});

//create class
const Plan = mongoose.model("Plan", planSchema);

//validate
async function validate(plan) {
  const schema = Joi.object({
    tech: Joi.string().required(),
    name: Joi.string().required(),
    whatToLearn: Joi.string().required(),
    practiceExercise: Joi.string(),
    assignments: Joi.string(),
    references: Joi.string(),
  });

  return await schema.validate(plan);
}

//exports
module.exports = {
  Plan,
  validate,
};
