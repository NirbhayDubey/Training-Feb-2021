import React, { useState, useEffect, useRef, useContext } from "react";
import { Accordion, Card, Row } from "react-bootstrap";
import AddDay from "./AddDay";
import Context from "./Context";
import dayServices from "../services/DayServices";
import loadingGif from "../images/gif/loading-arrow.gif";
import AddContext from "./AddContext";
import contextServices from "../services/ContextServices";
import _ from "lodash";
import { AuthContext } from "../contexts/authContext";

export default function Day(props) {
  const [contexts, setContexts] = useState([]);
  const [day, setDay] = useState({});
  const [firstChild, setFirstChild] = useState("");
  const { isAdminUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [showContext, setShowContext] = useState(false);

  const inpRef = useRef("");
  const inpContextRef = useRef("");

  const [loading, setLoading] = useState(false);
  const [loadingNew, setLoadingNew] = useState(false);

  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayUpdateForm(false);
  };

  const handleCloseContext = () => {
    setShowContext(false);
    setDisplayAddForm(false);
  };

  const handleShow = async () => {
    await setDisplayUpdateForm(true);
    await setShow(true);
    inpRef.current.focus();
  };

  const handleShowContext = async () => {
    await setDisplayAddForm(true);
    await setShowContext(true);
    inpContextRef.current.focus();
  };

  useEffect(() => {
    setDay(props.day);
    setContexts(props.day.contexts);
    setFirstChild(props.day.contexts[0]._id);
  }, [props]);

  //update day
  const updateDay = async (newDay) => {
    await setShow(false);
    setLoading(true);
    const res = await dayServices.updateday(props.planId, day._id, newDay);
    setDay(res.data);
    props.updateDay(res.data);
    setDisplayUpdateForm(false);
    setLoading(false);
  };

  //add context
  const addContext = async (newContext) => {
    await setShowContext(false);
    setLoadingNew(true);
    const res = await contextServices.createContext(
      props.planId,
      day._id,
      newContext
    );
    setContexts([...contexts, res.data]);
    setDisplayUpdateForm(false);
    setLoadingNew(false);
  };

  //handle delete day button
  const handleDeleteBtn = async () => {
    await setLoading(true);
    await props.deleteDay(day._id);
    setLoading(false);
  };

  //delete context
  const deleteContext = async (contextId) => {
    await contextServices.deleteContext(props.planId, day._id, contextId);
    const filteredContexts = contexts.filter(
      (context) => context._id !== contextId
    );
    setContexts(filteredContexts);
  };

  if (loading) {
    return (
      <Card.Body>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      </Card.Body>
    );
  }
  console.log(firstChild);
  return (
    <Card.Body className="border my-2 shadow outline" id={day._id}>
      <div className="clearfix p-2">
        {isAdminUser === true && (
          <>
            <button
              className="btn btn-warning float-right ml-2"
              onClick={handleShowContext}
            >
              <i className="fas fa-plus"></i>
            </button>
            {displayAddForm && (
              <AddContext
                id="add-tech-type"
                inpRef={inpContextRef}
                show={showContext}
                handleClose={handleCloseContext}
                add={addContext}
              />
            )}
            <button
              onClick={handleDeleteBtn}
              className="btn btn-danger float-right ml-2"
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              onClick={handleShow}
              className="btn btn-primary float-right ml-2"
            >
              <i className="fas fa-pen"></i>
            </button>
          </>
        )}
        {displayUpdateForm && (
          <AddDay
            id="add-tech-type"
            inpDayRef={inpRef}
            show={show}
            handleClose={handleClose}
            add={updateDay}
            day={day}
          />
        )}
        <h1 className="display-4">{day.day}</h1>
      </div>
      <hr />
      <Accordion className="accordion" defaultActiveKey={firstChild}>
        {contexts.map((context) => (
          <Context
            key={context._id}
            deleteContext={deleteContext}
            context={context}
            dayId={day._id}
            planId={props.planId}
          />
        ))}
        {loadingNew && (
          <Card>
            <img
              src={loadingGif}
              alt="Loading..."
              className="img-fluid d-block mx-auto"
            />
          </Card>
        )}
      </Accordion>
    </Card.Body>
  );
}
