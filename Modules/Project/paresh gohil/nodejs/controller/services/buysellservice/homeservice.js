const express = require("express")
const app = express()
const router = express.Router()
const {Homeservice} = require("../../../model/homeservice")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class homes{
    static async all(req,res){
        const home1 = await Homeservice.find({UserID : req.params.UserID})
        res.send(home1)
    }
    static async one(req,res){
        const home1 = await Homeservice.find({UserID : req.params.UserID, ServiceID : req.params.ServiceID})
        res.send(home1)
    }
    static async posts(req,res){
        const home1 = new Homeservice(req.body)
        const result = await home1.save()
        res.send(result)
    }
}

router.get("/:UserID",homes.all)

router.get("/:UserID/:ServiceID",homes.one)

router.post("/",authenticate,homes.posts)

module.exports = router
