import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import { Countrys, States, Citys } from "./select";

const validEmailRegex = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validNumber = new RegExp(/^\d{10}$/);

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enrollNumber: "",
      Img: "",
      Logo: "",
      firstName: "",
      middleName: "",
      lastName: "",
      DOB: "",
      Email: "",
      phoneNumber: "",
      Gender: "",
      placeOfBirth: "",
      City: "",
      State: "",
      Country: "",
      Pin: "",
      collegeName: "",
      Ccity: "",
      Cstate: "",
      Ccountry: "",
      Cpin: "",
      ffirstName: "",
      fmiddleName: "",
      flastName: "",
      Femail: "",
      Fnumber: "",
      feduQualific: "",
      Fprofession: "",
      Fdesignation: "",
      mfirstName: "",
      mmiddleName: "",
      mlastName: "",
      Memail: "",
      Mnumber: "",
      meduQualific: "",
      Mprofession: "",
      Mdesignation: "",
      checkbox: false,
      errors: {
        enrollNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        DOB: "",
        Email: "",
        phoneNumber: "",
        placeOfBirth: "",
        Pin: "",
        collegeName: "",
        Cpin: "",
        ffirstName: "",
        fmiddleName: "",
        flastName: "",
        Femail: "",
        Fnumber: "",
        feduQualific: "",
        Fprofession: "",
        Fdesignation: "",
        mfirstName: "",
        mmiddleName: "",
        mlastName: "",
        Memail: "",
        Mnumber: "",
        meduQualific: "",
        Mprofession: "",
        Mdesignation: "",
      },
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "enrollNumber":
        if (value.length > 12 || value.length < 12) {
          errors.enrollNumber = true;
        } else {
          errors.enrollNumber = false;
        }
        break;
      case "firstName":
        errors.firstName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "middleName":
        errors.middleName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "lastName":
        errors.lastName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Email":
        errors.Email = validEmailRegex.test(value) ? false : true;
        break;
      case "phoneNumber":
        errors.phoneNumber = validNumber.test(value) ? false : true;
        break;
      case "DOB":
        const dateString = value;
        const now = new Date();
        const yearNow = now.getFullYear();
        const dob = new Date(dateString);
        const yearDob = dob.getFullYear();
        let yearAge = yearNow - yearDob;

        if (yearAge < 5 || yearAge > 20) {
          errors.DOB = true;
        } else {
          errors.DOB = false;
        }
        break;
      case "placeOfBirth":
        errors.placeOfBirth = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Pin":
        if (value.length > 6 || value.length < 6) {
          errors.Pin = true;
        } else {
          errors.Pin = false;
        }
        break;
      case "Cpin":
        if (value.length > 6 || value.length < 6) {
          errors.Cpin = true;
        } else {
          errors.Cpin = false;
        }
        break;
      case "collegeName":
        errors.collegeName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "ffirstName":
        errors.ffirstName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "fmiddleName":
        errors.fmiddleName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "flastName":
        errors.flastName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Femail":
        errors.Femail = validEmailRegex.test(value) ? false : true;
        break;
      case "Fnumber":
        errors.Fnumber = validNumber.test(value) ? false : true;
        break;
      case "feduQualific":
        errors.feduQualific = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Fprofession":
        errors.Fprofession = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Fdesignation":
        errors.Fdesignation = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "mfirstName":
        errors.mfirstName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "mmiddleName":
        errors.mmiddleName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "mlastName":
        errors.mlastName = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Memail":
        errors.mEmail = validEmailRegex.test(value) ? false : true;
        break;
      case "Mnumber":
        errors.mNumber = validNumber.test(value) ? false : true;
        break;
      case "meduQualific":
        errors.meduQualific = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Mprofession":
        errors.Mprofession = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      case "Mdesignation":
        errors.Mdesignation = value.match(/^[A-Za-z]{3,}$/) ? false : true;
        break;
      default:
        break;
    }

    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  onChangeImg = (e) => {
    this.setState(
      {
        [e.target.name]: "/img/" + e.target.files[0].name,
      },
      () => console.log(e.target.files[0])
    );
  };

  onChangeLogo = (e) => {
    this.setState(
      {
        [e.target.name]: "/img/" + e.target.files[0].name,
      },
      () => console.log(e.target.files[0])
    );
  };

  submitFunction = (e) => {
    e.preventDefault();
    if (this.state.checkbox === true) {
      StudentService.createStudent(this.state).then((res) => {
        this.props.history.push("/");
      });
    } else {
      alert("please Checked Data And Click Are You Sure Data");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mt-5 bg-dark" style={{ border: "2px solid black" }}>
            <h3 className="text-capitilize text-center mt-1 text-white">
              Student Form
            </h3>
            <div className="card card-body bg-light my-3">
              <form className="row g-3">
                <div className="row m-2">
                  <div className="col-md-3"></div>
                  <h1 className="col-md-6 text-danger text-center border border-dark bg-info">
                    student details :
                  </h1>
                </div>
                <div className="col-md-12 text-primary h4">
                  <label for="inputenroll" className="form-label">
                    Enrollment Number :
                  </label>
                  <input
                    type="number"
                    name="enrollNumber"
                    value={this.state.enrollNumber}
                    className="form-control border border-dark"
                    placeholder="Enter Your Enroll Number"
                    onChange={this.handleChange}
                    id="inputenroll"
                    required
                  />
                  {this.state.errors.enrollNumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      Enroll Number must be at least 12 characters long!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Enroll is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputsimg" className="form-label">
                    Student Img :
                  </label>
                  <input
                    type="file"
                    name="Img"
                    className="form-control border border-dark"
                    onChange={this.onChangeImg}
                    id="inputsimg"
                    required
                  />
                </div>
                <div className="col-md-6">
                  {this.state.Img && (
                    <div className="row">
                      <div
                        className="col-md-3 mx-auto"
                        style={{ marginTop: "-20px" }}
                      >
                        <img
                          className="img-fluid"
                          width="175"
                          src={this.state.Img}
                          alt="student-img"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputfname" className="form-label">
                    firstName :
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your firstName"
                    onChange={this.handleChange}
                    id="inputfname"
                    required
                  />
                  {this.state.errors.firstName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      firstName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * firstName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputmname" className="form-label">
                    middleName :
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    value={this.state.middleName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your middleName"
                    onChange={this.handleChange}
                    id="inputmname"
                    required
                  />
                  {this.state.errors.middleName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      middleName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * middleName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputlname" className="form-label">
                    lastName :
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your lastName"
                    onChange={this.handleChange}
                    id="inputlname"
                    required
                  />
                  {this.state.errors.lastName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      lastName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * lastName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputemail" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={this.state.Email}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your email ex.abc@321.com"
                    onChange={this.handleChange}
                    id="inputemail"
                    required
                  />
                  {this.state.errors.Email ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is not valid!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputnumber" className="form-label">
                    contactNumber :
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your phoneNumber ex.9925794444"
                    onChange={this.handleChange}
                    id="inputnumber"
                    required
                  />
                  {this.state.errors.phoneNumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Please Your Number is max 10 digit!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * phoneNumber is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4 mt-5">
                  <label for="inputgender" className="form-label">
                    Gender :
                  </label>
                  <div className="form-check-inline ml-2">
                    <label className="form-check-label" for="genders1">
                      <input
                        type="radio"
                        className="form-check-input border border-dark"
                        id="genders1"
                        name="Gender"
                        value="male"
                        onChange={this.handleChange}
                        required
                      />
                      male
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label" for="genders2">
                      <input
                        type="radio"
                        className="form-check-input border border-dark"
                        id="genders2"
                        name="Gender"
                        value="famale"
                        onChange={this.handleChange}
                      />
                      female
                    </label>
                  </div>
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputdate" className="form-label">
                    Date Of Birth :
                  </label>
                  <input
                    type="date"
                    name="DOB"
                    value={this.state.DOB}
                    onChange={this.handleChange}
                    className="form-control border border-dark"
                    id="inputdate"
                  />
                  {this.state.errors.DOB ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      Your Valid Age 5 to 20 !
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Date Of Birth is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputplace" className="form-label">
                    Place Of Birth :
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={this.state.placeOfBirth}
                    onChange={this.handleChange}
                    placeholder="Enter your place of birth city"
                    className="form-control border border-dark"
                    id="inputplace"
                  />
                  {this.state.errors.placeOfBirth ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      PlaceofBirth length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * PlaceofBirth is Valid
                    </span>
                  )}
                </div>
                <div class="col-md-3 text-primary h4">
                  <label for="inputcountry" class="form-label">
                    Country :
                  </label>
                  <select
                    name="Country"
                    className="form-select border border-dark"
                    value={this.state.Country}
                    onChange={this.handleChange}
                    id="inputcountry"
                  >
                    <option selected>select your Country</option>
                    <Countrys />
                  </select>
                </div>
                <div class="col-md-3 text-primary h4">
                  <label for="inputState" class="form-label">
                    State :
                  </label>
                  <select
                    name="State"
                    className="form-select border border-dark"
                    onChange={this.handleChange}
                    id="inputState"
                    value={this.state.State}
                  >
                    <option selected>select your State</option>
                    <States countrys={this.state.Country} />
                  </select>
                </div>
                <div class="col-md-3 text-primary h4">
                  <label for="inputcity" class="form-label">
                    City :
                  </label>
                  <select
                    name="City"
                    className="form-select border border-dark"
                    onChange={this.handleChange}
                    id="inputcity"
                    value={this.state.City}
                  >
                    <option selected>select your City</option>
                    <Citys states={this.state.State} />
                  </select>
                </div>
                <div className="col-md-3 text-primary h4">
                  <label for="inputpin" className="form-label">
                    pinCode :
                  </label>
                  <input
                    type="number"
                    name="Pin"
                    value={this.state.Pin}
                    className="form-control border border-dark"
                    onChange={this.handleChange}
                    id="inputpin"
                  />
                  {this.state.errors.Pin ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * pin must be at least 6 Number long!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * pin is Valid
                    </span>
                  )}
                </div>
                <div className="row m-2">
                  <div className="col-md-3"></div>
                  <h1 className="col-md-6 text-danger text-center border border-dark bg-info">
                    college details :
                  </h1>
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputlogo" className="form-label">
                    College Logo :
                  </label>
                  <input
                    type="file"
                    name="Logo"
                    className="form-control text-capitalize border border-dark"
                    onChange={this.onChangeLogo}
                    id="inputlogo"
                  />
                </div>
                <div className="col-md-6">
                  {this.state.Logo && (
                    <div className="row">
                      <div
                        className="col-md-3 mx-auto"
                        style={{ marginTop: "-20px" }}
                      >
                        <img
                          className="img-fluid"
                          width="175"
                          src={this.state.Logo}
                          alt="student-img"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-12 text-primary h4">
                  <label for="inputcollege" className="form-label">
                    College Name :
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={this.state.collegeName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your collegeName"
                    onChange={this.handleChange}
                    id="inputcollege"
                  />
                  {this.state.errors.collegeName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      collegeName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * collegeName is Valid
                    </span>
                  )}
                </div>
                <div class="col-md-3 text-primary h4">
                  <label for="inputcountry" class="form-label">
                    Country :
                  </label>
                  <select
                    name="Ccountry"
                    className="form-select border border-dark"
                    onChange={this.handleChange}
                    value={this.state.Ccountry}
                    id="inputcountry"
                  >
                    <option value="" selected>
                      select your College Country
                    </option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div class="col-md-3 text-primary h4">
                  <label for="inputstate" class="form-label">
                    State :
                  </label>
                  <select
                    name="Cstate"
                    className="form-select border border-dark"
                    onChange={this.handleChange}
                    id="inputstate"
                  >
                    <option value="" selected>
                      select your college state
                    </option>
                    <option value="Guajrat">Guajrat</option>
                    <option value="UP">UP</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
                <div class="col-md-3 text-primary h4">
                  <label for="inputcity" class="form-label">
                    City :
                  </label>
                  <select
                    name="Ccity"
                    className="form-select border border-dark"
                    onChange={this.handleChange}
                    id="inputcity"
                  >
                    <option value="" selected>
                      select your college city
                    </option>
                    <option value="Patan">Patan</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahemdabad">Ahemdabad</option>
                  </select>
                </div>
                <div className="col-md-3 text-primary h4">
                  <label for="inputpin2" className="form-label">
                    pinCode :
                  </label>
                  <input
                    type="number"
                    name="Cpin"
                    value={this.state.Cpin}
                    className="form-control border border-dark"
                    onChange={this.handleChange}
                    id="inputpin2"
                  />
                  {this.state.errors.Cpin ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * pin must be at least 6 Number long!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * pin is Valid
                    </span>
                  )}
                </div>
                <div className="row m-2">
                  <div className="col-md-3"></div>
                  <h1 className="col-md-6 text-danger text-center border border-dark bg-info">
                    father's details :
                  </h1>
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputffname" className="form-label">
                    father firstName :
                  </label>
                  <input
                    type="text"
                    name="ffirstName"
                    value={this.state.ffirstName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your father firstName"
                    onChange={this.handleChange}
                    id="inputffname"
                  />
                  {this.state.errors.ffirstName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * father firstName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * father firstName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputfmname" className="form-label">
                    father middleName :
                  </label>
                  <input
                    type="text"
                    name="fmiddleName"
                    value={this.state.fmiddleName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your father middleName"
                    onChange={this.handleChange}
                    id="inputfmname"
                  />
                  {this.state.errors.fmiddleName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * father middleName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * father middleName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputflname" className="form-label">
                    father lastName :
                  </label>
                  <input
                    type="text"
                    name="flastName"
                    value={this.state.flastName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your father lastName"
                    onChange={this.handleChange}
                    id="inputflname"
                  />
                  {this.state.errors.flastName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * father lastName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * father lastName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputfemail" className="form-label">
                    father Email :
                  </label>
                  <input
                    type="email"
                    name="Femail"
                    value={this.state.Femail}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your email ex.abc@321.com"
                    onChange={this.handleChange}
                    id="inputfemail"
                  />
                  {this.state.errors.Femail ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is not valid!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputfnum" className="form-label">
                    contact Number :
                  </label>
                  <input
                    type="number"
                    name="Fnumber"
                    value={this.state.Fnumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your phoneNumber ex.9925794444"
                    onChange={this.handleChange}
                    id="inputfnum"
                  />
                  {this.state.errors.Fnumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Please Your Number is max 10 digit!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * phoneNumber is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputlname" className="form-label">
                    Education Qualification :
                  </label>
                  <input
                    type="text"
                    name="feduQualific"
                    value={this.state.feduQualific}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Education Qualification"
                    onChange={this.handleChange}
                    id="inputlname"
                  />
                  {this.state.errors.feduQualific ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      Qualific length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Qualific is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputpname" className="form-label">
                    Profession :
                  </label>
                  <input
                    type="text"
                    name="Fprofession"
                    value={this.state.Fprofession}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Profession"
                    onChange={this.handleChange}
                    id="inputpname"
                  />
                  {this.state.errors.Fprofession ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      Profession length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Profession is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputlname" className="form-label">
                    Designation :
                  </label>
                  <input
                    type="text"
                    name="Fdesignation"
                    value={this.state.Fdesignation}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Education Qualification"
                    onChange={this.handleChange}
                    id="inputlname"
                  />
                  {this.state.errors.Fdesignation ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      Designation length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Designation is Valid
                    </span>
                  )}
                </div>
                <div className="row m-2">
                  <div className="col-md-3"></div>
                  <h1 className="col-md-6 text-danger text-center border border-dark bg-info">
                    mother's details :
                  </h1>
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputfname" className="form-label">
                    mother firstName :
                  </label>
                  <input
                    type="text"
                    name="mfirstName"
                    value={this.state.mfirstName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your mother firstName"
                    onChange={this.handleChange}
                    id="inputfname"
                    required
                  />
                  {this.state.errors.mfirstName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      mother firstName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * mother firstName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputmname" className="form-label">
                    mother middleName :
                  </label>
                  <input
                    type="text"
                    name="mmiddleName"
                    value={this.state.mmiddleName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your mother middleName"
                    onChange={this.handleChange}
                    id="inputmname"
                  />
                  {this.state.errors.mmiddleName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      mother middleName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * mother middleName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputlname" className="form-label">
                    mother lastName :
                  </label>
                  <input
                    type="text"
                    name="mlastName"
                    value={this.state.mlastName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your mother lastName"
                    onChange={this.handleChange}
                    id="inputlname"
                  />
                  {this.state.errors.mlastName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      mother lastName length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * mother lastName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputmemail" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    name="Memail"
                    value={this.state.Memail}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your email ex.abc@321.com"
                    onChange={this.handleChange}
                    id="inputmemail"
                  />
                  {this.state.errors.Memail ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is not valid!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputmnum" className="form-label">
                    contactNumber :
                  </label>
                  <input
                    type="number"
                    name="Mnumber"
                    value={this.state.Mnumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your phoneNumber ex.9925794444"
                    onChange={this.handleChange}
                    id="inputmnum"
                  />
                  {this.state.errors.Mnumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Please Your Number is max 10 digit!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * phoneNumber is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputlname" className="form-label">
                    Education Qualification :
                  </label>
                  <input
                    type="text"
                    name="meduQualific"
                    value={this.state.meduQualific}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Education Qualification"
                    onChange={this.handleChange}
                    id="inputlname"
                  />
                  {this.state.errors.meduQualific ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Qualific length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Qualific is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputlname" className="form-label">
                    Profession :
                  </label>
                  <input
                    type="text"
                    name="Mprofession"
                    value={this.state.Mprofession}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Profession"
                    onChange={this.handleChange}
                    id="inputlname"
                  />
                  {this.state.errors.Mprofession ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Profession length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Profession is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label for="inputldesign" className="form-label">
                    Designation :
                  </label>
                  <input
                    type="text"
                    name="Mdesignation"
                    value={this.state.Mdesignation}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Designation"
                    onChange={this.handleChange}
                    id="inputldesign"
                  />
                  {this.state.errors.Mdesignation ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      Designation length 3 and only for characters!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Designation is Valid
                    </span>
                  )}
                </div>
                <div className="col-12 text-primary h4">
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="checkbox"
                      name="checkbox"
                      onChange={this.handleCheckbox}
                      checked={this.state.checkbox}
                      id="gridCheck"
                      required
                    />
                    <label className="form-check-label" for="gridCheck">
                      Are You Sure ?
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={this.submitFunction}
                    className="btn btn-success"
                    type="submit"
                  >
                    Submit Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
