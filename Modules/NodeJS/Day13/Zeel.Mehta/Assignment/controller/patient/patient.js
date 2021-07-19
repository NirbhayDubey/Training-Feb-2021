const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

//  const childr=require("./Child/result");
//  const childf=require("./Child/fees");

 const patientdata = require('../../models/patient')
//const doctor = require('../mongodb/doctor')

class Patient
{
    static async allData(req,res )
    {
        const pdata = await patientdata.find()
         .populate('Doctor','dId dName -_id')
         .populate('Medicine','mId mName -_id')
        res.send(pdata);
       
    }
    static async getData(req,res )
    {
        const pID = parseInt(req.params.id)
        const pdata = await patientdata.find({pId : pID})
        .populate('Doctor','dId dName -_id')
        .populate('Medicine','mId mName -_id')
        if(pdata.length == 0)
            res.status(404).send("Record not found..")
        res.send(pdata);
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const data=new patientdata(newdata)
        const result=await data.save()
        res.send(result)
    }
    static async deleteData(req,res )
    {
        const ID = parseInt(req.params.id)
        const data = await patientdata.find({pId : ID})
        const remove=await patientdata.remove({pId : ID})
       res.send(data)
    }
    
}
router.get("/", Patient.allData);
router.get("/:id", Patient.getData);
router.post("/", Patient.postData);
router.delete("/:id",Patient.deleteData);

module.exports=router;