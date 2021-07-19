import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import DriverService from "../Services/DriverService";

const CityTriphistory = () => {
  const [cityHistory, setCityhistory] = useState([]);

  useEffect(() => {
    DriverService.GetDriverHistory().then((res) => {
      setCityhistory(res.data.cityTriphistory);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        {cityHistory.map((driver) => (
          <div className="row border border-dark bg-light">
            <div className="col-md-3 text-center pt-4">{driver.carType}</div>
            <div className="col-md-6 text-primary">
              {driver.ScheduleDate != null ? (
                <h4>DateTime : {driver.ScheduleDate}</h4>
              ) : (
                <h4>DateTime : {driver.dateTime}</h4>
              )}
              <h4>Source : {driver.Source}</h4>
              <h4>Destination : {driver.Destination}</h4>
              <h4>DriverEmail : {driver.driverEmail}</h4>
              <h4>DriverContact : {driver.driverNumber}</h4>
              <h4>CustomerContact : {driver.customerNumber}</h4>
              <h4>FareAmount : {driver.fareDetails}</h4>
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
export default CityTriphistory;
