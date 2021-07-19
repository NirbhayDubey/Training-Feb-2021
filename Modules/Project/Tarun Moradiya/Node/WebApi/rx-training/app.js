const debug = require("debug")("rx:");
const express = require("express");
const Joi = require("joi");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const asyncHandler = require("express-async-handler");

require("dotenv").config();
Joi.objectId = require("joi-objectid")(Joi);

const indexRouter = require("./controllers/index");
const connectDB = require("./config/connectDB");
// const connect = require("./helpers/receive");
const RabbitMqHelper = require("./helpers/rabbitMqHelper");

//initialize app
const app = express();

//connect to db
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(cors());

//check if env variable is set
if (!process.env.rx_training_secretKey || !process.env.rx_training_algorithm)
  debug("FATAL ERROR: jwt secretKey or alorithm is not set");
if (!process.env.rx_training_ID || !process.env.rx_training_SECRET)
  debug("FATAL ERROR: aws ID or SECRET is not set");

//log req
app.use((req, res, next) => {
  debug(`${req.method} ${req.originalUrl}`);
  next();
});

//routes
app.use("/", indexRouter);

//port
const port = process.env.PORT || 5000;
//socket io
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: process.env.reactOrigin,
    credentials: true,
  },
});

io.on("connection", async (socket) => {
  debug(
    `--------------------------------New client connected-------------------------------------------- `
  );
  socket.send("hello,,,");
  //queue consumer
  const rabbitMqHelper = new RabbitMqHelper();
  rabbitMqHelper.consumer(socket);
  socket.on("disconnect", () => {
    // rabbitMqHelper.disconnect();
    debug(
      `------------------------------------Client disconnected------------------------------------------------ `
    );
  });
});

//listen to port
server.listen(port, () => debug(`server connected to port ${port}`));
