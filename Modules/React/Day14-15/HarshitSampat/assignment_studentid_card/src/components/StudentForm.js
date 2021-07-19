import React from "react";

const StudentForm = ({
  firstName,
  lastName,
  middleName,
  Id,
  handleSubmit,
  handleChange,
  dob,
  collegeName,
  studentImg,
}) => {
  return (
    <>
      <section>
        <article>
          <div className="container my-3">
            <div className="card text-white">
              <div className="card-header bg-danger text-white text-md-center">
                <h2>Student Details</h2>
              </div>
              <div className="card-body bg-dark">
                <div id="error-div" className="m-3"></div>
                <h3>Basic Details</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label htmlFor="Id">Student's Id</label>
                        <input
                          type="text"
                          className="form-control form-field"
                          id="Id"
                          name="Id"
                          placeholder="Enter Student Id"
                          value={Id}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-group">
                        <label htmlFor="age">Date Of Birth</label>
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
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label htmlFor="FirstName">Student Name</label>
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
                        <label htmlFor="MiddleName">Middle Name</label>
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
                        <label htmlFor="MiddleName">Last Name</label>
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
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label htmlFor="BirthPlace">College Name</label>
                        <br />
                        <input
                          className="form-control form-field form-select"
                          id="BirthPlace"
                          name="BirthPlace"
                          onChange={handleChange}
                          value={collegeName}
                          placeholder="Enter College Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="form-group">
                        <label htmlFor  ="StudentImg">Upload Your Photo</label>
                        <input
                          type="file"
                          className="form-control form-field"
                          id="StudentImg"
                          name="StudentImg"
                          onChange={handleChange}
                          value={studentImg}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-3">
                      <div className="form-group">
                        <button
                          type="Submit"
                          className="form-control btn btn-danger text-white"
                          id="SubmitButton"
                          name="SubmitButton"
                          onSubmit={() => {}}
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
      </section>
    </>
  );
};

export default StudentForm;
