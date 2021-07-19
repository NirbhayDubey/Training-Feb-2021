import React, { useContext, useState } from "react";
import { Container, Form, Button, Alert, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const [bool, setBool] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logged = await login(credentials);
    if (!logged) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else history.push("/");
  };

  return (
    <CustomContainer>
      <LoginForm className="bg-info text-light clearfix">
        <h1 className="display-4">Login</h1>
        <hr />
        {showAlert && (
          <Alert variant="danger" className="text-capitalize">
            UserName or Password is Incorrect
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={credentials.email}
              required
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                required
                type={bool ? "text" : "password"}
                className="border-right-0"
                placeholder="Enter Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <InputGroup.Append>
                {bool ? (
                  <InputGroup.Text
                    id="eye"
                    className="bg-white border-left-0"
                    onClick={() => setBool(false)}
                  >
                    <i className="fas fa-eye"></i>
                  </InputGroup.Text>
                ) : (
                  <InputGroup.Text
                    id="eye-slash"
                    className="bg-white border-left-0"
                    onClick={() => setBool(true)}
                  >
                    <i className="fas fa-eye-slash"></i>
                  </InputGroup.Text>
                )}
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Button variant="light" className="btn-block btn-lg" type="submit">
            Submit
          </Button>
        </Form>
        <hr />
        <Link
          to="/forgot-password"
          className="text-capitalize text-light float-right"
        >
          forgot password?
        </Link>
      </LoginForm>
    </CustomContainer>
  );
}

const CustomContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.div`
  width: 35%;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: 3px solid white;
  outline-offset: -7px;

  @media only screen and (max-width: 992px) {
    width: 60%;
  }
  @media only screen and (max-width: 576px) {
    width: 90%;
  }
`;
