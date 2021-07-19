const router = require("express").Router();

const ContextDomain = require("../../domains/contextDomain");
// const admin = require("../../middlewares/admin");
const admin = require("../../middlewares/admin");

class ContextControler {
  //To get contexts
  static async get(req, res) {
    const contextDomain = new ContextDomain();
    contextDomain.getContexts(req, res);
  }
  //To single insert context
  static async insertContext(req, res) {
    const contextDomain = new ContextDomain();
    contextDomain.insertContext(req, res);
  }
  //To multiple insert context
  static async inserMultipleContext(req, res) {
    const contextDomain = new ContextDomain();
    contextDomain.inserMultipleContext(req, res);
  }
  //To update context
  static async updateContext(req, res) {
    const contextDomain = new ContextDomain();
    contextDomain.updateContext(req, res);
  }
  //To delete context
  static async deleteContext(req, res) {
    const contextDomain = new ContextDomain();
    contextDomain.deleteContext(req, res);
  }
}

//routes

//get all contexts
//GET http://localhost:3000/plans/:planId/days/:dayId/contexts
router.get("/", ContextControler.get);

//get context
//GET http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
router.get("/:id", ContextControler.get);

//add context
//POST http://localhost:3000/plans/:planId/days/:dayId/contexts
router.post("/", admin, ContextControler.insertContext);

// multiple context
//POST http://localhost:3000/plans/:planId/days/:dayId/contexts/multiple
router.post("/multiple", admin, ContextControler.inserMultipleContext);

//update context
//PUT http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
router.put("/:id", admin, ContextControler.updateContext);

//delete context
//DELETE http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
router.delete("/:id", admin, ContextControler.deleteContext);

//exports
module.exports = router;
