import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { DepartmentContext } from "../contexts/deptContext";

export default function AddDepartment() {
  const [name, setName] = useState("");
  const { inpRef, show, handleClose, addDept } = useContext(DepartmentContext);

  useEffect(() => {
    console.log("add department rerenderd");
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Department</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addDept(name);
        }}
      >
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={inpRef}
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleClose}>
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
