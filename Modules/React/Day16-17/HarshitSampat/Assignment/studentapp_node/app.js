// import required modules
const express = require('express')
var cors =require('cors')

//app
const app =express()
const port = 3000

//middlewares
app.use(express.json())
app.use(cors());

//router
const controlRouter = require('./Controller/index')
app.use('/',controlRouter)

//server
const server = app.listen(port,()=>{
    console.log(`Aapp runnig on port ${port}...`);
})
