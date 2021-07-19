const router = require("express").Router();

const DayDomain = require("../../domains/dayDomain");
const contextController = require("./contextController");
const admin = require("../../middlewares/admin");
const upload = require("../../middlewares/upload");

class DayControler {
  //To get days
  static async get(req, res) {
    const dayDomain = new DayDomain();
    dayDomain.getDays(req, res);
  }
  //To single insert day
  static async insertDay(req, res) {
    const dayDomain = new DayDomain();
    dayDomain.insertDay(req, res);
  }
  //To multiple insert day
  static async inserMultipleDays(req, res) {
    const dayDomain = new DayDomain();
    dayDomain.inserMultipleDays(req, res);
  }
  //To update day
  static async updateDay(req, res) {
    const dayDomain = new DayDomain();
    dayDomain.updateDay(req, res);
  }
  //To delete day
  static async deleteDay(req, res) {
    const dayDomain = new DayDomain();
    dayDomain.deleteDay(req, res);
  }
}

//routes

//get all days
//GET http://localhost:3000/plans/:planId/days
router.get("/", DayControler.get);

//get day
//GET http://localhost:3000/plans/:planId/days/:id
router.get("/:id", DayControler.get);

//add day
//POST http://localhost:3000/plans/:planId/days
router.post("/", admin, DayControler.insertDay);

// multiple day
//POST http://localhost:3000/plans/:planId/days/multiple
router.post(
  "/multiple",
  admin,
  upload.single("days"),
  DayControler.inserMultipleDays
);

//update day
//PUT http://localhost:3000/plans/:planId/days/:id
router.put("/:id", admin, DayControler.updateDay);

//delete day
//DELETE http://localhost:3000/plans/:planId/days/:id
router.delete("/:id", admin, DayControler.deleteDay);

//localhost:3000/plans/:dayId/days/:dayId/contexts
router.use(
  "/:id/contexts",
  (req, res, next) => {
    req.dayId = req.params.id;
    next();
  },
  contextController
);

//exports
module.exports = router;
