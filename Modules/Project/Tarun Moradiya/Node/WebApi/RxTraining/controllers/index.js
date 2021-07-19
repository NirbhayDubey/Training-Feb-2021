// const router = require('express').Router({mergeParams: true});
const router = require("express").Router();

const deptControler = require("./deparment/departmentController");
const techControler = require("./technology/index");
const planControler = require("./plan/planController");
const userControler = require("./user/userController");

const auth = require("../middlewares/auth");

//routes

//homepage
//http://localhost:3000
router.get("/", async (req, res) => res.redirect("/technologies"));

//child routes

//http://localhost:3000/departments
router.use("/departments", auth, deptControler);

//http://localhost:3000/technologies
router.use("/technologies", auth, techControler);

//http://localhost:3000/plans
router.use("/plans", auth, planControler);

//http://localhost:3000/users
router.use("/users", userControler);

//exports
module.exports = router;
