import React from "react";

export default function Student({
  firstName,
  lastName,
  img,
  collegeName,
  collegeLogo,
  handleDelete,
  handleEdit,
}) {
  return (
    <li className="list-group-item">
      <div className="card p-3">
        <div className="card-header bg-white">
          <button
            style={{ background: "#fff" }}
            className="text-danger float-right btn"
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            style={{ background: "#fff" }}
            className="text-warning float-right btn"
            onClick={handleEdit}
            type="reset"
          >
            <i className="fas fa-pen"></i>
          </button>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={img} alt="student" className="card-img-top student-img" />
            <div className="card-text lead text-capitalize text-center">
              {`${firstName} ${lastName}`}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={collegeLogo} alt="college" className="college-img" />
            <div className="card-text lead text-capitalize">{collegeName}</div>
          </div>
        </div>
      </div>
    </li>
  );
}
