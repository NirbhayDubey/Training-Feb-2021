import React, { Component } from "react";

import StudentList from "./../studentList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.scss";

export default class Form extends Component {
  state = {
    country: {
      please: [],
      India: ["Gujarat", "Maharashtra", "Punjab", "UP"],
      Australia: ["California", "Texas", "Florida"],
      Canada: ["Alberta", "Columbia"],
    },

    selectedState: this.props.info.selectedState,
    selectedCountry: this.props.info.selectedCountry,
    selectedDegree: this.props.info.selectedDegree,
    states: {
      Gujarat: ["Ahmedabad", "Surat", "Bhavnagar"],
      Maharashtra: ["Mumbai", "Pune"],
      Punjab: ["Ludhiana", "Amritsar"],
      UP: ["Lucknow", "Unnao"],
      California: ["Los-Angeles", "San-joe"],
      Texas: ["Houseton", "Dallas"],
      Florida: ["Miami", "Tampa"],
      Alberta: ["Calgarie", "Airtdri"],
      Columbia: ["Cali", "Santa-Marta"],
    },
  };

  render() {
    console.log(this.props);
    const info = this.props.info.students;

    const { handleChange, handleSubmit, studentImage, collegeLogo } =
      this.props;
    const {
      ID,
      fname,
      mname,
      lname,
      ffname,
      fmname,
      flname,
      DOB,
      email,
      collegeName,
      idError,
      nameError,
      dateError,
      emailError,
      collegeNameError,
      fnameError,

      submit,
    } = this.props.info;
    console.log(collegeLogo);
    return (
      <React.Fragment>
        <div className="container mx-auto p-2  ">
          <h2 className="text-center">Student Details</h2>
          <form id="form">
            <div class="form-group w-50 mx-auto mt-5 row">
              <label className="h5">Select ID</label>
              <div class="form-group w-50 mx-auto col">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Enter ID"
                  name="ID"
                  value={ID}
                  onChange={handleChange}
                />
                <div className="text-danger"> {idError}</div>
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
                  value={fname}
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
                  value={mname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="lname"
                  onChange={handleChange}
                  value={lname}
                />
              </div>
              <div className="text-danger"> {nameError}</div>
            </div>

            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">DOB </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter date of birth"
                  name="DOB"
                  onChange={handleChange}
                  value={DOB}
                />
              </div>
              <div className="text-danger"> {dateError}</div>
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
                  value={email}
                />
              </div>
              <div className="text-danger"> {emailError}</div>
            </div>
            <div class="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Father Name</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter first name"
                  name="ffname"
                  // value={this.state.fname}
                  onChange={handleChange}
                  value={ffname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="fmname"
                  onChange={handleChange}
                  value={fmname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="flname"
                  onChange={handleChange}
                  value={flname}
                />
              </div>
              <div className="text-danger"> {fnameError}</div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-5 row">
              <div className="col">
                <label className="h5">Education Qualification</label>
                <select
                  className="w-100 h-75"
                  onChange={(e) => {
                    this.setState({ selectedDegree: e.target.value });
                  }}
                >
                  {submit ? (
                    <option selected>please select</option>
                  ) : (
                    <option>please select</option>
                  )}

                  <option>BE</option>
                  <option>ME</option>
                  <option>BCA</option>
                  <option>MCA</option>
                </select>
              </div>
            </div>

            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select Country Name</label>
                <select
                  className="w-100 h-75"
                  onChange={(e) => {
                    this.setState({ selectedCountry: e.target.value });
                  }}
                >
                  {submit ? (
                    <option selected value="please">
                      please select country
                    </option>
                  ) : (
                    <option value="please">please select country</option>
                  )}

                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select State Name</label>

                <select
                  className="w-100 h-75"
                  id="state"
                  onChange={(e) => {
                    this.setState({ selectedState: e.target.value });
                  }}
                >
                  {submit ? (
                    <option selected value="please select state">
                      please select state
                    </option>
                  ) : (
                    <option value="please select state">
                      please select state
                    </option>
                  )}

                  {this.state.country[this.state.selectedCountry].map(
                    (e, key) => {
                      return (
                        <option key={key} value={e}>
                          {e}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select City Name</label>
                <select className="w-100 h-75" id="city">
                  {submit ? (
                    <option selected value="please select city">
                      please select city
                    </option>
                  ) : (
                    <option value="please select city">
                      please select city
                    </option>
                  )}
                  {this.state.states[this.state.selectedState].map((e, key) => {
                    return (
                      <option key={key} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
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
                  ref={studentImage}
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
                  // value={this.state.collegeName}
                  onChange={handleChange}
                  value={collegeName}
                />
              </div>
              <div className="text-danger"> {collegeNameError}</div>
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
                  ref={collegeLogo}
                  value={collegeLogo.value}
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
        <h1 className="text-center mt-3 mb-3">Student List</h1>
        <StudentList info={info}></StudentList>
      </React.Fragment>
    );
  }
}
