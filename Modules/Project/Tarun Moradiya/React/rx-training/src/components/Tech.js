import React, { useRef, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import loadingGif from "../images/gif/loading-arrow.gif";
import { TechContext } from "../contexts/techContext";
import AddModule from "./AddModule";
import { AuthContext } from "../contexts/authContext";
import { Button } from "react-bootstrap";
import { ModuleContext } from "../contexts/moduleContext";

export default function Tech(props) {
  const [editItem, setEditItem] = useState(false);
  const editField = useRef("");
  const [loading, setLoading] = useState(false);
  const [tech, setTech] = useState(props.tech);
  const { isAdminUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { modules } = useContext(ModuleContext);
  const history = useHistory();
  const { techName, setTechName, updateTech, deleteTech } =
    useContext(TechContext);

  //show and hide modal
  const handleClose = () => {
    setShowForm(false);
    setShow(false);
  };
  const handleShow = async () => {
    await setShowForm(true);
    await setShow(true);
  };

  //delete tech
  const handleDeleteBtn = async () => {
    await setLoading(true);
    await deleteTech(tech._id);
    await setLoading(false);
  };

  //show edit tech form
  const handleEditBtn = async () => {
    setTechName(tech.name);
    await setEditItem(true);
    editField.current.focus();
  };

  //hide edit tech form
  const handleEditBlur = () => {
    setEditItem(false);
    setTechName("");
  };

  //edit tech
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await setLoading(true);
      const updatedTech = await updateTech(tech._id);
      await setTech(updatedTech);
      await setEditItem(false);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getModule = async () => {
    const firstModule = modules.find((module) => module.tech === tech._id);
    if (!firstModule) history.push("error");
    else history.push("/modules/" + firstModule._id);
  };

  if (loading) {
    return (
      <li className="list-group-item">
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid m-auto h-100"
        />
      </li>
    );
  }

  return (
    <li className="list-group-item bg-light border-info">
      {editItem ? (
        <form onSubmit={handleEdit} className="form-inline my-2 ">
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control"
              ref={editField}
              value={techName}
              onChange={(e) => setTechName(e.target.value)}
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
        <>
          <a
            style={{ cursor: "pointer" }}
            onClick={getModule}
            className="list-group-item-action text-info"
          >
            {tech.name}
          </a>
          {isAdminUser === true && (
            <>
              <button
                onClick={handleShow}
                className="btn btn-warning float-right ml-2"
              >
                <i className="fas fa-plus"></i>
              </button>
              {showForm && (
                <AddModule
                  id="add-tech-type"
                  show={show}
                  handleClose={handleClose}
                  techId={tech._id}
                />
              )}
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
            </>
          )}
        </>
      )}
    </li>
  );
}
