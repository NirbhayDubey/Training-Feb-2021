const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

 const restaurantdata = require('../../models/restaurant')

class Restaurant
{
    static async allData(req,res )
    {
        const data = await restaurantdata.find()
        res.send(data);
       
    }
    static async getData(req,res )
    {
        const ID = req.params.id
        const data = await restaurantdata.find({Restaurant_ID : ID})
        
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);
       
    }
    static async putData(req,res)
    {
        const ID= req.params.id
        const data = await restaurantdata.find({Restaurant_ID : ID})
        if(data.length == 0) res.status(404).send("Record not found")

        const newdata = req.body
        for(let i in newdata)
        {
            data[0][i] = newdata[i]
        }
        try{
            const result = await data[0].save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
            console.log(ex.errors[field].message);
        }
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const data=new restaurantdata(newdata)
        const result=await data.save()
        res.send(result)
    }
    static async deleteData(req,res )
    {
        const ID = req.params.id
        const data = await restaurantdata.find({Restaurant_ID : ID})
        const remove=await restaurantdata.remove({Restaurant_ID : ID})
       res.send(data)
    }
    
}
router.get("/", Restaurant.allData);
router.get("/:id", Restaurant.getData);

router.post("/",Restaurant.postData);
router.delete("/:id", Restaurant.deleteData);
router.put("/:id", Restaurant.putData);

module.exports=router;