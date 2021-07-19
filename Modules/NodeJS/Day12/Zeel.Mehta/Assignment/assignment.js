let http=require('http');
let express=require('express');
const router=express.Router();
let log=require('./middleware/log');
let fs=require('fs');
let app=express();

app.use(log);
let student=require("./Controller/stud");
const jwt = require('jsonwebtoken');
global.config=require('./static/config');
let employee=require("./Controller/emp");
const authenticatation = require('./Controller/authentication/authentication')

const security = require('./authenticator/security');
app.use(express.json());
app.use('/authenticate',authenticatation)

app.use(security);

app.use("/emp",employee);
app.use("/students",student);
// app.use(function(req, res, next){
//     next(createError(404));
// });
http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})


