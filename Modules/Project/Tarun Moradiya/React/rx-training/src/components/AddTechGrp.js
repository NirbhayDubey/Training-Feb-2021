import React, { useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { TechGroupContext } from "../contexts/techGroupContext";

export default function AddTechGrp(props) {
  const { grpName, setGrpName, addTechGroup } = useContext(TechGroupContext);
  useEffect(() => console.log("add tech group rerenderd"), []);
  //add new tech group
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setShow(false);
    await addTechGroup();
    props.setShowForm(false);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Tech-Group</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              ref={props.inpRef}
              placeholder="Enter Name"
              className="form-control"
              value={grpName}
              onChange={(e) => setGrpName(e.target.value)}
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
