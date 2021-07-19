import React, { useState, useContext, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModuleContext } from "../contexts/moduleContext";
import { PlanContext } from "../contexts/planContext";

export default function AddModule(props) {
  const { addModule } = useContext(ModuleContext);
  const { addPlan } = useContext(PlanContext);

  const [display, setDisplay] = useState("");
  const [addDays, setAddDays] = useState(false);
  const [addTopics, setAddTopics] = useState(false);
  const inpRef = useRef("");

  const [name, setName] = useState("");
  const [moduleType, setModuleType] = useState("videos");
  const [days, setDays] = useState("");
  const [topics, setTopics] = useState("");

  useEffect(() => {
    console.log("add module rerendered");
  }, []);

  //set module form
  const handleModuleBtn = async () => {
    await setDisplay("module");
    inpRef.current.focus();
  };

  //set plan form
  const handlePlanBtn = async () => {
    await setDisplay("plan");
    inpRef.current.focus();
  };

  //add module
  const handleSubmitModule = async (e) => {
    e.preventDefault();
    await addModule(props.techId, name, moduleType, topics);
    setName("");
    props.handleClose();
  };

  //add plan
  const handleSubmitPlan = async (e) => {
    e.preventDefault();
    console.log(days);
    await addPlan(props.techId, name, days);
    setName("");
    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {display === "module"
            ? "Add Module"
            : display === "plan"
            ? "Add Plan"
            : "Select what to add"}
        </Modal.Title>
      </Modal.Header>
      <form
        onSubmit={
          display === "module"
            ? handleSubmitModule
            : display === "plan"
            ? handleSubmitPlan
            : props.handleClose
        }
      >
        <Modal.Body>
          <div className="clearfix">
            <Button
              variant="primary"
              type="button"
              onClick={handleModuleBtn}
              className="float-right mx-2"
            >
              Add Module
            </Button>
            <Button
              variant="primary"
              type="button"
              className="float-right mx-2"
              onClick={handlePlanBtn}
            >
              Add Plan
            </Button>
          </div>
          {display !== "" && (
            <>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  ref={inpRef}
                  required
                  placeholder={
                    display === "module"
                      ? "Enter Module Name"
                      : display === "plan"
                      ? "Enter Plan Name"
                      : ""
                  }
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {display === "module" && (
                <>
                  <fieldset
                    className="form-group"
                    onChange={(e) => setModuleType(e.target.value)}
                  >
                    <legend>What are you using this module for?</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          name="moduleType"
                          type="radio"
                          value="videos"
                          defaultChecked
                        />
                        videos
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          name="moduleType"
                          type="radio"
                          value="ppts"
                        />
                        ppts
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          name="moduleType"
                          type="radio"
                          value="others"
                        />
                        others
                      </label>
                    </div>
                  </fieldset>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={addTopics}
                        onChange={() => setAddTopics(!addTopics)}
                      />
                      Add Topics
                    </label>
                  </div>
                  {addTopics && (
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        cols="30"
                        rows="10"
                        value={topics}
                        onChange={(e) => setTopics(e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {display === "plan" && (
                <>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={addDays}
                        onChange={() => setAddDays(!addDays)}
                      />
                      Add Days
                    </label>
                  </div>
                  {addDays && (
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
                </>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={props.handleClose}>
            Close
          </Button>
          {display !== "" && (
            <Button variant="primary" type="submit">
              Add
            </Button>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  );
}
