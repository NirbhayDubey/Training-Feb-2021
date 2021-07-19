import React, { useEffect, useState } from "react";
import studentServices from "../services/StudentServices";
import _ from "lodash";

export default function Student(props) {
  const [id, setId] = useState(props.match.params.id);
  const [mother, setMother] = useState({});
  const [father, setFather] = useState({});
  const [student, setStudent] = useState({});

  useEffect(() => {
    studentServices.getStudentById(id).then((res) => {
      setStudent(res.data);
      setFather(res.data.father);
      setMother(res.data.mother);
    });
  }, []);

  const handleDelete = (id) => {
    studentServices.deleteStudent(id).then((res) => {
      console.log(res);
      props.history.push(`/`);
    });
  };

  const handleEdit = (id) => {
    props.history.push(`/update/${id}`);
  };

  const getIdCard = (id) => {
    props.history.push(`/card/${id}`);
  };

  const {
    firstName,
    lastName,
    middleName,
    email,
    dob,
    birthPlace,
    lang,
    city,
    state,
    country,
    pin,
    img,
    collegeName,
    collegeLogo,
    refDetail: referenceDetail,
    refThrough: referenceThrough,
    addr,
    phone,
  } = student;
  const {
    firstName: mFirstName,
    middleName: mMiddleName,
    lastName: mLastName,
    qualification: mQualification,
    profession: mProfession,
    designation: mDesignation,
    phone: mPhone,
    email: mEmail,
  } = mother;
  const {
    firstName: fFirstName,
    middleName: fMiddleName,
    lastName: fLastName,
    qualification: fQualification,
    profession: fProfession,
    designation: fDesignation,
    phone: fPhone,
    email: fEmail,
  } = father;

  return (
    <div className="container">
      <div className="card p-3">
        <div className="card-header bg-white">
          <button
            style={{ background: "#fff" }}
            className="text-danger float-right btn"
            onClick={() => getIdCard(id)}
          >
            <i className="fas fa-id-card"></i>
          </button>
          <button
            style={{ background: "#fff" }}
            className="text-danger float-right btn"
            onClick={() => handleDelete(id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            style={{ background: "#fff" }}
            className="text-warning float-right btn"
            onClick={() => handleEdit(id)}
            type="reset"
          >
            <i className="fas fa-pen"></i>
          </button>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img
              src={img}
              alt="student"
              className="card-img-top student-img w-50"
            />
            <div className="card-text lead text-capitalize text-center">
              {`${firstName} ${lastName}`}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
            <div className="row mb-5">
              <div className="col-5">
                <div className="list-group mb-5" id="list-tab" role="tablist">
                  <a
                    href={`#list-student${id}`}
                    id={`list-student${id}-list`}
                    data-toggle="list"
                    className="list-group-item list-group-item-action active"
                  >
                    student's detail
                  </a>
                  <a
                    href={`#list-father${id}`}
                    id={`list-father${id}-list`}
                    data-toggle="list"
                    className="list-group-item list-group-item-action"
                  >
                    father's detail
                  </a>
                  <a
                    href={`#list-mother${id}`}
                    id={`list-mother${id}-list`}
                    data-toggle="list"
                    className="list-group-item list-group-item-action"
                  >
                    mother's detail
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img
                    src={collegeLogo}
                    alt="college"
                    className="college-img"
                  />
                  <div className="card-text lead text-capitalize">
                    {collegeName}
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id={`list-student${id}`}
                    role="tabpanel"
                  >
                    <h4 className="text-capitalize">student's detail</h4>
                    <ul className="list-group">
                      <li className="text-capitalize list-group-item">
                        name: {`${firstName} ${middleName} ${lastName}`}
                      </li>
                      <li className="text-capitalize list-group-item">
                        email: {email}
                      </li>
                      <li className="text-capitalize list-group-item">
                        data of birth: {dob}
                      </li>
                      <li className="text-capitalize list-group-item">
                        birthPlace: {birthPlace}
                      </li>
                      <li className="text-capitalize list-group-item">
                        lang: {lang}
                      </li>
                      <li className="text-capitalize list-group-item">
                        country: {country}
                      </li>
                      <li className="text-capitalize list-group-item">
                        state: {state}
                      </li>
                      <li className="text-capitalize list-group-item">
                        city: {city}
                      </li>
                      <li className="text-capitalize list-group-item">
                        pin: {pin}
                      </li>
                      <li className="text-capitalize list-group-item">
                        reference detail: {referenceDetail}
                      </li>
                      <li className="text-capitalize list-group-item">
                        referencehrough: {referenceThrough}
                      </li>
                      <li className="text-capitalize list-group-item">
                        address: {addr}
                      </li>
                      <li className="text-capitalize list-group-item">
                        phone: {phone}
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id={`list-father${id}`}
                    role="tabpanel"
                  >
                    <h4 className="text-capitalize">father's detail</h4>
                    <ul className="list-group">
                      <li className="text-capitalize list-group-item">
                        name: {`${fFirstName} ${fMiddleName} ${fLastName}`}
                      </li>
                      <li className="text-capitalize list-group-item">
                        email: {fEmail}
                      </li>
                      <li className="text-capitalize list-group-item">
                        qualification: {fQualification}
                      </li>
                      <li className="text-capitalize list-group-item">
                        profession: {fProfession}
                      </li>
                      <li className="text-capitalize list-group-item">
                        designation: {fDesignation}
                      </li>
                      <li className="text-capitalize list-group-item">
                        phone: {fPhone}
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id={`list-mother${id}`}
                    role="tabpanel"
                  >
                    <h4 className="text-capitalize">mother's detail</h4>
                    <ul className="list-group">
                      <li className="text-capitalize list-group-item">
                        name: {`${mFirstName} ${mMiddleName} ${mLastName}`}
                      </li>
                      <li className="text-capitalize list-group-item">
                        email: {mEmail}
                      </li>
                      <li className="text-capitalize list-group-item">
                        qualification: {mQualification}
                      </li>
                      <li className="text-capitalize list-group-item">
                        profession: {mProfession}
                      </li>
                      <li className="text-capitalize list-group-item">
                        designation: {mDesignation}
                      </li>
                      <li className="text-capitalize list-group-item">
                        phone: {mPhone}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
