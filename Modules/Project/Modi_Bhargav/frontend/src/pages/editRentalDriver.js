import React, { useState, useEffect } from "react";
import validator from "validator";
import AdminNavbar from "../components/AdminNavbar";
import DriverService from "../Services/DriverService";
import Packages from "../components/Package";

const validEmail = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validNumber = new RegExp(/^\d{10}$/);

const validLicense = new RegExp(/^\d{12}$/);

const validName = new RegExp(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/);

const EditRentalDriver = (props) => {
  const [rentalDriver, setRentalDriver] = useState({
    driverName: "",
    Img: "",
    passWord: "",
    Gender: "",
    licenseNumber: "",
    Email: "",
    phoneNumber: "",
    pickUp: "",
    kilometerPrice: "",
    registrationNumber: props.match.params.id,
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

  const [Package, setPackage] = useState([]);

  useEffect(() => {
    DriverService.GetDriverById(rentalDriver.registrationNumber).then((res) => {
      const drivers = res.data[0];
      setRentalDriver({
        ...rentalDriver,
        driverName: drivers.driverName,
        Img: drivers.Img,
        passWord: drivers.passWord,
        Gender: drivers.Gender,
        licenseNumber: drivers.licenseNumber,
        Email: drivers.Email,
        phoneNumber: drivers.phoneNumber,
        pickUp: drivers.pickUp,
        kilometerPrice: drivers.kilometerPrice,
        registrationNumber: drivers.registrationNumber,
        carNumber: drivers.carNumber,
        carType: drivers.carType,
        carModel: drivers.carModel,
      });
    });
  }, [rentalDriver.registrationNumber]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = rentalDriver.errors;
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
    setRentalDriver({
      ...rentalDriver,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    let checkedValue = e.target.value;
    setPackage([...Package, checkedValue]);
  };

  const submitData = (e) => {
    e.preventDefault();
    setRentalDriver({ ...rentalDriver, Package });
    const formData = new FormData();
    formData.append("file", rentalDriver.Img);
    formData.append("upload_preset", "arvbbtgq");
    DriverService.postImg(formData).then((res) => {
      setRentalDriver((d) => ({ ...d, Img: res.data.url }));
    });
    DriverService.updateRentalDriver(
      rentalDriver.registrationNumber,
      rentalDriver
    ).then((res) => {
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
              RentalCar Driver Details
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
                    value={rentalDriver.driverName}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Full Name"
                    onChange={handleChange}
                    id="inputfname"
                    required
                  />
                  {rentalDriver.errors.driverName ? (
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
                    value={rentalDriver.passWord}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your Strong password ex. Modi@321 and min length 8 charcter"
                    onChange={handleChange}
                    id="inputpassword"
                    required
                  />
                  {rentalDriver.errors.passWord ? (
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
                      setRentalDriver((d) => ({
                        ...d,
                        Img: e.target.files[0],
                      }))
                    }
                    id="inputsimg"
                    required
                  />
                </div>
                <div className="col-md-6">
                  {rentalDriver.Img && (
                    <div className="row">
                      <div
                        className="col-md-3 mx-auto"
                        style={{ marginTop: "-20px" }}
                      >
                        <img
                          className="img-fluid"
                          width="175"
                          src={rentalDriver.Img}
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
                    value={rentalDriver.licenseNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your licenseNumber ex. 125469878565"
                    onChange={handleChange}
                    id="inputlicense"
                    required
                  />
                  {rentalDriver.errors.licenseNumber ? (
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
                    value={rentalDriver.Email}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your email ex.abc@321.com"
                    onChange={handleChange}
                    id="inputemail"
                    required
                  />
                  {rentalDriver.errors.Email ? (
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
                    value={rentalDriver.phoneNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your phoneNumber ex.9925794444"
                    onChange={handleChange}
                    id="inputnumber"
                    required
                  />
                  {rentalDriver.errors.phoneNumber ? (
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
                    pickUp :
                  </label>
                  <input
                    type="text"
                    name="pickUp"
                    value={rentalDriver.pickUp}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your car pickUp"
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
                    value={rentalDriver.kilometerPrice}
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
                    value={rentalDriver.registrationNumber}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your registration Number"
                    onChange={handleChange}
                    id="inputregistration"
                    required
                  />
                  {rentalDriver.errors.registrationNumber ? (
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
                    value={rentalDriver.carNumber}
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
                    value={rentalDriver.carModel}
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
                    value={rentalDriver.carType}
                    className="form-control text-capitalize border border-dark"
                    placeholder="Enter Your car Type"
                    onChange={handleChange}
                    id="inputcarType"
                    required
                  />
                </div>
                <div className="col-md-12 text-primary h4">
                  <label htmlfor="inputpackage" className="form-label">
                    Package :
                  </label>
                  {Packages.map((x) => {
                    return (
                      <div key={x.id}>
                        <input
                          type="checkbox"
                          id={x.id}
                          value={x.Package}
                          className="form-check-input ml-4 mr-5"
                          onChange={handleCheckbox}
                        />
                        <label
                          className="form-check-label text-dark ml-5 mt-1"
                          htmlFor={x.Package}
                        >
                          {x.Package}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="submit"
                  onClick={submitData}
                  className="btn btn-info mt-2 py-2"
                >
                  Submit Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRentalDriver;
