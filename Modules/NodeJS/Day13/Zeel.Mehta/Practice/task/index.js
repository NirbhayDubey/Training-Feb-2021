let http = require("http");
let express = require('express');
let app=express();
let fs = require('fs');
app.use(express.json())
const info=(req,res,next) => {
    console.log(req.headers.ip);

    console.log(`${req.url} - ${req.method} and ${new Date()}`);
         next();
}
app.use(info);
var list=[
    {"CustomerID":1,"CustomerName":"John"},
    {"CustomerID":2,"CustomerName":"Julia"}    ]
class Customers
 {
     static getalldata(req,res)
     {
        console.log(req.params.id); 
        res.json(list);
     }
     static getdata(req,res )
     {
         console.log(req.params.id);  
         
            const obj=list.find(p=>p.CustomerID==req.params.id);
            console.log(obj);
         res.status(200).json(obj);
     }
     static pushdata(req,res)
     {
        const newdata = req.body
       
        list.push(newdata);
        console.log(newdata);
        res.send(list);
         res.end();
     }
     static deletedata(req,res)
     {

        console.log(req.params.id);  
         
            const obj=list.find(p=>p.CustomerID==req.params.id);
            console.log(obj);
      
        list.pop(obj);
       
        res.send(list);
         res.end();
     }
     
 }
 app.get("/customer/", Customers.getalldata);
 app.get("/customer/:id",Customers.getdata);
 app.post("/customer/", Customers.pushdata);
 app.delete("/customer/:id", Customers.deletedata);
//  app.put("/customer/:aid",Customers.putdata);

http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})