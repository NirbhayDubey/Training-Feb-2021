import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from "lodash";

export default function AddDay(props) {
  const [day, setDay] = useState({ day: "", contexts: [] });

  useEffect(() => {
    console.log("add day rerendered");
    if (props.day) {
      setDay({
        day: props.day.day ? props.day.day : "",
        contexts: props.day.contexts
          ? JSON.stringify(
              props.day.contexts.map((context) => _.omit(context, "_id"))
            )
          : [],
      });
    }
  }, [props]);

  //add new tech group
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(day.day);
    console.log(day.contexts);
    await props.add(day);
    setDay({ day: "", contexts: [] });
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Day</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="day">day</label>
            <input
              type="text"
              ref={props.inpDayRef}
              value={day.day}
              className="form-control"
              onChange={(e) => setDay({ ...day, day: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contexts">contexts</label>
            <textarea
              className="form-control"
              value={day.contexts}
              onChange={(e) => setDay({ ...day, contexts: e.target.value })}
              multiple
              required
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
