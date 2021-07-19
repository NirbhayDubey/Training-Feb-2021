import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-capitalize mb-5 sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            students
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link active" to="/">
                student list
              </Link>
              <Link className="nav-item nav-link" to="/create">
                add students
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
