const express = require("express");
const app = express();
const mongoose = require("mongoose");
const main = require("./controller/main");
var cors = require("cors");
app.use(cors());

mongoose
  .connect("mongodb://localhost/Students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB students..."))
  .catch((err) => console.error("Could not connect to mongoDB...", err));

app.use(express.json());

app.use("/", main);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//catch 404 anf forward to error handling
app.use((req, res, next) => {
  next(createError(404));
});

//error handling
app.use((err, req, res, next) => {
  // only providing error in devlopment
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "devlopment" ? err : {};

  // sending error message
  res.status(err.status || 500).send("something error");
});

app.listen(3001, () => {
  console.log("this 3001 port susscesfully run");
});
