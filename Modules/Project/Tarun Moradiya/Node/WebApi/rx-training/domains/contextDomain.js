const { Plan, validate } = require("../models/plan");
const debug = require("debug")("rx:days");

class ContextDomain {
  async getObj(req, res) {
    const plan = await Plan.findById(req.planId);

    //if not in db return
    if (!plan) return res.status(404).send("plan with given id not found!!!");

    const day = await plan.days.id(req.dayId);

    //if not in db return
    if (!day) return res.status(404).send("day with given id not found!!!");

    return { plan, day };
  }

  //To get contexts
  async getContexts(req, res) {
    try {
      const { day } = await this.getObj(req, res);
      //check if id given
      if (req.params.id) {
        //get data with id
        const context = await day.contexts.id(req.params.id);

        //if not in db return
        if (!context)
          return res.status(404).send("day with given id not found!!!");

        //response
        res.send(context);
      } else {
        //get all data
        const contexts = await day.contexts;

        //response
        res.send(contexts);
      }
    } catch (error) {
      res.send(error);
    }
  }

  // //To insert context
  // async insertContextFn(req, res) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const { plan, day } = await this.getObj(req, res);

  //       const context = await day.contexts.create({
  //         context: req.body.context,
  //         description: req.body.description,
  //       });

  //       debug(context);

  //       await day.contexts.push(context);

  //       //save to db
  //       await plan.save();
  //       debug(plan);
  //       resolve(context);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // }

  //insert single context
  async insertContext(req, res) {
    try {
      debug(req.body);
      // const context = await this.insertContextFn(req, res);
      const { plan, day } = await this.getObj(req, res);

      const context = await day.contexts.create({
        context: req.body.context,
        description: req.body.description,
      });

      debug(context);

      await day.contexts.push(context);

      //save to db
      await plan.save();
      debug(plan);

      //response
      res.send(context);
    } catch (error) {
      debug(error);
      // res.send(error);
    }
  }

  // //insert multiple contexts
  // async inserMultipleContexts(req, res) {
  //   try {
  //     const contexts = JSON.parse(req.body.contexts);
  //     debug(contexts);
  //     let context;
  //     contexts.forEach(async (element) => {
  //       debug(element);
  //       context = await this.insertContextFn(req, res);

  //       //response
  //       res.send(context);
  //     });
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  //To update plan
  async updateContext(req, res) {
    try {
      const { plan, day } = await this.getObj(req, res);

      //find by id and update
      const context = await day.contexts.id(req.params.id);

      //if not found return
      if (!context)
        return res.status(404).send("context with given id not found!!!");

      context.context = req.body.context;
      context.description = req.body.description;

      await plan.save();
      debug(context);
      //response
      res.send(context);
    } catch (error) {
      res.send(error);
    }
  }

  //To delete plan
  async deleteContext(req, res) {
    try {
      const { plan, day } = await this.getObj(req, res);

      //find by id and update
      const context = await day.contexts.id(req.params.id);

      //if not found return
      if (!context)
        return res.status(404).send("context with given id not found!!!");

      await context.remove();

      plan.save();

      //response
      res.send(context);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = ContextDomain;
