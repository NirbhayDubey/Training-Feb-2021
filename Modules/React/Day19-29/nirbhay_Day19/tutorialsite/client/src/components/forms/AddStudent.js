import React, { useState } from "react";
import LoginService from "../../services/LoginService";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";
import randomCrypto from "crypto-random-string";
import { FaSyncAlt } from "react-icons/fa";

export default function AddTrininigPlan() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    status: "offline",
    trainer: "",
    courses: [],
  });
  const [randomPassword, setRandomPassword] = useState(
    randomCrypto({ length: 10, type: "alphanumeric" })
  );
  const [trainers, setTrainers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);

  const handleSubmit = async (e) => {
    const { username, email, password, role, status, trainer, courses } = user;
    e.preventDefault();
    if (username && email && password && role && status) {
      setLoading(true);
      if (role === "Student") {
        if (trainer && courses.length > 0) {
          LoginService.postUser(user)
            .then((res) => {
              if (res.data) {
                setConfirmBox(true);
              }
            })
            .catch((ex) => console.log(ex));
        }
      }
      if (role === "Trainer") {
        LoginService.postUser({ username, email, password, role, status })
          .then((res) => {
            if (res.data) {
              setConfirmBox(true);
            }
          })
          .catch((ex) => console.log(ex));
      }

      setUser({
        username: "",
        email: "",
        password: "",
        role: "",
        status: "offline",
        trainer: "",
      });
      document.getElementById("myform").reset();
      setLoading(false);
    }
  };

  const handleRoleChange = (e) => {
    setLoading(true);
    if (e.target.value === "Student") {
      LoginService.getTrainers()
        .then((res) => {
          if (res.data.length > 0) {
            const users = res.data.filter((item) => item.role === "Trainer");
            setTrainers(users);
          }
        })
        .catch((ex) => console.log(ex));

      CourseService.getcourse()
        .then((res) => {
          if (res.data.length > 0) {
            setCourses(res.data);
          }
        })
        .catch((ex) => console.log(ex));
    }
    setLoading(false);
  };

  const handleCheckChange = (e, id) => {
    const target = e.target;
    let ccourses = user.courses;

    if (target.checked) {
      ccourses.push(id);
      setUser((e) => ({ ...e, courses: ccourses }));
    } else {
      ccourses = ccourses.filter((item) => item !== id);
      setUser((e) => ({ ...e, courses: ccourses }));
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
            <div className="col-12 text-white h4">Uploading user...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                User inserted successfully..
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
          Add New User
        </h5>
        <form
          onSubmit={handleSubmit}
          className="px-lg-5 py-3"
          method="post"
          id="myform"
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              className="form-control"
              required
              onChange={(e) =>
                setUser((d) => ({ ...d, username: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              className="form-control"
              required
              onChange={(e) =>
                setUser((d) => ({ ...d, email: e.target.value }))
              }
            />
          </div>
          <div className="row mb-3">
            <div className="col-lg">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                className="form-control"
                required
                onChange={(e) =>
                  setUser((d) => ({ ...d, password: e.target.value }))
                }
              />
            </div>
            <div className="col-lg">
              <label htmlFor="password" className="form-label">
                Random Password
              </label>
              <div className="input-group">
                <input
                  type="text"
                  value={randomPassword}
                  className="form-control"
                  disabled
                />
                <span
                  className="input-group-text btn bg-green text-white"
                  id="basic-addon2"
                  onClick={() => {
                    setRandomPassword(
                      randomCrypto({ length: 10, type: "alphanumeric" })
                    );
                  }}
                >
                  <FaSyncAlt />
                </span>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Select role
            </label>
            <select
              className="form-select"
              id="role"
              name="role"
              required
              onChange={(e) => {
                setUser((d) => ({ ...d, role: e.target.value }));
                handleRoleChange(e);
              }}
            >
              <option value="">select role</option>
              <option value="Student">Student</option>
              <option value="Trainer">Trainer</option>
            </select>
          </div>
          {user.role === "Student" ? (
            <div className="mb-3">
              <label htmlFor="trainer" className="form-label">
                Select Trainer
              </label>
              <select
                className="form-select"
                id="trainer"
                name="trainer"
                required
                onChange={(e) =>
                  setUser((d) => ({ ...d, trainer: e.target.value }))
                }
              >
                <option value="">select trainer</option>
                {trainers.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.username}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}
          {user.role === "Student" ? (
            <div className="mb-3">
              <label htmlFor="trainer" className="form-label">
                Select Courses
              </label>
              <div className="p-2 border rounded">
                {courses.map((item, index) => {
                  return (
                    <div
                      className="form-check form-check-inline my-1 mx-2"
                      key={index}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`checkbox${index}`}
                        onChange={(e) => {
                          handleCheckChange(e, item._id);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`checkbox${index}`}
                      >
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          <button type="submit" className="btn btn-submit mt-4">
            Add User
          </button>
          <button type="reset" className="btn btn-secondary ms-3 mt-4">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
