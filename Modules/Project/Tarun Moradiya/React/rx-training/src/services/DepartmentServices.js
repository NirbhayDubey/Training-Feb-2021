import axios from "axios";

const Department_API_BASE_URL = `${process.env.REACT_APP_URL}/departments`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class DepartmentGroupService {
  getDepartments() {
    return axios.get(Department_API_BASE_URL, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createDepartment(department) {
    console.log("sending", department);
    return axios.post(Department_API_BASE_URL, department, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getDepartmentById(departmentId) {
    return axios.get(Department_API_BASE_URL + "/" + departmentId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateDepartment(departmentId, department) {
    return axios.put(Department_API_BASE_URL + "/" + departmentId, department, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deleteDepartment(departmentId) {
    return axios.delete(Department_API_BASE_URL + "/" + departmentId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  setPermissions(departmentId, permissions) {
    return axios.post(
      Department_API_BASE_URL + "/" + departmentId + "/permissions",
      permissions,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
}

export default new DepartmentGroupService();
