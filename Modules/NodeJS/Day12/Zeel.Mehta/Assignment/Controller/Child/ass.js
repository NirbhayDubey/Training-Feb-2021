const express=require("express");
const router=require('../emp');
// const ass=require("../../ass.json");
const fs=require('fs');
const childR = express.Router({mergeParams:true})
const empdata=require('../../Mongodb/emp')
childR.use(express.json())
class Assign
{
    static async allData(req,res )
    {
        const eID=req.params.id
        const edata=await empdata.find({ID : eID}).select('assignments')
        if(edata.length == 0)
            res.status(404).send("record not found..")
        res.send(edata);
    }
    static async getData(req,res )
    {
        const eID=req.params.id
        const aID=req.params.aid
        const edata=await empdata.find({ID : eID}).select('assignments')
        const adata=await empdata.find({ID : aID}).select('assignments')
        if(adata.length == 0)
            res.status(404).send("record not found..")
        res.send(adata);
    }
}
childR.get("/", Assign.allData);
childR.get("/:aid", Assign.getData);
// childR.put("/:aid", Assign.AssignPut);


module.exports=childR;