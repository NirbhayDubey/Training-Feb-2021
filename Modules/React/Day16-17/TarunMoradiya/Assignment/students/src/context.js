import React, { useState } from "react";
import csc from "country-state-city";
import validator from "validator";

// create context
const StudentContext = React.createContext();

// context provider
export default function StudentProvider(props) {
  const countries = csc.getAllCountries();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryCode, setCountryCode] = useState("");

  const [msg, setMsg] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    birthPlace: "",
    lang: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    img: "",
    collegeName: "",
    collegeLogo: "",
    referenceDetail: "",
    referenceThrough: "",
    addr: "",
    phone: "",
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
  });

  const handleAge = (val) => {
    var today = new Date();
    var birthDate = new Date(val);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    if (age_now < 5 || age_now > 20) {
      console.log("invalid");
      setMsg([...msg, { name: "dob", value: "age should be between 5 to 20" }]);
    } else {
      setMsg(msg.filter((m) => m.name !== "dob"));
    }
  };

  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;

    if (nam.search(/name/gi) !== -1 && nam.search(/college/gi) === -1) {
      if (!validator.isAlpha(val)) {
        setMsg([
          ...msg,
          { name: nam, value: "this field shoud only contain alphabets" },
        ]);
      } else {
        setMsg(msg.filter((m) => m.name !== nam));
      }
    } else if (nam.search(/email/gi) !== -1) {
      if (!validator.isEmail(val)) {
        setMsg([...msg, { name: nam, value: "enter valid email" }]);
      } else {
        setMsg(msg.filter((m) => m.name !== nam));
      }
    } else if (nam.search(/phone/gi) !== -1) {
      if (val.length !== 10) {
        setMsg([...msg, { name: nam, value: "enter 10 digit number" }]);
      } else {
        setMsg(msg.filter((m) => m.name !== nam));
      }
    } else if (nam === "dob") {
      handleAge(val);
    } else if (nam === "pin") {
      if (val.length !== 6) {
        console.log("invalid");
        setMsg([...msg, { name: "pin", value: "enter 6 digiy pin" }]);
      } else {
        setMsg(msg.filter((m) => m.name !== "pin"));
      }
    } else if (nam === "country") {
      setStates(csc.getStatesOfCountry(val));
      console.log(val);
      setCountryCode(val);
      console.log("changed counytry", student);
    } else if (nam === "state") {
      setCities(csc.getCitiesOfState(countryCode, val));
      console.log("changed state", student);
    }
    setStudent({ ...student, [nam]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let myImg = student.img.split("\\");
    myImg = student.img.split("/");
    myImg = `img/${myImg[myImg.length - 1]}`;
    let myLogo = student.collegeLogo.split("\\");
    myLogo = student.collegeLogo.split("\\");
    myLogo = `img/${myLogo[myLogo.length - 1]}`;
    console.log(myImg, myLogo);
    const newStudent = {
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      img: myImg,
      collegeName: student.collegeName,
      collegeLogo: myLogo,
      middleName: student.middleName,
      dob: student.dob,
      birthPlace: student.birthPlace,
      lang: student.lang,
      city: student.city,
      state: student.state,
      country: student.country,
      pin: student.pin,
      referenceDetail: student.referenceDetail,
      referenceThrough: student.referenceThrough,
      addr: student.addr,
      phone: student.phone,
      mFirstName: student.mFirstName,
      mMiddleName: student.mMiddleName,
      mLastName: student.mLastName,
      mEmail: student.mEmail,
      mQualification: student.mQualification,
      mProfession: student.mProfession,
      mDesignation: student.mDesignation,
      mPhone: student.mPhone,
      fFirstName: student.fFirstName,
      fMiddleName: student.fMiddleName,
      fLastName: student.fLastName,
      fEmail: student.fEmail,
      fQualification: student.fQualification,
      fProfession: student.fProfession,
      fDesignation: student.fDesignation,
      fPhone: student.fPhone,
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    setEditItem(false);
    setStudent({
      states: [],
      cities: [],
      countryCode: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      birthPlace: "",
      lang: "",
      city: "",
      state: "",
      country: "",
      pin: "",
      img: "",
      collegeName: "",
      collegeLogo: "",
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
    });
  };

  const handleDelete = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  const handleEdit = (id) => {
    console.log("called", id);
    const filteredStudents = students.filter((student) => student.id !== id);
    console.log(filteredStudents);
    const selectedStudent = students.find((student) => student.id === id);
    console.log(selectedStudent);
    setStudents(filteredStudents);
    setEditItem(true);
    setStudent(selectedStudent);
    console.log(student);
    document.getElementById("inp").focus();
  };

  const clearList = () => {
    setStudents([]);
  };
  return (
    <StudentContext.Provider
      value={{
        student: student,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        editItem: editItem,
        msg: msg,
        countries: countries,
        states: states,
        cities: cities,
        students: students,
        handleDelete: handleDelete,
        clearList: clearList,
        handleEdit: handleEdit,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
