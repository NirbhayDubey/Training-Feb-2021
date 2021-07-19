const express = require("express")
const app = express()
const router = express.Router()
const decordesign = require("./buysellservice/decordesign")
const homeservice = require("./buysellservice/homeservice")
const legalservice = require("./buysellservice/legalservice")
const vastu = require("./buysellservice/vastu")
const payrent = require("./rentservices/payrent")
const rentagreement = require("./rentservices/rentagreement")
const rentalfurniture = require("./rentservices/rentalfurniture")
const rentreceipt = require("./rentservices/rentreceipt")
const tenantverfication = require("./rentservices/tenantverification")

app.use(express.json()) 

router.use("/decordesign",decordesign)

router.use("/homeservice",homeservice)

router.use("/legalservice",legalservice)

router.use("/vastu",vastu)

router.use("/payrent",payrent)

router.use("/rentagreement",rentagreement)

router.use("/rentalfurniture",rentalfurniture)

router.use("/rentreceipt",rentreceipt)

router.use("/tenantverification",tenantverfication)

module.exports = router
