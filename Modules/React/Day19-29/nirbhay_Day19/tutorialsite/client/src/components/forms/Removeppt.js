import React, { useState, useEffect } from "react";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";

export default function AddTrininigPlan() {
  const [courseppts, setCourseppts] = useState({ ppts: [] });
  const [dppt, setDppt] = useState([]);
  const [cnames, setCnames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);

  useEffect(() => {
    CourseService.getcourse()
      .then((res) => {
        if (res.data) {
          setCnames(res.data);
        }
      })
      .catch((ex) => console.log(ex));
  }, [confirmBox]);

  const handleCourseChange = (e) => {
    const token = localStorage.getItem("token");
    const cname = e.target.value;
    CourseService.getPpts(cname, token)
      .then((res) => {
        if (res.data) {
          setCourseppts(res.data);
        } else {
          setCourseppts({ ppts: [] });
        }
      })
      .catch((ex) => console.log(ex));
  };

  const handlePptcheck = (e, ppt) => {
    const target = e.target;
    if (target.checked) {
      setDppt((d) => [...d, ppt]);
    } else {
      const uppts = dppt.filter((item) => item !== ppt);
      setDppt(uppts);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { cid } = courseppts;
    if (cid && dppt.length > 0) {
      setLoading(true);
      let upPpt = courseppts;
      const ppts = courseppts.ppts.filter((item) => !dppt.includes(item));
      upPpt.ppts = ppts;
      upPpt.dppts = dppt;
      try {
        const res = await CourseService.removePpt(upPpt);
        if (res.data.msg) {
          setConfirmBox(true);
        }
      } catch (ex) {
        console.log(ex);
      }
      document.getElementById("myform").reset();
      setCourseppts({
        ppts: [],
      });
      setDppt([]);
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
            <div className="col-12 text-white h4">Deleting PPTs...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                PPTs removed successfully..
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
          Remove PPTs
        </h5>
        <form
          onSubmit={handleSubmit}
          className="px-lg-5"
          method="post"
          id="myform"
        >
          <div className="mb-3">
            <label htmlFor="cname" className="form-label">
              Course name
            </label>
            <select
              className="form-select"
              id="cname"
              name="cname"
              required
              onChange={handleCourseChange}
            >
              <option value="">select course</option>
              {cnames.map((item, index) => {
                return (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="ppts" className="form-label">
              Select PPTs
            </label>
            <div className="border rounded p-3">
              {courseppts.ppts.map((item, index) => {
                return (
                  <div className="form-check py-1" key={index}>
                    <input
                      type="checkbox"
                      id={"check" + index}
                      className="form-check-input p-2"
                      onChange={(e) => {
                        handlePptcheck(e, item);
                      }}
                    />
                    <label
                      className="form-check-label fs-6 ms-2"
                      htmlFor={"check" + index}
                    >
                      {item.split("/")[8]}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <button type="submit" className="btn btn-submit">
            Remove PPTs
          </button>
          <button type="reset" className="btn btn-secondary ms-3">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
