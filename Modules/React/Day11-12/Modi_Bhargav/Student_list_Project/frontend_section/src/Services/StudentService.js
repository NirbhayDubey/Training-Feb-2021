import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:3001/student";

class StudentService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  createStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  getStudentById(enrollNumber) {
    return axios.get(STUDENT_API_BASE_URL + "/" + enrollNumber);
  }

  updateStudent(student, enrollNumber) {
    return axios.put(STUDENT_API_BASE_URL + "/" + enrollNumber, student);
  }

  deleteStudent(enrollNumber) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + enrollNumber);
  }
}

export default new StudentService();
