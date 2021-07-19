const mongoose = require("mongoose");

//create schema

const contentShema = new mongoose.Schema({
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
});

//exports
module.exports = contentShema;
