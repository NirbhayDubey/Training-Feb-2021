import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    const {
      pick,
      logo1,
      Number,
      fName,
      lName,
      dob,
      gender1,
      colName,
      location,
      handleDelete,
      handleEdit,
      children,
    } = this.props;
    return (
      <div className="m-3 col-12 col-sm-6 col-md-4" style={{ width: "20rem" }}>
        <div className="card-body bg-dark mb-0">
          <div className="imges m-2">
            <img
              className="rounded-circle bg-light"
              id="p1"
              width="80"
              heigth="80"
              src={pick}
              alt="student img"
              style={{ marginRight: "80px" }}
            />
            <img
              className="img-fulid"
              id="p2"
              width="80"
              src={logo1}
              alt="college logo"
            />
          </div>
          <div className="text-center text-primary">{children}</div>
          <ul className="list-group list-group-flush text-dark">
            <li className="list-group-item border border-info">
              EnrollNumber : {Number}
            </li>
            <li className="list-group-item border border-info">
              Name : {fName + " " + lName}
            </li>
            <li className="list-group-item border border-info">
              Date Of Birth : {dob}
            </li>
            <li className="list-group-item border border-info">
              gender : {gender1}
            </li>
            <li className="list-group-item border border-info">
              CollegeName : {colName}
            </li>
            <li className="list-group-item border border-info">
              Location : {location}
            </li>
          </ul>
        </div>

        <div className="card-footer bg-primary">
          <button
            type="button"
            class="btn btn-danger my-3 ml-2"
            onClick={handleDelete}
            style={{ marginRight: "50px" }}
          >
            Delete Data
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleEdit}
          >
            Edit Data
          </button>
        </div>
      </div>
    );
  }
}
