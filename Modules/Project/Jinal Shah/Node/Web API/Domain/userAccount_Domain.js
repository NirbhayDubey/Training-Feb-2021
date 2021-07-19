const user = require('../models/UserAccountModel');
const encryption = require('../Encryption/encrypt')
const mail = require('../Email/Email_index')

var a
class accLogic {

    async all(req, res) {
        const sdata = await user.find().select('userID userName email -_id')
        if (sdata.length == 0) res.status(404).send("Data not found..")
        res.send(sdata)
    }

    async getbyid(req, res) {
        const ID1 = req.params.id
        const sdata = await user.find({ userID: ID1 })
        if (sdata.length == 0) res.status(404).send("user not found..")
        res.send(sdata)
    }

    async insert(req, res) {
        var newdata = req.body
        const pass = newdata.userPWD
        console.log(pass)

        a = newdata
        const e1 = newdata.email
        const sentOtp = mail.send(e1)

        const newpass = encryption.encryptPWD(pass)
        console.log(newpass)

        newdata.userPWD = newpass
        try {
            res.send('Check Your mail & verify OTP...')
        }
        catch (ex) {
            for (let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    async verify(req, res) {
        const otp = parseInt(req.params.id)
        //res.send(a)
        var verify = mail.verifyOTP(otp)
        if (verify == true) {
            const data1 = new user(a)
            try {
                const result = await data1.save();
                res.send(result)
            }
            catch (ex) {
                for (let field in ex.errors)
                    console.log(ex.errors[field].message)
            }
        }
        else {
            res.send("You have entered wrong OTP")
        }
    }

    async delete(req, res) {
        const ID1 = req.params.id
        const selData = await user.find({ userID: ID1 })
        if (selData.length == 0) res.status(404).send("user not found..")
        const remove = await user.remove({ userID: ID1 })
        res.send(selData)
    }

    async update(req, res) {
        const ID1 = req.params.id
        console.log(ID1)
        const selData = await user.find({ userID: ID1 })
        if (selData.length == 0) res.status(404).send("user not found..")
        const newdata = req.body
        for (let i in newdata) {
            selData[0][i] = newdata[i]
        }
        try {
            const result = await selData[0].save();
            res.send(result)
        }
        catch (ex) {
            for (let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }


}

module.exports = accLogic