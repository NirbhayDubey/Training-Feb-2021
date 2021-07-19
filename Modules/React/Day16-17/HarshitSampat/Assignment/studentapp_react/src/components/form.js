import React, { useStat, useEffect } from "react";
import StudentService from "../Services/StudentService";

export default function form(props) {
  const [values, setValues] = useStat({
    _id: props.match.params.id,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    phoneNo: "",
    birthplace: "",
    motherLanguage: "",
    country: "",
    State: "",
    city: "",
    pinCode: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherEmail: "",
    fatherEducation: "",
    fatherProfession: "",
    fatherDesignation: "",
    fatherPhoneNo: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherEmail: "",
    motherEducation: "",
    motherProfession: "",
    motherDesignation: "",
    motherPhoneNo: "",
    relation: "",
    refereceThrough: "",
    refereceAddress: "",
    studentImage: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    pinCode: "",
    fatherProfession: "",
    fatherDesignation: "",
    fatherPhoneNo: "",
    fatherEmail: "",
    motherProfession: "",
    motherDesignation: "",
    motherPhoneNo: "",
    refereceThrough: "",
    refereceAddress: "",
  });
  useEffect(() => {
    if (values._id !== "add") {
      StudentService.getStudentById(values._id).then((res) => {
        let student = res.data;
        setValues({
          ...values,
          firstName: student.firstName,
          middleName: student.middleName,
          lastName: student.lastName,
          dob: student.dob,
          phoneNo: student.phoneNo,
          birthplace: student.birthplace,
          motherLanguage: student.motherLanguage,
          country: student.country,
          State: student.State,
          city: student.city,
          pinCode: student.pinCode,
          fatherFirstName: student.fatherFirstName,
          fatherMiddleName: student.fatherMiddleName,
          fatherLastName: student.fatherLastName,
          fatherEmail: student.fatherEmail,
          fatherEducation: student.fatherEducation,
          fatherProfession: student.fatherProfession,
          fatherDesignation: student.fatherDesignation,
          fatherPhoneNo: student.fatherPhoneNo,
          motherFirstName: student.motherFirstName,
          motherMiddleName: student.motherMiddleName,
          motherLastName: student.motherLastName,
          motherEmail: student.motherEmail,
          motherEducation: student.motherEducation,
          motherProfession: student.motherProfession,
          motherDesignation: student.motherDesignation,
          motherPhoneNo: student.motherPhoneNo,
          relation: student.relation,
          refereceThrough: student.refereceThrough,
          refereceAddress: student.refereceAddress,
          studentImage: student.studentImage,
        });
      });
    }
  }, []);

  const calculate_age = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && valid == false);
    return valid;
  };

  const handleChange = (event) => {
    event.prevenDefault();
    const { name, value } = event.targe;

    let error = errors;

    if (
      name === "motherName" ||
      name === "middleName" ||
      name === "lastName" ||
      name === "fatherFirstName" ||
      name === "fatherMiddleName" ||
      name === "fatherLastName" ||
      name === "motherFirstName" ||
      name === "motherMiddleName" ||
      name === "motherLastName" ||
      name === "relation" ||
      name === "refereceThrough"
    ) {
      if (value.trim().length < 3) {
        error[name] = "must be atleast 3 charcter long";
      } else {
        error[name] = "";
      }
      if (/[^a-zA-Z -]/.test(value)) {
        error[name] = "Invalid Charcters";
      }
    } else if (name === "fatherEmail" || name === "motherEmail") {
      const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      error[name] = validEmailRegex.test(value) ? "" : "Email is not valid!";
    } else if (
      name === "fatherProfession" ||
      name === "motherProfession" ||
      name === "fatherDesignation" ||
      name === "motherDesignation"
    ) {
      if (/[^a-zA-Z -]/.test(value)) {
        error[name] = "Invalid Characters";
      } else {
        error[name] = "";
      }
    } else if (
      name === "phoneNo" ||
      name === "fatherPhoneNo" ||
      name === "motherPhoneNo"
    ) {
      if (/^[0-9]{10}$/.test(value)) {
        error[name] = "";
      } else {
        error[name] = "Should contain only 10 digit";
      }
    }

    switch (name) {
      case "dob":
        let age = calculate_age(new Date(value));
        if (age >= 5 && age <= 20) {
          error[name] = "";
        } else {
          error[name] = "Age should be between 5 and 20";
        }
        break;
      case "birthplace":
        if (value.trim().length < 2) {
          error[name] = "must be at least  2 charcchter long";
        } else {
          error[name] = "";
        }
        break;
      case "pinCode":
        if (/^[0-9]{6}$/.test(value)) {
          error[name] = "";
        } else {
          error[name] = "Should contain 6 digit only";
        }
      default:
        break;
    }
    if (name === "studentImage") {
      setValues({ ...values, [name]: event.target.files[0].name });
    } else {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, error });
    }
  };

  const handleSubmit = (event) => {
    event.prevenDefault();
    if (validateForm(errors)) {
      const student = {
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        dob: values.dob,
        phoneNo: values.phoneNo,
        birthplace: values.birthplace,
        motherLanguage: values.motherLanguage,
        country: values.country,
        State: values.State,
        city: values.city,
        pinCode: values.pinCode,
        fatherFirstName: values.fatherFirstName,
        fatherMiddleName: values.fatherMiddleName,
        fatherLastName: values.fatherLastName,
        fatherEmail: values.fatherEmail,
        fatherEducation: values.fahterEducation,
        fatherProfession: values.fatherProfession,
        fatherDesignation: values.fatherDesignation,
        fatherPhoneNo: values.fatherPhoneNo,
        motherFirstName: values.motherFirstName,
        motherMiddleName: values.motherMiddleName,
        motherLastName: values.motherLastName,
        motherEmail: values.motherEmail,
        motherEducation: values.motherEducation,
        motherProfession: values.motherProfession,
        motherDesignation: values.motherDesignation,
        motherPhoneNo: values.motherPhoneNo,
        relation: values.relation,
        refereceThrough: values.refereceThrough,
        refereceAddress: values.refereceAddress,
        studentImage: values.studentImage,
      };
      setValues(() => {
        return {
          _id: "",
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          phoneNo: "",
          birthplace: "",
          motherLanguage: "",
          country: "",
          State: "",
          city: "",
          pinCode: "",
          fatherFirstName: "",
          fatherMiddleName: "",
          fatherLastName: "",
          fatherEmail: "",
          fatherEducation: "",
          fatherProfession: "",
          fatherDesignation: "",
          fatherPhoneNo: "",
          motherFirstName: "",
          motherMiddleName: "",
          motherLastName: "",
          motherEmail: "",
          motherEducation: "",
          motherProfession: "",
          motherDesignation: "",
          motherPhoneNo: "",
          relation: "",
          refereceThrough: "",
          refereceAddress: "",
          studentImage: "",
        };
      });
      if (values._id === "add") {
        StudentService.createStudent(student).then((res) => {
          props.history.push("/");
        });
      } else {
        StudentService.updateStudent(student, values.id).then((res) => {
          props.history.push("/");
        });
      }
    } else {
      console.error("Invalid Form");
      let error = "Enter valid Detail";
      setValues({ ...values, formError: error });
    }
  };
  const {
    firstName,
    middleName,
    lastName,
    dob,
    phoneNo,
    birthplace,
    motherLanguage,
    country,
    State,
    city,
    pinCode,
    fatherFirstName,
    fatherMiddleName,
    fatherLastName,
    fatherEmail,
    fatherEducation,
    fatherProfession,
    fatherDesignation,
    fatherPhoneNo,
    motherFirstName,
    motherMiddleName,
    motherLastName,
    motherEmail,
    motherEducation,
    motherProfession,
    motherDesignation,
    motherPhoneNo,
    relation,
    refereceThrough,
    refereceAddress,
    studentImage,
  } = values;
  return (
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
                  <label htmlFor="firstName">Student Name</label>
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
                  <label for="middleName">Middle Name</label>
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
                  <label for="lastName">Last Name</label>
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
                    id="dob"
                    name="dob"
                    value={dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="form-group">
                  <label for="birthPlace">Birth Place</label>
                  <br />
                  <select
                    className="form-control form-field form-select"
                    id="birthPlace"
                    name="birthPlace"
                    onChange={handleChange}
                    value={birthplace}
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
                  <label for="motherLanguage">First Language</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherLanguage"
                    name="motherLanguage"
                    placeholder="Enter First Language"
                    onChange={handleChange}
                    value={motherLanguage}
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
                  <label for="fatherFirstName">Father's Name</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="fatherFirstName"
                    name="fatherFirstName"
                    value={fatherFirstName}
                    onChange={handleChange}
                    placeholder="Enter Father's Name"
                    required
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="fatherMiddleName">Father's Middle Name</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="fatherMiddleName"
                    name="fatherMiddleName"
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
                  <label for="fatheEmail">Father's Email</label>
                  <input
                    type="email"
                    className="form-control form-field"
                    id="fatherEmail"
                    name="fatherEmail"
                    value={fatherEmail}
                    onChange={handleChange}
                    placeholder="Enter Father's Email"
                    required
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label for="FfatherEducation">
                    Father's Education Qulification
                  </label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="fatherEducation"
                    name="fatherEducation"
                    value={fatherEducation}
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
                  <label for="fatherProfession">Profession</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="fatherProfession"
                    name="fatherProfession"
                    value={fatherProfession}
                    onChange={handleChange}
                    placeholder="Enter Father's Profession"
                    required
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="fatherDesignation">Designation</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="fatherDesignation"
                    name="fatherDesignation"
                    value={fatherDesignation}
                    onChange={handleChange}
                    placeholder="Enter Father's Designation"
                    required
                  />
                </div>
              </div>

              <div className="col-3">
                <div className="form-group">
                  <label for="fatherDesignation">Phone No</label>
                  <input
                    type="number"
                    className="form-control form-field"
                    id="fatherPhoneNo"
                    name="fatherPhoneNo"
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
                  <label for="motherName">Mother's Name</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherFirstName"
                    name="motherFirstName"
                    placeholder="Enter Mother's Name"
                    value={motherFirstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="motherMiddleName">Mother's Middle Name</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherMiddleNam"
                    name="motherMiddleName"
                    value={motherMiddleName}
                    onChange={handleChange}
                    placeholder="Enter Mother's Middle Name"
                    required
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="motherLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherLastName"
                    name="motherLastName"
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
                  <label for="motherEmail">Mother's Email</label>
                  <input
                    type="email"
                    className="form-control form-field"
                    id="motherEmail"
                    name="motherEmail"
                    value={motherEmail}
                    onChange={handleChange}
                    placeholder="Enter Mother's Email"
                    required
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label for="motherEducation">
                    Mother's Education Qulification
                  </label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherEducation"
                    name="motherEducation"
                    value={motherEducation}
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
                  <label for="motherProfession">Profession</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherProfession"
                    name="motherProfession"
                    value={motherProfession}
                    onChange={handleChange}
                    placeholder="Enter Mother's Profession"
                    required
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="motherDesignation">Designation</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    id="motherDesignation"
                    name="motherDesignation"
                    value={motherDesignation}
                    onChange={handleChange}
                    placeholder="Enter Mother's Designation"
                    required
                  />
                </div>
              </div>

              <div className="col-3">
                <div className="form-group">
                  <label for="motherPhoneNo">Phone No</label>
                  <input
                    type="number"
                    className="form-control form-field"
                    id="motherPhoneNo"
                    name="motherPhoneNo"
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
                  <label for="EmergencyContact">Emergency Contact No</label>
                  <input
                    type="number"
                    className="form-control form-field"
                    id="EmergencyContact"
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
                    name="refereceThrough"
                    placeholder="Enter Reference's Name"
                    value={refereceThrough}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label for="studentImage">Upload Student's Image</label>
                  <input
                    type="file"
                    className="form-control form-field"
                    id="studentImage"
                    name="studentImage"
                    value={studentImage}
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
  );
}
