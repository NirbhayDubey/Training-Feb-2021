import React, { useEffect, useState, useRef, useContext } from "react";
import Tech from "./Tech";
import loadingGif from "../images/gif/loading-arrow.gif";
import { TechContext } from "../contexts/techContext";
import { TechGroupContext } from "../contexts/techGroupContext";
import { AuthContext } from "../contexts/authContext";
import styled from "styled-components";

export default function TechGroup(props) {
  const [grpTechs, setGrpTechs] = useState([]);
  const [grp, setGrp] = useState(props.grp);

  const { isAdminUser } = useContext(AuthContext);

  const [addItem, setAddItem] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const addField = useRef("");
  const editField = useRef("");

  const [loading, setLoading] = useState(true);
  const [loadNew, setLoadNew] = useState(false);

  const { techName, setTechName, techs, addTech, loadingNewTech } =
    useContext(TechContext);

  const { grpName, setGrpName, updateTechGroup, deleteTechGroup } =
    useContext(TechGroupContext);

  //filter techs by grp
  const getData = async () => {
    try {
      const filteredTechs = techs.filter((tech) => tech.techGroup === grp._id);
      await setGrpTechs(filteredTechs);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, [techs]);

  //display form to add tech
  const handleAddBtn = async () => {
    await setAddItem(true);
    addField.current.focus();
  };

  //delete tech group
  const handleDeleteBtn = async () => {
    try {
      await setLoading(true);
      await deleteTechGroup(grp._id);
      await setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  //display form to edit techgroup name
  const handleEditBtn = async () => {
    await setGrpName(grp.name);
    await setEditItem(true);
    editField.current.focus();
  };

  //hide edit tech group form
  const handleEditBlur = () => {
    setEditItem(false);
    setGrpName("");
  };

  //hide add tech form
  const handleAddBlur = () => {
    setAddItem(false);
    setTechName("");
  };

  //update tech group
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await setEditItem(false);
      await setLoading(true);
      const updatedGrp = await updateTechGroup(grp._id);
      await setGrp(updatedGrp);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  //add new tech
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTech = await addTech(grp._id);
    await setAddItem(false);
  };

  if (!isAdminUser && grpTechs.length === 0) return null;

  if (loading) {
    return (
      <div className="col-md-4 my-3">
        <img src={loadingGif} alt="Loading..." className="img-fluid m-auto" />
      </div>
    );
  }

  return (
    <div className="col-md-6 col-lg-4 my-3">
      <StyledTechGroup className="shadow">
        <div
          id="box-header"
          className="card-header bg-info p-4 text-light font-weight-bold"
        >
          {editItem ? (
            <form onSubmit={handleEdit} className="form-inline my-2 ">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  ref={editField}
                  value={grpName}
                  onChange={(e) => setGrpName(e.target.value)}
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
              <h4 className="d-inline-block">{grp.name}</h4>
              {isAdminUser === true && (
                <>
                  <button
                    className="btn btn-warning float-right ml-2"
                    onClick={handleAddBtn}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-danger float-right ml-2"
                    onClick={handleDeleteBtn}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-primary float-right ml-2"
                    onClick={handleEditBtn}
                  >
                    <i className="fas fa-pen"></i>
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div id="box-body" className="card-body bg-info">
          <ul className="list-group">
            {grpTechs.map((tech) => (
              <Tech key={`${tech._id}${tech.name}`} tech={tech} />
            ))}
            {loadingNewTech.load && loadingNewTech.id === grp._id && (
              <img
                src={loadingGif}
                alt="Loading..."
                className="img-fluid m-auto"
              />
            )}
            {addItem ? (
              <li className="list-group-item bg-light border-info">
                <form onSubmit={handleSubmit} className="form-inline">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Enter Tech Name"
                      className="form-control"
                      ref={addField}
                      value={techName}
                      onChange={(e) => setTechName(e.target.value)}
                      onBlur={handleAddBlur}
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-warning">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            ) : null}
          </ul>
        </div>
      </StyledTechGroup>
    </div>
  );
}

const StyledTechGroup = styled.div`
  outline: 3px solid #fff;
  outline-offset: -7px;
  #box-header {
    outline: 1px solid #fff;
    outline-offset: -7px;
    border: none;
  }
`;
