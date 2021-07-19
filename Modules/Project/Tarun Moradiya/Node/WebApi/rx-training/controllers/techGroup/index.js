const router = require("express").Router();
const TechGroupDomain = require("../../domains/techGroupDomain");
const admin = require("../../middlewares/admin");

class TechGroupController {
  //To get techGroups
  static async get(req, res) {
    const techGroupDomain = new TechGroupDomain();
    techGroupDomain.getTechGroups(req, res);
  }
  //To insert techGroup
  static async insertTechGroup(req, res) {
    const techGroupDomain = new TechGroupDomain();
    techGroupDomain.insertTechGroup(req, res);
  }
  //To update techGroup
  static async updateTechGroup(req, res) {
    const techGroupDomain = new TechGroupDomain();
    techGroupDomain.updateTechGroup(req, res);
  }
  //To delete techGroup
  static async deleteTechGroup(req, res) {
    const techGroupDomain = new TechGroupDomain();
    techGroupDomain.deleteTechGroup(req, res);
  }
}

//routes

//get all techGroups
//GET http://localhost:3000/techgroups
router.get("/", TechGroupController.get);

//get techGroup
//GET http://localhost:3000/techgroups/:id
router.get("/:id", TechGroupController.get);

//add techGroup
//POST http://localhost:3000/techgroups
router.post("/", admin, TechGroupController.insertTechGroup);

//update techGroup
//PUT http://localhost:3000/techgroups/:id
router.put("/:id", admin, TechGroupController.updateTechGroup);

//delete techGroup
//DELETE http://localhost:3000/techgroups/:id
router.delete("/:id", admin, TechGroupController.deleteTechGroup);

//exports
module.exports = router;
