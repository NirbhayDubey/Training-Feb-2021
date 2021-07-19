var express = require('express')
const mongoose = require("mongoose");

//import student router
const  studentRoute = require('./Route/studentRoute')

//import core policies
var cors = require('cors')

//initialize app
const app = express()

mongoose.connect("mongodb://localhost/School_Student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Mongodb Connect"))
.catch((err) => console.error("Could not connect", err));

//middlewares
app.use(cors())
app.use(express.json())

//middleware for route
app.use('/students',studentRoute)

//port 
const port = process.env.PORT || 3001;

//listen to created port
app.listen(port, () => console.log(`Server is running on ${port}`));