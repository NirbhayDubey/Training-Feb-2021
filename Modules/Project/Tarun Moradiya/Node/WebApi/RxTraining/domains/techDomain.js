const { Technology, validateTech: validate } = require("../models/technology");
const { Plan } = require("../models/plan");

class TechnologyDomain {
  //To get technologies
  async getTechnologies(req, res) {
    try {
      const id = req.params.id;

      //check if id given
      if (id) {
        let tech;

        //if id is frontend
        if (id == "frontend") {
          tech = await Technology.find({ techType: "frontend" });
        } else if (id == "backend") {
          tech = await Technology.find({ techType: "backend" });
        } else if (id == "common") {
          tech = await Technology.find({ techType: "common" });
        } else {
          //get data with id
          tech = await Technology.findById(id);

          //if not in db return
          if (!tech)
            return res
              .status(404)
              .send("Technology with given id not found!!!");
        }

        //response
        res.send(tech);
      } else {
        //get all data
        const Tech = await Technology.find();

        //response
        res.render("pages/index", { Tech, User: req.user });
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert technology
  async insertTechnology(req, res) {
    try {
      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      //create
      let tech = new Technology({
        name: req.body.name,
        techType: req.body.techType,
      });

      //save to db
      tech = await tech.save();

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To update technology
  async updateTechnology(req, res) {
    try {
      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      //find by id and update
      const tech = await Technology.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          techType: req.body.techType,
        },
        {
          new: true,
        }
      );

      //if not found return
      if (!tech)
        return res.status(404).send("Technology with given id not found!!!");

      //response
      res.redirect("back");
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

      await Plan.findOneAndRemove({ tech: req.params.id });

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = TechnologyDomain;
