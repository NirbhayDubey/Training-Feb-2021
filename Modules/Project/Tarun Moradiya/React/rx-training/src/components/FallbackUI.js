import { Spinner } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

export default function FallbackUI() {
  return (
    <FallbackContainer>
      <Spinner animation="grow" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </FallbackContainer>
  );
}

const FallbackContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
