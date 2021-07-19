const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())
// const stud=require("../students.json");
// const jwt = require('jsonwebtoken');
 const childr=require("./Child/result");
 const childf=require("./Child/fees");

 const studentdata=require('../Mongodb/stud')

// // const {json} =require('body-parser');

class Student
{
    static async allData(req,res )
    {
        const sdata=await studentdata.find()
        res.send(sdata);
       
    }
    static async getData(req,res )
    {
        const sID=parseInt(req.params.id)
        const sdata=await studentdata.find({ID : sID})
        if(sdata.length == 0)
            res.status(404).send("record not found..")
        res.send(sdata);
       
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const data=new studentdata(newdata)
        const result=await data.save()
        res.send(result)
       
    }
    static async deleteData(req,res )
    {
        const sID = parseInt(req.params.id)
        const data = await studentdata.find({ID : sID})
        const remove=await studentdata.remove({ID : sID})
       res.send(data)
    }
}
router.get("/", Student.allData);
router.get("/:id", Student.getData);
router.post("/", Student.postData);
router.delete("/:id", Student.deleteData);

router.use("/:id/result",childr);
router.use("/:id/fees",childf);

module.exports=router;