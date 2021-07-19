import axios from "axios";

const user_API_BASE_URL = `${process.env.REACT_APP_URL}/auth`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class AuthService {
  login(credentials) {
    return axios.post(user_API_BASE_URL + "/login", credentials, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  changePassword(passwords) {
    return axios.patch(user_API_BASE_URL + "/change-password", passwords, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  resetPassword(password) {
    return axios.patch(user_API_BASE_URL + "/reset-password", password, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  recover(email) {
    return axios.post(user_API_BASE_URL + "/recover", email, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new AuthService();
