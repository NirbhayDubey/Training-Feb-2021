var express = require('express')
var indexRouter =require('./Routes/index')
global.config = require('./config')
const mongoose = require('mongoose')




var app =express()
app.use(express.json())
app.use('/',indexRouter)

//app.use(function(req, res, next) {
    //next(createError(404));
  //});
  
  /* error handler
  //app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    //res.status(err.status || 500);
   // res.render('error');
  });*/
/*app.use(req,res,err,next,()=>{
    if(err) return console.log(err)
})*/

  const port =process.env.PORT ||3000
  app.listen(port,()=>{
      console.log(`App running on ${port}`)
  })
  
  module.exports = app;
  