import React, { useState, useContext, useRef } from "react";
import AddTechGrp from "../components/AddTechGrp";
import TechGroup from "../components/TechGroup";
import loadingGif from "../images/gif/loading-arrow.gif";
import { TechGroupContext } from "../contexts/techGroupContext";
import { AuthContext } from "../contexts/authContext";

export default function Home() {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const inpRef = useRef("");
  const { techGroups, loadingTechGrps, loadingNewTechGrps } =
    useContext(TechGroupContext);
  const { isAdminUser } = useContext(AuthContext);

  //show and hide modal
  const handleClose = () => {
    setShowForm(false);
    setShow(false);
  };
  const handleShow = async () => {
    await setShowForm(true);
    await setShow(true);
    inpRef.current.focus();
  };

  if (loadingTechGrps) {
    return (
      <div className="container">
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block m-auto"
        />
      </div>
    );
  }
  return (
    <div className="container my-5">
      {isAdminUser === true && (
        <div className="clearfix p-2">
          <button
            className="btn btn-warning float-right ml-2"
            onClick={handleShow}
          >
            <i className="fas fa-plus"></i>
          </button>
          {showForm && (
            <AddTechGrp
              id="add-tech-type"
              inpRef={inpRef}
              setShow={setShow}
              setShowForm={setShowForm}
              show={show}
              handleClose={handleClose}
            />
          )}
        </div>
      )}
      <div className="row">
        {techGroups.map((grp) => (
          <TechGroup key={grp._id} grp={grp} />
        ))}
        {loadingNewTechGrps && (
          <img src={loadingGif} alt="Loading..." className="img-fluid" />
        )}
      </div>
    </div>
  );
}
