const express=require("express");
const router=require('../stud');
// const student=require("../../students.json");
const fs=require('fs');
const childR = express.Router({mergeParams:true})
const studentdata=require('../../Mongodb/stud')
childR.use(express.json())
class Fees
{
    static async getData(req,res )
    {
        const sID=parseInt(req.params.id)
        const sdata=await studentdata.find({ID : sID}).select('Fees')
        if(sdata.length == 0)
            res.status(404).send("record not found..")
        res.send(sdata);
       
    }
        
}
childR.get("/", Fees.getData);



module.exports=childR;