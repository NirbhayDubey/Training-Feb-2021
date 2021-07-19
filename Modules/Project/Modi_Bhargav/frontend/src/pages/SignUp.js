import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import loginimg from "../images/login.jpg";
import logo2 from "../ola-logo.svg";
import CustomerService from "../Services/CustomerService";

const validEmail = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validNumber = new RegExp(/^\d{10}$/);

const validName = new RegExp(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/);

const SignUp = (props) => {
  const [customerData, setCustomerdata] = useState({
    customerName: "",
    passWord: "",
    Email: "",
    phoneNumber: "",
    errors: {
      customerName: "",
      passWord: "",
      Email: "",
      phoneNumber: "",
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = customerData.errors;
    switch (name) {
      case "customerName":
        errors.customerName = validName.test(value) ? false : true;
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
      case "Email":
        errors.Email = validEmail.test(value) ? false : true;
        break;
      case "phoneNumber":
        errors.phoneNumber = validNumber.test(value) ? false : true;
        break;
    }
    setCustomerdata({ ...customerData, [e.target.name]: e.target.value });
  };

  const submitFunction = (e) => {
    e.preventDefault();
    CustomerService.createCustomer(customerData).then((res) => {
      props.history.push("/verify/otp/");
    });
  };

  return (
    <>
      <div className="container-fluid container-login">
        <div className="row">
          <div className="col-xl-4">
            <div className="card card-body mt-5 mx-5">
              <div className="d-flex flex-row justify-content-between row-hl">
                <Link to="/">
                  <div className="item-hl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blackColor"
                      class="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="item-hl">
                  <img src={logo2} width="70" height="70" alt="ola cab" />
                </div>
                <div className="item-hl"></div>
              </div>
              <div className="text-center mb-4">
                <h4>Enter your Personal Details</h4>
              </div>
              <form>
                <div className="float-right">
                  {customerData.errors.customerName ? (
                    <span className="text-danger" style={{ fontSize: "20px" }}>
                      * Name is Not Valid
                    </span>
                  ) : (
                    <span className="text-success" style={{ fontSize: "20px" }}>
                      * Name is Valid
                    </span>
                  )}
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-person-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                  </span>
                  <input
                    id="name"
                    type="text"
                    class="form-control form-control-lg"
                    name="customerName"
                    value={customerData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your Full Name"
                    required
                  />
                </div>
                <div className="float-right">
                  {customerData.errors.passWord ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * PassWord is Not Storng
                    </span>
                  ) : (
                    <span
                      className="text-success ml-5"
                      style={{ fontSize: "20px" }}
                    >
                      * passWord is Valid
                    </span>
                  )}
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-file-lock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z" />
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    type="password"
                    class="form-control form-control-lg"
                    name="passWord"
                    value={customerData.passWord}
                    onChange={handleChange}
                    placeholder="Enter Your secqure Password"
                    required
                  />
                </div>
                <div className="float-right">
                  {customerData.errors.Email ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * Email is Not Valid
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
                <div class="input-group mb-4">
                  <span class="input-group-addon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    type="email"
                    class="form-control form-control-lg"
                    name="Email"
                    value={customerData.Email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="float-right">
                  {customerData.errors.phoneNumber ? (
                    <span
                      className="text-danger ml-1"
                      style={{ fontSize: "20px" }}
                    >
                      * phoneNumber is Not Valid
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
                <div class="input-group mb-2">
                  <span class="input-group-addon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </span>
                  <input
                    id="number"
                    type="phoneNumber"
                    class="form-control form-control-lg"
                    name="phoneNumber"
                    value={customerData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={submitFunction}
                  className="btn btn-block mt-2 py-2"
                >
                  Submit Data
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-8">
            <img
              src={loginimg}
              width="1000"
              height="800"
              alt="ola cabs"
              className="img-fluid d-none d-md-block mb-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
