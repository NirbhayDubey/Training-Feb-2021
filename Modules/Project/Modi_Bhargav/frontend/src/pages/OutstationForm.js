import React, { useState } from "react";
import validator from "validator";
import AdminNavbar from "../components/AdminNavbar";
import DriverService from "../Services/DriverService";

const validEmail = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validNumber = new RegExp(/^\d{10}$/);

const validLicense = new RegExp(/^\d{12}$/);

const validName = new RegExp(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/);

const OutstationForm = (props) => {
  const [outstationDriver, setOutstationDriver] = useState({
    driverName: "",
    Img: "",
    passWord: "",
    Gender: "",
    licenseNumber: "",
    Email: "",
    phoneNumber: "",
    Source: "",
    kilometerPrice: "",
    fareDetails: "",
    registrationNumber: "",
    carNumber: "",
    carType: "",
    carModel: "",
    errors: {
      driverName: "",
      passWord: "",
      licenseNumber: "",
      Email: "",
      phoneNumber: "",
      registrationNumber: "",
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = outstationDriver.errors;
    switch (name) {
      case "driverName":
        errors.driverName = validName.test(value) ? false : true;
        break;
      case "passWord":
        errors.passWord = validator.isStrongPassword(value, {
          maxLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
          ? false
          : true;
        break;
      case "licenseNumber":
        errors.licenseNumber = validLicense.test(value) ? false : true;
        break;
      case "Email":
        errors.Email = validEmail.test(value) ? false : true;
        break;
      case "phoneNumber":
        errors.phoneNumber = validNumber.test(value) ? false : true;
        break;
      case "registrationNumber":
        errors.registrationNumber = validLicense.test(value) ? false : true;
        break;
    }
    setOutstationDriver({
      ...outstationDriver,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", outstationDriver.Img);
    formData.append("upload_preset", "arvbbtgq");
    DriverService.postImg(formData).then((res) => {
      setOutstationDriver((d) => ({ ...d, Img: res.data.url }));
    });
    DriverService.createOutstationDriver(outstationDriver).then((res) => {
      alert("Your Data is Crated");
      props.history.push("/AdminPage/");
    });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="mt-5 bg-dark" style={{ border: "2px solid black" }}>
            <h3 className="text-capitilize text-center mt-1 text-white">
              OutstationCar Driver Details
            </h3>
            <div className="card card-body bg-light my-3">
              <form className="row g-3">
                <div className="row m-2">
                  <div className="col-md-3"></div>
                  <h1 className="col-md-6 text-danger text-center border border-dark bg-info">
                    Driver Data :
                  </h1>
                </div>
                <div className="col-md-6 text-primary h4">
                  <label htmlfor="inputfname" className="form-label">
                    FullName :
                  </label>
                  <input
                    type="text"
                    name="driverName"
                    value={outstationDriver.driverName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Full Name"
                    onChange={handleChange}
                    id="inputfname"
                    required
                  />
                  {outstationDriver.errors.driverName ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      fullName is Not Valid
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * fullName is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label htmlfor="inputpassword" className="form-label">
                    Password :
                  </label>
                  <input
                    type="password"
                    name="passWord"
                    value={outstationDriver.passWord}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Strong password ex. Modi@321 and min length 8 charcter"
                    onChange={handleChange}
                    id="inputpassword"
                    required
                  />
                  {outstationDriver.errors.passWord ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Your passWord is not Strong!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * PassWord is Valid !
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputsimg" className="form-label">
                    Driver Img :
                  </label>
                  <input
                    type="file"
                    name="Img"
                    className="form-control border border-dark"
                    onChange={(e) =>
                      setOutstationDriver((d) => ({
                        ...d,
                        Img: e.target.files[0],
                      }))
                    }
                    id="inputsimg"
                    required
                  />
                </div>
                <div className="col-md-6">
                  {outstationDriver.Img && (
                    <div className="row">
                      <div
                        className="col-md-3 mx-auto"
                        style={{ marginTop: "-20px" }}
                      >
                        <img
                          className="img-fluid"
                          width="175"
                          src={outstationDriver.Img}
                          alt="student-img"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-6 text-primary h4">
                  <label htmlfor="inputlicense" className="form-label">
                    licenseNumber :
                  </label>
                  <input
                    type="number"
                    name="licenseNumber"
                    value={outstationDriver.licenseNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your licenseNumber ex. 125469878565"
                    onChange={handleChange}
                    id="inputlicense"
                    required
                  />
                  {outstationDriver.errors.licenseNumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Your licenseNumber is max length 12 digit !
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * Your licenseNumber is Valid !
                    </span>
                  )}
                </div>
                <div className="col-md-6 text-center py-2 text-primary h4 mt-5">
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                      female
                    </label>
                  </div>
                </div>
                <div className="col-md-6 text-primary h4">
                  <label for="inputemail" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={outstationDriver.Email}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your email ex.abc@321.com"
                    onChange={handleChange}
                    id="inputemail"
                    required
                  />
                  {outstationDriver.errors.Email ? (
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
                  <label for="inputnumber" className="form-label">
                    phoneNumber :
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={outstationDriver.phoneNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your phoneNumber ex.9925794444"
                    onChange={handleChange}
                    id="inputnumber"
                    required
                  />
                  {outstationDriver.errors.phoneNumber ? (
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
                <div className="row m-2">
                  <div className="col-md-3"></div>
                  <h1 className="col-md-6 text-danger text-center border border-dark bg-info">
                    Car Details :
                  </h1>
                </div>
                <div className="col-md-4 text-primary h4">
                  <label htmlfor="inputSource" className="form-label">
                    Source :
                  </label>
                  <input
                    type="text"
                    name="Source"
                    value={outstationDriver.Source}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your car Source"
                    onChange={handleChange}
                    id="inputSource"
                    required
                  />
                </div>
                <div className="col-md-4 text-primary h4">
                  <label htmlfor="inputfareDetails" className="form-label">
                    kilometerPrice :
                  </label>
                  <input
                    type="number"
                    name="kilometerPrice"
                    value={outstationDriver.kilometerPrice}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your fare Details"
                    onChange={handleChange}
                    id="inputfareDetails"
                    required
                  />
                </div>
                <div className="col-md-4 text-primary h4">
                  <label htmlfor="inputregistration" className="form-label">
                    registrationNumber :
                  </label>
                  <input
                    type="number"
                    name="registrationNumber"
                    value={outstationDriver.registrationNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your registration Number"
                    onChange={handleChange}
                    id="inputregistration"
                    required
                  />
                  {outstationDriver.errors.registrationNumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * registrationNumber is Max 12 Digit Long valid!
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * registrationNumber is Valid
                    </span>
                  )}
                </div>
                <div className="col-md-4 text-primary h4">
                  <label htmlfor="inputcarnumber" className="form-label">
                    carNumber :
                  </label>
                  <input
                    type="text"
                    name="carNumber"
                    value={outstationDriver.carNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your car Number"
                    onChange={handleChange}
                    id="inputcarnumber"
                    required
                  />
                </div>
                <div className="col-md-4 text-primary h4">
                  <label htmlfor="inputcarmodel" className="form-label">
                    carModel :
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    value={outstationDriver.carModel}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your car Model"
                    onChange={handleChange}
                    id="inputcarmodel"
                    required
                  />
                </div>
                <div className="col-md-4 text-primary h4">
                  <label htmlfor="inputcarType" className="form-label">
                    carType :
                  </label>
                  <input
                    type="text"
                    name="carType"
                    value={outstationDriver.carType}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your car Type"
                    onChange={handleChange}
                    id="inputcarType"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={submitData}
                    className="btn btn-block btn-primary col-md-3 text-uppercase"
                  >
                    Submit Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstationForm;
