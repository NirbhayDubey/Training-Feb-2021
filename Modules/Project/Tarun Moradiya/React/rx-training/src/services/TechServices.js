import axios from "axios";
const Tech_API_BASE_URL = `${process.env.REACT_APP_URL}/technologies`;

// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class TechService {
  getTechs() {
    return axios.get(Tech_API_BASE_URL, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createTech(tech) {
    console.log("sending", tech);
    return axios.post(Tech_API_BASE_URL, tech, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getTechById(techId) {
    return axios.get(`${Tech_API_BASE_URL}/${techId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateTech(techId, tech) {
    return axios.put(`${Tech_API_BASE_URL}/${techId}`, tech, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deleteTech(techId) {
    return axios.delete(`${Tech_API_BASE_URL}/${techId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new TechService();
