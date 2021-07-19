const express = require('express')
const mongoose=require('mongoose')
var cors = require('cors')
const app = express()
const studentRouter=require('./../Routes/studentRoute')
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname+".public/"))
app.use('/',studentRouter)
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb://localhost/StudentIdCard', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', function() {
  console.log("We Are connected to Database");
});