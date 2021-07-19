import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Alert } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import styled from "styled-components";
import authServices from "../services/AuthServices";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const { logout, userIsLoggedIn } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const [confirmMsg, setConfirmMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [color, setColor] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    otp: "",
    password: "",
    cPassword: "",
  });

  const [bool, setBool] = useState(false);
  const [oBool, setOBool] = useState(false);
  const [cBool, setCBool] = useState(false);

  useEffect(() => {
    if (userIsLoggedIn) logout();
  });

  const checkPasswordStrength = (e) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const isOk = re.test(e.target.value);
    if (e.target.value === "") setPasswordMsg("");
    else if (!isOk) {
      setPasswordMsg("password is weak");
    } else if (isOk) setPasswordMsg("password is strong");

    setCredentials({ ...credentials, password: e.target.value });
  };

  const confirmPassword = (e) => {
    setCredentials({ ...credentials, cPassword: e.target.value });
    if (credentials.password === e.target.value || e.target.value === "")
      setConfirmMsg(false);
    else setConfirmMsg(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await authServices.resetPassword(credentials);

    if (res.data.success === true) {
      setShowAlert(true);
      setColor("success");
      setMsg("Passwod was changed successfully!!!");
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setShowAlert(true);
      setColor("danger");
      setMsg(res.data.msg);
      setTimeout(() => setShowAlert(false), 3000);
    }
    setCredentials({
      email: "",
      otp: "",
      password: "",
      cPassword: "",
    });
    setPasswordMsg("");
  };

  return (
    <CustomContainer>
      <ChangeForm className="bg-dark text-light clearfix">
        <h1 className="display-4">Reset Password</h1>
        <hr className="bg-info" />
        {showAlert && (
          <Alert variant={color} className="text-capitalize">
            {msg}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control bg-dark border-light text-light"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-uppercase">
              otp
            </label>
            <div className="input-group">
              <input
                type={oBool ? "text" : "password"}
                placeholder="Enter OTP"
                className="form-control bg-dark border-light border-right-0 text-light"
                value={credentials.otp}
                onChange={(e) =>
                  setCredentials({ ...credentials, otp: e.target.value })
                }
                required
              />
              <div className="input-group-append">
                {oBool ? (
                  <span
                    className="input-group-text"
                    id="oeye"
                    className="bg-dark px-3 py-1 rounded-right border border-light border-left-0"
                    onClick={() => setOBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </span>
                ) : (
                  <span
                    className="input-group-text"
                    id="oeye-slash"
                    className="bg-dark px-3 py-1 rounded-right border border-light border-left-0"
                    onClick={() => setOBool(true)}
                  >
                    <i className="fas fa-eye-slash"></i>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <div className="input-group">
              <input
                type={bool ? "text" : "password"}
                placeholder="Enter Password"
                className="form-control bg-dark border-light border-right-0 text-light"
                value={credentials.password}
                onChange={checkPasswordStrength}
                required
              />
              <div className="input-group-append">
                {bool ? (
                  <span
                    className="input-group-text"
                    id="eye"
                    className="bg-dark px-3 py-1 rounded-right border border-light border-left-0"
                    onClick={() => setBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </span>
                ) : (
                  <span
                    className="input-group-text"
                    id="eye-slash"
                    className="bg-dark px-3 py-1 rounded-right border border-light border-left-0"
                    onClick={() => setBool(true)}
                  >
                    <i className="fas fa-eye-slash"></i>
                  </span>
                )}
              </div>
            </div>
            {passwordMsg && <small>{passwordMsg}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">confirm password</label>
            <div className="input-group">
              <input
                type={cBool ? "text" : "password"}
                placeholder="Confirm Password"
                className="form-control bg-dark border-light border-right-0 text-light"
                value={credentials.cPassword}
                onChange={confirmPassword}
                required
              />
              <div className="input-group-append">
                {cBool ? (
                  <span
                    className="input-group-text"
                    id="ceye"
                    className="bg-dark px-3 py-1 rounded-right border border-light border-left-0"
                    onClick={() => setCBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </span>
                ) : (
                  <span
                    className="input-group-text"
                    id="ceye-slash"
                    className="bg-dark px-3 py-1 rounded-right border border-light border-left-0"
                    onClick={() => setCBool(true)}
                  >
                    <i className="fas fa-eye-slash"></i>
                  </span>
                )}
              </div>
            </div>
            {confirmMsg && <small>passwords should be same</small>}
          </div>
          <Button
            disabled={confirmMsg || passwordMsg !== "password is strong"}
            variant="outline-light"
            type="submit"
            className="btn-block"
          >
            Submit
          </Button>
        </form>
        <hr className="bg-info" />
        <Link
          to="/login"
          className="text-capitalize text-light font-weight-bold float-right"
        >
          go to login
        </Link>
      </ChangeForm>
    </CustomContainer>
  );
}

const ChangeForm = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: 3px solid white;
  width: 35%;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: 3px solid #f6f6f6;
  outline-offset: -7px;

  @media only screen and (max-width: 992px) {
    width: 60%;
  }
  @media only screen and (max-width: 576px) {
    width: 90%;
  }
`;

const CustomContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
