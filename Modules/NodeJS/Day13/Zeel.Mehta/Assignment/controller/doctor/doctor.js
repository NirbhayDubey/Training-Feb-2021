const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

//  const childr=require("./Child/result");
//  const childf=require("./Child/fees");

 const doctordata=require('../../models/doctor')
 const patientdata=require('../../models/patient')


class Doctor
{
    static async allData(req,res )
    {
        const ddata=await doctordata.find()
        res.send(ddata);
    }
    static async getData(req,res )
    {
        const dID=parseInt(req.params.id)
        const ddata=await doctordata.find({dId : dID})
        if(ddata.length == 0)
            res.status(404).send("Record not found..")
        res.send(ddata); 
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const data=new doctordata(newdata)
        const result=await data.save()
        res.send(result)
    }
    static async deleteData(req,res )
    {
        const ID = parseInt(req.params.id)
        const data = await doctordata.find({dId : ID})
        const remove=await doctordata.remove({dId : ID})
       res.send(data)
    }
    static async getPatientData(req,res)
    {
        const ID= parseInt(req.params.id)
        const docdata = await doctordata.find({dId : ID})
        if(docdata.length == 0 ) res.status(404).send("Record not found..")

        const patdata = await patientdata.find().populate("Doctor")
        var data = []
        for(var i of patdata)
        {
            for(var j of i.Doctor)
            {
                if(j.dId == ID)
                {
                    const patientt = await patientdata.find({pId : i.pId}).select('pName')
                    data.push(patientt)
                }
            }
        }
        if(data.length == 0) res.status(404).send("Record not found")
        res.send(data)
    }
    static async putData(req,res)
    {
        const ID= parseInt(req.params.id)
        const data = await doctordata.find({dId : ID})
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
}
// get all Doctors Data
router.get("/", Doctor.allData);

// get perticular Doctor Data
router.get("/:id", Doctor.getData);

// get Doctor Data with their Patient
router.get("/:id/patient", Doctor.getPatientData)

// Add Doctors Data
router.post("/", Doctor.postData);

// Delete Doctors Data
router.delete("/:id", Doctor.deleteData);

// Update Doctors Data
router.put("/:id", Doctor.putData);


module.exports=router;