// npm init , npm i express mongoose

const express = require('express')
const app = express()
var cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/StudentAdmission', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));

const student = require('./Controller/StudentIndex')

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
   res.send("Student Admission Portal !!")
})

app.use('/student', student)

app.listen(3000, () => {
   console.log("server is running on port 3000")
})