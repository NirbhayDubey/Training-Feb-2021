const mongoose = require("mongoose");
const debug = require("debug")("rx:mongo");

//connect to mongodb
const connectDB = () => {
  mongoose
    .connect(process.env.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => debug("connected to MongoDB..."))
    .catch((err) => debug("could not connect to MongoDB.", err));
};

module.exports = connectDB;
