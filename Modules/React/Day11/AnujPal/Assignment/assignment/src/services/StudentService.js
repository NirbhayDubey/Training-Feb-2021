import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:5000/getData";

class StudentService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  createStudent(Student) {
    return axios.post(STUDENT_API_BASE_URL, Student);
  }

  getStudentById(StudentId) {
    return axios.get(STUDENT_API_BASE_URL + "/" + StudentId);
  }

  updateStudent(Student, StudentId) {
    return axios.put(STUDENT_API_BASE_URL + "/" + StudentId, Student);
  }

  deleteStudent(StudentId) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + StudentId);
  }
}

export default new StudentService();
