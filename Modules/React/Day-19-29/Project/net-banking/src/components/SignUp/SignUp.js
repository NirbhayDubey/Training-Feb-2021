import { React, useState } from "react";
import "./signUp.scss";
import { Navbar } from "../Navbar";
import ProjectService from "../../Services/LoginService";
import FireBase from "../../Fire-Base/FireBase";
import { FaRupeeSign } from "react-icons/fa";

export const SignUp = (props) => {
  const [signUp, setsignUp] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phoneNo: "",
    pass: "",
    userId: "",
    accountNo: "",
    CIF: "",
    balance: "",
    branchName: "",
    IFSC: "",
    branchCity: "",
    CRN: "",
    address: "",
  });
  const Register = async (e) => {
    e.preventDefault();

    let recaptcha = new FireBase.auth.RecaptchaVerifier("recaptcha-container");
    let number = "+918128501852";
    await FireBase.auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((res) => {
        let code = prompt("enter otp", "");
        if (code == null) return;
        res
          .confirm(code)
          .then(() => {
            ProjectService.signUp(signUp).then((res1) => {
              console.log(res1.data);
              alert("You Successfully Registered");
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <Navbar />
      <div className="col-md-6 mx-auto mt-5">
        <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
          <h3 className="text-center mb-5 ">Register Form</h3>
          <label className="h4 mb-4 text-center">Basic Details</label>
          <div className="row">
            <div className="col">
              <input
                required
                type="text"
                placeholder="First Name"
                className="form-control"
                name="fname"
                onChange={(e) => {
                  setsignUp({ ...signUp, [e.target.name]: e.target.value });
                }}
              ></input>
            </div>
            <div className="col">
              {" "}
              <input
                type="text"
                placeholder="Middle Name"
                className="form-control"
                onChange={(e) => {
                  setsignUp({ ...signUp, [e.target.name]: e.target.value });
                }}
                name="mname"
              ></input>
            </div>
            <div className="col">
              {" "}
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                onChange={(e) => {
                  setsignUp({ ...signUp, [e.target.name]: e.target.value });
                }}
                name="lname"
              ></input>
            </div>
          </div>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Customer Relationship Number"
            name="CRN"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="User-Id"
            name="userId"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>

          <input
            type="email"
            className="form-control mt-3"
            placeholder="E-mail"
            name="email"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          />

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Phone Number"
            name="phoneNo"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>
          {/* <input
            type="textarea"
            className="form-control mt-3"
            placeholder="Address"
            name="address"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input> */}
          <textarea
            className="form-control mt-3"
            placeholder="Address"
            name="address"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></textarea>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Password"
            name="pass"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>

          <label className="h4 mt-4 mb-4 text-center">Account Details</label>
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
            name="accountNo"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>
          <div className="row mt-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="CIF"
                name="CIF"
                onChange={(e) => {
                  setsignUp({ ...signUp, [e.target.name]: e.target.value });
                }}
              ></input>
            </div>
            <div className="col input-group">
              <input
                type="number"
                className="form-control"
                placeholder="Balance"
                name="balance"
                onChange={(e) => {
                  setsignUp({ ...signUp, [e.target.name]: e.target.value });
                }}
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <FaRupeeSign />
                </span>
              </div>
            </div>
          </div>
          <label className="h4 mt-4 mb-4 text-center">Branch Details</label>
          <input
            type="text"
            placeholder="Branch Name"
            className="form-control"
            name="branchName"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>
          <input
            type="number"
            placeholder="IFSC Code"
            className="form-control mt-3"
            name="IFSC"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>
          <input
            type="text"
            placeholder="Branch City"
            className="form-control mt-3 mb-3"
            name="branchCity"
            onChange={(e) => {
              setsignUp({ ...signUp, [e.target.name]: e.target.value });
            }}
          ></input>

          <div
            id="recaptcha-container"
            data-size="compact"
            style={{ width: "400px" }}
          ></div>

          <button
            type="submit"
            className="btn btn-primary mt-5 w-100"
            onClick={Register}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};
