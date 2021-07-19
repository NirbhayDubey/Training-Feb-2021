import './login.css';
import React from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserServices';
import { useState } from 'react';

function Login(props) {

	const [logindata, setLogindata] = useState({
		name: '',
		pwd: ''
	})

	const handleChange = e => {
		setLogindata({
			...logindata,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(logindata)
		const logindata1 = {
			UserName: logindata.name,
			Password: logindata.pwd
		}

		UserService.login(logindata1)
			.then(res => {
				console.log(res)
				localStorage.setItem('token', res.data.Token)
				localStorage.setItem('user', res.data.user)
				props.history.push('/home')
			})
			.catch(err => {
				console.log(err)
				window.alert('Incorrect credentials..\nPlease try again !!')
			})

		setLogindata({
			name: '',
			pwd: ''
		})
	}

	return (
		<>
			<div className="pb-10">
				<div className="container justify-content-center">
					<div className="header justify-content-center">
						<div className="row justify-content-center">
							<div className="d-none d-lg-block d-xl-block">
								<img src="images/abc.png" alt="instagram" className="phone" />
							</div>

							<div className="mt-5 bg-white" style={{ border: '1px solid #e6e6e6', height: '670px' }}>
								<div className=" text-center" style={{ width: '350px', margin: '10px', padding: '40px' }}>
									<img src="images/baw.png" alt="instagram" className="instagram-logo" style={{ width: "205px" }} />

									<form className="pb-2 pt-3" onSubmit={handleSubmit}>
										<div className="form-group pb-2">
											<input type="text" placeholder="Phone number, username, or email" className="form-control" name="name" value={logindata.name} onChange={handleChange} required />
										</div>
										<div className="form-group pb-2">
											<input type="password" placeholder="password" name="pwd" className="form-control" value={logindata.pwd} onChange={handleChange} required />
										</div>
										<button type="submit" className="btn btn-primary btn-block">
											Log In
										</button>
									</form>
									<p className="or">OR</p>
									<div className="fb1">

										<a href="https://www.facebook.com/login.php?" target="_blank">
											<img src="images/fb.png" className="fb-logo m-2"></img>Log In With Facebook
										</a>
									</div>
									<div class="forgot">
										<a href="#">Forgot password?</a>
									</div>
									<div class="signup">
										<p>Don't have an account?
											<Link to="/signup" className="pl-1 font-weight-bold" style={{ textDecoration: 'none' }}>
												Sign up
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
						<div className="links col-10 mx-auto col-lg-10 col-md-6 mt-5 text-center">
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
	);
}

export default Login;
