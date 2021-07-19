import React from "react";

const FormInput = ({
  student,
  handleChange,
  handleSubmit,
  handleImg1,
  handleLogo2,
  editItem,
}) => {
  const {
    firstName,
    lastName,
    enrollNumber,
    DOB,
    placeOfBirth,
    collegeName,
    Location,
  } = student;
  return (
    <div className="card card-body bg-light my-3">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label
            for="inputer"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            enrollNumber :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="number"
              name="enrollNumber"
              value={enrollNumber}
              className="form-control text-capitalize"
              placeholder="Enter Your Enroll Number"
              onChange={handleChange}
              id="inputer"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="inputfname"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            FirstName :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control text-capitalize"
              placeholder="Enter Your firstName"
              onChange={handleChange}
              id="inputfname"
              noValidate
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="inputlname"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            LastName :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="form-control text-capitalize"
              placeholder="Enter Your lastName"
              onChange={handleChange}
              id="inputlname"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="example-date-input"
            class="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            Date of Birth :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="date"
              name="DOB"
              value={DOB}
              onChange={handleChange}
              className="form-control text-capitalize"
              id="example-date-input"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="example-date-input"
            class="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            Place of Birth :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="text"
              name="placeOfBirth"
              value={placeOfBirth}
              onChange={handleChange}
              className="form-control text-capitalize"
              id="example-date-input"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="genders"
            class="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            Gender :
          </label>
          <div class="col-sm-8 mt-2">
            <div class="form-check-inline">
              <label class="form-check-label" for="genders1">
                <input
                  type="radio"
                  class="form-check-input"
                  id="genders1"
                  name="Gender"
                  value="male"
                  onChange={handleChange}
                />
                male
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label" for="genders2">
                <input
                  type="radio"
                  class="form-check-input"
                  id="genders2"
                  name="Gender"
                  value="female"
                  onChange={handleChange}
                />
                female
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="inputcollege"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            collegeName :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="text"
              name="collegeName"
              value={collegeName}
              className="form-control text-capitalize"
              placeholder="Enter Your collegeName"
              onChange={handleChange}
              id="inputcollege"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="sel1"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            college city :
          </label>
          <div className="col-sm-8 mt-3">
            <select
              name="Location"
              className="form-control"
              onChange={handleChange}
              id="sel1"
              value={Location}
            >
              <option value="" selected>
                Enter a City
              </option>
              <option value="patan">patan</option>
              <option value="ahemdabad">ahemdabad</option>
              <option value="surat">surat</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="inputimg"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            Student Img :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="file"
              name="Img"
              className="form-control text-capitilize"
              placeholder="upload your img"
              onChange={handleImg1}
              id="inputimg"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="inputlogo"
            className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
          >
            college logo :
          </label>
          <div class="col-sm-8 mt-3">
            <input
              type="file"
              name="Logo"
              className="form-control text-capitalize"
              placeholder="Enter Your college logo"
              onChange={handleLogo2}
              id="inputlogo"
            />
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormInput;
