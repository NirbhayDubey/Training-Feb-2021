import React, { useState, useEffect, useRef, useContext } from "react";
import { Accordion, Card, Col } from "react-bootstrap";
import contextServices from "../services/ContextServices";
import AddContext from "./AddContext";
import loadingGif from "../images/gif/loading-arrow.gif";
import { AuthContext } from "../contexts/authContext";

export default function Context(props) {
  const [context, setContext] = useState({});
  const { isAdminUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const inpRef = useRef("");
  const [loading, setLoading] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);

  useEffect(() => {
    setContext(props.context);
  }, [props]);

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayUpdateForm(false);
  };

  const handleShow = async () => {
    await setDisplayUpdateForm(true);
    await setShow(true);
    inpRef.current.focus();
  };

  //update context
  const updateContext = async (newContext) => {
    await setShow(false);
    setLoading(true);
    const res = await contextServices.updateContext(
      props.planId,
      props.dayId,
      context._id,
      newContext
    );
    setContext(res.data);
    setDisplayUpdateForm(false);
    setLoading(false);
  };

  //handle delete context button
  const handleDeleteBtn = async () => {
    await setLoading(true);
    await props.deleteContext(context._id);
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
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={context._id}
        className="clearfix ac-toggle p-2 pl-4 bg-light text-primary text-weight-bold"
      >
        {isAdminUser === true && (
          <>
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
          <AddContext
            id="add-tech-type"
            inpRef={inpRef}
            show={show}
            handleClose={handleClose}
            add={updateContext}
            context={context}
          />
        )}
        <Card.Title>{context.context}</Card.Title>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={context._id}>
        <p style={{whiteSpace: 'pre-line'}} className="lead p-3">{context.description}</p>
      </Accordion.Collapse>
    </Card>
  );
}
