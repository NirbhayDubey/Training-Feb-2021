const { Technology, validateTech: validate } = require("../models/technology");
const { Plan } = require("../models/plan");
const { Module } = require("../models/module");
const debug = require("debug")("rx:tech");
const { User } = require("../models/user");

class TechnologyDomain {
  //To get technologies
  async getTechnologies(req, res) {
    try {
      const user = await User.findById(req.user._id);
      // debug("user: ", user);
      //check if id given
      if (req.params.id) {
        if (req.user.isAdmin !== true) {
          const check = user.permissions.find((p) => p === req.params.id);
          if (!check)
            return res.status(404).send("user has not permission !!!");
        }

        const tech = await Technology.findById(req.params.id);

        //if not in db return
        if (!tech)
          return res.status(404).send("Technology with given id not found!!!");

        //response
        res.send(tech);
      } else {
        //get all data
        const techs = await Technology.find();
        let permittedTechs = [];
        if (user.isAdmin) permittedTechs = techs;
        else {
          permittedTechs = techs.filter((t) =>
            user.permissions.includes(t._id)
          );
        }
        // debug("permitted: ", permittedTechs);
        //response
        res.send(permittedTechs);
      }
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  //To insert technology
  async insertTechnology(req, res) {
    try {
      debug("inserting...", req.body);
      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //create
      const tech = new Technology({
        name: req.body.name,
        techGroup: req.body.techGroup,
      });

      //save to db
      await tech.save();
      debug(tech);
      //response
      res.send(tech);
    } catch (error) {
      res.send(error);
    }
  }

  //To update technology
  async updateTechnology(req, res) {
    try {
      debug("updating", req.body, req.params.id);
      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //find by id and update
      const tech = await Technology.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
        },
        {
          new: true,
        }
      );

      //if not found return
      if (!tech)
        return res.status(404).send("Technology with given id not found!!!");

      debug("updated", tech);
      //response
      res.send(tech);
    } catch (error) {
      res.send(error);
    }
  }

  //To delete technology
  async deleteTechnology(req, res) {
    try {
      //find by id and delete
      const tech = await Technology.findByIdAndRemove(req.params.id);

      //if not found return
      if (!tech)
        return res.status(404).send("Technology with given id not found!!!");

      //delete plans and modules
      await Plan.deleteMany({ tech: req.params.id });
      await Module.deleteMany({ tech: req.params.id });

      //response
      res.send(tech);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = TechnologyDomain;
