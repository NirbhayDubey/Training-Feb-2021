import axios from "axios";

const PLAN_API_BASE_URL = `${process.env.REACT_APP_URL}/plans`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class PlanService {
  getPlans() {
    return axios.get(PLAN_API_BASE_URL, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getTechPlans(techId) {
    return axios.get(`${PLAN_API_BASE_URL}/tech/${techId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createPlan(plan) {
    console.log("sending", plan);
    return axios.post(PLAN_API_BASE_URL, plan, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getPlanById(planId) {
    return axios.get(PLAN_API_BASE_URL + "/" + planId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updatePlan(planId, plan) {
    return axios.put(PLAN_API_BASE_URL + "/" + planId, plan, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deletePlan(planId) {
    return axios.delete(PLAN_API_BASE_URL + "/" + planId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new PlanService();
