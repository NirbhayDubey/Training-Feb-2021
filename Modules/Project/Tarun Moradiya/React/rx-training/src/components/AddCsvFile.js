import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { DepartmentContext } from "../contexts/deptContext";
import { UserContext } from "../contexts/userContext";

export default function AddCsvFile(props) {
  const [csvFile, setCsvFile] = useState();

  useEffect(() => {
    console.log("add users rerenderd");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.func(csvFile);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="csv">add file</label>
            <input
              id="csv"
              name="csv"
              type="file"
              className="form-control"
              onChange={(e) => setCsvFile(e.target.files[0])}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
