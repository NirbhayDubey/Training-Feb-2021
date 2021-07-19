import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import DriverService from "../Services/DriverService";

const RentalTriphistory = () => {
  const [rentalHistory, setRentalhistory] = useState([]);

  useEffect(() => {
    DriverService.GetDriverHistory().then((res) => {
      setRentalhistory(res.data.rentalTriphistory);
    });
  }, []);
  return (
    <>
      <AdminNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        {rentalHistory.map((driver) => (
          <div className="row border border-dark bg-light">
            <div className="col-md-3 text-center pt-4">{driver.carType}</div>
            <div className="col-md-6 text-primary">
              {driver.dateTimeReturn != null ? (
                <h4>DateTime : {driver.dateTimeReturn}</h4>
              ) : (
                <h4>DateTime : {driver.dateTime}</h4>
              )}
              <h4>Source : {driver.pickUp}</h4>
              <h4>Package : {driver.Package}</h4>
              <h4>DriverEmail : {driver.driverEmail}</h4>
              <h4>DriverContact : {driver.driverNumber}</h4>
              <h4>CustomerContact : {driver.customerNumber}</h4>
              <h4>FareAmount : {driver.fareAmount}</h4>
            </div>
            <div className="col-md-3 text-center py-5">
              {driver.Reason == null ? (
                <h4 className="text-success">Succesfully</h4>
              ) : (
                <h4 className="text-danger">Cancelled</h4>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RentalTriphistory;
