import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../images/login.jpg";
import logo2 from "../ola-logo.svg";
import { useHistory } from "react-router-dom";
import CustomerService from "../Services/CustomerService";

const validOtp = new RegExp(/^\d{6}$/);

const OtpSend = (props) => {
  const history = useHistory();

  const [otp, setOtp] = useState({
    otp: "",
    errors: {
      otp: "",
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = otp.errors;
    switch (name) {
      case "otp":
        errors.otp = validOtp.test(value) ? false : true;
        break;
    }
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const submitOtp = (e) => {
    e.preventDefault();
    CustomerService.verifyOtp(otp.otp).then((res) => {
      console.log(res);
      if (res.data === "Your Otp Is Not valid") {
        alert("You Have Enter Wrong Otp");
      } else {
        alert("Create an Account Succesfully");
        history.push("/CityTaxi/");
      }
    });
  };

  return (
    <>
      <div className="container-fluid container-login">
        <div className="row">
          <div className="col-xl-4">
            <div className="card text-center card-body mt-5 mx-5">
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
                <h3>Please Check Your Email Id</h3>
                <h6 className="text-muted">Enter your 6-digit otp verify</h6>
              </div>
              <form>
                <div className="float-right">
                  {otp.errors.otp ? (
                    <span className="text-danger" style={{ fontSize: "20px" }}>
                      * otp length is Not Valid
                    </span>
                  ) : (
                    <span className="text-success" style={{ fontSize: "20px" }}>
                      * Otp is Valid
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
                      class="bi bi-file-lock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z" />
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z" />
                    </svg>
                  </span>
                  <input
                    id="otp"
                    type="number"
                    class="form-control form-control-md"
                    name="otp"
                    value={otp.otp}
                    onChange={handleChange}
                    placeholder="Enter Otp Number"
                  />
                </div>
                <button
                  type="submit"
                  onClick={submitOtp}
                  className="btn mt-2 py-2"
                >
                  Submit Otp
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
export default OtpSend;
