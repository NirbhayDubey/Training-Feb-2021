const router = require("express").Router();

const PlanDomain = require("../../domains/planDomain");
const dayController = require("./dayController");
const admin = require("../../middlewares/admin");

class PlanControler {
  //To get plans
  static async get(req, res) {
    const planDomain = new PlanDomain();
    planDomain.getPlans(req, res);
  }
  //To single insert plan
  static async insertPlan(req, res) {
    const planDomain = new PlanDomain();
    planDomain.insertPlan(req, res);
  }
  //To update plan
  static async updatePlan(req, res) {
    const planDomain = new PlanDomain();
    planDomain.updatePlan(req, res);
  }
  //To delete plan
  static async deletePlan(req, res) {
    const planDomain = new PlanDomain();
    planDomain.deletePlan(req, res);
  }
}

//routes

//get all plans
//GET http://localhost:3000/plans
router.get("/", PlanControler.get);

//get plan
//GET http://localhost:3000/plans/:id
router.get("/:id", PlanControler.get);

//add plan
//POST http://localhost:3000/plans
router.post("/", admin, PlanControler.insertPlan);

//update plan
//PUT http://localhost:3000/plans/:id
router.put("/:id", admin, PlanControler.updatePlan);

//delete plan
//DELETE http://localhost:3000/plans/:id
router.delete("/:id", admin, PlanControler.deletePlan);

//localhost:3000/plans/:planId/days
router.use(
  "/:id/days",
  (req, res, next) => {
    req.planId = req.params.id;
    next();
  },
  dayController
);

//exports
module.exports = router;
