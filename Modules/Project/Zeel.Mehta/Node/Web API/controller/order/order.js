const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

 const orderdata = require('../../models/order')

class Order
{
    static async allData(req,res )
    {
        const data = await orderdata.find()
         .populate('Customer','Customer_Name')
         .populate('Restaurant')
         

        res.send(data);
    }
    static async getData(req,res )
    {
        const ID = parseInt(req.params.id)
        const data = await orderdata.find({Order_ID : ID})
        .populate('Customer')
         .populate('Restaurant')
         .populate({
             path:"Restaurant_ID",
             populate:{
                 path: "FoodItems",
                 select:"Food_ID"
             }
         })
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);
       
    }
    
}
router.get("/", Order.allData);
router.get("/:id", Order.getData);


module.exports=router;