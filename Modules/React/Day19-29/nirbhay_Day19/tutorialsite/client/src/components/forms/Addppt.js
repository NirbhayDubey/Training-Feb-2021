import React, { useState, useEffect } from "react";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";

export default function AddTrininigPlan() {
  const [courseppts, setCourseppts] = useState({
    id: "",
    ppts: [],
  });
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
  }, []);

  const handleSubmit = async (e) => {
    const { id, ppts } = courseppts;
    e.preventDefault();
    if (id && ppts.length > 0) {
      setLoading(true);
      const upCppt = [];

      // Uploading ppts to cloudinary
      for (const ppt of ppts) {
        const formdata = new FormData();
        formdata.append("file", ppt);
        formdata.append("upload_preset", "asjicvxy");
        const result = await CourseService.postPpts(formdata);
        upCppt.push(result.data.url);
      }

      courseppts.ppts = upCppt;
      try {
        const res = await CourseService.postCourseppt(courseppts);
        if (res.data.msg) {
          setConfirmBox(true);
        }
      } catch (ex) {
        console.log(ex);
      }
      document.getElementById("myform").reset();
      setCourseppts({
        id: "",
        ppts: [],
      });
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
            <div className="col-12 text-white h4">Uploading PPTs...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                PPTs inserted successfully..
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
          Add PPTs
        </h5>
        <form
          onSubmit={handleSubmit}
          className="px-lg-5 py-3"
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
              onChange={(e) =>
                setCourseppts((d) => ({ ...d, id: e.target.value }))
              }
            >
              <option value="">select course</option>
              {cnames.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
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
            <input
              type="file"
              name="ppts"
              id="ppts"
              className="form-control"
              required
              multiple
              onChange={(e) =>
                setCourseppts((d) => ({ ...d, ppts: e.target.files }))
              }
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Add PPTs
          </button>
          <button type="reset" className="btn btn-secondary ms-3">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
