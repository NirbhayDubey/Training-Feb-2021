import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:5000/home/netBanking";
const ACCOUNT_BASE_URL="http://localhost:5000/home/account"
const STATEMENT="http://localhost:5000/home/account/ministatement"
const ADMIN="http://localhost:5000/home/admin"
const Benificiary="http://localhost:5000/home/benificiary"

class LoginService {
  login(object) {
    return axios.post(LOGIN_BASE_URL + "/login",object);
  }

  signUp(object){
    return axios.post(LOGIN_BASE_URL + "/signUp",object);
  }
  getCustomer(CustomerId){
    return axios.get(LOGIN_BASE_URL + "/getCustomer/" + CustomerId);
  }
  getCustomerByCRN(obj){
    return axios.post(LOGIN_BASE_URL + "/getCustomerByCRN",obj );
  }

  credit(object){
    return axios.post(ACCOUNT_BASE_URL + "/credit",object);
  }
  loanApprove(object){
    return axios.post(ACCOUNT_BASE_URL + "/loanApprove",object);
  }
  AddBenificiary(object){
    return axios.post(Benificiary + "/addUser",object);
  }
  getBenificiary(){
    return axios.post(Benificiary + "/getBenificiery");
  }
  debit(object){
    return axios.post(ACCOUNT_BASE_URL + "/debit",object);
  }
  NEFT(object){
    return axios.post(ACCOUNT_BASE_URL + "/NEFT",object);
  }
  FDNEFT(object){
    return axios.post(ACCOUNT_BASE_URL + "/FDNEFT",object);
  }
  Delete(object){
    return axios.post(ACCOUNT_BASE_URL + "/delete",object);
  }
  MiniStatementById(object){
    return axios.post(ACCOUNT_BASE_URL + "/ministatementById",object);
  }
  GetLoans(object){
    return axios.post(ACCOUNT_BASE_URL + "/getLoans",object);
  }
  addNominee(object){
    return axios.post(ACCOUNT_BASE_URL + "/addNominee",object);
  }
  viewNominee(object){
    return axios.post(ACCOUNT_BASE_URL + "/viewNominee",object);
  }
  deleteNominee(object){
    return axios.post(ACCOUNT_BASE_URL + "/deleteNominee",object);
  }
  chequeBookRequest(object){
    return axios.post(ACCOUNT_BASE_URL + "/chequeBookRequest",object)
  }
  debitCardRequest(object){
    return axios.post(ACCOUNT_BASE_URL + "/debitCardRequest",object)
  }
  EMI(){
    return axios.post(ACCOUNT_BASE_URL + "/EMI")
  }
  MiniStatement(){
    return axios.post(STATEMENT );
  }
  getAllUser(){
    return axios.get(ADMIN + "/users")
  }
  getAllAdmin(){
    return axios.get(ADMIN + "/getAllAdmin")
  }
  
  AdminDelete(obj){
    return axios.post(ADMIN + "/delete",obj)
  }
  AdminRegister(obj){
    return axios.post(ADMIN + "/register",obj)
  }

  

//   createStudent(Student) {
//     return axios.post(STUDENT_API_BASE_URL, Student);
//   }

//   getStudentById(StudentId) {
//     return axios.get(STUDENT_API_BASE_URL + "/" + StudentId);
//   }

//   updateStudent(Student, StudentId) {
//     return axios.put(STUDENT_API_BASE_URL + "/" + StudentId, Student);
//   }

//   deleteStudent(StudentId) {
//     return axios.delete(STUDENT_API_BASE_URL + "/" + StudentId);
//   }
}

export default new LoginService();