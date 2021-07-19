import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-expand-lg bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a>
                <Link to="/" className="nav-link data text-white h3">
                  Student Info
                </Link>
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarToggleExternalContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item ml-3">
                <a>
                  <Link
                    to="/add-studentInfo/"
                    className="nav-link  text-white h3"
                  >
                    Add Data
                  </Link>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a>
                  <Link
                    to="/view-AllStudent/"
                    className="nav-link text-white h3"
                  >
                    Show Cards
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
