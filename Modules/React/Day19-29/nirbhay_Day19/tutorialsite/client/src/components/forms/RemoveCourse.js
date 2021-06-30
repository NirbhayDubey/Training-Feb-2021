import React, { useState, useEffect } from "react";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";
import { FaTimesCircle } from "react-icons/fa";

export default function AddTrininigPlan() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);
  const [confirmBox2, setConfirmBox2] = useState(false);
  const [rcourse, setRcourse] = useState({});

  useEffect(() => {
    setLoading(true);
    CourseService.getcourse()
      .then((res) => {
        if (res.data.length > 0) {
          setCourses(res.data);
        }
      })
      .catch((ex) => console.log(ex));
    setLoading(false);
  }, [confirmBox]);

  const handleRemoveCourse = async (e) => {
    setLoading(true);
    CourseService.removeCourse(rcourse)
      .then((res) => {
        if (res.data.msg) {
          setConfirmBox(true);
        }
      })
      .catch((ex) => console.log(ex));
    setLoading(false);
  };

  return (
    <div className="container my-4 bg-white p-4">
      {loading && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-12">
              <img src={formloader} alt="" height="200" />
            </div>
            <div className="col-12 text-white h4">removing course...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                Course removed successfully..
              </div>
              <button
                className="btn btn-success"
                onClick={() => setConfirmBox(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {confirmBox2 && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-warning">
                Do you really want to remove course <b>{rcourse.name}</b>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setConfirmBox2(false);
                  setRcourse({});
                }}
              >
                cancel
              </button>
              <button
                className="btn btn-success ms-2"
                onClick={() => {
                  setConfirmBox2(false);
                  handleRemoveCourse();
                }}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="form px-lg-5">
        <h5 className="color-dgreen text-uppercase text-center heading py-3">
          Remove Course
        </h5>
        <div className="m-2 border border-2 rounded p-3 removecourse">
          {courses.map((item, index) => {
            return (
              <button
                className="btn rounded-pill bg-green text-white px-3 m-2"
                key={index}
              >
                <div className="d-flex justify-content-center align-items-center">
                  {item.name}
                  <FaTimesCircle
                    className="ms-2 fs-5"
                    onClick={() => {
                      setRcourse(item);
                      setConfirmBox2(true);
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
