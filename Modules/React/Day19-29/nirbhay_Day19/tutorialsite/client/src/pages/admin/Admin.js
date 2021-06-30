import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import AddCourse from "../../components/forms/AddCourse";
import RemoveCourse from "../../components/forms/RemoveCourse";
import AddStudent from "../../components/forms/AddStudent";
import RemoveStudent from "../../components/forms/RemoveStudent";
import AddTrainingPlan from "../../components/forms/AddTrininigPlan";
import AddTplanXlsx from "../../components/forms/AddTplanXlsx";
import UpdateTrainingPlan from "../../components/forms/UpdateTrainingPlan";
import RemoveTrainingPlan from "../../components/forms/RemoveTrainingPlan";
import Addppts from "../../components/forms/Addppt";
import Removeppts from "../../components/forms/Removeppt";
import AddVideo from "../../components/forms/AddVideo";
import RemoveVideo from "../../components/forms/RemoveVideo";
import jwt_decode from "jwt-decode";
import LoginService from "../../services/LoginService";
import {
  FaHome,
  FaLaptopCode,
  FaCalendarAlt,
  FaVideo,
  FaFileAlt,
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import "./admin.scss";

export default function Admin(props) {
  const [renderDashboard, setRenderDashboard] = useState();
  const [selected, setSelected] = useState({ ch: "", op: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        if (decoded.role === "Trainer") {
          LoginService.getUser(token)
            .then((res) => {
              if (!res.data.msg) {
                props.history.push("/");
              } else {
                handleChoice("dashboard", "");
                setSelected({ ch: "dashboard", op: "" });
              }
            })
            .catch((ex) => console.log(ex));
        } else {
          props.history.push("/");
        }
      }
    } else {
      props.history.push("/");
    }
  }, []);

  const handleChoice = (choice, operation) => {
    switch (choice) {
      case "dashboard":
        setRenderDashboard(<Dashboard />);
        break;
      case "user":
        if (operation === "add") {
          setRenderDashboard(<AddStudent />);
        }
        if (operation === "update") {
        }
        if (operation === "remove") {
          setRenderDashboard(<RemoveStudent />);
        }
        break;
      case "course":
        if (operation === "add") {
          setRenderDashboard(<AddCourse />);
        }
        if (operation === "remove") {
          setRenderDashboard(<RemoveCourse />);
        }
        break;
      case "trainingplan":
        if (operation === "add") {
          setRenderDashboard(<AddTrainingPlan />);
        }
        if (operation === "addxlsx") {
          setRenderDashboard(<AddTplanXlsx />);
        }
        if (operation === "update") {
          setRenderDashboard(<UpdateTrainingPlan />);
        }
        if (operation === "remove") {
          setRenderDashboard(<RemoveTrainingPlan />);
        }
        break;
      case "videos":
        if (operation === "add") {
          setRenderDashboard(<AddVideo />);
        }
        if (operation === "remove") {
          setRenderDashboard(<RemoveVideo />);
        }
        break;
      case "ppts":
        if (operation === "add") {
          setRenderDashboard(<Addppts />);
        }
        if (operation === "remove") {
          setRenderDashboard(<Removeppts />);
        }
        break;
      default:
    }
  };

  return (
    <>
      <div className="row g-0 dashboard pt-5 h-100">
        <div className="col-lg-2 leftbar py-4">
          <div className="accordion mt-5">
            <button
              className={
                selected.ch === "dashboard"
                  ? "accordion-item w-100 p-3 text-start border-0 bg-green"
                  : "accordion-item w-100 p-3 text-start border-0"
              }
              onClick={() => {
                handleChoice("dashboard", "");
                setSelected({ ch: "dashboard", op: "" });
              }}
            >
              <FaHome className="me-2 fs-5" /> Dashboard
            </button>

            <div className="accordion-item">
              <h6 className="accordion-header">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelZero"
                  aria-expanded="true"
                  aria-controls="panelZero"
                >
                  <FaUserFriends className="me-2 fs-5" /> User
                </button>
              </h6>
              <div className="accordion-collapse collapse" id="panelZero">
                <div className="accordion-body p-0 bg-lblue">
                  <button
                    className={
                      selected.ch === "user" && selected.op === "add"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("user", "add");
                      setSelected({ ch: "user", op: "add" });
                    }}
                  >
                    <FaUserPlus className="mx-2" /> Add user
                  </button>
                  <button
                    className={
                      selected.ch === "user" && selected.op === "update"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("user", "update");
                      setSelected({ ch: "user", op: "update" });
                    }}
                  >
                    <FaEdit className="mx-2" /> Update user
                  </button>
                  <button
                    className={
                      selected.ch === "user" && selected.op === "remove"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("user", "remove");
                      setSelected({ ch: "user", op: "remove" });
                    }}
                  >
                    <FaTrashAlt className="mx-2" /> Remove user
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h6 className="accordion-header">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelOne"
                  aria-expanded="true"
                  aria-controls="panelOne"
                >
                  <FaLaptopCode className="me-2 fs-5" /> courses
                </button>
              </h6>
              <div className="accordion-collapse collapse" id="panelOne">
                <div className="accordion-body p-0 bg-lblue">
                  <button
                    className={
                      selected.ch === "course" && selected.op === "add"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("course", "add");
                      setSelected({ ch: "course", op: "add" });
                    }}
                  >
                    <FaPlusCircle className="mx-2" /> Add course
                  </button>
                  <button
                    className={
                      selected.ch === "course" && selected.op === "remove"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("course", "remove");
                      setSelected({ ch: "course", op: "remove" });
                    }}
                  >
                    <FaTrashAlt className="mx-2" /> Remove course
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h6 className="accordion-header">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelTwo"
                  aria-expanded="true"
                  aria-controls="panelTwo"
                >
                  <FaCalendarAlt className="me-2 fs-5" /> Training Plan
                </button>
              </h6>
              <div className="accordion-collapse collapse" id="panelTwo">
                <div className="accordion-body p-0 bg-lblue">
                  <button
                    className={
                      selected.ch === "trainingplan" && selected.op === "add"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("trainingplan", "add");
                      setSelected({ ch: "trainingplan", op: "add" });
                    }}
                  >
                    <FaPlusCircle className="mx-2" /> Add plan
                  </button>
                  <button
                    className={
                      selected.ch === "trainingplan" &&
                      selected.op === "addxlsx"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("trainingplan", "addxlsx");
                      setSelected({ ch: "trainingplan", op: "addxlsx" });
                    }}
                  >
                    <FaPlusCircle className="mx-2" /> Add plan xlsx
                  </button>
                  <button
                    className={
                      selected.ch === "trainingplan" && selected.op === "update"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("trainingplan", "update");
                      setSelected({ ch: "trainingplan", op: "update" });
                    }}
                  >
                    <FaEdit className="mx-2" /> Update plan
                  </button>
                  <button
                    className={
                      selected.ch === "trainingplan" && selected.op === "remove"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("trainingplan", "remove");
                      setSelected({ ch: "trainingplan", op: "remove" });
                    }}
                  >
                    <FaTrashAlt className="mx-2" /> Remove plan
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h6 className="accordion-header">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelThree"
                  aria-expanded="true"
                  aria-controls="panelThree"
                >
                  <FaVideo className="me-2 fs-5" /> Videos
                </button>
              </h6>
              <div className="accordion-collapse collapse" id="panelThree">
                <div className="accordion-body p-0 bg-lblue">
                  <button
                    className={
                      selected.ch === "videos" && selected.op === "add"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("videos", "add");
                      setSelected({ ch: "videos", op: "add" });
                    }}
                  >
                    <FaPlusCircle className="mx-2" /> Add videos
                  </button>
                  <button
                    className={
                      selected.ch === "videos" && selected.op === "remove"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("videos", "remove");
                      setSelected({ ch: "videos", op: "remove" });
                    }}
                  >
                    <FaTrashAlt className="mx-2" /> Remove videos
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h6 className="accordion-header">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelFour"
                  aria-expanded="true"
                  aria-controls="panelFour"
                >
                  <FaFileAlt className="me-2 fs-5" /> PPTs
                </button>
              </h6>
              <div className="accordion-collapse collapse" id="panelFour">
                <div className="accordion-body p-0 bg-lblue">
                  <button
                    className={
                      selected.ch === "ppts" && selected.op === "add"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("ppts", "add");
                      setSelected({ ch: "ppts", op: "add" });
                    }}
                  >
                    <FaPlusCircle className="mx-2" /> Add ppts
                  </button>
                  <button
                    className={
                      selected.ch === "ppts" && selected.op === "remove"
                        ? "accordion-item w-100 ps-4 py-2 text-start bg-green"
                        : "accordion-item w-100 ps-4 py-2 text-start"
                    }
                    onClick={() => {
                      handleChoice("ppts", "remove");
                      setSelected({ ch: "ppts", op: "remove" });
                    }}
                  >
                    <FaTrashAlt className="mx-2" /> Remove ppts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 rightbar pt-4">{renderDashboard}</div>
      </div>
    </>
  );
}
