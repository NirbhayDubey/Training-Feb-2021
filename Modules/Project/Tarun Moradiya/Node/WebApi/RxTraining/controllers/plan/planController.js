const router = require("express").Router();

const PlanDomain = require("../../domains/planDomain");
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
  //To multiple insert plan
  static async inserMultiplePlans(req, res) {
    const planDomain = new PlanDomain();
    planDomain.inserMultiplePlans(req, res);
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

// multiple plan
//POST http://localhost:3000/plans/multiple
router.post("/multiple", admin, PlanControler.inserMultiplePlans);

//update plan
//POST http://localhost:3000/plans/:id
// router.put('/:id', admin, updatePlan);
router.post("/:id/update", admin, PlanControler.updatePlan);

//delete plan
//GET http://localhost:3000/plans/:id
// router.delete('/:id', admin, deletePlan);
router.get("/:id/delete", admin, PlanControler.deletePlan);

//exports
module.exports = router;
