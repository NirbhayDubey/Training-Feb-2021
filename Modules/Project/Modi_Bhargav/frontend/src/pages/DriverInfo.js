import React, { useEffect, useState } from "react";
import DriverService from "../Services/DriverService";

const DriverInfo = (props) => {
  const [driverInfo, setDriverData] = useState([]);
  const [driverHistory, setDriverHistory] = useState([]);
  console.log(driverHistory);

  useEffect(() => {
    const Id = props.match.params.id;
    DriverService.GetDriverById(Id).then((res) => {
      setDriverData(res.data[0]);
    });
    DriverService.GetDriverByTrips(Id).then((res) => {
      setDriverHistory(res.data);
      console.log(res.data);
    });
  }, []);

  let sum = 0;
  const sums = (a) => {
    return (sum += a);
  };

  return (
    <div>
      <div className="text-center bg-dark h4 text-white py-3 fixed-top">
        User Personal Info
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div class="card col-md-3 border-dark text-center bg-light m-auto mt-5">
          <div class="card-body">
            <img
              src={driverInfo.Img}
              class="img-fluid rounded-circle w-50 mb-3"
            />
            <h3>{driverInfo.driverName}</h3>
            <h5 class="text-muted">{driverInfo.Email}</h5>
            <h5 class="text-muted">{driverInfo.phoneNumber}</h5>
            <div class="d-flex flex-row justify-content-center">
              <div class="p-4">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <div class="p-4">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
              <div class="p-4">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {driverHistory.map((driver) => {
            if (driver.Reason == null) {
              sums(driver.fareDetails);
            }
          })}
        </div>
        <div className="mt-5">
          <div className="text-center bg-info h4 text-dark py-3">
            Your Total Trip History
          </div>
          <div className="text-center bg-dark h4 text-white mt-2 py-1">
            Your Total Succesful Trip Amount : {sum}
          </div>
          {driverHistory.map((driver) => {
            return (
              <div className="row border border-dark bg-light">
                <div className="col-md-3 text-center pt-4">
                  {driver.carType}
                </div>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DriverInfo;
