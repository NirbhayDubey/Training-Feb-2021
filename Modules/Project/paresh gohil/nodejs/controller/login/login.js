require('dotenv').config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const express = require("express")
const app = express()
const router = express.Router()
const {User} = require("../../model/user")

app.use(express.json())

class users{
    static async posts(req,res){
        let user = await User.findOne({User_Email : req.body.User_Email})
        if(!user) return res.status(400).send("Invalid email or password")

        const validpassword = bcrypt.compare(req.body.User_Password, user.User_Password)
        if(!validpassword) return res.status(400).send("Invalid email or password")

        const accesstoken = jwt.sign({_id : user._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken : accesstoken})

    }
}


router.post("/",users.posts)

module.exports = router
