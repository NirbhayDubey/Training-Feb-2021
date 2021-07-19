import React from "react";
import { Link } from "react-router-dom";
import logo from "../ola-logo.svg";

const DriverNavbar = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-md navbar-dark navbar-one">
        <li className="left-item">
          <Link to="/" className="left-link ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left mr-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back to Ola Homepage
          </Link>
        </li>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/CityTaxi/" className="nav-link">
                Book a Ride
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/OlaMoney/" className="nav-link">
                Ola Money
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/OlaCorporate/" className="nav-link">
                Ola Corporate
              </Link>
            </li>
            <li className="nav-item nav-special">
              <Link to="/Support/" className="nav-link">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md navbar-light navbar-two">
        <Link to="/" className="nav-link">
          <img src={logo} alt="ola cab" />
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNavs"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavs">
          <ul className="navbar-nav ml-auto ml-3">
            <li className="nav-item">
              <Link to="/DriveWithOla/" className="nav-link">
                Drive With Ola
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/LeaseCar/" className="nav-link">
                Lease a Car
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AttachFleet/" className="nav-link">
                Attach a Fleet
              </Link>
            </li>
          </ul>
          <Link to="/Driver-Admin/Login/" className="mr-5">
            <button className="btn px-4 btn-dark bg-dark text-warning font-weight-bold">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default DriverNavbar;
