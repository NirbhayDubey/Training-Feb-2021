import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AddTopic(props) {
  const [topic, setTopic] = useState({ topic: "", contents: [] });
  const [choice, setChoice] = useState("files");
  useEffect(() => console.log("add tech group rerenderd"), []);

  const handleChange = (e) => {
    const nam = e.target.name;
    let val = e.target.value;

    if (e.target.type === "file") {
      val = e.target.files;
      console.log(val);
    }

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
    if (typeof topic.contents === "object") {
      for (const key of Object.keys(topic.contents)) {
        formData.append("contents", topic.contents[key]);
      }
    } else if (typeof topic.contents === "string") {
      formData.append("contents", topic.contents);
    }

    console.log(formData);
    await props.add(formData);
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
          <fieldset
            className="form-group"
            onChange={(e) => setChoice(e.target.value)}
          >
            <legend>Upload files or provide url?</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="moduleType"
                  type="radio"
                  value="files"
                  defaultChecked
                />
                files
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="moduleType"
                  type="radio"
                  value="urls"
                />
                urls
              </label>
            </div>
          </fieldset>
          {choice === "files" ? (
            <div className="form-group">
              <label htmlFor="contents">Contents</label>
              <input
                type="file"
                id="contents"
                name="contents"
                className="form-control"
                onChange={handleChange}
                multiple
              />
            </div>
          ) : choice === "urls" ? (
            <div className="form-group">
              <textarea
                id="contents"
                name="contents"
                className="form-control"
                cols="30"
                rows="10"
                value={topic.contents}
                onChange={handleChange}
              />
            </div>
          ) : null}
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
