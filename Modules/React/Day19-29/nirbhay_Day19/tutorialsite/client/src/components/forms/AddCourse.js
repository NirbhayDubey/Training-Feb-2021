import React, { useState } from "react";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";

export default function AddTrininigPlan() {
  const [course, setCourse] = useState({
    name: "",
    type: "",
    icon: "",
    desc: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);

  const handleSubmit = async (e) => {
    const { name, type, icon, desc } = course;
    e.preventDefault();
    if (name && type && icon && desc) {
      setLoading(true);

      CourseService.postCourse(course)
        .then((res) => {
          if (res.data.msg) {
            setConfirmBox(true);
          }
        })
        .catch((ex) => console.log(ex));

      setCourse({
        name: "",
        type: "",
        icon: "",
        desc: "",
      });
      document.getElementById("myform").reset();
      setLoading(false);
    }
  };

  return (
    <div className="container my-4 bg-white p-4">
      {loading && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-12">
              <img src={formloader} alt="" height="200" />
            </div>
            <div className="col-12 text-white h4">Uploading course...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                Course inserted successfully..
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
      <div className="form px-lg-5">
        <h5 className="color-dgreen text-uppercase text-center heading py-3">
          Add Course
        </h5>
        <form
          onSubmit={handleSubmit}
          className="px-lg-5 py-3"
          method="post"
          id="myform"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Course name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={course.name}
              className="form-control"
              required
              onChange={(e) =>
                setCourse((d) => ({ ...d, name: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Select type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              required
              onChange={(e) =>
                setCourse((d) => ({ ...d, type: e.target.value }))
              }
            >
              <option value="">select type</option>
              <option value="Common">Common</option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="icon" className="form-label">
              Select icon
            </label>
            <input
              type="text"
              className="form-control"
              id="icon"
              value={course.icon}
              name="icon"
              required
              onChange={(e) =>
                setCourse((d) => ({ ...d, icon: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="desc" className="form-label">
              Add description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              value={course.desc}
              name="desc"
              required
              onChange={(e) =>
                setCourse((d) => ({ ...d, desc: e.target.value }))
              }
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Add Course
          </button>
          <button type="reset" className="btn btn-secondary ms-3">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
