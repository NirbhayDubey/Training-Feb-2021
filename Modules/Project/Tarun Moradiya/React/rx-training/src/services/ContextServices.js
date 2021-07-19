import axios from "axios";

const CONTEXT_API_BASE_URL = `${process.env.REACT_APP_URL}/plans`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class ContextService {
  getContexts(planId, dayId) {
    return axios.get(
      `${CONTEXT_API_BASE_URL}/${planId}/days/${dayId}/contexts`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  createContext(planId, dayId, context) {
    console.log("sending", context);
    return axios.post(
      `${CONTEXT_API_BASE_URL}/${planId}/days/${dayId}/contexts`,
      context,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  getContextById(planId, dayId, contextId) {
    return axios.get(
      `${CONTEXT_API_BASE_URL}/${planId}/days/${dayId}/contexts/${contextId}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  updateContext(planId, dayId, contextId, context) {
    return axios.put(
      `${CONTEXT_API_BASE_URL}/${planId}/days/${dayId}/contexts/${contextId}`,
      context,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  deleteContext(planId, dayId, contextId) {
    return axios.delete(
      `${CONTEXT_API_BASE_URL}/${planId}/days/${dayId}/contexts/${contextId}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
}

export default new ContextService();
