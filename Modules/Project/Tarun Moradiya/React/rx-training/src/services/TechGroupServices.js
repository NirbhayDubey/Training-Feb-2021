import axios from "axios";

const TechGroup_API_BASE_URL = `${process.env.REACT_APP_URL}/techgroups`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class TechGroupService {
  getTechGroups() {
    return axios.get(TechGroup_API_BASE_URL, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createTechGroup(techGroup) {
    console.log("sending", techGroup);
    return axios.post(TechGroup_API_BASE_URL, techGroup, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getTechGroupById(techGroupId) {
    return axios.get(TechGroup_API_BASE_URL + "/" + techGroupId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateTechGroup(techGroupId, techGroup) {
    return axios.put(TechGroup_API_BASE_URL + "/" + techGroupId, techGroup, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deleteTechGroup(techGroupId) {
    return axios.delete(TechGroup_API_BASE_URL + "/" + techGroupId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new TechGroupService();
