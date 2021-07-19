import React, { Component } from "react";

export default class FormInput extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      handleImges,
      editItem,
      handleCheckbox,
    } = this.props;
    const {
      Er_Number,
      firstName,
      lastName,
      DOB,
      collegeName,
      Location,
      checkbox,
    } = this.props.student;
    return (
      <div className="card card-body bg-light my-3">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label
              for="inputer"
              className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
            >
              ErNumber :
            </label>
            <div class="col-sm-8 mt-3">
              <input
                type="number"
                name="Er_Number"
                value={Er_Number}
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
              for="genders"
              class="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
            >
              gender :
            </label>
            <div class="col-sm-8 mt-2" style={{ marginLeft: "-100px" }}>
              <div class="form-check-inline">
                <label class="form-check-label" for="genders1">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="genders1"
                    name="gender"
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
                    name="gender"
                    value="famale"
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
              >
                <option disabled="disabled">Enter a City</option>
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
                name="img"
                className="form-control text-capitilize"
                placeholder="upload your img"
                onChange={handleImges}
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
                name="logo"
                className="form-control text-capitalize"
                placeholder="Enter Your college logo"
                onChange={handleImges}
                id="inputlogo"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="dropdownCheck"
              className="col-sm-4 col-form-label text-primary text-capitilize text-center mt-1"
            >
              Are Your Sure ?
            </label>
            <div class="form-check col-sm-8 mt-3">
              <input
                type="checkbox"
                name="checkbox"
                onChange={handleCheckbox}
                checked={checkbox}
                class="form-check-input"
                id="dropdownCheck"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={
              Er_Number && firstName && lastName && collegeName && Location
                ? false
                : true
            }
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
