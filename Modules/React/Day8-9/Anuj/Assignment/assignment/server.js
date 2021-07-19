const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', (req, res) => {
    res.send('Hello World!')
  })
  
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb://localhost/StudentIdCard', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', function() {
  console.log("We Are connected to Database");
});