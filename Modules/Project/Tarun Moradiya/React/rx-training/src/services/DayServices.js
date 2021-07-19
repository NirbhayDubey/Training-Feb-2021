import axios from "axios";

const Day_API_BASE_URL = `${process.env.REACT_APP_URL}/plans`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class DayService {
  getDays(planId) {
    return axios.get(`${Day_API_BASE_URL}/${planId}/days`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createDay(planId, day) {
    console.log("sending", day);
    return axios.post(`${Day_API_BASE_URL}/${planId}/days`, day, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  addDays(planId, days) {
    console.log("sending", days);
    return axios.post(`${Day_API_BASE_URL}/${planId}/days/multiple`, days, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getdayById(planId, dayId) {
    return axios.get(`${Day_API_BASE_URL}/${planId}/days/${dayId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateday(planId, dayId, day) {
    return axios.put(`${Day_API_BASE_URL}/${planId}/days/${dayId}`, day, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deleteday(planId, dayId) {
    return axios.delete(`${Day_API_BASE_URL}/${planId}/days/${dayId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new DayService();
