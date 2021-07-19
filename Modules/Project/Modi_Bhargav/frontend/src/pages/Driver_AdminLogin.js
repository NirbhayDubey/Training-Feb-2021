import React, { useState } from "react";
import DriverService from "../Services/DriverService";

const Driver_AdminLogin = (props) => {
  const [driverAdmin, setDriverAdmin] = useState({
    Email: "",
    passWord: "",
    checkbox: false,
  });
  const handleChange = (e) => {
    setDriverAdmin({ ...driverAdmin, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setDriverAdmin({
      ...driverAdmin,
      [e.target.name]: e.target.checked,
    });
  };

  const SubmitData = (e) => {
    e.preventDefault();
    if (driverAdmin.checkbox === true) {
      DriverService.loginDriverAdmin(driverAdmin)
        .then((res) => {
          localStorage.setItem("token1", res.data.Token);
          if (driverAdmin.Email === "meet81@gmail.com") {
            props.history.push("/AdminPage/");
          } else if (res.data.message === "Login Successful cityDriver") {
            localStorage.setItem("messages", res.data.message);
            props.history.push(
              `/DriverProfile/${res.data.cityDriver1.registrationNumber}`
            );
          } else if (res.data.message === "Login Successful outstationDriver") {
            localStorage.setItem("messages", res.data.message);
            props.history.push(
              `/DriverProfile/${res.data.outstationDriver1.registrationNumber}`
            );
          } else {
            localStorage.setItem("messages", res.data.message);
            props.history.push(
              `/DriverProfile/${res.data.rentalDriver1.registrationNumber}`
            );
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Your Email And Password In correct");
        });
    } else {
      alert("please checked rember button");
    }
  };
  return (
    <div className="container mt-5">
      <div className="card card-body w-50 m-auto border-dark bg-primary">
        <div className="text-center text-warning my-3">
          <h3>Enter your Email Id and Password</h3>
        </div>
        <form>
          <div className="input-group mb-4">
            <span className="input-group-addon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
            </span>
            <input
              id="email"
              type="email"
              value={driverAdmin.Email}
              onChange={handleChange}
              className="form-control form-control-lg bg-light"
              name="Email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-addon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-file-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z" />
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z" />
              </svg>
            </span>
            <input
              id="password"
              type="password"
              value={driverAdmin.passWord}
              onChange={handleChange}
              className="form-control form-control-lg bg-light"
              name="passWord"
              placeholder="Enter Your passWord"
            />
          </div>
          <div className="form-check ml-3 my-3">
            <input
              className="form-check-input "
              type="checkbox"
              name="checkbox"
              checked={driverAdmin.checkbox}
              onChange={handleCheckbox}
              id="flexCheckChecked"
            />
            <label
              className="form-check-label text-white"
              for="flexCheckChecked"
            >
              Remember Me
            </label>
          </div>
        </form>
        <button
          type="submit"
          className="btn col-sm-3 m-auto btn-block my-3 py-2 bg-dark text-white"
          onClick={SubmitData}
        >
          Submit Data
        </button>
      </div>
    </div>
  );
};
export default Driver_AdminLogin;
