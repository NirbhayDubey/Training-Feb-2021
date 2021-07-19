// import modules
const express = require('express')
const app = express()
 
// middle ware to read json 
app.use(express.json())

//creating and starting the server
const port = process.env.PORT ||3000
app.listen(port,()=>console.log(`Listening on prt ${port}...`))

//customers arraylist
const customers=[{ID:1,"Name":"Harshit","City":"Ahmedabad","Email":"aharshit12@gmail.com"},
{ID:2,"Name":"Rita","Address":"Surat","Email":"Rita12@gmail.com"},
{ID:3,"Name":"Paresh","Address":"Ahmedabad","Email":"paresh12@gmail.com"}

]

    


class Customers {
    //get customer function
    getCustomer = async (req,res)=>{
        res.send(customers)
    };

    getCustomerById = async(req,res)=>{
    const customer = customers.find(c=>c.ID === parseInt(req.params.ID))
    if(!customer)res.send('<h2 style ="color":"red">Hello, not found try another id</h2>')    
    res.send(customer)
    };

    addNewCustomer= async(req,res)=>{
        const Addcustomer={
            ID:customers.length+1,
            Name:req.body.Name,
            City:req.body.City,
            Email:req.body.Email
        }
        //push customer to list
        await customers.push(Addcustomer)
        
        //send response
        res.send(Addcustomer)
    };

    // update customer
    updateCustomer = async(req,res)=>{
        
    const customer =customers.find(c=>c.ID === parseInt(req.params.ID))
    if(!student)res.send('<h2 style ="color":"red">Hey,not found try another id</h2>')

        if(customer.body.Name)customer.Name=req.body.Name;
        if(customer.body.City)customer.City=req.body.City;
        if(customer.body.Email)customer.City=req.body.Email
        
        //pust to list 
        await customers.push(customer)
        //send response 
        res.send(customer)
    }

    //delete customer
    deletecustomer = async(req,res)=>{
        
    const customer =customers.find(c=>c.ID === parseInt(req.params.ID))
        
    if(!student)res.send('<h2 style ="color":"red">Hey,not found try another id</h2>')
    
    //remove from collection
    const index = customers.indexOf(customer)
    
     Customers.splice(index,1)

    //send response
    res.send("Deleted!")
    }
     
}


//call all the  api from here

//get all customeres with id and without id
app.get('/',Customers.getCustomer)

//get customers by id
app.get('/:id',Customers.getCustomerById)

//add new customer
app.post('/',Customers.addNewCustomer)

//udate customer
app.put('/:id',Customers.updateCustomer)

//delete customer
app.delete('/:id',Customers.deletecustomer)
