const router = require("express").Router();
const debug = require("debug")("rx:");
const ModuleDomain = require("../../domains/moduleDomain");
const topicController = require("./topicController");
const admin = require("../../middlewares/admin");

class ModuleController {
  //To get modules
  static async get(req, res) {
    const moduleDomain = new ModuleDomain();
    moduleDomain.getModules(req, res);
  }
  //To insert module
  static async insertModule(req, res) {
    const moduleDomain = new ModuleDomain();
    moduleDomain.insertModule(req, res);
  }
  //To update plan
  static async updateModule(req, res) {
    const moduleDomain = new ModuleDomain();
    moduleDomain.updateModule(req, res);
  }
  //To delete plan
  static async deleteModule(req, res) {
    const moduleDomain = new ModuleDomain();
    moduleDomain.deleteModule(req, res);
  }
}

//routes

//get all technologies
//GET http://localhost:3000/modules
router.get("/", ModuleController.get);

//get technologie
//GET http://localhost:3000/modules/:id
router.get("/:id", ModuleController.get);

//add technologie
//POST http://localhost:3000/modules
router.post("/", admin, ModuleController.insertModule);

//update technologie
//PUT http://localhost:3000/modules/:id
router.put("/:id", admin, ModuleController.updateModule);

//delete technologie
//DELETE http://localhost:3000/modules/:id
router.delete("/:id", admin, ModuleController.deleteModule);

//child routes

//localhost:3000/modules/:moduleId/topics
http: router.use(
  "/:id/topics",
  (req, res, next) => {
    req.moduleId = req.params.id;
    next();
  },
  topicController
);

//exports
module.exports = router;
