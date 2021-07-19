const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const debug = require("debug")("std:index");
const createError = require("http-errors");
const indexController = require("./controllers/index");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "public"));
app.use(cors());

//connect to mongoodb
mongoose
  .connect("mongodb://localhost/Students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => debug("connected to mongoodb"))
  .catch((err) => debug("could not connect to mongodb", err));

app.use("/", indexController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // seding error message
  res.status(err.status || 500).send(`Smething is broke!! ${err.message}`);
});

//listen to the port
const port = process.env.PORT || 5000;

app.listen(port, () => debug(`server connected to port ${port}`));
