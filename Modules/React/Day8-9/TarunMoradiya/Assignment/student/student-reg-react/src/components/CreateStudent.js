import React, { Component } from "react";
import csc from "country-state-city";
import validator from "validator";
import studentServices from "../services/StudentServices";
import StudentServices from "../services/StudentServices";
import _ from "lodash";
import StudentInp from "./StudentInp";
import FatherInp from "./FatherInp";
import MotherInp from "./MotherInp";

class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: csc.getAllCountries(),
      states: [],
      cities: [],
      countryCode: "",
      students: [],
      id: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      birthPlace: "",
      lang: "",
      city: "",
      state: "",
      country: "",
      email: "",
      pin: "",
      img: "",
      collegeName: "",
      collegeLogo: "",
      editItem: false,
      referenceDetail: "",
      referenceThrough: "",
      addr: "",
      phone: "",
      msg: [],
      mFirstName: "",
      mMiddleName: "",
      mLastName: "",
      mEmail: "",
      mQualification: "",
      mProfession: "",
      mDesignation: "",
      mPhone: "",
      fFirstName: "",
      fMiddleName: "",
      fLastName: "",
      fEmail: "",
      fQualification: "",
      fProfession: "",
      fDesignation: "",
      fPhone: "",
    };
  }

  componentDidMount() {
    studentServices.getStudents().then((res) => {
      console.log(res.data);
      this.setState({ students: res.data });
    });

    if (this.props.match.params.id) {
      console.log("updating...");
      studentServices.getStudentById(this.props.match.params.id).then((res) => {
        const student = res.data;
        const father = _.pick(
          res.data.father,
          "firstName",
          "middleName",
          "lastName",
          "qualification",
          "profession",
          "designation",
          "phone",
          "email"
        );
        const mother = _.pick(
          res.data.mother,
          "firstName",
          "middleName",
          "lastName",
          "qualification",
          "profession",
          "designation",
          "phone",
          "email"
        );
        this.setState(
          {
            editItem: true,
            id: student._id,
            firstName: student.firstName,
            middleName: student.middleName,
            lastName: student.lastName,
            dob: student.dob,
            birthPlace: student.birthPlace,
            lang: student.lang,
            city: student.city,
            state: student.state,
            country: student.country,
            email: student.email,
            pin: student.pin,
            img: student.img,
            collegeName: student.collegeName,
            collegeLogo: student.collegeLogo,
            referenceDetail: student.refDetail,
            referenceThrough: student.refThrough,
            addr: student.addr,
            phone: student.phone,
            mFirstName: mother.firstName,
            mMiddleName: mother.middleName,
            mLastName: mother.lastName,
            mEmail: mother.email,
            mQualification: mother.qualification,
            mProfession: mother.profession,
            mDesignation: mother.designation,
            mPhone: mother.phone,
            fFirstName: father.firstName,
            fMiddleName: father.middleName,
            fLastName: father.lastName,
            fEmail: father.email,
            fQualification: father.qualification,
            fProfession: father.profession,
            fDesignation: father.designation,
            fPhone: father.phone,
          },
          () => {
            console.log("state: ", this.state);
          }
        );
      });
      this.setState((state, props) => {
        return {};
      });
    }
  }

  handleAge(val) {
    var today = new Date();
    var birthDate = new Date(val);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    if (age_now < 5 || age_now > 20) {
      console.log("invalid");
      this.setState({
        msg: [
          ...new Set([
            ...this.state.msg,
            { name: "dob", value: "age should be between 5 to 20" },
          ]),
        ],
      });
    } else {
      this.setState({
        msg: this.state.msg.filter((m) => m.name !== "dob"),
      });
    }
  }

  handleChange = (e) => {
    const nam = e.target.name;
    let val = e.target.value;
    if (e.target.type === "file") {
      val = { path: val, file: e.target.files[0] };
      console.log(val);
    }

    if (nam.search(/name/gi) !== -1 && nam.search(/college/gi) === -1) {
      if (!validator.isAlpha(val)) {
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: nam, value: "this field shoud only contain alphabets" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== nam),
        });
      }
    } else if (nam.search(/email/gi) !== -1) {
      if (!validator.isEmail(val)) {
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: nam, value: "enter valid email" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== nam),
        });
      }
    } else if (nam.search(/phone/gi) !== -1) {
      if (val.length !== 10) {
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: nam, value: "enter 10 digit number" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== nam),
        });
      }
    } else if (nam === "dob") {
      this.handleAge(val);
    } else if (nam === "pin") {
      if (val.length !== 6) {
        console.log("invalid");
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: "pin", value: "enter 6 digiy pin" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== "pin"),
        });
      }
    } else if (nam === "country") {
      this.setState({
        states: csc.getStatesOfCountry(val),
        countryCode: val,
      });
    } else if (nam === "state") {
      this.setState({
        cities: csc.getCitiesOfState(this.state.countryCode, val),
      });
    }
    this.setState(
      {
        [nam]: val,
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");

    const formData = new FormData();
    formData.append("firstName", this.state.firstName);
    formData.append("middleName", this.state.middleName);
    formData.append("lastName", this.state.lastName);
    formData.append("email", this.state.email);
    formData.append("img", this.state.img.file);
    formData.append("collegeLogo", this.state.collegeLogo.file);
    formData.append("collegeName", this.state.collegeName);
    formData.append("dob", this.state.dob);
    formData.append("birthPlace", this.state.birthPlace);
    formData.append("lang", this.state.lang);
    formData.append("city", this.state.city);
    formData.append("state", this.state.state);
    formData.append("country", this.state.country);
    formData.append("pin", this.state.pin);
    formData.append("referenceDetail", this.state.referenceDetail);
    formData.append("referenceThrough", this.state.referenceThrough);
    formData.append("addr", this.state.addr);
    formData.append("phone", this.state.phone);
    formData.append("mFirstName", this.state.mFirstName);
    formData.append("mMiddleName", this.state.mMiddleName);
    formData.append("mLastName", this.state.mLastName);
    formData.append("mEmail", this.state.mEmail);
    formData.append("mQualification", this.state.mQualification);
    formData.append("mProfession", this.state.mProfession);
    formData.append("mDesignation", this.state.mDesignation);
    formData.append("mPhone", this.state.mPhone);
    formData.append("fFirstName", this.state.fFirstName);
    formData.append("fMiddleName", this.state.fMiddleName);
    formData.append("fLastName", this.state.fLastName);
    formData.append("fEmail", this.state.fEmail);
    formData.append("fQualification", this.state.fQualification);
    formData.append("fProfession", this.state.fProfession);
    formData.append("fDesignation", this.state.fDesignation);
    formData.append("fPhone", this.state.fPhone);

    console.log(formData);
    if (this.state.editItem) {
      studentServices.updateStudent(formData, this.state.id).then((res) => {
        // then print response status
        console.log(res);
      });
    } else {
      studentServices.createStudent(formData).then((res) => {
        // then print response status
        console.log(res);
      });
    }

    this.props.history.push(`/`);
  };

  // handleDelete = (id) => {
  //   const filteredStudents = this.state.students.filter(
  //     (student) => student.id !== id
  //   );
  //   this.setState({
  //     students: filteredStudents,
  //   });
  //   StudentServices.deleteStudent(id).then((res) => {
  //     console.log(res);
  //     this.props.history.push(`/`);
  //   });
  // };

  // handleEdit = (id) => {
  //   console.log("called", id);
  //   const filteredStudents = this.state.students.filter(
  //     (student) => student.id !== id
  //   );
  //   console.log(filteredStudents);
  //   const selectedStudent = this.state.students.find(
  //     (student) => student.id === id
  //   );
  //   console.log(selectedStudent);
  //   this.setState({
  //     students: filteredStudents,
  //     firstName: selectedStudent.firstName,
  //     lastName: selectedStudent.lastName,
  //     collegeName: selectedStudent.collegeName,
  //     id: id,
  //     editItem: true,
  //   });
  //   console.log(this.state);
  //   document.getElementById("inp").focus();
  // };

  displayMsg = (msg, name) => {
    let myMsg = msg.find((m) => m.name === name);
    return (
      <p className="text-danger pt-1 float-right"> {myMsg && myMsg.value}</p>
    );
  };

  backToList = () => {
    this.props.history.push("/");
  };

  render() {
    const { editItem, msg } = this.state;
    return (
      <>
        <div className="p-3 container" id="student-inp">
          <h3 className="text-capitalize display-4">student Registration</h3>
          <div className="card card-body">
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <StudentInp
                info={this.state}
                handleChange={this.handleChange}
                displayMsg={this.displayMsg}
              />
              <FatherInp
                info={this.state}
                handleChange={this.handleChange}
                displayMsg={this.displayMsg}
              />
              <MotherInp
                info={this.state}
                handleChange={this.handleChange}
                displayMsg={this.displayMsg}
              />
              <button
                type="submit"
                className={
                  editItem
                    ? "btn btn-info btn-block"
                    : "btn btn-primary btn-block"
                }
                disabled={msg.length}
              >
                {editItem ? "edit student" : "add student"}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateStudent;
