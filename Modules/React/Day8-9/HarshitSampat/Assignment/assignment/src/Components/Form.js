import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      firstName,
      middleName,
      lastName,
      dob,
      birthPlace,
      firstLanguage,
      city,
      State,
      pinCode,
      fatherName,
      fatherMiddleName,
      fatherLastName,
      fatherEmail,
      fatherQulification,
      fatherProfession,
      fatherDesignation,
      fatherPhoneNo,
      motherName,
      motherMiddleName,
      motherLastName,
      motherEmail,
      motherQulification,
      motherProfession,
      motherDesignation,
      motherPhoneNo,
      EmergencyContact,
      relation,
      referenceName,
      file,
      students,
      handleShow,
    } = this.props;

    return (
      <section>
        <article>
          <div className="container my-3">
            <div className="card text-white">
              <div className="card-header bg-danger text-white text-md-center">
                <h2>Student Details</h2>
              </div>
              <div className="card-body bg-dark">
                <div id="error-div" className="m-3"></div>
                <h3>Student Details</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label htmlFor="FirstNamme">Student Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="firstName"
                          name="firstName"
                          placeholder="Enter First Name"
                          value={firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label for="MiddleName">Middle Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="middleName"
                          name="middleName"
                          placeholder="Enter Middle Name"
                          value={middleName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="MiddleName">Last Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="lastName"
                          name="lastName"
                          placeholder="Enter Last Name"
                          value={lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="form-group">
                        <label for="age">Date Of Birth</label>
                        <input
                          type="date"
                          className="form-control form-field"
                          id="DOB"
                          name="DOB"
                          value={dob}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label for="BirthPlace">Birth Place</label>
                        <br />
                        <select
                          className="form-control form-field form-select"
                          id="BirthPlace"
                          name="BirthPlace"
                          onChange={handleChange}
                          value={birthPlace}
                          required
                        >
                          <option value="">Enter Birth Place</option>
                          <option value="rajkot">Ahmedabad</option>
                          <option value="ahmedabad">Surat</option>
                          <option value="baroda">Baroda</option>
                          <option value="baroda">Rajkot</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label for="FirstLanguage">First Language</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="FirstLanguage"
                          name="FirstLanguage"
                          placeholder="Enter First Language"
                          onChange={handleChange}
                          value={firstLanguage}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <label className="form-label col-sm-2">Gender</label>
                    <div className="col-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="male"
                          required
                          onChange={handleChange}
                          
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="female"
                          required
                          onChange={handleChange}
                          
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <h4>Address:</h4>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="State">State</label>

                        <select
                          className="form-control form-field"
                          id="State"
                          name="State"
                          value={State}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Enter State</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Punjab">Rajsthan</option>
                          <option value="Hariyana">Maharastra</option>
                          <option value="Delhi">Delhi</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label for="City">city</label>

                        <select
                          className="form-control form-field"
                          id="city"
                          name="city"
                          value={city}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Enter City</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Surat">Surat</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Jaypur">Jaypur</option>
                          <option value="Udaipur">Udipur</option>
                          <option value="Ajmer">Ajmer</option>
                          <option value="Maharastra">Mumbai</option>
                          <option value="Pune">Pune</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Noida">Noida</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label for="salary">Pin code</label>
                        <input
                          type="number"
                          className="form-control form-field"
                          id="pinCode"
                          name="pinCode"
                          min="0"
                          value={pinCode}
                          onChange={handleChange}
                          placeholder="Enter Pin Code"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="text-white" />

                  <h3>Parents Detalis</h3>
                  <hr />
                  <h5>Father Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="FatheName">Father's Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="FatherName"
                          name="FatherName"
                          value={fatherName}
                          onChange={handleChange}
                          placeholder="Enter Father's Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="FatherMiddleName">
                          Father's Middle Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="FatherMiddleName"
                          name="FatherMiddleName"
                          placeholder="Enter Fathe's Middle Name"
                          value={fatherMiddleName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="LastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="LastName"
                          name="LastName"
                          value={fatherLastName}
                          onChange={handleChange}
                          placeholder="Enter Father's Last Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* fathe occuption ,designatioin phone */}
                  <div className="row">
                    <div className="col-3">
                      <div className="form-group">
                        <label for="FatheEmail">Father's Email</label>
                        <input
                          type="email"
                          className="form-control form-field"
                          id="FatherEmail"
                          name="FatherEmail"
                          value={fatherEmail}
                          onChange={handleChange}
                          placeholder="Enter Father's Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="form-group">
                        <label for="Father Qulification">
                          Father's Education Qulification
                        </label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="FatherQulification"
                          name="FatherQulification"
                          value={fatherQulification}
                          onChange={handleChange}
                          placeholder="Enter Education Qulification"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* father's details phone,designation */}
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="FatherProfession">Profession</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="FatherProfession"
                          name="FatherProfession"
                          value={fatherProfession}
                          onChange={handleChange}
                          placeholder="Enter Father's Profession"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="FatherDesignation">Designation</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="FatherDesignation"
                          name="FatherDesignation"
                          value={fatherDesignation}
                          onChange={handleChange}
                          placeholder="Enter Father's Designation"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="form-group">
                        <label for="FatherDesignation">Phone No</label>
                        <input
                          type="number"
                          className="form-control form-field"
                          id="FatherPhoneNo"
                          name="FatherPhoneNo"
                          pattern="[1-9]{1}[0-9]{9}"
                          value={fatherPhoneNo}
                          onChange={handleChange}
                          placeholder="Enter Father's Phone No"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h5>Mother Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="MotherName">Mother's Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="MotherName"
                          name="MotherName"
                          placeholder="Enter Mother's Name"
                          value={motherName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="MotherMiddleName">
                          Mother's Middle Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="MotherMiddleName"
                          name="MotherMiddleName"
                          value={motherMiddleName}
                          onChange={handleChange}
                          placeholder="Enter Mother's Middle Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="MotherLastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="MotherLastName"
                          name="MotherLastName"
                          value={motherLastName}
                          onChange={handleChange}
                          placeholder="Enter Mother's Last Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* fathe occuption ,designatioin phone */}
                  <div className="row">
                    <div className="col-3">
                      <div className="form-group">
                        <label for="MotherEmail">Mother's Email</label>
                        <input
                          type="email"
                          className="form-control form-field"
                          id="MotherEmail"
                          name="MotherEmail"
                          value={motherEmail}
                          onChange={handleChange}
                          placeholder="Enter Mother's Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="form-group">
                        <label for="MotherQulification">
                          Mother's Education Qulification
                        </label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="MotherQulification"
                          name="MotherQulification"
                          value={motherQulification}
                          onChange={handleChange}
                          placeholder="Enter Education Qulification"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* father's details phone,designation */}
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="MotherProfession">Profession</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="MotherProfession"
                          name="MotherProfession"
                          value={motherProfession}
                          onChange={handleChange}
                          placeholder="Enter Mother's Profession"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="MotherDesignation">Designation</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="MotherDesignation"
                          name="MotherDesignation"
                          value={motherDesignation}
                          onChange={handleChange}
                          placeholder="Enter Mother's Designation"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="form-group">
                        <label for="MotherDesignation">Phone No</label>
                        <input
                          type="number"
                          className="form-control form-field"
                          id="MotherPhoneNo"
                          name="MotherPhoneNo"
                          pattern="[1-9]{1}[0-9]{9}"
                          value={motherPhoneNo}
                          onChange={handleChange}
                          placeholder="Enter Mother's Phone No"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <hr />
                  <h5>Other Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="EmergencyContact">
                          Emergency Contact No
                        </label>
                        <input
                          type="number"
                          className="form-control form-field"
                          id="EmergencyContact"
                          name="EmergencyContact"
                          value={EmergencyContact}
                          onChange={handleChange}
                          placeholder="Enter Emergency Contact No"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label for="Relation">Your Relation to child</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="Relation"
                          name="Relation"
                          value={relation}
                          onChange={handleChange}
                          placeholder="Enter Your relation with child"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label for="Reference">Reference's name</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="Reference"
                          name="Reference"
                          placeholder="Enter Reference's Name"
                          value={referenceName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label for="Image">Upload Student's Image</label>
                        <input
                          type="file"
                          className="form-control form-field"
                          id="Img"
                          name="Img"
                          value={file}
                          onChange={handleChange}
                          placeholder="upload Student's Photo"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3">
                      <div className="form-group">
                        <button
                          type="Submit"
                          className="form-control btn btn-danger text-white"
                          id="SubmitButton"
                          name="SubmitButton"
                          onSubmit={() => {
                            handleShow("students");
                          }}
                        >
                          Add Student
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
        <br />
        <h1 className="text-center">Student Id Card</h1>
      </section>
    );
  }
}

