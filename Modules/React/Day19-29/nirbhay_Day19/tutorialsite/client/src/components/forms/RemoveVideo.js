import React, { useState, useEffect } from "react";
import CourseService from "../../services/CourseService";
import formloader from "../../images/formloading.gif";
import "./form.scss";

export default function AddTrininigPlan() {
  const [coursevid, setCoursevid] = useState([]);
  const [chvids, setChvids] = useState({ videos: [] });
  const [dvids, setDvids] = useState([]);
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
    CourseService.getVideos(cname, token)
      .then((res) => {
        if (res.data) {
          setCoursevid(res.data);
        } else {
          setCoursevid([]);
        }
      })
      .catch((ex) => console.log(ex));
  };
  const handleTopicChange = (e) => {
    if (e.target.value !== "") {
      const tvid = coursevid.find((item) => item.topic === e.target.value);
      setChvids(tvid);
    } else {
      setChvids({ videos: [] });
    }
  };

  const handleVidcheck = (e, vid) => {
    const target = e.target;
    if (target.checked) {
      setDvids((d) => [...d, vid]);
    } else {
      const uvids = dvids.filter((item) => item !== vid);
      setDvids(uvids);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chvids.topic && dvids.length > 0) {
      setLoading(true);
      let upVideo = chvids;
      const videos = chvids.videos.filter((item) => !dvids.includes(item));
      upVideo.videos = videos;
      upVideo.dvideos = dvids;
      try {
        const res = await CourseService.removeVideo(upVideo);
        if (res.data.msg) {
          setConfirmBox(true);
        }
      } catch (ex) {
        console.log(ex);
      }
      document.getElementById("myform").reset();
      setCoursevid([]);
      setDvids([]);
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
            <div className="col-12 text-white h4">Deleting Videos...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                Videos removed successfully..
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
          Remove Videos
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
              <option value=" ">select course</option>
              {cnames.map((item, index) => {
                return (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="vtopic" className="form-label">
              Select videos topic
            </label>
            <select
              className="form-select"
              id="vtopic"
              name="vtopic"
              required
              onChange={handleTopicChange}
            >
              <option value="">select course</option>
              {coursevid.map((item, index) => {
                return (
                  <option value={item.topic} key={index}>
                    {item.topic}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="ppts" className="form-label">
              Select Videos
            </label>
            <div className="border rounded p-3">
              {chvids.videos.map((item, index) => {
                return (
                  <div className="form-check py-1" key={index}>
                    <input
                      type="checkbox"
                      id={"check" + index}
                      className="form-check-input p-2"
                      onChange={(e) => {
                        handleVidcheck(e, item);
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
            Remove Videos
          </button>
          <button type="reset" className="btn btn-secondary ms-3">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
