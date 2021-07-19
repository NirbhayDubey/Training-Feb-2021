let http = require('http');
let express = require('express');
const router = express.Router();
let log = require('./middleware/log');
let fs = require('fs');
let app = express();


app.use(log);
let order = require("./controller/order/order");
let restaurant = require("./controller/restaurant/restaurant");
let customer = require("./controller/customer/customer");
let fooditems = require("./controller/fooditems/fooditem");


// const jwt = require('jsonwebtoken');
// global.config=require('./config/config');
// const authenticatation = require('./controller/login/login')

//  const security = require('./authenticate/security');
// app.use(express.json());
// app.use('/authenticate',authenticatation)

// app.use(security);

// app.use(express.json());
app.use("/order",order);
app.use("/restaurant",restaurant);
app.use("/customer",customer);
app.use("/food",fooditems);

http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})


