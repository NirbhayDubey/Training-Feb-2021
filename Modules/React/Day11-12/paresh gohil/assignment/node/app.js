const mongoose = require("mongoose")
const express = require("express");
const app = express();
const apps = require("./controller/index")
var cors = require("cors")

app.use(express.json());

app.use(cors())

app.use(function (req,res,next) {
    console.log(`${req.url}- ${req.method} and ${new Date()}`);
    next();
})

app.use(function (err,req,res,next) {
    if(err) console.log(err)
    next();    
})

/*router middleware*/
app.use("/" , apps);

app.listen(3000, (err) => {
    if(err) return err;
})

mongoose.connect('mongodb://localhost:27017/student' , {useNewUrlParser : true ,  useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
