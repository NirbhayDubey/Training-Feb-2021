import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from "lodash";

export default function Addcontent(props) {
  const [content, setContent] = useState({ content: "", contentName: "" });
  const [choice, setChoice] = useState("files");

  useEffect(() => {
    console.log("add content rerendered");
    if (props.content) {
      setContent({
        content: props.content.content ? props.content.content : "",
        contentFile: props.content.contentFile ? props.content.contentFile : "",
      });
    }
  }, [props]);

  //add new tech group
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(content.content);
    console.log(content.contentFile);
    const formData = new FormData();
    await formData.append("contentName", content.contentName);
    formData.append("content", content.content);

    console.log(formData);
    await props.add(formData);
    setContent({ content: "", contentFile: "" });
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add content</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="content">content name</label>
            <input
              type="text"
              ref={props.inpRef}
              value={content.contentName}
              className="form-control"
              onChange={(e) =>
                setContent({ ...content, contentName: e.target.value })
              }
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
              <label htmlFor="contents">Content</label>
              <input
                type="file"
                id="content"
                name="content"
                className="form-control"
                onChange={(e) =>
                  setContent({ ...content, content: e.target.files[0] })
                }
                required
              />
            </div>
          ) : choice === "urls" ? (
            <div className="form-group">
              <label htmlFor="content">contentUrl</label>
              <input
                className="form-control"
                type="text"
                value={content.content}
                onChange={(e) =>
                  setContent({ ...content, content: e.target.value })
                }
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
