import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserServices'

const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
   let valid = true;
   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
   return valid;
};

function Signup(props) {

   const [users, setUsers] = useState({
      userID: "",
      userPWD: "",
      userName: "",
      email: "",
      location: "",
      dateOfBirth: "",
      gender: "",
      phoneNO: "",
      errors: {
         userID: "",
         userPWD: "",
         userName: "",
         email: "",
         location: "",
         gender: "",
         phoneNO: ""
      }
   })

   const [toggle, setToggle] = useState(false)

   const handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = users.errors;

      switch (name) {
         case 'userID':
            if (value.match(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)) {
               errors.userID = "";
            }
            else {
               errors.userID = "only character string allowed";
            }
            break;
         case 'userPWD':
            if (value.length < 4 || value.length > 12) {
               errors.userPWD = 'maximum password length is 12';
            }
            else {
               errors.userPWD = '';
            }
            break;
         case 'userName':
            if (value.match(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/)) {
               errors.userName = "";
            }
            else {
               errors.userName = "only character string allowed";
            }
            break;
         case 'email':
            errors.email =
               validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
            break;
         case 'location':
            if (value.match(/^[A-Za-z]{3,}$/)) {
               errors.location = "";
            }
            else {
               errors.location = "only character string allowed";
            }
            break;
         case 'phoneNO':
            if (value.length < 10 || value.length > 10) {
               errors.phoneNO = 'Phone number should contain only 10 digit';
            }
            else {
               errors.phoneNO = '';
            }
            break;
         default:
            break;
      }

      setUsers({
         ...users,
         [name]: value
      });

      if (users.userID === '' || users.userPWD === "" || users.userName === "" || users.email === "" || users.location === "" || users.dateOfBirth === "" || users.gender === "" || users.phoneNO === "") { }
      else { setToggle(true) }
   }

   const handleSubmit = e => {

      e.preventDefault();
      if (validateForm(users.errors)) {

         UserService.createAccount(users).then(res => {
            console.log(res);
         })
      } else {
         console.error('Invalid Form')
      }
   }

   const verify = () => {
      const otp = document.getElementById("otp").value
      console.log(otp)
      UserService.verify(otp).then(res => {
         console.log(res)
         if (res.data === 'You have entered wrong OTP') { window.alert('You entered Wrong otp \nVerify again') }
         else {
            window.alert('Account created successfully!! \nLog In to your account')
            props.history.push('/')
         }
      })
   }

   return (
      <>
         <div className="pb-10">
            <div className="container justify-content-center">
               <div className="header mx-auto justify-content-center">
                  <div className="row justify-content-center">
                     <div className="mx-auto bg-white mt-5 justify-content-center" style={{ border: '1px solid #e6e6e6' }}>

                        <div className=" text-center justify-content-center" style={{ width: '350px', margin: '10px', padding: '40px' }}>
                           <img src="images/baw.png" alt="instagram" className="instagram-logo" style={{ width: "205px" }} />
                           <p className="text-muted font-weight-bold">
                              Sign up to see photos and videos from your friends
                           </p>
                           <div className="fb1">
                              <button type="submit" className="btn btn-primary btn-block">
                                 <a href="https://www.facebook.com/" target="_blank" style={{ color: 'white' }}>
                                    <img src="images/fb2.png" className="fb-logo m-2" />
                                    Log In With Facebook
                                 </a>
                              </button>
                           </div>
                           <p className="or pt-3">OR</p>

                           <form className="pb-2 pt-3" onSubmit={handleSubmit}>

                              <div className="form-group pb-2">
                                 <input type="text" placeholder="user id" class="form-control" name="userID" onChange={handleChange} required />
                                 {users.errors.userID.length > 0 &&
                                    <span className="text-danger mt-3">{users.errors.userID}</span>}
                              </div>

                              <div className="form-group pb-2">
                                 <input type="password" placeholder="password" class="form-control" name="userPWD" onChange={handleChange} required />
                                 {users.errors.userPWD.length > 0 &&
                                    <span className="text-danger mt-3">{users.errors.userPWD}</span>}
                              </div>

                              <div className="form-group pb-2">
                                 <input type="text" placeholder="user name" class="form-control" name="userName" onChange={handleChange} required />
                                 {users.errors.userName.length > 0 &&
                                    <span className="text-danger mt-3">{users.errors.userName}</span>}
                              </div>

                              <div className="form-group pb-2">
                                 <input type="email" placeholder="email id" class="form-control" name="email" onChange={handleChange} required />
                                 {users.errors.email.length > 0 &&
                                    <span className="text-danger mt-3">{users.errors.email}</span>}
                              </div>

                              <div className="form-group pb-2">
                                 <input type="text" placeholder="location" class="form-control" name="location" onChange={handleChange} required />
                                 {users.errors.location.length > 0 &&
                                    <span className="text-danger mt-3">{users.errors.location}</span>}
                              </div>

                              <div className="form-group pb-2">
                                 <input type="date" class="form-control" name="dateOfBirth" onChange={handleChange} required />
                              </div>

                              <div className="form-group pb-2">
                                 <input type="text" placeholder="gender" class="form-control" name="gender" onChange={handleChange} required />
                              </div>

                              <div className="form-group pb-2">
                                 <input type="number" placeholder="phone no" class="form-control" name="phoneNO" onChange={handleChange} required />
                                 {users.errors.phoneNO.length > 0 &&
                                    <span className="text-danger mt-3">{users.errors.phoneNO}</span>}
                              </div>

                              <button type="submit" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" disabled={!toggle}>
                                 Sign Up
                              </button>

                           </form>

                           <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                 <div className="modal-content">
                                    <div className="modal-header text-center">
                                       <h5 classNames="modal-title font-weight-bold" id="exampleModalLabel">Verify Yourself</h5>
                                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                       </button>
                                    </div>
                                    <div class="modal-body">
                                       <form>
                                          <div class="form-group font-weight-bold font-size-large">
                                             <label for="username">Enter OTP you received in Email</label>
                                             <div className="row">
                                                <div className="col-3"></div>
                                                <div className="col-6">
                                                   <input type="text" className="form-control" id="otp" name="otp" />
                                                </div>
                                             </div>
                                          </div>
                                       </form>
                                    </div>
                                    <div className="modal-footer">
                                       <button type="button" className="btn btn-primary w-25" onClick={verify} data-dismiss="modal">Verify</button>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <small>
                              <p className="text-muted">By signing up, you agree to our
                                 <b>
                                    <a href="https://help.instagram.com/581066165581870" target="_blank" className="text-muted text-decoration-none"> Terms,
                                    </a>
                                    <a href="https://help.instagram.com/519522125107875" target="_blank" className="text-muted text-decoration-none"> Data Policy</a>
                                 </b> and<b>
                                    <a href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank" className="text-muted text-decoration-none"> Cookies Policy.</a>
                                 </b>
                              </p>
                           </small>

                           <div class="signup">
                              <p>Have an account?
                                 <Link to="/" className="pl-1 font-weight-bold" style={{ textDecoration: 'none' }}>
                                    Log In
                                 </Link>
                              </p>
                           </div>

                           <div class="apps">
                              <p>Get the app.</p>
                              <p class="icons row">
                                 <a href="https://apps.apple.com/in/app/instagram/id389801252" target="_blank">
                                    <img src="images/appstore.png" alt="appstore" className="app1" />
                                 </a>
                                 <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank">
                                    <img src="images/googleplay.png" alt="googleplay" className="app1" />
                                 </a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="links col-10 mx-auto mt-5 text-center">
                     <ul>
                        <li><a href="https://about.instagram.com/" target="_blank">ABOUT</a></li>
                        <li><a href="https://about.instagram.com/en_US/blog" target="_blank">BLOG</a></li>
                        <li><a href="https://about.instagram.com/about-us/careers" target="_blank">JOBS</a></li>
                        <li><a href="https://help.instagram.com/" target="_blank">HELP</a></li>
                        <li><a href="https://developers.facebook.com/docs/instagram" target="_blank">API</a></li>
                        <li><a href="https://help.instagram.com/519522125107875" target="_blank">PRIVACY</a></li>
                        <li><a href="https://help.instagram.com/581066165581870" target="_blank">TERMS</a></li>
                        <li><a href="https://www.instagram.com/directory/profiles/" target="_blank">TOP ACCOUNTS</a></li>
                        <li><a href="https://www.instagram.com/directory/hashtags/" target="_blank">HASHTAGS</a></li>
                        <li><a href="https://www.instagram.com/explore/locations/" target="_blank">LOCATIONS</a></li>
                     </ul>
                  </div>
                  <div className="copyright col-10 mx-auto col-lg-10 col-md-6 mb-5 text-center">
                     © 2021 Instagram from Facebook
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Signup

