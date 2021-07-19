//Import required modules
const express = require('express')
const mongoose = require('mongoose')

//import indexrouter
const indexRouter = require('./routes/index')

//joi import for validation
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

//initialize app
const app = express()

//for remove warning of some old docs   
mongoose.set('useCreateIndex', true)

//connect to monodb
mongoose.connect('mongodb://localhost/hospital', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb Connect....'))
    .catch(err => console.error('Something Went wrong check connection string', err))

//middlewares
app.use(express.json())

//middleware for route
app.use('/', indexRouter)

//port 
const port = process.env.PORT || 3000;

//listen to created port
app.listen(port, () => console.log(`Server is running on ${port}`));

