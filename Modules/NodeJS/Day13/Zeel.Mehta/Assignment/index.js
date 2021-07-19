let http = require('http');
let express = require('express');
const router = express.Router();
let log = require('./middleware/log');
let fs = require('fs');
let app = express();

app.use(log);
let patient = require("./controller/patient/patient");
let medicine = require("./controller/medicine/medicine");
let doctor = require("./controller/doctor/doctor");
let department = require("./controller/department/department")

app.use(express.json());
app.use("/doctor",doctor);
app.use("/patient",patient);
app.use("/medicine",medicine);
app.use("/dept",department);

http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})


