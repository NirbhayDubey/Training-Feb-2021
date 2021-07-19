const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

//  const childr=require("./Child/result");
//  const childf=require("./Child/fees");

 const medicinedata=require('../../models/medicine')


class Medicine
{
    static async allData(req,res )
    {
        const mdata=await medicinedata.find()
        res.send(mdata);
       
    }
    static async getData(req,res )
    {
        const mID=parseInt(req.params.id)
        const mdata=await medicinedata.find({mId : mID})
        if(mdata.length == 0)
            res.status(404).send("Record not found..")
        res.send(mdata);
       
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const mdata=new medicinedata(newdata)
        const result=await mdata.save()
        res.send(result)
       
    }
    static async deleteData(req,res )
    {
        const mID = parseInt(req.params.id)
        const mdata = await medicinedata.find({ID : mID})
        const remove=await medicinedata.remove({ID : mID})
       res.send(mdata)
    }
}
router.get("/", Medicine.allData);
router.get("/:id", Medicine.getData);
router.post("/", Medicine.postData);
router.delete("/:id", Medicine.deleteData);

// router.use("/:id/result",childr);
// router.use("/:id/fees",childf);

module.exports=router;