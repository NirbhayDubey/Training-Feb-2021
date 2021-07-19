import React, { useContext, useState } from "react";
import { Button, Card, Container, Alert } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import styled from "styled-components";
import authServices from "../services/AuthServices";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await authServices.recover({ email });
    setShow(true);
    setMsg(res.data.msg);
  };
  return (
    <CustomContainer>
      <ForgotPass className="bg-danger clearfix">
        <h1 className="display-4">Forgot Password</h1>
        <hr />
        <form onSubmit={handleSubmit} className="font-weight-bold">
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              className="form-control bg-danger border-dark text-dark font-weight-bold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            variant="dark"
            type="submit"
            className="btn-block font-weight-bold"
          >
            Send Email
          </Button>
        </form>
        <hr />
        <Link
          to="/login"
          className="text-capitalize text-dark font-weight-bold float-right"
        >
          back to login
        </Link>
      </ForgotPass>
      {show && (
        <CustomAlert>
          <Alert
            className="text-capitalize shadow"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            {msg}
          </Alert>
        </CustomAlert>
      )}
    </CustomContainer>
  );
}

const ForgotPass = styled.div`
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

const CustomAlert = styled.div`
  position: fixed;
  top: 2rem;
  div {
    outline: 3px solid #f6f6f6;
    outline-offset: -7px;
  }
`;

const CustomContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
