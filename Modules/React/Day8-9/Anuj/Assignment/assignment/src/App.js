import Form from "./components/Form/Form";

import React, { Component } from "react";
import students from "./studentData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      fname: "",
      mname: "",
      lname: "",
      ffname: "",
      fmname: "",
      flname: "",
      DOB: "",
      email: "",
      collegeName: "",
      theInputKey: "",
      collegeLogo: "",
      student: {},
      students: students,
      idError: "",
      nameError: "",
      dateError: "",
      emailError: "",
      collegeNameError: "",
      fnameError: "",
      submit: false,
      selectedCountry: "India",
      selectedState:"Gujarat",
      selectedDegree:""
    };

    this.studentImage = React.createRef();
    this.collegeLogo = React.createRef();
    console.log(this.studentImage);
  }
  handleChange = (e) => {
    const name = e.target.name;
    if (name === "studentImage") {
      this.setState({
        studentImage: URL.createObjectURL(e.target.files[0]),
      });
    } else if (name === "collegeLogo") {
      this.setState({
        collegeLogo: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
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
            show: true,
          });
        } else if (val.length <= 0) {
          this.setState({
            idError: "ID can not be blank",
            show: true,
          });
        } else {
          this.setState({
            idError: "",
          });
        }

        break;

      case ("fname", "mname", "lname"):
        if (val.length <= 0) {
          this.setState({
            nameError: "first name,niddlename or lastname cannot be blank",
            show: true,
          });
        } else {
          this.setState({
            nameError: "",
          });
        }
        break;

      case ("ffname", "fmname", "flname"):
        if (val.length <= 0) {
          this.setState({
            fnameError: "first name,niddlename or lastname cannot be blank",
            show: true,
          });
        } else {
          this.setState({
            fnameError: "",
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
          });
        } else {
          this.setState({
            dateError: "",
          });
        }
        break;

      case "email":
        const regex1 = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (!regex1.test(val)) {
          console.log(regex1.test(val));
          this.setState({
            emailError: "Enter valid e-mail Address",
          });
        } else {
          this.setState({
            emailError: "",
          });
        }
        break;

      case "collegeName":
        if (val.length <= 0) {
          this.setState({
            collegeNameError: "CollegeName cannot be blank",
            show: true,
          });
        } else {
          this.setState({
            show: false,
          });
        }
        break;
        default:
          console.log("no one matched");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.students.push(this.state);

    this.setState({
      ID: "",
      fname: "",
      mname: "",
      lname: "",
      ffname: "",
      fmname: "",
      flname: "",
      DOB: "",
      email: "",
      collegeName: "",
      studentImage: "",
      collegeLogo: this.collegeLogo.current.defaultValue,
      student: {},
      students: students,
      idError: "",
      nameError: "",
      dateError: "",
      emailError: "",
      collegeNameError: "",
      submit: true,
      selectedCountry: "",
    });
    
  };

  render() {

    return (
      <div>
        <Form
          info={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formValidation={this.formValidation}
          studentImage={this.studentImage}
          collegeLogo={this.collegeLogo}
        ></Form>
      </div>
    );
  }
}
