import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from "lodash";

export default function Addcontext(props) {
  const [context, setContext] = useState({ context: "", description: "" });

  useEffect(() => {
    console.log("add context rerendered");
    if (props.context) {
      setContext({
        context: props.context.context ? props.context.context : "",
        description: props.context.description ? props.context.description : "",
      });
    }
  }, [props]);

  //add new tech group
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(context.context);
    console.log(context.description);
    await props.add(context);
    setContext({ context: "", description: "" });
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add context</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="context">context</label>
            <input
              type="text"
              ref={props.inpRef}
              value={context.context}
              className="form-control"
              onChange={(e) =>
                setContext({ ...context, context: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <textarea
              className="form-control"
              value={context.description}
              onChange={(e) =>
                setContext({ ...context, description: e.target.value })
              }
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
