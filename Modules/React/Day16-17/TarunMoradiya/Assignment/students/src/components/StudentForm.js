import React, { useState, useEffect } from "react";
import csc from "country-state-city";
import validator from "validator";
import StudentInput from "./StudentInput";
import studentServices from "../services/StudentServices";

export default function StudentForm(props) {
  const countries = csc.getAllCountries();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [msg, setMsg] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [id, setId] = useState("");

  const [student, setStudent] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    dob: "",
    birthPlace: "",
    lang: "",
    city: "",
    state: "",
    stateCode: "",
    country: "",
    countryCode: "",
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

  useEffect(() => {
    if (props.match.params.id) {
      studentServices.getStudentById(props.match.params.id).then((res) => {
        const mother = res.data.mother;
        const father = res.data.father;
        setEditItem(true);
        setId(res.data._id);

        //date
        const newDate = new Date(res.data.dob).toISOString().substr(0, 10);

        //country
        const ck = countries.find((c) => c.name === res.data.country);
        //state
        setStates(csc.getStatesOfCountry(ck.isoCode));

        const st = states.find((s) => s.name === res.data.state);
        //city
        if (st) setCities(csc.getCitiesOfState(ck.isoCode, st.isoCode));
        else setCities(csc.getCitiesOfCountry(ck.isoCode));

        setStudent({
          firstName: res.data.firstName,
          middleName: res.data.middleName,
          lastName: res.data.lastName,
          dob: newDate,
          birthPlace: res.data.birthPlace,
          lang: res.data.lang,
          city: res.data.city,
          state: res.data.state,
          stateCode: st ? st.isoCode : "",
          country: res.data.country,
          countryCode: ck.isoCode,
          email: res.data.email,
          pin: res.data.pin,
          img: { file: res.data.img },
          collegeName: res.data.collegeName,
          collegeLogo: { file: res.data.collegeLogo },
          referenceDetail: res.data.refDetail,
          referenceThrough: res.data.refThrough,
          addr: res.data.addr,
          phone: res.data.phone,
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
        });
      });
    }
  }, []);

  const displayMsg = (inpMsg, name) => {
    let myMsg = inpMsg.find((m) => m.name === name);
    return (
      <p className="text-danger pt-1 float-right"> {myMsg && myMsg.value}</p>
    );
  };

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

  const handleChange = async (e) => {
    const nam = e.target.name;
    let val = e.target.value;

    if (e.target.type === "file") {
      val = { path: val, file: e.target.files[0] };
      console.log(val);
    }

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
      await setStudent((student) => {
        return { ...student, countryCode: val };
      });
      val = csc.getCountryByCode(val).name;
    } else if (nam === "state") {
      setCities(csc.getCitiesOfState(student.countryCode, val));
      await setStudent((student) => {
        return { ...student, stateCode: val };
      });
      val = csc.getStateByCode(val).name;
      console.log(val);
    }
    setStudent((student) => {
      return { ...student, [nam]: val };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", student.firstName);
    formData.append("middleName", student.middleName);
    formData.append("lastName", student.lastName);
    formData.append("email", student.email);
    formData.append("img", student.img.file);
    formData.append("collegeLogo", student.collegeLogo.file);
    formData.append("collegeName", student.collegeName);
    formData.append("dob", student.dob);
    formData.append("birthPlace", student.birthPlace);
    formData.append("lang", student.lang);
    formData.append("city", student.city);
    formData.append("state", student.state);
    formData.append("country", student.country);
    formData.append("pin", student.pin);
    formData.append("referenceDetail", student.referenceDetail);
    formData.append("referenceThrough", student.referenceThrough);
    formData.append("addr", student.addr);
    formData.append("phone", student.phone);
    formData.append("mFirstName", student.mFirstName);
    formData.append("mMiddleName", student.mMiddleName);
    formData.append("mLastName", student.mLastName);
    formData.append("mEmail", student.mEmail);
    formData.append("mQualification", student.mQualification);
    formData.append("mProfession", student.mProfession);
    formData.append("mDesignation", student.mDesignation);
    formData.append("mPhone", student.mPhone);
    formData.append("fFirstName", student.fFirstName);
    formData.append("fMiddleName", student.fMiddleName);
    formData.append("fLastName", student.fLastName);
    formData.append("fEmail", student.fEmail);
    formData.append("fQualification", student.fQualification);
    formData.append("fProfession", student.fProfession);
    formData.append("fDesignation", student.fDesignation);
    formData.append("fPhone", student.fPhone);

    console.log(formData);
    if (editItem) {
      studentServices.updateStudent(formData, id).then((res) => {
        // then print response status
        console.log(res);
      });
    } else {
      studentServices.createStudent(formData).then((res) => {
        // then print response status
        console.log(res);
      });
    }

    setEditItem(false);

    props.history.push(`/`);
  };
  return (
    <>
      <StudentInput
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editItem={editItem}
        msg={msg}
        countries={countries}
        states={states}
        cities={cities}
        displayMsg={displayMsg}
      />
    </>
  );
}
