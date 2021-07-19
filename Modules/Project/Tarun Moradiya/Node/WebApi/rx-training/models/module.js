const mongoose = require("mongoose");
const { Technology } = require("./technology");

//create schema

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technology",
    required: true,
  },
  moduleType: {
    type: String,
    enum: ["ppts", "videos", "others"],
    required: true,
    lowercase: true,
    trim: true,
  },
  topics: [
    {
      topic: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      contents: [
        {
          contentName: {
            type: String,
            trim: true,
          },
          contentUrl: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

const Module = mongoose.model("Module", moduleSchema);

//exports
module.exports = { Module };
