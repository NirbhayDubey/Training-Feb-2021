const express = require("express");
const router2 = express.Router();

const customers = require("./customersData/customer");

router2.use("/customer", customers);

module.exports = router2;
