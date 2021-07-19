const Customer = require("../../../models/customers_model");
const express = require("express");
const customerRouter = express.Router();
const customerSignup = require("../../../domin/customerSignup");
const customerTrips = require("../../../domin/customerTrips");
const cityTaxicustomerBooking = require("../../../domin/cityTaxicustomerBooking");
const rentalcustomerBooking = require("../../../domin/rentalcustomerBooking");
const outstationcustomerBooking = require("../../../domin/OutstationCustomerBooking");
const customerCitycar = require("../../../domin/customerCitycar");
const customerRentalcar = require("../../../domin/customerRentalcar");
const customerOutstationcar = require("../../../domin/customerOutstationcar");
const customerCanceltrip = require("../../../domin/customerCanceltrip");
const loginUser = require("../Login/login");
const security1 = require("../../../Authenticater/security");
class Customers {
  static async customerList(req, res) {
    const customerData = await Customer.find();
    res.send(customerData);
  }

  static async customerFind(req, res) {
    const ID = parseInt(req.params.id);
    const specificData = await Customer.find({ phoneNumber: ID });
    if (specificData.length == 0)
      return res.status(404).send("Your Data is Not Avilable");
    res.status(200).send(specificData);
  }

  static async UpdateData(req, res) {
    const ID = parseInt(req.params.id);
    const dataUpdate = await Customer.find({ phoneNumber: ID });
    if (dataUpdate.length == 0)
      return res.status(404).send("Your Data Is Not Found");
    const newData = req.body;
    for (let i in newData) {
      dataUpdate[0][i] = newData[i];
    }
    try {
      const result = await dataUpdate[0].save();
      res.send(result);
    } catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message);
      }
    }
  }
  static async DeleteData(req, res) {
    const ID = parseInt(req.params.id);

    const dataDelete = await Customer.find({ phoneNumber: ID });

    if (dataDelete.length == 0)
      return res.status(404).send("Your Id Is Not Found");

    const remove = await Customer.deleteOne({ phoneNumber: ID });

    res.send(dataDelete);
  }
}

customerRouter.use("/signup", customerSignup);

customerRouter.use("/signin", loginUser);

customerRouter.use("/cityCar", customerCitycar);

customerRouter.use("/rentalCar", customerRentalcar);

customerRouter.use("/outstationCar", customerOutstationcar);

customerRouter.use(security1);

customerRouter.get("/all", Customers.customerList);
customerRouter.get("/:id", Customers.customerFind);
customerRouter.put("/:id", Customers.UpdateData);
customerRouter.delete("/:id", Customers.DeleteData);

customerRouter.use("/:id/cityTaxi/booking", cityTaxicustomerBooking);
customerRouter.use("/:id/rental/booking", rentalcustomerBooking);
customerRouter.use("/:id/outstation/booking", outstationcustomerBooking);
customerRouter.use("/:id/cancelTrip", customerCanceltrip);
customerRouter.use("/:id/tripHistory", customerTrips);
module.exports = customerRouter;
