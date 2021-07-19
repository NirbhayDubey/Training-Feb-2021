const mongoose = require("mongoose");

const citysSchema = new mongoose.Schema({
  areaName: {
    type: String,
  },
  cityName: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
});

const CityAreaData = mongoose.model("CityAndState", citysSchema);

module.exports = CityAreaData;
