const express = require("express")
const app = express()
const mongoose = require("mongoose")
const index = require("./controller/index")
const cors = require("cors")

app.use(express.json()) 

app.use(cors())

//custom middleware
app.use(function (req,res,next) {
    console.log(`${req.url}- ${req.method} and ${new Date()}`);
    next();
})

app.use(function (err,req,res,next) {
    if(err) console.log(err)
    next();    
})

//route middleware
app.use("/", index)

//connect to the client
app.listen(3000, (err) => {
    if(err) console.log(err)
    console.log("connected to the client")
})

//connect to the database
mongoose.connect("mongodb://localhost:27017/Magicbricks" , {useNewUrlParser : true ,  useUnifiedTopology: true })
        .then(() => console.log("connected to MongoDB.."))
        .catch(err => console.log("Could't connect to MongoDB..",err))
