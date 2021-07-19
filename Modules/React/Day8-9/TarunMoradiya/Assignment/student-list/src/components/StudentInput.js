import React from "react";

export default function StudentInput({
  firstName,
  lastName,
  img,
  collegeName,
  collegeLogo,
  handleChange,
  handleSubmit,
  editItem,
}) {
  return (
    <div className="p-3" id="student-inp">
      <h3 className="text-capitalize">student input</h3>
      <div className="card card-body">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="firstName" className="text-capitalize">
              first name
            </label>
            <input
              type="text"
              id="inp"
              value={firstName}
              name="firstName"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="text-capitalize">
              last name
            </label>
            <input
              type="text"
              value={lastName}
              name="lastName"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <div className="form-group">
            <label htmlFor="img" className="text-capitalize">
              image
            </label>
            <input
              type="file"
              value={img.path ? img.path : ""}
              name="img"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <div className="form-group">
            <label htmlFor="collegeName" className="text-capitalize">
              college name
            </label>
            <input
              type="text"
              value={collegeName}
              name="collegeName"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <div className="form-group">
            <label htmlFor="collegeLogo" className="text-capitalize">
              college logo
            </label>
            <input
              type="file"
              value={collegeLogo.path ? collegeLogo.path : ""}
              name="collegeLogo"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <button
            type="submit"
            className={
              editItem ? "btn btn-info btn-block" : "btn btn-primary btn-block"
            }
          >
            {editItem ? "edit student" : "add student"}
          </button>
        </form>
      </div>
    </div>
  );
}
