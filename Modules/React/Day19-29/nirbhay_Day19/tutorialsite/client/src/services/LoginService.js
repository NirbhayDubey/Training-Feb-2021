import axios from "axios";

const TUTORIAL_API_LOGIN_URL = "http://localhost:5000/";
const TUTORIAL_API_API_USER = "http://localhost:5000/api/user/";

class LoginService {
  getUser(token) {
    return axios.get(TUTORIAL_API_LOGIN_URL, {
      headers: {
        Authorization: token,
      },
    });
  }
  getSingleUser(id) {
    return axios.get(TUTORIAL_API_API_USER + id);
  }
  getTrainers() {
    return axios.get(TUTORIAL_API_API_USER);
  }

  postLogin(credentials) {
    return axios.post(TUTORIAL_API_LOGIN_URL, credentials);
  }
  postUser(user) {
    return axios.post(TUTORIAL_API_API_USER, user);
  }

  deleteUser(user) {
    return axios.delete(TUTORIAL_API_API_USER + user._id);
  }
}

export default new LoginService();
