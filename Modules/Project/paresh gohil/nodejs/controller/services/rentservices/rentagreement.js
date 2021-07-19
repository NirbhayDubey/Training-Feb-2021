const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const {Rentagreement} = require("../../../model/rentagreement")
const agreementdetail = require("./agreementdetail/agreementdetail")
const basicdetail = require("./basicdetail/basicdetail")
const propertydetail = require("./propertydetail/propertydetail")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

router.use("/",authenticate)

router.use("/agreementdetail",agreementdetail)

router.use("/basicdetail",basicdetail)

router.use("/propertydetail",propertydetail)

class agreements{
    static async all(req,res){
        const rent1 = await Rentagreement.find({UserID : req.params.UserID})
        res.send(rent1)
    }
    static async one(req,res){
        const rent1 = await Rentagreement.find({UserID : req.params.UserID, Rentid : req.params.Rentid})
        res.send(rent1)
    }
    static async posts(req,res){
        const rent1 = new Rentagreement(req.body)
        const result = await rent1.save()
        res.send(result)
    }
    static async deletes(req,res){
        const rent1 = Rentagreement.find({UserID : req.params.UserID, Rentid : req.params.Rentid})
        const rent2 = await Rentagreement.deleteOne(rent1)
        res.send(rent2)
    }
}

router.get("/:UserID",agreements.all)

router.get("/:UserID/:Rentid",agreements.one)

router.post("/",agreements.posts)

router.delete("/:UserID/:Rentid",agreements.deletes)

module.exports = router
