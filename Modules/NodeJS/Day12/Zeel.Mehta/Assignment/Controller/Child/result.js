const express=require("express");
const router=require('../stud');
// const student=require("../../students.json");
const fs=require('fs');
const childR = express.Router({mergeParams:true})
const studentdata=require('../../Mongodb/stud')
childR.use(express.json())
class Result
{
    static async getData(req,res )
    {
        const sID=parseInt(req.params.id)
        const sdata=await studentdata.find({ID : sID}).select('Result')
        if(sdata.length == 0)
            res.status(404).send("record not found..")
        res.send(sdata);
       
    }
    
}
childR.get("/", Result.getData);



module.exports=childR;