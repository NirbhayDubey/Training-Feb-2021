const debug = require("debug")("rx:modules");
const { Module } = require("../models/module");
const { Technology } = require("../models/technology");
const TechnologyDomain = require("./technologyDomain");

class ModuleDomain {
  //To get modules
  async getModules(req, res) {
    try {
      //check if id given
      if (req.params.id) {
        const module = await Module.findById(req.params.id).populate("tech");

        //if not in db return
        if (!module)
          return res.status(404).send("Module with given id not found!!!");

        //response
        res.send(module);
      } else {
        //get all data
        const modules = await Module.find();

        //response
        res.send(modules);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert module
  async insertModule(req, res) {
    try {
      debug("inserting...");
      let tech = await Technology.findById(req.body.techId);

      if (!tech) return res.status(404).send(error("no such technology"));

      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //create
      const module = new Module({
        name: req.body.name,
        tech: req.body.techId,
        moduleType: req.body.moduleType,
      });

      if (req.body.topics) module.topics = req.body.topics;

      //save to db
      await module.save();
      debug("inserted module", module);
      //response
      res.send(module);
    } catch (error) {
      res.send(error);
    }
  }

  //To update Module
  async updateModule(req, res) {
    try {
      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //find by id and update
      const module = await Module.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
        },
        { new: true }
      );

      //if not found return
      if (!module)
        return res.status(404).send("Module with given id not found!!!");

      //response
      res.send(module);
    } catch (error) {
      res.send(error);
    }
  }

  //To delete Module
  async deleteModule(req, res) {
    try {
      debug("deleting..");
      //find by id and delete
      const module = await Module.findByIdAndRemove(req.params.id);

      //if not found return
      if (!module)
        return res.status(404).send("Module with given id not found!!!");

      debug("deleted", module);
      //response
      res.send(module);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = ModuleDomain;
