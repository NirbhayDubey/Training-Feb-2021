import React from "react";

const CardItem = ({ children, item, handleEdit, handleDelete }) => {
  const {
    id,
    Img,
    Logo,
    firstName,
    lastName,
    enrollNumber,
    Gender,
    DOB,
    placeOfBirth,
    collegeName,
    Location,
  } = item;
  return (
    <div className="m-3 col-12 col-sm-6 col-md-4" style={{ width: "20rem" }}>
      <div className="card-body bg-dark mb-0">
        <div className="imges m-2">
          <img
            className="rounded-circle bg-light"
            id="p1"
            width="80"
            heigth="80"
            src={Img}
            alt="student img"
            style={{ marginRight: "80px" }}
          />
          <img
            className="img-fulid"
            id="p2"
            width="80"
            src={Logo}
            alt="college logo"
          />
        </div>
        <div className="text-center text-primary">{children}</div>
        <ul className="list-group list-group-flush text-dark">
          <li className="list-group-item border border-info">
            EnrollNumber : {enrollNumber}
          </li>
          <li className="list-group-item border border-info">
            Name : {firstName + " " + lastName}
          </li>
          <li className="list-group-item border border-info">
            Date Of Birth : {DOB}
          </li>
          <li className="list-group-item border border-info">
            place Of Birth : {placeOfBirth}
          </li>
          <li className="list-group-item border border-info">
            gender : {Gender}
          </li>
          <li className="list-group-item border border-info">
            CollegeName : {collegeName}
          </li>
          <li className="list-group-item border border-info">
            Location : {Location}
          </li>
        </ul>
      </div>

      <div className="card-footer bg-primary">
        <button
          type="button"
          class="btn btn-danger my-3 ml-2"
          onClick={() => handleDelete(id)}
          style={{ marginRight: "50px" }}
        >
          Delete Data
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleEdit(id)}
        >
          Edit Data
        </button>
      </div>
    </div>
  );
};

export default CardItem;
