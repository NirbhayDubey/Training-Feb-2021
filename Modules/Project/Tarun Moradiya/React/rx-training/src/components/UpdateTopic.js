import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from "lodash";

export default function AddTopic(props) {
  const [topic, setTopic] = useState({ topic: "", contents: "" });
  const [updateData, setUpdateData] = useState(false);

  useEffect(() => {
    console.log("update topic rerendered");
    if (props.topic) {
      setTopic({
        topic: props.topic.topic ? props.topic.topic : "",
        contents: props.topic.contents
          ? JSON.stringify(
              props.topic.contents.map((content) => _.omit(content, "_id"))
            )
          : [],
      });
    }
  }, [props]);

  const handleChange = (e) => {
    const nam = e.target.name;
    let val = e.target.value;

    setTopic((topic) => ({
      ...topic,
      [nam]: val,
    }));
  };

  //add new tech group
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(topic.topic);
    console.log(topic.contents);
    const formData = new FormData();
    await formData.append("topic", topic.topic);
    formData.append("contents", topic.contents);

    console.log(formData);
    await props.update(formData);
    setTopic({ topic: "", contents: [] });
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Name</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
              name="topic"
              ref={props.topicRef}
              value={topic.topic}
              className="form-control"
              onChange={handleChange}
              required
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
              update contents
            </label>
          </div>
          {updateData && (
            <div className="form-group">
              <label htmlFor="contents">Contents</label>
              <textarea
                className="form-control"
                id="contents"
                name="contents"
                cols="30"
                rows="10"
                value={topic.contents}
                onChange={handleChange}
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
