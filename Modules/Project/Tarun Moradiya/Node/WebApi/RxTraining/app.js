const debug = require("debug")("rx:");
const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
var createError = require("http-errors");
const config = require("config");
const cookieParser = require("cookie-parser");

Joi.objectId = require("joi-objectid")(Joi);

const indexRouter = require("./controllers/index");
const connect = require("./helpers/receive");

//initialize app
const app = express();

//connect rabbitmq to recieve messages
connect();

//view engine
app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

//connect to mongodb
mongoose
  .connect("mongodb://localhost/RxTraining", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => debug("connected to MongoDB..."))
  .catch((err) => console.error("could not connect to MongoDB.", err));

//check if env variable is set
if (!config.get("secretKey") || !config.get("algorithm"))
  console.error("FATAL ERROR: secretKey or alorithm is not set");
if (!config.get("ID") || !config.get("SECRET"))
  console.error("FATAL ERROR: ID or SECRET is not set");

//set RxTraining_secretKey=RxWeb
//set RxTraining_algorithm=HS256

//routes
app.use("/", indexRouter);

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

//port
const port = process.env.PORT || 3000;

//listen to port
app.listen(port, () => debug(`server connected to port ${port}`));
