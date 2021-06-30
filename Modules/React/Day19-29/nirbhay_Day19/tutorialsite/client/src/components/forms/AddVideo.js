import React, { useState, useEffect } from "react";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";

// import { storage } from "../../firebase/config";

export default function AddTrininigPlan() {
  const [coursevideos, setCoursevideos] = useState({
    id: "",
    topic: "",
    videos: [],
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
    const { id, videos, topic } = coursevideos;
    e.preventDefault();
    if (id && videos.length > 0 && topic) {
      setLoading(true);
      const upCvideos = [];

      // Uploading videos to cloudinary
      for (const video of videos) {
        const formdata = new FormData();
        formdata.append("file", video);
        formdata.append("upload_preset", "so9pztoe");
        const result = await CourseService.postVideos(formdata);
        upCvideos.push(result.data.url);
      }

      coursevideos.videos = upCvideos;
      try {
        const res = await CourseService.postCoursevideos(coursevideos);
        if (res) {
          console.log(res.data);
          setConfirmBox(true);
        }
      } catch (ex) {
        console.log(ex);
      }
      document.getElementById("myform").reset();
      setCoursevideos({
        id: "",
        topic: "",
        videos: [],
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
            <div className="col-12 text-white h4">Uploading Videos...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                Videos inserted successfully..
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
          Add Videos
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
                setCoursevideos((d) => ({ ...d, id: e.target.value }))
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
          <div className="mb-3">
            <label htmlFor="topic" className="form-label">
              Enter topic
            </label>
            <input
              type="text"
              name="topic"
              id="topic"
              className="form-control"
              required
              onChange={(e) =>
                setCoursevideos((d) => ({ ...d, topic: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="ppts" className="form-label">
              Select videos
            </label>
            <input
              type="file"
              name="videos"
              id="videos"
              className="form-control"
              required
              multiple
              onChange={(e) =>
                setCoursevideos((d) => ({ ...d, videos: e.target.files }))
              }
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Add Videos
          </button>
          <button type="reset" className="btn btn-secondary ms-3">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
