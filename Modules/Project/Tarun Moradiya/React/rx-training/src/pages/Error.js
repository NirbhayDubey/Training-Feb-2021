import React, { useContext, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Container>
      <ErrorBox className="bg-danger text-light p-5">
        <h1 className="display-4 text-capitalize">oops!!!</h1>
        <h1 className="display-4 text-capitalize">no page found...</h1>
        <hr />
        <Link to="/" className="text-capitalize text-light font-weight-bold">
          Back to homepage
        </Link>
      </ErrorBox>
    </Container>
  );
}

const ErrorBox = styled.div`
  width: 50%;
  margin: 10rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: 3px solid white;
  outline-offset: -7px;
`;
