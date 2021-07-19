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
  days: [
    {
      day: String,
      contexts: [
        {
          context: String,
          description: String,
        },
      ],
    },
  ],
});

//create class
const Plan = mongoose.model("Plan", planSchema);

//validate
async function validate(plan) {
  const schema = Joi.object({
    tech: Joi.objectId().required(),
    name: Joi.string().required(),
  });

  return await schema.validate(plan);
}

//exports
module.exports = {
  Plan,
  validate,
};
