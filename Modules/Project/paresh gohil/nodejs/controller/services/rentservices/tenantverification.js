const express = require("express")
const app = express()
const router = express.Router()
const {Tenantverification} = require("../../../model/tenantverification")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class rentals{
    static async all(req,res){
        const payrent1 = await Tenantverification.find({UserID : req.params.UserID})
        res.send(payrent1)
    }
    static async one(req,res){
        const payrent1 = await Tenantverification.find({UserID : req.params.UserID, Tvid : req.params.Tvid})
        res.send(payrent1)
    }
    static async posts(req,res){
        const payrent1 = new Tenantverification(req.body)
        const result = await payrent1.save()
        res.send(result)
    }
}

router.get("/:UserID",rentals.all)

router.get("/:UserID/:Tvid",rentals.one)

router.post("/",authenticate,rentals.posts)

module.exports = router
