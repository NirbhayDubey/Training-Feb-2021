import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
        <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" style={{width:"150px", height:"50px"}}></img></a>
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <strong>
              <a class="nav-link text-success" href="http://localhost:3000/add-student">
                Create Student
              </a>
              </strong>
            </li>
            <li class="nav-item active ">
              <strong><a class="nav-link text-success font-weight-bold" href="http://localhost:3000">
                Student List
              </a>
              </strong>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
