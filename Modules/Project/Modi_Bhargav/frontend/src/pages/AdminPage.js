import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import DriverService from "../Services/DriverService";

const AdminPage = (props) => {
  const [cityDriver, setCityDriver] = useState([]);
  const [outstationDriver, setOutstationDriver] = useState([]);
  const [rentalDriver, setRentalDriver] = useState([]);

  useEffect(() => {
    DriverService.GetAllDriver().then((res) => {
      setCityDriver(res.data.cityDrivers);
      setOutstationDriver(res.data.outstationDrivers);
      setRentalDriver(res.data.rentalDrivers);
    });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="text-center text-white my-3">ALL Driver List</h2>
        <div className="row">
          <table
            className="table table-hover"
            style={{ border: "3px solid black" }}
          >
            <thead className="table-dark">
              <tr>
                <th className="text-center"> Full Name</th>
                <th className="text-center"> Car Type</th>
                <th className="text-center"> Email</th>
                <th className="text-center"> PhoneNumber</th>
              </tr>
            </thead>
            <tbody>
              {cityDriver.map((driver) => (
                <tr
                  className="table-light"
                  style={{ border: "2px solid black" }}
                  key={driver.phoneNumber}
                >
                  <td className="t1 text-center"> {driver.driverName} </td>
                  <td className="t1 text-center">{driver.carType}</td>
                  <td className="t1 text-center">{driver.Email}</td>
                  <td className="t1 text-center">{driver.phoneNumber}</td>
                </tr>
              ))}
              {rentalDriver.map((driver) => (
                <tr
                  className="table-light"
                  style={{ border: "2px solid black" }}
                  key={driver.phoneNumber}
                >
                  <td className="t1 text-center"> {driver.driverName} </td>
                  <td className="t1 text-center">{driver.carType}</td>
                  <td className="t1 text-center">{driver.Email}</td>
                  <td className="t1 text-center">{driver.phoneNumber}</td>
                </tr>
              ))}
              {outstationDriver.map((driver) => (
                <>
                  {driver.driverName != null ? (
                    <tr
                      className="table-light"
                      style={{ border: "2px solid black" }}
                      key={driver.phoneNumber}
                    >
                      <td className="t1 text-center"> {driver.driverName} </td>
                      <td className="t1 text-center">{driver.carType}</td>
                      <td className="t1 text-center">{driver.Email}</td>
                      <td className="t1 text-center">{driver.phoneNumber}</td>
                    </tr>
                  ) : null}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
