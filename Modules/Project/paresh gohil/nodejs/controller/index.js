const express = require("express")
const app = express()
const router = express.Router()
const cart = require("./cart/address")
const loan = require("./loan/loan")
const property = require("./property/property")
const propertysold = require("./property/propertysold")
const services = require("./services/services")
const user = require("./user/user")
const login = require("./login/login")
const pgapi = require("./property/pgapi")

app.use(express.json()) 

router.use("/cart",cart)

router.use("/loan",loan)

router.use("/property",property)

router.use("/pgapi",pgapi)

router.use("/propertysold",propertysold)

router.use("/services",services)

router.use("/user",user)

router.use("/login",login)

module.exports = router
