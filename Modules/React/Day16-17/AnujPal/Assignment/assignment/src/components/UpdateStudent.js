import React from "react";
import { UseForm } from "./UseForm";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Form/form.scss";
import StudentService from "../services/StudentService";

export const UpdateStudent = (props) => {
  let temp = "";
  const [values, handleChange] = UseForm(temp);
  const [state, setstate] = useState(false);
  useEffect(() => {
    StudentService.getStudentById(props.match.params.id).then((res) => {
      setCurrentStudent(res.data[0]);
      setstate(true);
    });
  }, []);

  if (state) {
  }
  const [currentStudent, setCurrentStudent] = useState({
    Id: "",
    fname: "",
    mname: "",
    lname: "",
    selectedCountry: "India",
    selectedState: "gujarat",
    selectedDegree:'BCA'
  });
  let country1 = currentStudent.selectedCountry;

  const country = {
    please: [],
    India: ["Gujarat", "Maharashtra", "Punjab", "UP"],
    Australia: ["California", "Texas", "Florida"],
    Canada: ["Alberta", "Columbia"],
  };
  const states = {
    Gujarat: ["Ahmedabad", "Surat", "Bhavnagar"],
    Maharashtra: ["Mumbai", "Pune"],
    Punjab: ["Ludhiana", "Amritsar"],
    UP: ["Lucknow", "Unnao"],
    California: ["Los-Angeles", "San-joe"],
    Texas: ["Houseton", "Dallas"],
    Florida: ["Miami", "Tampa"],
    Alberta: ["Calgarie", "Airtdri"],
    Columbia: ["Cali", "Santa-Marta"],
  };
  console.log(states["Gujarat"]);
  const [Error, setError] = useState({
    idError: "",
    nameError: "",
    dateError: "",
    emailError: "",
    fnameError: "",
    collegeNameError: "",
  });

  const formValidation = (e) => {
    const input = e.target.name;
    const val = e.target.value;
    switch (input) {
      case "Id":
        if (val < 0) {
          setError({ ...Error, idError: "Id cannot be negative" });
        } else if (val.length <= 0) {
          setError({ ...Error, idError: "Id cannot be blank" });
        } else {
          setError({ ...Error, idError: null });
        }

        break;

      case "fname":
      case "mname":
      case "lname":
        if (val.length <= 0) {
          setError({
            ...Error,
            nameError: "first name,niddlename or lastname cannot be blank",
          });
        } else {
          setError({ ...Error, nameError: null });
        }
        break;

      case "ffname":
      case "fmname":
      case "flname":
        if (val.length <= 0) {
          setError({
            ...Error,
            fnameError: "first name,niddlename or lastname cannot be blank",
          });
        } else {
          setError({ ...Error, fnameError: null });
        }
        break;

      case "DOB":
        const regex = new RegExp(
          "^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$"
        );
        if (!regex.test(val)) {
          setError({ ...Error, dateError: "Enter Valid Date Format" });
        } else {
          setError({ ...Error, dateError: null });
        }
        break;

      case "email":
        const regex1 = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (!regex1.test(val)) {
          setError({ ...Error, emailError: "Enter Valid E-mail Format" });
        } else {
          setError({ ...Error, emailError: null });
        }
        break;

      case "collegeName":
        if (val.length <= 0) {
          setError({
            ...Error,
            collegeNameError: "CollegeName cannot be empty",
          });
        } else {
          setError({ ...Error, collegeNameError: null });
        }
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.updateStudent(currentStudent, props.match.params.id).then(
      (res) => {
        console.log(res.data);
      }
    );
    props.history.push("/");
  };
  if (state) {
    return (
      <React.Fragment>
        <div className="container mx-auto p-2  ">
          <h2 className="text-center">Student Details</h2>
          <form id="form">
            <div class="form-group w-50 mx-auto mt-5 row">
              <label className="h5">Select ID</label>
              <div class="form-group w-50 mx-auto col">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Enter ID"
                  name="Id"
                  value={currentStudent.Id}
                  onChange={(e) =>
                    setCurrentStudent({ ...currentStudent, Id: e.target.value })
                  }
                  onInput={formValidation}
                />
                <div className="text-danger"> {Error.idError}</div>
              </div>
            </div>
            <div class="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Student Name</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter first name"
                  name="fname"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      fname: e.target.value,
                    })
                  }
                  onInput={formValidation}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="mname"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      mname: e.target.value,
                    })
                  }
                  onInput={formValidation}
                  value={currentStudent.mname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="lname"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      lname: e.target.value,
                    })
                  }
                  onInput={formValidation}
                  value={currentStudent.lname}
                />
              </div>
              <div className="text-danger"> {Error.nameError}</div>
            </div>

            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">DOB </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter date of birth"
                  name="DOB"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      DOB: e.target.value,
                    })
                  }
                  onInput={formValidation}
                  value={currentStudent.DOB}
                />
              </div>
              <div className="text-danger"> {Error.dateError}</div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Enter E-mail </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter e-mail"
                  name="email"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      email: e.target.value,
                    })
                  }
                  onInput={formValidation}
                  value={currentStudent.email}
                />
              </div>
              <div className="text-danger"> {Error.emailError}</div>
            </div>
            <div class="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Father Name</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter first name"
                  name="ffname"
                  value={currentStudent.ffname}
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      ffname: e.target.value,
                    })
                  }
                  onInput={formValidation}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="fmname"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      fmname: e.target.value,
                    })
                  }
                  value={currentStudent.fmname}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="flname"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      flname: e.target.value,
                    })
                  }
                  value={currentStudent.flname}
                />
              </div>
              <div className="text-danger"> {Error.fnameError}</div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-5 row">
              <div className="col">
                <label className="h5">Education Qualification</label>
                <select
                  className="w-100 h-75"
                  name="selectedDegree"
                  onChange={(e) => {
                    setCurrentStudent({...currentStudent,
                      selectedDegree: e.currentTarget.value,
                    });
                  }}
                >
                  <option selected>please select</option>
                  <option>BE</option>
                  <option>ME</option>
                  <option>BCA</option>
                  <option>MCA</option>
                </select>
              </div>
            </div>

            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select Country Name</label>
                <select
                  className="w-100 h-75"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      selectedCountry: e.target.value,
                    })
                  }
                >
                  <option selected>please select country</option>

                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select State Name</label>

                <select
                  className="w-100 h-75"
                  id="state"
                  name="selectedState"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      selectedState: e.target.value,
                    })
                  }
                >
                  <option selected value="please select state">
                    please select state
                  </option>

                  {country[currentStudent.selectedCountry].map((e, key) => {
                    return (
                      <option key={key} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select City Name</label>
                <select
                  className="w-100 h-75"
                  id="city"
                  name="selectedCity"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      selectedCity: e.target.value,
                    })
                  }
                >
                  <option selected value="please select city">
                    please select city
                  </option>
                  {states[currentStudent.selectedState].map((e, key) => {
                    return (
                      <option key={key} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div class="form-group w-50 mx-auto mt-3 row">
              <div className="col">
                <label className="h5 mt-4 mb-3">Select Profile Pic</label>
                <input
                  type="file"
                  className="form-control "
                  placeholder="Select Profile Picture"
                  id="image"
                  name="studentImage"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      studentImage: e.target.value,
                    })
                  }

                  // ref={this.studentImage}
                />
              </div>
            </div>
            <div class="form-group w-50 mx-auto m-3 row">
              <label className="h5">Student College</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter College Name"
                  name="collegeName"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      collegeName: e.target.value,
                    })
                  }
                  onInput={formValidation}
                  value={currentStudent.collegeName}
                />
              </div>
              <div className="text-danger"> {Error.collegeNameError}</div>
            </div>
            <div class="form-group w-50 mx-auto m-3 row">
              <label className="h5 mt-4 mb-3">Select College Logo</label>
              <div className="col">
                <input
                  type="file"
                  className="form-control "
                  placeholder="Select College Logo"
                  name="collegeLogo"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      collegeLogo: e.target.value,
                    })
                  }
                  // ref={this.collegeLogo}
                />
              </div>
            </div>
            <div class="form-group w-50 mx-auto m-3">
              <button
                className="btn w-100 btn-success mt-4"
                // disabled={this.state.submit}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};
