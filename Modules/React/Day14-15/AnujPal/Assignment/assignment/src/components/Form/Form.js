import React from "react";
import "./form.css";
import { UseForm } from "./../useForm";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { StudentIdCard } from "../StudentIdCard";

export const Form = (props) => {
  const [values, handleChange] = UseForm({
    Id: "",
    fname: "",
    mname: "",
    lname: "",
    email: "",
    collegeName: "",
    studentImage: "",
    collegeLogo: "",
  });

  const [List, setList] = useState([{Id:""}]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setList (...List,values);
    console.log(List);
  };
  return (
    <>
      <div className="container mx-auto p-2  ">
        <h2 className="text-center">Student Details</h2>
        <form>
          <div class="form-group w-50 mx-auto mt-5 row">
            <label className="h5">Select ID</label>
            <div class="form-group w-50 mx-auto col">
              <input
                type="number"
                className="form-control "
                placeholder="Enter ID"
                name="Id"
                onChange={handleChange}
                value={values.Id}
              />
              <div className="text-danger"> {}</div>
            </div>
          </div>
          <div class="form-group w-50 mx-auto mt-3 row">
            <label className="h5">Student Name</label>
            <div className="col">
              <input
                type="text"
                className="form-control "
                placeholder="Enter first name"
                name="fname"
                value={values.fname}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control "
                placeholder="Enter middle name"
                name="mname"
                onChange={handleChange}
                value={values.mname}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control "
                placeholder="Enter last name"
                name="lname"
                onChange={handleChange}
                value={values.lname}
              />
            </div>
            <div className="text-danger"> </div>
          </div>
          <div className="form-group w-50 mx-auto mt-3 row">
            <label className="h5">Enter E-mail </label>
            <div className="col">
              <input
                type="text"
                className="form-control "
                placeholder="Enter date of birth"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="text-danger"></div>
          </div>
          <div class="form-group w-50 mx-auto mt-3 row">
            <div className="col">
              <label className="h5 mt-4 mb-3">Select Profile Pic</label>
              <input
                type="file"
                className="form-control "
                placeholder="Select Profile Picture"
                id="image"
                onChange={handleChange}
                name="studentImage"
                // ref={this.studentImage}
              />
            </div>
          </div>
          <div class="form-group w-50 mx-auto m-3 row">
            <label className="h5">Student College</label>
            <div className="col">
              <input
                type="text"
                className="form-control "
                placeholder="Enter College Name"
                name="collegeName"
                onChange={handleChange}
                value={values.collegeName}
              />
            </div>
            {/* <div className="text-danger"> {this.state.collegeNameError}</div> */}
          </div>
          <div class="form-group w-50 mx-auto m-3 row">
            <label className="h5 mt-4 mb-3">Select College Logo</label>
            <div className="col">
              <input
                type="file"
                className="form-control "
                placeholder="Select College Logo"
                name="collegeLogo"
                onChange={handleChange}
                // ref={this.collegeLogo}
              />
            </div>
          </div>
          <div class="form-group w-50 mx-auto m-3">
            <button
              className="btn w-100 btn-success mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
     
      </div>
    </>
  );
};
