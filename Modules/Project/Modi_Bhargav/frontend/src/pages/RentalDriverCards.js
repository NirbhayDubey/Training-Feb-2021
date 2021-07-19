import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import DriverService from "../Services/DriverService";

const RentalDriverCards = (props) => {
  const [Driver, setDriver] = useState([]);

  useEffect(() => {
    DriverService.getRentalDriver().then((res) => {
      setDriver(res.data);
    });
  }, []);

  const handleEdit = (id) => {
    props.history.push(`/EditRentalDriver/${id}`);
  };

  const handleDelete = (id) => {
    DriverService.deleteRentalDriver(id).then((res) => {
      let sortData = Driver.filter((d) => d.registrationNumber !== id);
      setDriver(sortData);
    });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <div class="row mt-5 justify-content-center">
          <h3 className="text-capitalize text-center text-dark bg-info">
            All Outstation Driver Details
          </h3>
          {Driver.map((data) => (
            <div
              className="m-3 col-12 col-sm-6 col-md-4"
              style={{ width: "22rem" }}
              key={data.phoneNumber}
            >
              <div
                className="card-body bg-dark mb-0"
                style={{ border: "5px solid red" }}
              >
                <div className="m-2 text-center">
                  <img
                    src={data.Img}
                    className="img-fluid rounded-circle mb-2"
                    width="80"
                  />
                </div>
                <div className="text-center text-info h1">Driver Info</div>
                <ul className="list-group list-group-flush text-dark">
                  <li className="list-group-item border border-info">
                    Full Name : {data.driverName}
                  </li>
                  <li className="list-group-item border border-info">
                    Email : {data.Email}
                  </li>
                  <li className="list-group-item border border-info">
                    phoneNumber : {data.phoneNumber}
                  </li>
                  <li className="list-group-item border border-info">
                    gender : {data.Gender}
                  </li>
                  <li className="list-group-item border border-info">
                    licenseNumber : {data.licenseNumber}
                  </li>
                  <li className="list-group-item border border-info">
                    carNumber : {data.carNumber}
                  </li>
                  <li className="list-group-item border border-info">
                    carType : {data.carType}
                  </li>
                  <li className="list-group-item border border-info">
                    carModel : {data.carModel}
                  </li>
                  <li className="list-group-item border border-info">
                    Location : {data.pickUp}
                  </li>
                </ul>
                <div className="card-footer bg-primary">
                  <button
                    type="button"
                    class="btn btn-danger my-3 ml-2"
                    onClick={() => handleDelete(data.registrationNumber)}
                    style={{ marginRight: "30px" }}
                  >
                    Delete Data
                  </button>
                  <button
                    type="button"
                    class="btn btn-success my-3 ml-2"
                    onClick={() => handleEdit(data.registrationNumber)}
                  >
                    Edit Data
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentalDriverCards;
