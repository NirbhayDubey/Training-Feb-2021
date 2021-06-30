const express = require("express");
const Course = require("../../../../models/Course");
const TrainingPlan = require("../../../../models/TrainingPlan");
const router = express.Router({ mergeParams: true });

class TrainingplanRoute {
  static async getTrainingPlans(req, res) {
    Course.findById(req.params.id)
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          TrainingPlan.find({ cid: course._id })
            .then((plan) => {
              res.status(200).json(plan);
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async postTrainingPlan(req, res) {
    Course.findById(req.params.id)
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          const newTrainingplan = new TrainingPlan({
            cid: course._id,
            tp_day: req.body.tp_day,
            tp_whattolearn: req.body.tp_whattolearn,
            tp_practice: req.body.tp_practice,
            tp_assignment: req.body.tp_assignment,
            tp_onlineref: req.body.tp_onlineref,
            tp_note: req.body.tp_note,
            tp_practiceimgarr: req.body.tp_practiceimgarr,
            tp_assignmentimgarr: req.body.tp_assignmentimgarr,
          });

          newTrainingplan
            .save()
            .then((plan) => {
              res.status(200).json({
                msg: "Trainingplan inserted successfully..",
                Trainingplan: plan,
              });
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async postTrainingPlanXlsx(req, res) {
    Course.findById(req.params.id)
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          const plans = req.body;
          const result = [];
          plans.map((item) => {
            const newTrainingplan = new TrainingPlan({
              cid: course._id,
              tp_day: Number(item.tp_day),
              tp_whattolearn: item.tp_whattolearn,
              tp_practice: item.tp_practice,
              tp_assignment: item.tp_assignment,
              tp_onlineref: item.tp_onlineref,
              tp_note: item.tp_note,
              tp_practiceimgarr: [],
              tp_assignmentimgarr: [],
            });
            newTrainingplan.save((err, saved) => {
              if (err) throw err;
              result.push(saved);
            });
          });
          res.status(200).json({
            msg: "Trainingplans inserted successfully..",
            Trainingplan: result,
          });
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async putTrainingPlan(req, res) {
    Course.findById(req.params.id)
      .then(async function (course) {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          const upTplan = await TrainingPlan.findOne({
            cid: course._id,
            tp_day: req.params.day,
          });
          const bTplan = req.body;
          upTplan.set({
            cid: course._id,
            tp_day: bTplan.tp_day != undefined ? bTplan.tp_day : upTplan.tp_day,
            tp_whattolearn:
              bTplan.tp_whattolearn != undefined
                ? bTplan.tp_whattolearn
                : upTplan.tp_whattolearn,
            tp_practice:
              bTplan.tp_practice != undefined
                ? bTplan.tp_practice
                : upTplan.tp_practice,
            tp_assignment:
              bTplan.tp_assignment != undefined
                ? bTplan.tp_assignment
                : upTplan.tp_assignment,
            tp_onlineref:
              bTplan.tp_onlineref != undefined
                ? bTplan.tp_onlineref
                : upTplan.tp_onlineref,
            tp_note:
              bTplan.tp_note != undefined ? bTplan.tp_note : upTplan.tp_note,
            tp_practiceimgarr:
              bTplan.tp_practiceimgarr != undefined
                ? bTplan.tp_practiceimgarr
                : upTplan.tp_practiceimgarr,
            tp_assignmentimgarr:
              bTplan.tp_assignmentimgarr != undefined
                ? bTplan.tp_assignmentimgarr
                : upTplan.tp_assignmentimgarr,
          });

          upTplan
            .save()
            .then((plan) => {
              res.status(200).json({
                msg: "Trainingplan updated successfully..",
                Trainingplan: plan,
              });
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }
  static async deleteTrainingPlan(req, res) {
    Course.findById(req.params.id)
      .then(async function (course) {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          TrainingPlan.findOneAndRemove({
            cid: course._id,
            tp_day: req.params.day,
          })
            .then((plan) => {
              res.status(200).json({
                msg: "Trainingplan deleted successfully..",
                Trainingplan: plan,
              });
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get("/", TrainingplanRoute.getTrainingPlans);
router.post("/", TrainingplanRoute.postTrainingPlan);
router.post("/xlsx", TrainingplanRoute.postTrainingPlanXlsx);
router.put("/:day", TrainingplanRoute.putTrainingPlan);
router.delete("/:day", TrainingplanRoute.deleteTrainingPlan);

module.exports = router;
