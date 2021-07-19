import axios from "axios";

const user_API_BASE_URL = `${process.env.REACT_APP_URL}/users`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class UserServices {
  getUsers() {
    return axios.get(user_API_BASE_URL, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createUser(user) {
    console.log("sending", user);
    return axios.post(user_API_BASE_URL, user, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createUsers(users) {
    console.log("sending", users);
    return axios.post(user_API_BASE_URL + "/multiple", users, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  getUserInfo() {
    return axios.get(user_API_BASE_URL + "/me", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateUser(userId, user) {
    return axios.put(user_API_BASE_URL + "/" + userId, user, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  deleteUser(userId) {
    return axios.delete(user_API_BASE_URL + "/" + userId, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  setPermissions(userId, permissions) {
    return axios.post(
      user_API_BASE_URL + "/" + userId + "/permissions",
      permissions,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
}

export default new UserServices();
