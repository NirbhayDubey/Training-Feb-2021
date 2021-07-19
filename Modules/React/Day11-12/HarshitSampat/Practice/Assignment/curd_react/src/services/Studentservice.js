import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:3001/students";

class StudentService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  createStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  getStudentById(studentId) {
    return axios.get(STUDENT_API_BASE_URL + "/" + studentId);
  }

  updateStudent(student, studentId) {
    return axios.put(STUDENT_API_BASE_URL + "/" + studentId, student);
  }

  deleteStudent(employeeId) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + employeeId);
  }
} 

export default new StudentService()