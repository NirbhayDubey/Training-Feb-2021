import React, { useContext, useState } from "react";
import { Button, Card, Container, Alert } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import styled from "styled-components";
import authServices from "../services/AuthServices";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  const { logout } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    cPassword: "",
  });

  const [bool, setBool] = useState(false);
  const [oBool, setOBool] = useState(false);
  const [cBool, setCBool] = useState(false);

  const checkPasswordStrength = (e) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const isOk = re.test(e.target.value);
    if (e.target.value === "") setPasswordMsg("");
    else if (!isOk) {
      setPasswordMsg("password is weak");
    } else if (isOk) setPasswordMsg("password is strong");

    setPasswords({ ...passwords, newPassword: e.target.value });
  };

  const confirmPassword = (e) => {
    setPasswords({ ...passwords, cPassword: e.target.value });
    if (passwords.newPassword === e.target.value || e.target.value === "")
      setConfirmMsg(false);
    else setConfirmMsg(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await authServices.changePassword(passwords);
    if (res.data === true) {
      alert("Passwod was changed successfully!!!");
      logout();
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };
  return (
    <Container>
      <ChangeForm className="bg-warning clearfix">
        <h1 className="display-4">Change Password</h1>
        <hr />
        {showAlert && (
          <Alert variant="danger" className="text-capitalize">
            password is Incorrect
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Confirm old password</label>
            <div className="input-group">
              <input
                placeholder="Enter Old Password"
                type={oBool ? "text" : "password"}
                className="form-control bg-warning border-dark border-right-0 text-dark"
                value={passwords.oldPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, oldPassword: e.target.value })
                }
                required
              />
              <div className="input-group-append">
                {oBool ? (
                  <span
                    className="input-group-text"
                    id="oeye"
                    className="bg-warning px-3 py-1 rounded-right border border-dark border-left-0"
                    onClick={() => setOBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </span>
                ) : (
                  <span
                    className="input-group-text"
                    id="oeye-slash"
                    className="bg-warning px-3 py-1 rounded-right border border-dark border-left-0"
                    onClick={() => setOBool(true)}
                  >
                    <i className="fas fa-eye-slash"></i>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Set new password</label>
            <div className="input-group">
              <input
                placeholder="Enter New Password"
                type={bool ? "text" : "password"}
                className="form-control bg-warning border-dark border-right-0 text-dark border-right-0"
                value={passwords.newPassword}
                onChange={checkPasswordStrength}
                required
              />
              <div className="input-group-append">
                {bool ? (
                  <span
                    className="input-group-text"
                    id="eye"
                    className="bg-warning px-3 py-1 rounded-right border border-dark border-left-0"
                    onClick={() => setBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </span>
                ) : (
                  <span
                    className="input-group-text"
                    id="eye-slash"
                    className="bg-warning px-3 py-1 rounded-right border border-dark border-left-0"
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
                className="form-control bg-warning border-dark border-right-0 text-dark"
                value={passwords.cPassword}
                onChange={confirmPassword}
                required
              />
              <div className="input-group-append">
                {cBool ? (
                  <span
                    className="input-group-text"
                    id="ceye"
                    className="bg-warning px-3 py-1 rounded-right border border-dark border-left-0"
                    onClick={() => setCBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </span>
                ) : (
                  <span
                    className="input-group-text"
                    id="ceye-slash"
                    className="bg-warning px-3 py-1 rounded-right border border-dark border-left-0"
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
            variant="dark"
            type="submit"
            className="btn-block btn-lg"
          >
            Submit
          </Button>
        </form>
        <hr />
        <Link
          to="/profile"
          className="text-capitalize text-dark font-weight-bold float-right"
        >
          back to profile
        </Link>
      </ChangeForm>
    </Container>
  );
}

const ChangeForm = styled.div`
  width: 50%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: 3px solid #777;
  outline-offset: -7px;

  @media only screen and (max-width: 992px) {
    width: 70%;
  }
  @media only screen and (max-width: 576px) {
    width: 90%;
    .display-4 {
      font-size: 2rem !important;
    }
  }
`;

const CustomContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
