import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Portal/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import ProjectService from "../Services/LoginService";
import FireBase from '../Fire-Base/FireBase'

export const EditProfile = (props) => {
  const [update, setUpdate] = useState({});

  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setUpdate(res.data[0]);
    });
  }, [props.match.params.id]);
  const Update = async(e) => {
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
            ProjectService.editUser(update).then((res) => {
              console.log(res.data);
              alert("Successfully updated")
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
      <Navbar id={props.match.params.id} />

      <div className="col-md-6 mx-auto mt-5">
        <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
          <h3 className="text-center mb-5 ">Your Information</h3>
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
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
                value={update.fname}
              ></input>
            </div>
            <div className="col">
              {" "}
              <input
                type="text"
                placeholder="Middle Name"
                className="form-control"
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
                value={update.mname}
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
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
                name="lname"
                value={update.lname}
              ></input>
            </div>
          </div>
     

          <input
            type="email"
            className="form-control mt-3"
            placeholder="E-mail"
            name="email"
            value={update.email}
            onChange={(e) => {
              setUpdate({ ...update, [e.target.name]: e.target.value });
            }}
          />

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Phone Number"
            name="phoneNo"
            value={update.phoneNo}
            onChange={(e) => {
              setUpdate({ ...update, [e.target.name]: e.target.value });
            }}
          ></input>

          <textarea
            className="form-control mt-3"
            placeholder="Address"
            name="address"
            value={update.address}
            onChange={(e) => {
              setUpdate({ ...update, [e.target.name]: e.target.value });
            }}
          ></textarea>

          <label className="h4 mt-4 mb-4 text-center">Account Details</label>
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
            name="accountNo"
            value={update.accountNo}
          
          ></input>
          <div className="row mt-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="CIF"
                name="CIF"
                value={update.CIF}
              
              ></input>
            </div>
            <div className="col input-group">
              <input
                type="number"
                className="form-control"
                placeholder="Balance"
                name="balance"
                value={update.balance}
                // onChange={(e) => {
                //   setUpdate({ ...update, [e.target.name]: e.target.value });
                // }}
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
            value={update.branchName}
            onChange={(e) => {
              setUpdate({ ...update, [e.target.name]: e.target.value });
            }}
          ></input>
          <input
            type="number"
            placeholder="IFSC Code"
            className="form-control mt-3"
            name="IFSC"
            value={update.IFSC}
            // onChange={(e) => {
            //   setUpdate({ ...update, [e.target.name]: e.target.value });
            // }}
          ></input>
          <input
            type="text"
            placeholder="Branch City"
            className="form-control mt-3 mb-3"
            name="branchCity"
            value={update.branchCity}
            onChange={(e) => {
              setUpdate({ ...update, [e.target.name]: e.target.value });
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
            onClick={Update}
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};
