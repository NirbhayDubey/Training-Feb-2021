import React, { useContext } from "react";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import loginimg from "../images/login.jpg";
import logo2 from "../ola-logo.svg";
import { useHistory } from "react-router-dom";
import CustomerService from "../Services/CustomerService";
import { olaContext } from "../Context/Context";

const LogIn = (props) => {
  const history = useHistory();

  const { trip, rentalTrip, outstationTrip, customer, setCustomer } =
    useContext(olaContext);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const SubmitData = (e) => {
    e.preventDefault();
    CustomerService.loginCustomer(customer)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.Token);
        localStorage.setItem("message", res.data.message);
        localStorage.setItem("phoneNumber", res.data.customer);
        if (trip.Source.length > 0 && trip.Destination.length > 0) {
          history.push("/CityTaxi/");
        } else if (
          rentalTrip.pickUp.length > 0 &&
          rentalTrip.Package.length > 0
        ) {
          history.push("/Rental/");
        } else {
          history.push("/Outstation/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Your Email And Password In correct");
      });
  };
  return (
    <>
      <div className="container-fluid container-login">
        <div className="row">
          <div className="col-xl-4">
            <div className="card text-center card-body mt-5 mx-5">
              <div className="d-flex flex-row justify-content-between row-hl">
                <Link to="/cityTaxi/">
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
                <h5>Enter your Email Id and Password</h5>
              </div>
              <form>
                <div class="input-group mb-4">
                  <span class="input-group-addon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    type="email"
                    value={customer.Email}
                    onChange={handleChange}
                    class="form-control form-control-lg"
                    name="Email"
                    placeholder="Enter your Email"
                  />
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
                    id="password"
                    type="password"
                    value={customer.passWord}
                    onChange={handleChange}
                    class="form-control form-control-lg"
                    name="passWord"
                    placeholder="Password"
                  />
                </div>
              </form>

              <button
                type="submit"
                className="btn mt-2 py-2"
                onClick={SubmitData}
              >
                Next
              </button>
            </div>
            <Link to="/SignUp" className="nav-link text-center">
              <h2>New User Register ? SignUp</h2>
            </Link>
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
export default LogIn;
