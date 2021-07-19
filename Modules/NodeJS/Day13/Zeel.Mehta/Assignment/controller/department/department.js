const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

 const deptdata=require('../../models/department')

class Department
{
    static async allData(req,res )
    {
        const ddata=await deptdata.find()
        .populate('Doctor','dName')
        .populate('Patient','pName')
        res.send(ddata);
       
    }
    static async getData(req,res )
    {
        const ID=parseInt(req.params.id)
        const data=await deptdata.find({deptId : ID})
        .populate('Doctor')
        .populate('Patient')
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);
       
     }
    // static async getpData(req,res )
    // {
    //     const dID=parseInt(req.params.id)
    //     const ddata=await doctordata.find({dId : dID})
    //     .populate('Department','deptId')
    //     if(ddata.length == 0)
    //         res.status(404).send("Record not found..")
    //     res.send(ddata);
       
    // }
    
}
router.get("/", Department.allData);
router.get("/:id", Department.getData);
// router.get("/patient/:id", Doctor.getpData);


module.exports=router;