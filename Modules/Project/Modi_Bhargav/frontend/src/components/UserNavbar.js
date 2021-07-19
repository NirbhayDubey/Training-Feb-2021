import React from "react";
import { Link } from "react-router-dom";
import logo from "../ola-logo.svg";

const UserNavbar = () => {
  return (
    <>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark navbar-one">
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
                <Link to="/DriveHomePage/" className="nav-link">
                  Drive with Ola
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
              <li className="nav-item">
                <Link to="/OlaFoundation/" className="nav-link">
                  Ola Foundation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Share/" className="nav-link">
                  Share
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Offers/" className="nav-link">
                  Offers
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
                <Link to="/OlaCabs/OlaDrive/" className="nav-link">
                  Ola Drive
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/OlaCabs/OlaSelect/" className="nav-link">
                  Ola Select
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/OlaCabs/OlaFeets/" className="nav-link">
                  Ola Feets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Features/" className="nav-link">
                  Features
                </Link>
              </li>
            </ul>
            <Link to="/">
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
export default UserNavbar;
