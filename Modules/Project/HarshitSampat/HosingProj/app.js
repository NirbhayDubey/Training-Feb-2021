//Import modules
    const express = require('express')
    const mongoose = require('mongoose')
    var cors = require('cors')

// import index router 
const indexrouter =require('./routes/index') 

//import secret key globally
global.config = require('./config')

//initialize app
const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/hosih_hwarshit',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Mongodb connect..'))
    .catch(err => console.error('Something went wrong check connection ',err))

//cors

app.use(cors())

//middleware
app.use(express.json())

//middleware for route
app.use('/',indexrouter)



//port
const port = process.env.PORT ||3001;

// listen to createrd port
app.listen(port,()=>console.log(`Server  is running on ${port}`));   