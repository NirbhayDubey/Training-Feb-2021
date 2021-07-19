const mongoose = require("mongoose");
const { Plan, validate } = require("../models/plan");
const { Technology } = require("../models/technology");

class PlanDomain {
  //To get plans
  async getPlans(req, res) {
    try {
      const Tech = await Technology.find();

      //check if id given
      if (req.params.id) {
        //get data with id
        plan = await Plan.find({ tech: req.params.id }).populate(
          "tech",
          "name techType"
        );

        //if not in db return
        if (!plan)
          return res.status(404).send("Plan with given id not found!!!");
        techName = await Technology.findById(req.params.id).select("name");
        //response
        res.render("pages/plans", { plan, Tech, techName });
      } else {
        //get all data
        const plans = await Plan.find().populate("tech", "name techType");

        const Tech = await Technology.find();
        //response
        res.render("pages/plans", { plans, Tech, User: req.user });
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert plan
  async insertPlanFn(body) {
    return new Promise(async (resolve, reject) => {
      try {
        //validate user input
        const { error } = await validate(body);

        //if error return
        if (error) return res.status(400).send(error.details[0].message);

        //get techid
        const tech = await Technology.findOne({ name: body.tech });

        let techId = tech._id;

        //if not found return
        if (!tech) return res.status(404).send("No such technology !!!");

        //create
        let plan = new Plan({
          name: body.name,
          tech: techId,
          whatToLearn: body.whatToLearn,
          practiceExercise: body.practiceExercise,
          assignments: body.assignments,
          references: body.references || "",
        });

        //save to db
        plan = await plan.save();

        resolve(plan);
      } catch (error) {
        resolve(error);
      }
    });
  }

  //insert single plan
  async insertPlan(req, res) {
    try {
      await this.insertPlanFn(req.body);

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //insert multiple plans
  async inserMultiplePlans(req, res) {
    try {
      const plans = JSON.parse(req.body.plans);
      console.log(plans);
      plans.forEach(async (element) => {
        console.log(element);
        await this.insertPlanFn(element);
      });

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To update plan
  async updatePlan(req, res) {
    try {
      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      //get techid
      const tech = Technology.findOne({ name: req.body.tech });

      techId = tech._id;

      //if not found return
      if (!techId) return res.status(404).send("No such technology !!!");

      //find by id and update
      const plan = await Plan.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          tech: techId,
          whatToLearn: req.body.whatToLearn,
          practiceExercise: req.body.practiceExercise,
          assignments: req.body.assignments,
          references: req.body.references,
        },
        {
          new: true,
        }
      );

      //if not found return
      if (!plan) return res.status(404).send("Plan with given id not found!!!");

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To delete plan
  async deletePlan(req, res) {
    try {
      //find by id and delete
      const plan = await Plan.findByIdAndRemove(req.params.id);

      //if not found return
      if (!plan) return res.status(404).send("Plan with given id not found!!!");

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = PlanDomain;
