import React, { Component } from "react";
import "./clg-img copy/GECD.png";

export default class Student extends Component {
  render() {
    const { info } = this.props;
    console.log(info);

    return (
      <div className=" ">
        <div className="row w-50 mx-auto border border-primary">
          <div className="col border  border-danger h-25 w-25">
            <img
              className="card-img-top h-50 w-50 d-flex justify-self mx-auto mb-0  "
              src={info.collegeLogo}
              alt="college image"
            />
          </div>
          <div className="col border  border-danger h-25 w-25">
            <img
              className="card-img-top h-50 w-50 d-flex justify-self mx-auto mb-0  "
              src={info.studentImage}
              alt="college image"
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
      </div>
    );
  }
}
