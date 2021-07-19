const express = require('express')
const emps = require('./emps')

const app = express()

//pass json object
app.use(express.json())

//localhost/emps
app.use(log)

function log(req,res,next)
{
    console.log(login)
}

app.use('/emps',emps)


const port = process.env.PORT||3001
//server listen
app.listen(port,()=>{
    console.log(`Server is runnnin on port ${port}`)
})