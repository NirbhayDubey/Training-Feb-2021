const express = require("express");
const router1 = express.Router();

const cityCars = require("./carData/CityCar");
const rentalCars = require("./carData/RentalCar");
const outstationCars = require("./carData/OutstationCar");
const CityArea = require("./carData/CityAndArea");
const enquiryData = require("./carData/EquiryData");
const driverLogin = require("./AdminLogin/adminLogin");
const driverData = require("../../domin/AllDriverData");
const driverTrips = require("../../domin/driversTrip");
const GetDriverId = require("../../controller/adminController/carData/GetFindDriver");
const VerifyOtp = require("../../domin/verifyOtp");

router1.use("/cityCar", cityCars);
router1.use("/rentalCar", rentalCars);
router1.use("/outstationCar", outstationCars);
router1.use("/cityarea", CityArea);
router1.use("/driverEnquiry", enquiryData);
router1.use("/driverLogin", driverLogin);
router1.use("/allDrivers", driverData);
router1.use("/driverHistory", driverTrips);
router1.use("/getDriverId", GetDriverId);
router1.use("/verifyOtp", VerifyOtp);

module.exports = router1;
