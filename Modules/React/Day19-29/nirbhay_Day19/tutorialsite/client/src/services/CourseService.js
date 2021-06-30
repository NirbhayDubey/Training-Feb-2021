import axios from "axios";

const TUTORIAL_API_COURSE_URL = "http://localhost:5000/course/";
const TUTORIAL_API_API_URL = "http://localhost:5000/api/course/";
const CLOUDNARY_IMG_UP =
  "https://api.cloudinary.com/v1_1/tutorialradix/image/upload";
const CLOUDNARY_RAW_UP =
  "https://api.cloudinary.com/v1_1/tutorialradix/raw/upload";

class CourseService {
  getcourse() {
    return axios.get(TUTORIAL_API_COURSE_URL);
  }
  getSingleCourse(name) {
    return axios.get(TUTORIAL_API_COURSE_URL + name);
  }
  getCoursesIn(courses) {
    return axios.post(TUTORIAL_API_COURSE_URL, courses);
  }

  getTrainingPlan(cname, token) {
    return axios.get(TUTORIAL_API_COURSE_URL + cname + "-training-plan", {
      headers: {
        Authorization: token,
      },
    });
  }
  getVideos(cname, token) {
    return axios.get(TUTORIAL_API_COURSE_URL + cname + "-videos", {
      headers: {
        Authorization: token,
      },
    });
  }
  getPpts(cname, token) {
    return axios.get(TUTORIAL_API_COURSE_URL + cname + "-ppts", {
      headers: {
        Authorization: token,
      },
    });
  }

  getDescussions(cname, token) {
    return axios.get(TUTORIAL_API_COURSE_URL + cname + "-discussion", {
      headers: {
        Authorization: token,
      },
    });
  }
  getPendingDescussions(cid) {
    return axios.get(TUTORIAL_API_API_URL + cid + "/discussion/pending");
  }

  postCourse(course) {
    return axios.post(TUTORIAL_API_API_URL, course);
  }
  postTrainingPlan(trainingplan) {
    return axios.post(
      TUTORIAL_API_API_URL + trainingplan.cid + "/trainingplan/",
      trainingplan
    );
  }
  postTplanXlsx(cid, tplans) {
    return axios.post(
      TUTORIAL_API_API_URL + cid + "/trainingplan/xlsx",
      tplans
    );
  }
  postCourseppt(cppt) {
    return axios.post(TUTORIAL_API_API_URL + cppt.id + "/ppt/", cppt);
  }
  postCoursevideos(cvideo) {
    return axios.post(TUTORIAL_API_API_URL + cvideo.id + "/video/", cvideo);
  }

  postDescussion(discuss) {
    return axios.post(
      TUTORIAL_API_API_URL + discuss.cid + "/discussion",
      discuss
    );
  }
  postDescussionReply(reply) {
    return axios.post(
      TUTORIAL_API_API_URL + reply.did + "/discussion/reply",
      reply
    );
  }

  postTrainingPlanImg(image) {
    return axios.post(CLOUDNARY_IMG_UP, image);
  }
  postPpts(ppt) {
    return axios.post(CLOUDNARY_RAW_UP, ppt);
  }
  postVideos(video) {
    return axios.post(CLOUDNARY_RAW_UP, video);
  }

  removeCourse(course) {
    return axios.delete(TUTORIAL_API_API_URL + course._id);
  }
  removeTplan(plan) {
    return axios.delete(
      TUTORIAL_API_API_URL + plan.cid + "/trainingplan/" + plan.tp_day
    );
  }
  removePpt(cppt) {
    return axios.put(
      TUTORIAL_API_API_URL + cppt.cid + "/ppt/" + cppt._id,
      cppt
    );
  }
  removeVideo(cvideo) {
    return axios.put(
      TUTORIAL_API_API_URL + cvideo.cid + "/video/" + cvideo._id,
      cvideo
    );
  }
}
export default new CourseService();
