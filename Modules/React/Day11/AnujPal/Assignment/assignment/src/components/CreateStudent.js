import React, { Component } from "react";
import StudentService from "../services/StudentService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Form/form.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: {
        please: [],
        India: ["Gujarat", "Maharashtra", "Punjab", "UP"],
        Australia: ["California", "Texas", "Florida"],
        Canada: ["Alberta", "Columbia"],
      },

      selectedState: "Gujarat",
      selectedCountry: "India",
      selectedDegree: "BE",
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
      Id: "",
      fname: "",
      mname: "",
      lname: "",
      ffname: "",
      fmname: "",
      flname: "",
      DOB: "",
      email: "",
      collegeName: "",
      studentImage: null,
      collegeLogo: "",
      student: {},
      students: [],
      idError: "",
      nameError: "",
      dateError: "",
      emailError: "",

      fnameError: "",
      submit: true,
      selectedCity: "",
    };
    this.studentImage = React.createRef();
    this.collegeLogo = React.createRef();
  }
  handleChange = (e) => {
    const name = e.target.name;
    if (name === "studentImage") {
      this.setState({
        studentImage: e.target.files[0].name,
      });
    } else if (name === "collegeLogo") {
      this.setState({
        collegeLogo: e.target.files[0].name,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    StudentService.getStudents().then((res) => {
      this.setState({
        students: res.data,
      });
    });
    this.formValidation(e);
  };
  formValidation = (e) => {
    const input = e.target.name;
    const val = e.target.value;
    switch (input) {
      case "ID":
        if (val < 0) {
          this.setState({
            idError: "number can not be negative",
            submit: false,
          });
        } else if (val.length <= 0) {
          this.setState({
            idError: "ID can not be blank",
            submit: false,
          });
        } else {
          this.setState({
            idError: "",
            submit: true,
          });
        }

        break;

      case ("fname", "mname", "lname"):
        if (val.length <= 0) {
          this.setState({
            nameError: "first name,niddlename or lastname cannot be blank",
            submit: false,
          });
        } else {
          this.setState({
            nameError: "",
            submit: true,
          });
        }
        break;

      case ("ffname", "fmname", "flname"):
        if (val.length <= 0) {
          this.setState({
            fnameError: "first name,niddlename or lastname cannot be blank",
            submit: false,
          });
        } else {
          this.setState({
            fnameError: "",
            submit: true,
          });
        }
        break;

      case "DOB":
        const regex = new RegExp(
          "^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$"
        );
        if (!regex.test(val)) {
          this.setState({
            dateError: "Enter valid format",
            submit: false,
          });
        } else {
          this.setState({
            dateError: "",
            submit: true,
          });
        }
        break;

      case "email":
        const regex1 = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (!regex1.test(val)) {
          console.log(regex1.test(val));
          this.setState({
            emailError: "Enter valid e-mail Address",
            submit: false,
          });
        } else {
          this.setState({
            emailError: "",
            submit: true,
          });
        }
        break;

      case "collegeName":
        if (val.length <= 0) {
          this.setState({
            collegeNameError: "CollegeName cannot be blank",
            submit: false,
          });
        } else {
          this.setState({
            submit: true,
          });
        }
        break;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.setState({ Id: this.state.Id, fname: this.state.fname });
    StudentService.createStudent(this.state).then((res) => {
      console.log(res.data);
    });

    this.state.students.push(this.state);
    this.setState({
      Id: "",
      fname: "",
      mname: "",
      lname: "",
      ffname: "",
      fmname: "",
      flname: "",
      DOB: "",
      email: "",
      collegeName: "",
      studentImage: null,
      collegeLogo: "",
      student: {},
      idError: "",
      nameError: "",
      dateError: "",
      emailError: "",
      collegeNameError: "",
      selectedCountry: "India",
      submit: true,
      selectedCity: "",
    });
    alert("Registerd Successfully");
    this.props.history.push("/");
  };

  render() {
    const students = this.props.students;
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
                  name="Id"
                  value={this.state.ID}
                  onChange={this.handleChange}
                />
                <div className="text-danger"> {this.state.idError}</div>
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
                  value={this.state.fname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="mname"
                  onChange={this.handleChange}
                  value={this.state.mname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="lname"
                  onChange={this.handleChange}
                  value={this.state.lname}
                />
              </div>
              <div className="text-danger"> {this.state.nameError}</div>
            </div>

            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">DOB </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter date of birth"
                  name="DOB"
                  onChange={this.handleChange}
                  value={this.state.DOB}
                />
              </div>
              <div className="text-danger"> {this.state.dateError}</div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Enter E-mail </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter date of birth"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="text-danger"> {this.state.emailError}</div>
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
                  onChange={this.handleChange}
                  value={this.state.ffname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="fmname"
                  onChange={this.handleChange}
                  value={this.state.fmname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="flname"
                  onChange={this.handleChange}
                  value={this.state.flname}
                />
              </div>
              <div className="text-danger"> {this.state.fnameError}</div>
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
                  {this.state.submit ? (
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
                  {this.state.submit ? (
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
                  {this.state.submit ? (
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
                <select
                  className="w-100 h-75"
                  id="city"
                  name="selectedCity"
                  onChange={(e) => {
                    this.setState({ selectedCity: e.target.value });
                  }}
                >
                  {this.state.submit ? (
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
                  onChange={this.handleChange}
                  name="studentImage"
                  ref={this.studentImage}
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
                  onChange={this.handleChange}
                  value={this.state.collegeName}
                />
              </div>
              <div className="text-danger"> {this.state.collegeNameError}</div>
            </div>
            <div class="form-group w-50 mx-auto m-3 row">
              <label className="h5 mt-4 mb-3">Select College Logo</label>
              <div className="col">
                <input
                  type="file"
                  className="form-control "
                  placeholder="Select College Logo"
                  name="collegeLogo"
                  onChange={this.handleChange}
                  ref={this.collegeLogo}
                />
              </div>
            </div>
            <div class="form-group w-50 mx-auto m-3">
            
              <button
                className="btn w-100 btn-success mt-4"
                disabled={this.state.submit}
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
