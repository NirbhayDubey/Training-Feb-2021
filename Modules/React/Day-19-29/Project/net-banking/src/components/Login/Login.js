import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/login.scss";
import ProjectService from "../../Services/LoginService";
import { Navbar } from "../Navbar";

export const Login = (props) => {
  let tempMessage = "";
  let tempAccountNo = "";
  const [loginData, setLogindata] = useState({ userId: "", pass: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ProjectService.login(loginData).then(async (res) => {
      console.log(res.data.token);
      localStorage.setItem('Token', res.data.token);
      tempMessage = res.data.message;
      tempAccountNo = res.data.accountNo;
    });
    if (tempMessage === "Invalid userid or Password !!!!!!!!!!!") {
      alert("Invalid userid or Password !!!!!!!!!!!");
    } else {
      alert("You Successfully Login To the system");
      props.history.push(`/Portal/${tempAccountNo}/NEFT`);
    }

    // props.history.push("/Portal");
  };
  const Register = () => {
    props.history.push("/signUp");
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="container col-xl-10 col-xxl-8  ">
        <div className=" row  align-items-center g-lg-5 py-5  ">
          <div className="col-lg-7 text-center text-lg-start ">
            <h1 className="display-4 font-weight-bold lh-1 mb-3">
              Online Internet Banking Dummy Project
            </h1>
            <p className="col-lg-10 fs-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis natus tempora provident maxime voluptate corrupti,
              molestiae commodi, recusandae earum beatae ullam nulla non sint.
              Nihil fugiat minus praesentium delectus consectetur impedit quas
              ratione dolorum
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter User-Id"
                  name="userId"
                  onChange={(e) => {
                    setLogindata({
                      ...loginData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                {/* <label htmlFor="UserId">User Id</label> */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="pass"
                  onChange={(e) => {
                    setLogindata({
                      ...loginData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                {/* <label for="password">Password</label> */}
              </div>

              <div className="row mt-3">
                <div className="col">
                  {" "}
                  <button
                    class="w-100 btn btn-lg btn-primary"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="col text-center">
                  {" "}
                  <button
                    className="btn btn-secondary btn-lg w-100 custom"
                    onClick={Register}
                  >
                    Register
                  </button>
                </div>
              </div>

              <hr class="my-4" />
              <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      
      </div>
    </>
  );
};
