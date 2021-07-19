import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from "lodash";

export default function UpdateModule(props) {
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const [updateData, setUpdateData] = useState(false);

  useEffect(() => {
    console.log("update module rendered");
    setName(props.plan.name);
    const newDays = props.plan.days.map((day) => _.omit(day, "_id"));
    setDays(
      JSON.stringify(
        newDays.map((day) => ({
          ...day,
          contexts: day.contexts.map((context) => _.omit(context, "_id")),
        }))
      )
    );
  }, [props.plan]);

  //add new tech group
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    await props.update(name, days);
    setName("");
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Plan</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              ref={props.inpRef}
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value={updateData}
                onChange={() => setUpdateData(!updateData)}
              />
              update days
            </label>
          </div>
          {updateData && (
            <div className="form-group">
              <textarea
                className="form-control"
                cols="30"
                rows="10"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
          )}
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
