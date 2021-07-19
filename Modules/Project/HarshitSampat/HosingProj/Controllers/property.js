// import modules
const {Property} = require("../Models/PropertyModel");

//get the property

exports.getProperty = async (req, res) => {
  try {
    if (req.params.id) {
      //add property
      const getProperty = await Property.findById(req.params.id);
      if (!getProperty) res.status(400).send("Could not get what you want");

      res.send(getProperty);
    } else {
      //get all property
      const getproperty = await Property.find();
      res.send(getproperty);
    }
  } catch(error) {
    console.error(error);
    res.send(error)
  }
};
// add new property
exports.addNewProperty = async (req, res) => {
  try {
    const addnewProperty = new Property({
      User: req.body.User,
      Address: req.body.Address,
      Property_Type: req.body.Property_Type,
      Bhk: req.body.Bhk,
      Image: r,
    });
    //save to databese
    await addnewProperty.save();

    //reponse
    res.send(addnewProperty);
  } catch(error) {
    console.error(error);
    res.send(error)
  }
};
