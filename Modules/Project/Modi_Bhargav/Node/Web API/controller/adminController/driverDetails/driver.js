const Driver = require('../../../models/Drivers_model')
const express = require("express");
const driverRouter = express.Router();
const driverCarsFile = require('./driverCars/driCars')
const loginDriver = require('../AdminLogin/adminLogin')
const driverSignup = require('../../../domin/driverSignup')
const encrypts = require('../../../crypto/crypto')
const security = require('../../../Authenticater/driverSecurity')

class Drivers {
  static async driverList(req, res) {
    const driverData = await Driver.find()
    res.send(driverData);
  }

  static async driverFind(req, res) {
    const ID = parseInt(req.params.id)
    const specificData = await Driver.find({ driverId: ID })
    if (specificData.length == 0) return res.status(404).send("Your Data is Not Avilable")
    res.status(200).send(specificData);
  }

  static async UpdateData(req, res) {

    const ID = parseInt(req.params.id)
    const dataUpdate = await Driver.find({ driverId: ID })
    if (dataUpdate.length == 0) return res.status(404).send("Your Data Is Not Found")
    const newData = req.body
    for (let i in newData) {
      dataUpdate[0][i] = newData[i]
    }
    try {
      const result = await dataUpdate[0].save()
      res.send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }

  }
  static async DeleteData(req, res) {
    const ID = parseInt(req.params.id)

    const dataDelete = await Driver.find({ driverId: ID })

    if (dataDelete.length == 0) return res.status(404).send("Your Id Is Not Found")

    const remove = await Driver.deleteOne({ driverId: ID })

    res.send(dataDelete)
  }
  
};

driverRouter.post('/signup', driverSignup);

driverRouter.use('/signin', loginDriver)

driverRouter.use(security)

driverRouter.get('/all', Drivers.driverList);
driverRouter.get('/:id', Drivers.driverFind);
driverRouter.put('/:id', Drivers.UpdateData);
driverRouter.delete('/:id', Drivers.DeleteData);

driverRouter.use('/:id/car', driverCarsFile)

module.exports = driverRouter;