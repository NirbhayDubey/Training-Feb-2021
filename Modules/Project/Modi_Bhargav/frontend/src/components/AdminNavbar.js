import React, { useState } from "react";
import { Link } from "react-router-dom";
import OlaLogo from "../olacab-logo.svg";
import DriverService from "../Services/DriverService";

const AdminNavbar = () => {
  const [phoneNumber, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    DriverService.GetDriverByTrips(phoneNumber).then((res) => {
      setNumber(res.data);
    });
  };
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link to="/AdminPage/" className="navbar-brand ml-5">
        <img src={OlaLogo} alt="Ola cabs Img" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown ml-5 text-dark h4 mt-2">
            <Link
              className="nav-link btn btn-dark text-white btn-lg dropdown-toggle dropdown-toggle-split"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="pr-3 pt-3">CityDriver</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/CityDriverData/"
              >
                Show List
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/CityForm/"
              >
                Add Details
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/CityTriphistory/"
              >
                City History
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown ml-5 text-dark h4 mt-2">
            <a
              className="nav-link btn btn-dark text-white btn-lg dropdown-toggle dropdown-toggle-split"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="pr-3 pt-3">OutstationDriver</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/OutstationDriverData/"
              >
                Show List
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/OutstationForm/"
              >
                Add Details
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/OutstationTriphistory/"
              >
                Outstation History
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown ml-5 text-dark h4 mt-2">
            <a
              className="nav-link btn btn-dark text-white btn-lg dropdown-toggle dropdown-toggle-split"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="pr-3 pt-3">RentalDriver</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/RentalDriverCards/"
              >
                Show List
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/RentalForm/"
              >
                Add Details
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item text-primary font-weight-bold h4"
                to="/RentalTriphistory/"
              >
                Rental History
              </Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 border border-dark"
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Search Here"
          />
          <button
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default AdminNavbar;
