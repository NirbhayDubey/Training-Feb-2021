import React, { useEffect, useState } from "react";
import CourseService from "../../services/CourseService";
import { useParams } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function Videos(props) {
  const { cname } = useParams();

  const [videos, setVideos] = useState([]);
  const [playvideo, setPlayvideo] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    CourseService.getVideos(cname, token)
      .then((res) => {
        if (res.data.length > 0) {
          setVideos(res.data);
        }
      })
      .catch((ex) => console.log(ex));
  }, []);

  const handlePlayVideo = (url) => {
    setPlayvideo(url);
  };

  return (
    <>
      {playvideo ? (
        <div className="playvideo">
          <div className="row">
            <div className="col-10 frame">
              <div
                className="close"
                onClick={() => {
                  setPlayvideo(null);
                }}
              >
                <FaTimes />
              </div>
              <figure>
                <video src={playvideo} className="my-2" controls></video>
              </figure>
            </div>
          </div>
        </div>
      ) : null}
      <div className="accordian" id="accordionVideos">
        {videos.map((item, index) => {
          return (
            <div className="accordion-item border-0 mb-2" key={item._id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button h5 color-dgreen"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#myacc" + index}
                  aria-expanded="true"
                  aria-controls={"myacc" + index}
                >
                  {item.topic}
                </button>
              </h2>
              <div
                id={"myacc" + index}
                className={
                  index === 0
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
                data-bs-parent="#accordionVideos"
              >
                <div className="accordion-body">
                  {item.videos.map((vid, index) => {
                    return (
                      <div
                        className="row mb-3"
                        key={index}
                        onClick={() => {
                          handlePlayVideo(vid);
                        }}
                      >
                        <div className="col-2 d-flex justify-content-center align-items-center color-green ms-3 playbtn">
                          <FaPlay className="fs-6" />
                        </div>
                        <div className="col d-flex align-items-center color-dback">
                          <h6 className="m-0" style={{ cursor: "pointer" }}>
                            {vid.split("/")[8].split(".")[0]}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
