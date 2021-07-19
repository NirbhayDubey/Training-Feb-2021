const { TechGroup, validate } = require("../models/techGroup");
const { Technology } = require("../models/technology");

const debug = require("debug")("rx:tGrp");

class TechGroupDomain {
  //To get TechGroups
  async getTechGroups(req, res) {
    //check if id given
    if (req.params.id) {
      //get data with id
      const tGrp = await TechGroup.findById(req.params.id);

      //if not in db return
      if (!tGrp)
        return res.status(404).send("TechGroup with given id not found!!!");

      //response
      res.send(tGrp);
    } else {
      //get all data
      const tGrps = await TechGroup.find();

      //response
      res.send(tGrps);
    }
  }

  //To insert TechGroup
  async insertTechGroup(req, res) {
    //validate user input
    const { error } = await validate(req.body);

    //if error return
    if (error) return res.status(400).send(error.details[0].message);

    //create
    let tGrp = new TechGroup({
      name: req.body.name,
    });

    //save to db
    await tGrp.save();

    //response
    debug(tGrp);
    res.send(tGrp);
  }

  //To delete a TechGroup
  async deleteTechGroup(req, res) {
    //find by id and delete
    const tGrp = await TechGroup.findByIdAndRemove(req.params.id);

    //if not found return
    if (!tGrp)
      return res.status(404).send("TechGroup with given id not found!!!");

    //delete tech in TechGroup
    await Technology.deleteMany({ techGroup: req.params.id });

    debug("deleted tGrp: ", tGrp);

    //response
    res.send(tGrp);
  }

  //To update a TechGroup
  async updateTechGroup(req, res) {
    debug(req.body);
    //validate user input
    const { error } = await validate(req.body);

    //if error return
    if (error) return res.status(400).send(error.details[0].message);

    //find by id and update
    const tGrp = await TechGroup.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    );

    //if not found return
    if (!tGrp)
      return res.status(404).send("TechGroup with given id not found!!!");

    debug("updated", tGrp);

    //response
    res.send(tGrp);
  }
}

module.exports = TechGroupDomain;
