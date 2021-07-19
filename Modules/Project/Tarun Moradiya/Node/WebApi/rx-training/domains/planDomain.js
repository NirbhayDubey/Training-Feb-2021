const { Plan, validate } = require("../models/plan");
const debug = require("debug")("rx:plans");

class PlanDomain {
  //To get plans
  async getPlans(req, res) {
    try {
      //check if id given
      if (req.params.id) {
        //get data with id
        const plan = await Plan.findById(req.params.id).populate("tech");

        //if not in db return
        if (!plan)
          return res.status(404).send("Plan with given id not found!!!");

        //response
        res.send(plan);
      } else {
        //get all data
        const plans = await Plan.find();

        //response
        res.send(plans);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //insert single plan
  async insertPlan(req, res) {
    try {
      debug("inserting...", req.body);
      //validate user input
      // const { error } = await validate(body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //create
      let plan = new Plan({
        name: req.body.name,
        tech: req.body.techId,
      });

      if (req.body.days) plan.days = JSON.parse(req.body.days);

      //save to db
      await plan.save();
      debug("inserted", plan);
      //response
      res.send(plan);
    } catch (error) {
      res.send(error);
    }
  }

  //To update plan
  async updatePlan(req, res) {
    try {
      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //find by id and update
      // const plan = await Plan.findByIdAndUpdate(
      //   req.params.id,
      //   {
      //     name: req.body.name,
      //   },
      //   {
      //     new: true,
      //   }
      // );

      const plan = await Plan.findById(req.params.id);

      //if not found return
      if (!plan) return res.status(404).send("Plan with given id not found!!!");

      if (req.body.name) plan.name = req.body.name;
      if (req.body.days) plan.days = JSON.parse(req.body.days);

      await plan.save();

      debug("updated", plan);
      //response
      res.send(plan);
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
      debug("deleted", plan);
      //response
      res.send(plan);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = PlanDomain;
