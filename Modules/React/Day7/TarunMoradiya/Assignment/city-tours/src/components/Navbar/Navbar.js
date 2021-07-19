import React from "react";
import logo from "../../logo.svg";
// import "./navbar.scss";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="city tours company" />
        </a>
        <button
          class="navbar-toggler btn"
          data-toggle="collapse"
          data-target="#myid"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myid">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Tours
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
