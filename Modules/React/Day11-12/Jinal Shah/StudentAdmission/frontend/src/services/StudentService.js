// https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:3000/student";

class StudentService {

   getStudents() {
      return axios.get(STUDENT_API_BASE_URL);
   }

   createStudent(student) {
      return axios.post(STUDENT_API_BASE_URL, student);
   }

   getStudentById(Enrollment) {
      return axios.get(STUDENT_API_BASE_URL + '/' + Enrollment);
   }

   updateStudent(student, Enrollment) {
      return axios.put(STUDENT_API_BASE_URL + '/' + Enrollment, student);
   }

   deleteStudent(Enrollment) {
      return axios.delete(STUDENT_API_BASE_URL + '/' + Enrollment);
   }
}

export default new StudentService()