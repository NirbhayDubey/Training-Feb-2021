const express = require("express")
const app = express()
const router = express.Router()
const {Decordesign} = require("../../../model/decordesign")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class rentals{
    static async all(req,res){
        const payrent1 = await Decordesign.find({UserID : req.params.UserID})
        res.send(payrent1)
    }
    static async posts(req,res){
        const payrent1 = new Decordesign(req.body)
        const result = await payrent1.save()
        res.send(result)
    }
}

router.get("/:UserID",rentals.all)

router.post("/",authenticate,rentals.posts)

module.exports = router
