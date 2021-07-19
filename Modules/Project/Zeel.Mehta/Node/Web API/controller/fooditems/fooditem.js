const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

 const fooddata = require('../../models/fooditem')

class FoodItems
{
    static async allData(req,res )
    {
        const data = await fooddata.find()
        res.send(data);
       
    }
    static async getData(req,res )
    {
        const ID = req.params.id
        const data = await fooddata.find({Food_ID : ID})
        
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);
       
    }
    static async putData(req,res)
    {
        const ID= req.params.id
        const data = await fooddata.find({Food_ID : ID})
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
        const data=new fooddata(newdata)
        const result=await data.save()
        res.send(result)
    }
    static async deleteData(req,res )
    {
        const ID = req.params.id
        const data = await fooddata.find({Food_ID : ID})
        const remove=await fooddata.remove({Food_ID : ID})
       res.send(data)
    }
    
}
router.get("/", FoodItems.allData);
router.get("/:id", FoodItems.getData);

router.post("/",FoodItems.postData);
router.delete("/:id", FoodItems.deleteData);
router.put("/:id", FoodItems.putData);

module.exports=router;