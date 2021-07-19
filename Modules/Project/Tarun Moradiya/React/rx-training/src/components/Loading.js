import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="mx-5">
      <Spinner animation="grow" />
      <Spinner animation="grow" size="sm" />
    </div>
  );
}
