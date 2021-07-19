// const router = require('express').Router({mergeParams: true});
const router = require("express").Router();

const deptControler = require("./department/index");
const techControler = require("./technology/index");
const planControler = require("./plan/index");
const techGroupController = require("./techGroup/index");
const moduleController = require("./module/index");
const userControler = require("./user/index");
const authControler = require("./auth/index");

const auth = require("../middlewares/authenticationMiddleware");

//routes

//homepage
//http://localhost:3000
// router.get("/", async (req, res) => res.redirect("/technologies"));

//child routes

//http://localhost:3000/departments
router.use("/departments", auth, deptControler);

//http://localhost:3000/techgroups
router.use("/techgroups", auth, techGroupController);

//http://localhost:3000/technologies
router.use("/technologies", auth, techControler);

//http://localhost:3000/plans
router.use("/plans", auth, planControler);

//http://localhost:3000/plans
router.use("/modules", auth, moduleController);

//http://localhost:3000/users
router.use("/users", userControler);

//http://localhost:3000/auth
router.use("/auth", authControler);

//exports
module.exports = router;
