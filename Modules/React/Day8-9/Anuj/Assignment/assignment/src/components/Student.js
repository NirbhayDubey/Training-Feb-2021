import React, { Component } from "react";


export default class Student extends Component {
  render() {
    const { info } = this.props;
    console.log(info);

    return (
      <div className="container ">
        <div className="row w-50 mx-auto border border-primary">
          <div className="col border  border-danger h-25 w-25">
            <img
              className="card-img-top h-50 w-50 d-flex justify-self mx-auto mb-0  "
              src={info.collegeLogo}
              alt="college "
            />
          </div>
          <div className="col border  border-danger h-25 w-25">
            <img
              className="card-img-top h-50 w-50 d-flex justify-self mx-auto mb-0  "
              src={info.studentImage}
              alt="student"
            />
          </div>
          <hr></hr>
          <div className="text-center">
            <h6>ID : {info.ID}</h6>
            <h6>
              Name : {info.fname} {info.mname} {info.lname}
            </h6>
            <h6>
              Father's Name : {info.ffname} {info.fmname} {info.flname}
            </h6>

            <h6>College Name : {info.collegeName}</h6>
            <h6>DOB : {info.DOB}</h6>
            <h6>E-mail : {info.email}</h6>
          </div>
        </div>
        <div className="row w-50 mx-auto">
          <div className="col h-25 w-25">
            <button type="button" className="bg-primary w-100">Edit</button>
          </div>
          <div className="col h-25 w-25">
          <button type="button" className="bg-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
