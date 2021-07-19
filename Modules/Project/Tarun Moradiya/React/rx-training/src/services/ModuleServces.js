import axios from "axios";

const Tech_API_BASE_URL = `${process.env.REACT_APP_URL}/modules`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class ModuleService {
  getModules() {
    return axios.get(Tech_API_BASE_URL, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createModule(module) {
    console.log("sending", module);
    return axios.post(Tech_API_BASE_URL, module, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getModuleById(moduleId) {
    return axios.get(Tech_API_BASE_URL + "/" + moduleId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateModule(moduleId, module) {
    return axios.put(Tech_API_BASE_URL + "/" + moduleId, module, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deleteModule(moduleId) {
    return axios.delete(Tech_API_BASE_URL + "/" + moduleId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new ModuleService();
