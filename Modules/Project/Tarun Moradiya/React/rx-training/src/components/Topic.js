import React, { useState, useEffect, useRef, useContext } from "react";
import { Card, Col, Row, ProgressBar } from "react-bootstrap";
import Content from "./Content";
import FileContent from "./FileContent";
import PptContent from "./PptContent";
import loadingGif from "../images/gif/loading-arrow.gif";
import contentServices from "../services/ContentServices";
import topicServices from "../services/TopicServicees";
import AddContent from "./AddContent";
import UpdateTopic from "./UpdateTopic";
import _ from "lodash";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { AuthContext } from "../contexts/authContext";
import { ModuleContext } from "../contexts/moduleContext";

import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_ENDPOINT;

export default function Topic(props) {
  const [contents, setContents] = useState([]);
  const [topic, setTopic] = useState({});

  const { isAdminUser } = useContext(AuthContext);
  const { uploadedMsg, progressMsg } = useContext(ModuleContext);

  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const inpRef = useRef("");
  const updateRef = useRef("");

  const [loading, setLoading] = useState(false);
  const [loadingNew, setLoadingNew] = useState(false);
  const [loadingName, setLoadingName] = useState(false);

  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);

  const [editItem, setEditItem] = useState(false);
  const editField = useRef("");
  const [topicName, setTopicName] = useState("");

  const [progress, setProgress] = useState([]);

  //display form to edit topic name
  const handleEditBtn = async () => {
    await setTopicName(topic.topic);
    await setEditItem(true);
    editField.current.focus();
  };

  //hide edit topic name form
  const handleEditBlur = () => {
    setEditItem(false);
    setTopicName("");
  };

  //update topicName
  const handleEdit = async (e) => {
    e.preventDefault();
    setLoadingName(true);
    const res = await topicServices.updateTopic(props.module._id, topic._id, {
      topic: topicName,
    });
    console.log(res.data);
    setTopic({ ...topic, topic: res.data.topic });
    setEditItem(false);
    setLoadingName(false);
  };

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayAddForm(false);
  };

  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setDisplayUpdateForm(false);
  };

  const handleShow = async () => {
    await setDisplayAddForm(true);
    await setShow(true);
    inpRef.current.focus();
  };

  const handleShowUpdate = async () => {
    await setDisplayUpdateForm(true);
    await setShowUpdate(true);
    updateRef.current.focus();
  };

  //update topic
  const handleUpdate = async (topicName, topicContents) => {
    const newTopic = { topic: topicName, contents: topicContents };
    await setLoadingNew(true);
    const data = await topicServices.createContent(
      props.module._id,
      topic._id,
      newTopic
    );
    setShow(false);
    setDisplayAddForm(false);
    setLoadingNew(false);
  };

  //add content
  const addContent = async (newContent) => {
    setShow(false);
    await setLoadingNew(true);
    const res = await contentServices.createContent(
      props.module._id,
      topic._id,
      newContent
    );
    if (res.data) setContents((contents) => [...contents, res.data]);
    setDisplayAddForm(false);
    setLoadingNew(false);
  };

  //delete content
  const deleteContent = async (contentId) => {
    await contentServices.deleteContent(props.module._id, topic._id, contentId);
    const filteredContents = contents.filter(
      (content) => content._id !== contentId
    );
    setContents(filteredContents);
  };

  useEffect(() => {
    setTopic(props.topic);
    setContents(props.topic.contents);
    setLoading(false);

    const socket = socketIOClient(ENDPOINT);

    socket.on("uploaded", (data) => {
      console.log(data);
      if (data.topicId === props.topic._id) {
        console.log("uploaded received...");
        setLoadingNew(true);
        //add new content
        setContents((contents) => [...contents, data.newContent]);
        setTopic((topic) => ({
          ...topic,
          contents: [...contents, data.newContent],
        }));
        setLoadingNew(false);
      }
    });

    socket.on("progress", (data) => {
      console.log(data);
      console.log(data);
      if (data.topicId === props.topic._id) {
        console.log("progress received...");
        // setLoadingNew(true);
        const arrayUnion = (arr1, arr2, identifier) => {
          const array = [...arr1, ...arr2];

          return _.uniqBy(array, identifier);
        };

        setProgress((progress) => arrayUnion(progress, [data], "progressId"));
        if (data.progressVal === 100) {
          setTimeout(() => {
            setLoadingNew(true);
            setProgress((progress) =>
              progress.filter((prog) => prog.progressId !== data.progressId)
            );
            setLoading(false);
          }, 1000);
        }
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [props]);

  // useEffect(() => {
  //   const data = uploadedMsg;
  //   console.log(data);
  //   if (data.topicId === props.topic._id) {
  //     console.log("uploaded received...");
  //     topicServices.getTopicById(props.module._id, topic._id).then((res) => {
  //       setLoadingNew(true);
  //       //add new content
  //       setContents(res.data.contents);
  //       setTopic(res.data);
  //       setLoadingNew(false);
  //     });
  //   }
  // }, [uploadedMsg]);

  // useEffect(() => {
  //   const data = progressMsg;
  //   console.log(data);
  //   if (data.topicId === props.topic._id) {
  //     console.log("progress received...");
  //     // setLoadingNew(true);
  //     const arrayUnion = (arr1, arr2, identifier) => {
  //       const array = [...arr1, ...arr2];

  //       return _.uniqBy(array, identifier);
  //     };

  //     setProgress((progress) => arrayUnion(progress, [data], "progressId"));
  //     if (data.progressVal === 100) {
  //       setTimeout(() => {
  //         setLoadingNew(true);
  //         setProgress((progress) =>
  //           progress.filter((prog) => prog.progressId !== data.progressId)
  //         );
  //       }, 3000);
  //     }
  //   }
  // }, [progressMsg]);

  if (loading) {
    return (
      <Card.Body>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block m-auto"
        />
      </Card.Body>
    );
  }

  return (
    <Card.Body className="border my-2 shadow">
      <div className="clearfix p-2">
        {isAdminUser === true && (
          <>
            <button
              className="btn btn-warning float-right ml-2"
              onClick={handleShow}
            >
              <i className="fas fa-plus"></i>
            </button>
            {displayAddForm && (
              <AddContent
                id="add-tech-type"
                inpRef={inpRef}
                show={show}
                handleClose={handleClose}
                add={addContent}
              />
            )}
            <button
              onClick={() => props.deleteTopic(topic._id)}
              className="btn btn-danger float-right ml-2"
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              onClick={handleShowUpdate}
              className="btn btn-primary float-right ml-2"
            >
              <i className="fas fa-pen"></i>
            </button>
          </>
        )}
        {displayUpdateForm && (
          <UpdateTopic
            id="add-tech-type"
            topicRef={updateRef}
            show={showUpdate}
            handleClose={handleCloseUpdate}
            update={handleUpdate}
            topic={topic}
          />
        )}
        <h1 className="display-4">{topic.topic}</h1>
        {/* )} */}
      </div>
      <hr />
      <Row>
        {props.module.moduleType === "videos"
          ? contents.map((content) => (
              <Content
                key={content._id}
                content={content}
                topicId={topic._id}
                moduleId={props.module._id}
                deleteContent={deleteContent}
              />
            ))
          : props.module.moduleType === "others"
          ? contents.map((content) => (
              <FileContent
                key={content._id}
                content={content}
                topicId={topic._id}
                moduleId={props.module._id}
                deleteContent={deleteContent}
              />
            ))
          : props.module.moduleType === "ppts"
          ? contents.map((content) => (
              <PptContent
                key={content._id}
                content={content}
                topicId={topic._id}
                moduleId={props.module._id}
                deleteContent={deleteContent}
              />
            ))
          : null}
        {progress.length > 0 &&
          progress.map((prog) => (
            <Col md="4" key={`${prog.progressVal}${prog.progressId}`}>
              <CircularProgressbar
                value={prog.progressVal}
                text={`${prog.progressVal}%`}
              />
            </Col>
          ))}
        {loadingNew && (
          <Col md="4">
            <img
              src={loadingGif}
              alt="Loading..."
              className="img-fluid d-block m-auto"
            />
          </Col>
        )}
      </Row>
    </Card.Body>
  );
}
