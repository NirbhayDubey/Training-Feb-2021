const { Plan, validate } = require("../models/plan");
const debug = require("debug")("rx:days");
const csv = require("csvtojson");
const _ = require("lodash");
const fs = require("fs");

class DayDomain {
  async getPlan(req, res) {
    const plan = await Plan.findById(req.planId);

    //if not in db return
    if (!plan) return res.status(404).send("plan with given id not found!!!");

    return plan;
  }

  //To get days
  async getDays(req, res) {
    try {
      const plan = await this.getPlan(req, res);
      //check if id given
      if (req.params.id) {
        //get data with id
        const day = await plan.days.id(req.params.id);

        //if not in db return
        if (!day) return res.status(404).send("day with given id not found!!!");

        //response
        res.send(day);
      } else {
        //get all data
        const days = await plan.days;

        //response
        res.send(days);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //insert single plan
  async insertDay(req, res) {
    try {
      const plan = await this.getPlan(req, res);

      debug(plan);

      const day = await plan.days.create({
        day: req.body.day,
      });
      debug(day);

      if (req.body.contexts) day.contexts = JSON.parse(req.body.contexts);

      debug(day);

      await plan.days.push(day);

      //save to db
      await plan.save();
      debug(plan);

      //response
      res.send(day);
    } catch (error) {
      res.send(error);
    }
  }

  //insert multiple days
  async inserMultipleDays(req, res) {
    try {
      const plan = await this.getPlan(req, res);

      debug(req.file);

      const jsonArray = await csv().fromFile(req.file.path);
      debug(jsonArray);

      const daysArr = [];

      jsonArray.forEach(async (item) => {
        let day = { day: item.day, contexts: [] };

        _.forIn(_.omit(item, "day"), (value, key) => {
          if (value !== "") {
            day.contexts.push({
              context: key,
              description: value,
            });
          }
        });

        let newDay = await plan.days.create(day);

        daysArr.push(newDay);
        plan.days.push(newDay);
      });

      fs.unlink(req.file.path, (err) => {
        if (err) debug(err);
        else debug("csv file deleted");
      });

      // plan.days.push(daysArr);

      // await plan.save();

      debug("daysArr: ", daysArr);
      await plan.save();

      //response
      res.json({ daysArr });
    } catch (error) {
      debug(error);
      res.json({ err: error });
    }
  }

  //To update plan
  async updateDay(req, res) {
    try {
      const plan = await this.getPlan(req, res);

      //find by id and update
      const day = await plan.days.id(req.params.id);

      //if not found return
      if (!day) return res.status(404).send("day with given id not found!!!");

      day.day = req.body.day;

      if (req.body.contexts) day.contexts = JSON.parse(req.body.contexts);

      await plan.save();
      debug(day);
      //response
      res.send(day);
    } catch (error) {
      res.send(error);
    }
  }

  //To delete plan
  async deleteDay(req, res) {
    try {
      const plan = await this.getPlan(req, res);

      //find by id and update
      const day = await plan.days.id(req.params.id);

      //if not found return
      if (!day) return res.status(404).send("day with given id not found!!!");

      await day.remove();

      plan.save();

      //response
      res.send(day);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = DayDomain;
