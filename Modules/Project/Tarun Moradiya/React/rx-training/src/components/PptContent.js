import styled from "styled-components";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Card, Col } from "react-bootstrap";
import contentServices from "../services/ContentServices";
import loadingGif from "../images/gif/loading-arrow.gif";
import { AuthContext } from "../contexts/authContext";

export default function PptContent(props) {
  const [content, setContent] = useState({});
  const [contentName, setContentName] = useState("");
  const [editItem, setEditItem] = useState(false);
  const editField = useRef("");
  const { isAdminUser } = useContext(AuthContext);

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  const [loading, setLoading] = useState(false);

  //display form to edit techgroup name
  const handleEditBtn = async () => {
    await setContentName(content.contentName);
    await setEditItem(true);
    editField.current.focus();
  };

  //hide edit tech group form
  const handleEditBlur = () => {
    setEditItem(false);
    setContentName("");
  };

  //update content
  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await contentServices.updateContent(
      props.moduleId,
      props.topicId,
      content._id,
      { contentName }
    );
    setContent({ ...content, contentName: res.data.contentName });
    setEditItem(false);
    setLoading(false);
  };

  //handle delete content button
  const handleDeleteBtn = async () => {
    await setLoading(true);
    await props.deleteContent(content._id);
    setLoading(false);
  };

  if (loading) {
    return (
      <Card>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      </Card>
    );
  }
  return (
    <Col md="12" className="pb-3">
      <Card>
        {isAdminUser === true && (
          <Card.Header className="clearfix p-2">
            <button
              onClick={handleDeleteBtn}
              className="btn btn-danger float-right ml-2"
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              onClick={handleEditBtn}
              className="btn btn-primary float-right ml-2"
            >
              <i className="fas fa-pen"></i>
            </button>
          </Card.Header>
        )}
        <PptBox>
          <iframe
            src={content.contentUrl}
            frameBorder="0"
            width="1280"
            height="749"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </PptBox>
        <Card.Footer className="bg-white">
          {editItem ? (
            <form onSubmit={handleEdit} className="form-inline my-2 ">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  ref={editField}
                  value={contentName}
                  onChange={(e) => setContentName(e.target.value)}
                  onBlur={handleEditBlur}
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-warning">
                    Edit
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <Card.Title>{content.contentName}</Card.Title>
          )}
        </Card.Footer>
      </Card>
    </Col>
  );
}

const PptBox = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
