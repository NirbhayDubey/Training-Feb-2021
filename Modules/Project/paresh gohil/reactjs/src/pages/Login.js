import React, { useState } from 'react'
import "../css/Login.scss"

const Login = () => {
    const [User_Email,setEmail] = useState("")
    const [User_Password,setPassword] = useState("")

    const [arrow,setArrow] = useState("")
    const [display1,setDisplay1] = useState("")
    const [display2,setDisplay2] = useState("none")
    const [display3,setDisplay3] = useState("none")
    const [display4,setDisplay4] = useState("none")
    const [show,setShow] = useState("")
    const [hide,setHide] = useState("none")
    const [password,setPsd] = useState("password")

    const handleArrow = () => {
        if(arrow === ""){
            setArrow("goleft")
        }
        else{
            setArrow("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleDisplay = (e) => {
        if(e.target.id === "btnStep1"){
            setDisplay1("none")
            setDisplay2("")
        }
        else if(e.target.id === ""){
            setDisplay1("")
            setDisplay2("none")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleShowhide = (e) => {
        if(e.target.id === "showPassword"){
            setShow("none")
            setHide("")
            setPsd("text")
        }
        else if(e.target.id === "hidePassword"){
            setShow("")
            setHide("none")
            setPsd("password")
        }
    }

    return (
        <div class="web-page">
            <div class={`web-page__left ${arrow}`}>
                <div class="web-page__left__data">
                    <div class={`web-page__left__arrow ${arrow}`} onClick={handleArrow}></div>
                    <h3 class="web-page__left__heading">
                        Things you Can Do with<br/>Magicbricks Account
                    </h3>
                    <ul>
                        <li>Post one Single Property for FREE</li>
                        <li>Set property alerts for your requirement </li>
                        <li>Get accessed by over 1 Lakh buyers </li>
                        <li>Showcase your property as Rental, PG or for Sale</li>
                        <li>Get instant queries over Phone, Email and SMS</li>
                        <li>Performance in search &amp; Track responses &amp; views online </li>
                        <li>Add detailed property information &amp; multiple photos per listing</li>
                    </ul>
                </div>
            </div>

            <div class={`web-page__right ${arrow}`}>
                <div class="web-page__right__login">
                    
                        {/* <!--Login By Email or Mobile--> */}
                    <input type="hidden" id="actionType" value="login"/>
                    <div class="login-loader" id="login-loader" style={{display: "none"}}>
                        <div class="loader"></div>
                    </div>
                    <div class="login-container user-section" id="firstLoginDiv" style={{display: display1}}>
                        <div class="login-heading clearfix">
                            Login
                        </div>
                        <div class="m-login">
                            <div class="m-login__fieldset ">
                            {/* has-error */}
                                <input class="m-login__input" type="text" value={User_Email} id="emailOrMobile" name="emailOrMobile" maxlength="100" autocomplete="off" required="required" onChange={handleEmail}/>
                                <label class="m-login__label" for="emailOrMobile">
                                    Enter Email ID or Mobile No.
                                </label>
                                <input type="hidden" name="loginType" id="loginType" value="login-by-email"/>
                                <div id="step1Error" class="m-login__help-text" style={{display:"none"}}>Your Email ID is linked with Multiple Accounts. Please reach out to Customer Care 0124-4869300.</div>
                            </div>

                            <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                                <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" id="btnStep1" onClick={handleDisplay}>Next</button>
                            </div>

                            <div class="m-login__fieldset" style={{paddingBottom: "22px"}}>
                                <div class="m-login__need"><a href="#!" onclick="$('#needHelpOptions1').toggle();" class="help">Need help?</a></div>
                                <div class="m-login__need" id="needHelpOptions1" style={{display: "none"}}>
                                    <a href="#!" onclick="ga('send', 'event', 'Login', 'Login_Needhelp_forgotpassword', ''); goToNextScreen('firstLoginDiv', 'forgotPassword');" class="need-link">Forgot Password</a><br/>
                                    <a href="#!" onclick="ga('send', 'event', 'Login', 'Login_Needhelp_forgotusername', ''); goToNextScreen('firstLoginDiv', 'forgotUsername');" class="need-link">Forgot Username</a>
                                </div>
                            </div>

                            <div id="login-with-social">
                                <div class="m-login__fieldset">
                                    <div class="m-login__or">
                                        <div class="m-login__or__text">Or login using</div>
                                    </div>
                                </div>
                                <div class="m-login__fieldset">
                                    <div class="m-login__social clearfix">
                                        <div data-onlogin="facebookLogin();" data-scope="public_profile" auth_type="rerequest" class="m-login__social__item m-login__fb fb-login-button fb_iframe_widget" data-width="" data-height="" data-size="medium" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true" login_text="" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=269541370617852&amp;auth_type=rerequest&amp;auto_logout_link=false&amp;button_type=login_with&amp;container_width=120&amp;locale=en_US&amp;login_text=&amp;scope=public_profile&amp;sdk=joey&amp;size=medium&amp;use_continue_as=true&amp;width="><span style={{verticalAlign: "top", width: "0px", height: "0px", overflow: "hidden"}}><iframe name="f1c5092d83054e8" width="1000px" height="1000px" data-testid="fb:login_button Facebook Social Plugin" title="fb:login_button Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v3.2/plugins/login_button.php?app_id=269541370617852&amp;auth_type=rerequest&amp;auto_logout_link=false&amp;button_type=login_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df282ecad1b6c57c%26domain%3Daccounts.magicbricks.com%26origin%3Dhttps%253A%252F%252Faccounts.magicbricks.com%252Ff29196a4e1cde4%26relation%3Dparent.parent&amp;container_width=120&amp;locale=en_US&amp;login_text=&amp;scope=public_profile&amp;sdk=joey&amp;size=medium&amp;use_continue_as=true&amp;width=" style={{border: "none", visibility: "visible", width: "0px", height: "0px"}}></iframe></span></div>
                                        <div class="m-login__social__item m-login__g" id="my-signin2"><div style={{height: "28px", width: "240px"}} class="abcRioButton abcRioButtonBlue"><div class="abcRioButtonContentWrapper"><div class="abcRioButtonIcon" style={{padding: "4px"}}><div style={{width: "18px", height: "18px"}} class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div></div><span style={{fontSize: "11px", lineHeight: "26px"}} class="abcRioButtonContents"><span id="not_signed_indmzm2q3yvwpy">Sign in with Google</span><span id="connecteddmzm2q3yvwpy" style={{display: "none"}}>Signed in with Google</span></span></div></div></div>
                                    </div>
                                    <div id="socialLoginError" class="social-error"></div>
                                </div>
                            </div>
                        </div>
                        <div class="signup" id="signupid">
                            <div class="signup__text">
                                New to Magicbricks?
                                <a href="#!" id="popupSignupLink" style={{display: "none"}} onclick="ga('send', 'event', 'Login', 'Login_Signup', ''); goToNextScreen('firstLoginDiv', 'signUp'); isdOnloadSelectedVal('regMobileIsd','regMobileIsdText')" class="signup__link">Sign Up</a>

                                <a href="https://www.magicbricks.com/bricks/User-Registration1" id="normalSignupLink" style={{}} class="signup__link">Sign Up</a>
                            </div>
                        </div>
                    </div>

                    {/* <!--Login By Email and Password--> */}
                    <div class="login-container" style={{display: display2}} id="loginByEmailDiv">
                        <div class="login-heading clearfix">
                            <div class="login-back" onClick={handleDisplay}></div>
                            Login
                        </div>
                        <form action="loginuser" method="POST" id="loginForm" name="loginForm" novalidate="novalidate" onsubmit="return validateUserCrendential();">
                            <div class="m-login">
                                <div class="m-login__fieldset">
                                    <label class="m-login__label filled-value">
                                        Enter Email ID or Mobile No.
                                    </label>
                                    <div class="m-login__input checkUsernameField">{User_Email}</div>
                                </div>

                                <div class="m-login__fieldset" style={{paddingBottom: "25px"}}>
                                    <input class="m-login__input" type={password} value={User_Password} name="password" id="password" maxlength="14" autocomplete="off" onChange={handlePassword}/>
                                    <label class="m-login__label" for="password">
                                        Password
                                    </label>
                                    <input type="hidden" name="username" id="username" value="pk12@gmail.com"/>
                                    <a href="#" onClick={handleShowhide} id="showPassword" class="m-login__pass-show" style={{display: show}}>SHOW</a>
                                    <a href="#" style={{display: hide}} id="hidePassword" onClick={handleShowhide} class="m-login__pass-show">HIDE</a>
                                    <div class="m-login__help-text" id="pass_err"></div>
                                </div>

                                <div class="m-login__fieldset clearfix" style={{paddingBottom: "22px"}}>
                                    <div class="m-login__remember m-login__checkbox" style={{display: "none"}}>
                                        <input type="checkbox" class="m-login__checkbox__input" checked="checked" id="remember-me" name="remember-me" value="yes"/>
                                        <label class="m-login__checkbox__label" for="remember-me">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="m-login__forgot">
                                        <a href="#!" onclick="ga('send', 'event', 'Login', 'Login_Needhelp_forgotpassword', ''); goToNextScreen('loginByEmailDiv', 'forgotPassword');" class="help">Forgot Password?</a>
                                    </div>
                                </div>

                                <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                                    <button class="m-login__btn m-login__btn--primary m-login__btn--block" type="submit" id="btnLogin">Login</button>
                                </div>
                                
                                <div class="m-login__need"><a href="#!" onclick="$('#needHelpOptions2').toggle();" class="help">Need help?</a></div>
                                <div class="m-login__need" id="needHelpOptions2" style={{display: "none"}}>
                                    <a href="#!" onclick="ga('send', 'event', 'Login', 'Login_Needhelp_forgotpassword', ''); goToNextScreen('loginByEmailDiv', 'forgotPassword');" class="need-link">Forgot Password</a><br/>
                                    <a href="#!" onclick="ga('send', 'event', 'Login', 'Login_Needhelp_forgotusername', ''); goToNextScreen('loginByEmailDiv', 'forgotUsername');" class="need-link">Forgot Username</a>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <!--Enter Mobile Number--> */}
                    <div class="login-container" style={{display: "none"}} id="enterMobileNumberDiv">
                        <div class="login-heading clearfix">
                            <div class="login-back" onclick="goToPreviousScreen();"></div>
                            Mobile Number
                        </div>
                        <div class="m-login__assistance pad-bottom-20" style={{fontSize: "14px", lineHeight: "normal"}}>No Mobile Number is linked with your account. Please enter your number to be updated in your profile.</div>
                        <div class="m-login">
                            <div class="m-login__fieldset">
                                <div class="m-login__country-isd">
                                    <select id="mobileIsd" name="mobileIsd" class="m-login__select"></select>
                                </div>
                                <input type="text" class="m-login__input m-login__mobile-no" name="mobileNo" id="mobileNo" value="" maxlength="12" autocomplete="off" required="required"/>
                                <label class="m-login__label m-login__label-no" for="mobileNo">
                                    Mobile Number
                                </label>
                                <div class="m-login__help-text" id="mobileNo_err"></div>
                            </div>
                            <button class="m-login__btn m-login__btn--primary m-login__btn--block" type="button" id="btnUpdateMobile" onclick="sendMobileOtp();">Update</button>
                        </div>
                    </div>

                    {/* <!--Email Verification Link Sent--> */}
                    <div class="login-container" style={{display: "none"}} id="emailIdVerificationLinkDiv">
                        <div class="login-heading clearfix">
                            Email Verification
                        </div>

                        <div class="m-login">
                            <div class="m-login__assistance pad-bottom-20">
                                A Verification Link has been sent to your Email ID <span id="maskedEmail" class="semibold"></span>. Check your Email &amp; click on the link to verify your account.			
                            </div>
                            <button class="m-login__btn m-login__btn--primary m-login__btn--block" type="button" onclick="storefingerprint('OauthLogin'); document.loginForm.submit();">Continue</button>
                        </div>
                    </div>

                    {/* <!--Enter alternate email id for Dummy User--> */}
                    <div class="login-container" style={{display: "none"}} id="enterAltEmailIdDiv">
                        <div class="login-heading clearfix">
                            Alternate Email
                        </div>

                        <div class="m-login__fieldset">
                            <input class="m-login__input" type="text" value="" id="altEmailId" name="altEmailId" maxlength="100" autocomplete="off"/>
                            <label class="m-login__label" for="altEmailId">
                                Enter Email Id
                            </label>
                            <input type="hidden" name="loginType" id="loginType" value=""/>
                            <div class="m-login__help-text" id="altEmailId_err"></div>
                        </div>
                        <button class="m-login__btn m-login__btn--primary m-login__btn--block" type="button" id="btnUpdateAltEmailId" onclick="sendVerificationLinkForAltEmailId();">Update</button>
                    </div>

                    {/* <!--Verification Code--> */}
                    <div class="login-container" style={{display: "none", paddingBottom: "60px"}} id="verifyOtpDiv">
                        <div class="login-heading clearfix">
                            Verify
                        </div>
                        <div class="m-login">
                            <div class="m-login__fieldset" style={{paddingBottom: "20px"}}>
                                <div class="m-login__verify-label">Enter 4 digit Verification Code sent on</div>
                                <div class="m-login__email">
                                    <span class="email-number" id="maskedDetail"></span>
                                </div>
                            </div>
                            <div class="m-login__fieldset m-login__verify" style={{paddingLeft: "100px"}}>
                                <input type="text" maxlength="1" class="m-login__input verify-input-otp" id="verify01" autocomplete="off" onkeypress="detectEnterKey(event, verifyOtp);"/> 
                                <input type="text" maxlength="1" class="m-login__input verify-input-otp" id="verify02" autocomplete="off" onkeypress="detectEnterKey(event, verifyOtp);"/>
                                <input type="text" maxlength="1" class="m-login__input verify-input-otp" id="verify03" autocomplete="off" onkeypress="detectEnterKey(event, verifyOtp);"/>
                                {/* <!--input type="text" maxlength="1" class="m-login__input verify-input-otp" id="verify04" autocomplete="off" onKeyPress="detectEnterKey(event, verifyOtp);">
                                <input type="text" maxlength="1" class="m-login__input verify-input-otp" id="verify05" autocomplete="off" onKeyPress="detectEnterKey(event, verifyOtp);">
                                <input type="text" maxlength="1" class="m-login__input verify-input-otp" id="verify06" autocomplete="off" onKeyPress="detectEnterKey(event, verifyOtp);" --> */}
                                <div class="m-login__help-text" id="otp_error" style={{marginLeft: "-100px", width: "343px"}}>Error</div>
                            </div>
                            <div class="m-login__fieldset" style={{paddingBottom: "0px"}}>
                                <button type="button" onclick="verifyOtp()" class="m-login__btn m-login__btn--primary m-login__btn--block">
                                    Continue
                                </button>
                            </div>
                            <div id="timerDiv">You will receive OTP within <span id="timerSpan"></span> min</div>
                            <div class="resemdContHead">Did not get Verification Code?</div>
                            <div class="resemdCont rBorder wf" id="smsCodeSent"> <a href="javascript://" onclick="resendOtp(false);">Resend Code</a></div>
                            <div class="resemdCont ws" id="smsCodeSentOnCall"> <a href="javascript://" onclick="resendOtp(true);">Verify on Call</a></div>
                        </div>
                    </div>

                    {/* <!--Enter email id in case of multiple users share same mobile number--> */}
                    <div class="login-container" style={{display: "none"}} id="multipleUsersByMobile">
                        <div class="login-heading clearfix">
                            <div class="login-back" onclick="goToPreviousScreen();"></div>
                            Email Id
                        </div>

                        <div class="m-login">
                            <div class="m-login__fieldset" style={{paddingBottom: "20px"}}>
                                <div class="m-login__assistance pad-bottom-20">
                                    Your Mobile No. is associated with multiple IDs. Please select one ID you would want to associate this number with.
                                </div>
                                <div id="userEmailList" class="webkit__scroll"></div>
                            </div>
                            <div class="m-login__fieldset">
                                <input type="text" class="m-login__input" id="emailIdMultipleUsers" value="" maxlength="100" autocomplete="off"/>
                                <label class="m-login__label" for="emailIdMultipleUsers">
                                    Enter Email Id
                                </label>
                                <div class="m-login__help-text" id="emailIdMultipleUsersError">Error</div>
                            </div>
                            <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                                <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="validateEmailIdForMobileBasedMultipleUsers();">
                                    Proceed
                                </button>
                            </div>
                        </div>
                    </div>

                {/* <script>
                /* setTimeout(function () {
                    //var evt = document.createEvent('HTMLEvents');
                    evt.initEvent('resize', true, false);
                    window.dispatchEvent(evt);
                }, 1000); */
                // document.getElementById("emailOrMobile").focus(); 
                // $(document).ready(function(){
                // 	$("#login-loader").hide();
                // })
                // </script> */
                }

                        {/* <!--Username--> */}
                <div class="login-container" id="forgotUsername" style={{display: "none"}}>
                    <div class="login-heading clearfix" id="need-help-heading">
                        <div class="login-back" onclick="goToPreviousScreen(); $('#enter-mobile-username').val('');"></div>
                        Forgot Username
                    </div>

                    <div class="m-login">
                        <div class="m-login__fieldset">
                            <input type="text" class="m-login__input" id="enter-mobile-username" value="" autocomplete="off" maxlength="10"/>
                            <label class="m-login__label" for="enter-mobile-username">
                                Enter mobile number
                            </label>
                            <div class="m-login__help-text" id="forgot_username_err">Error</div>
                        </div>
                        <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                            <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="validateForgotUsername('enter-mobile-username','forgot_username_err');">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>

                <div class="login-container" style={{display: "none"}} id="forgotUsernameSuccess">
                    <div class="login-heading clearfix">
                        Account Assistance
                    </div>

                    <div class="m-login">
                        <div class="m-login__fieldset" style={{paddingBottom: "20px"}}>
                            <div class="m-login__assistance pad-bottom-20">
                                Your mobile number <span id="forgotUsername-mobile-div"></span> is associated with below username(s).
                                <br/>Select your username to sign in:
                            </div>
                            <div id="usernameList" class="webkit__scroll"></div>
                            <div class="m-login__help-text" id="forgotUsernameSelErr">Error</div>
                        </div>
                        <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                            <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="goToLogin();">
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Reset Password--> */}
                <div class="login-container" id="forgotPassword" style={{display: "none"}}>
                    <div class="login-heading clearfix">
                        <div class="login-back" onclick="goToPreviousScreen(); $('#enter-email-mobile-password').val('');"></div>
                        Forgot Password
                    </div>
                    <div class="m-login">
                        <div class="m-login__fieldset">
                            <input type="text" class="m-login__input" id="enter-email-mobile-password" autocomplete="off" onkeypress="detectEnterKey(event, validateForgotPassword('enter-email-mobile-password','forgot_pass_err'));"/>
                            <label class="m-login__label" for="enter-email-mobile-password">
                                Enter email id or mobile number
                            </label>
                            <div class="m-login__help-text" id="forgot_pass_err">Error</div>
                        </div>
                        <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                            <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="validateForgotPassword('enter-email-mobile-password','forgot_pass_err');">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Reset Password--> */}
                <div class="login-container" id="resetPassword" style={{display: "none"}}>
                    <div class="login-heading clearfix">
                        Reset Password
                    </div>
                    <div class="m-login">
                        <div class="m-login__fieldset">
                            <input type="password" class="m-login__input" id="enter-new-password" maxlength="14" autocomplete="off" onfocus="$('.pwdHints').show();" onblur="$('.pwdHints').hide();" onkeypress="detectEnterKey(event, resetPassword);"/>
                            <label class="m-login__label" for="enter-new-password">
                                Enter New Password
                            </label>
                            <div class="pwdHints" style={{display: "none"}}>
                                <div class="pwdHintsHead">Password Rules</div>
                                <ul>
                                    <li class="pwdHintsItem" id="pwdCharChk">Length must be between 8 to 14 characters.</li>
                                    <li class="pwdHintsItem" id="pwdNumChk">Must have at least 1 digit.</li>
                                    <li class="pwdHintsItem" id="pwdSpclChk">Must have at least 1 special character.</li>
                                    <li class="pwdHintsItem" id="pwdCapChk">Must have at least 1 alphabet.</li>
                                    <li class="pwdHintsItem" id="pwdWhtChk">Allowed special characters are !@#$%^&amp;*_.</li>
                                </ul>
                            </div>
                            <div class="m-login__help-text" id="enter-new-password-err">Error</div>
                        </div>
                        <div class="m-login__fieldset">
                            <input type="password" class="m-login__input" id="re-enter-new-password" maxlength="14" autocomplete="off" onkeypress="detectEnterKey(event, resetPassword);"/>
                            <label class="m-login__label" for="re-enter-new-password">
                                Re-enter New Password
                            </label>
                            <div class="m-login__help-text" id="re-enter-new-password-err">Error</div>
                        </div>
                        <div class="m-login__fieldset" style={{paddingBottom: "12px"}}>
                            <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="resetPassword();">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Thanks--> */}
                <div class="login-container" id="thanks" style={{display: "none"}}>
                    <div class="login-heading clearfix">
                        Thanks
                    </div>
                    <div class="m-login">
                        <div class="m-login__thanks">
                            <div class="m-login__thanks-icon"></div>
                            <div class="m-login__thanks-heading clearfix">
                                Your password has been updated successfully.
                            </div>
                            
                            <div class="m-login__thanks-text">
                                A confirmation email has been sent on			
                            </div>
                            <div class="m-login__thanks-email" id="mailSentOn">
                            </div>
                            <div class="clearfix">
                                <div class="m-login__thanks-proceed">
                                    Please Proceed to				
                                </div>
                                <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="window.location = 'login'; ">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                            
                    
                    {/* <!-- Begin comScore Tag -->
                    <script type="text/javascript">var _comscore = _comscore || [];_comscore.push({ c1: "2", c2: "6036484" });(function() {var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s, el);})();</script>
                    <noscript><img src="http://b.scorecardresearch.com/p?c1=2&c2=6036484&cv=2.0&cj=1" /></noscript> */}


                {/* <!-- End comScore Tag --> */}

                    <input type="hidden" name="sourceCnd" id="sourceCnd" value="19433"/>

                    <div class="login-container" id="signUp" style={{display: "none"}}>
                        <div class="login-heading clearfix">
                            <div class="login-back" onclick="goToPreviousScreen();"></div>
                            Sign Up
                        </div>

                        <div class="m-login">
                            <div class="m-login__fieldset" style={{paddingBottom: "24px"}}>
                                <div class="m-login__label m-login__label--inline">
                                    I am
                                </div>

                                <div class="m-login__remember m-login__radio mr-20">
                                    <input type="radio" name="regUsertype" id="regUsertype-owner" class="m-login__radio__input" value="I" required="required" onchange="customRadioButton(this);"/>
                                    <label class="m-login__radio__label" for="regUsertype-owner">
                                        Buyer/Owner
                                    </label>
                                </div>

                                <div class="m-login__remember m-login__radio mr-20">
                                    <input type="radio" name="regUsertype" id="regUsertype-agent" class="m-login__radio__input" value="A" required="required" onchange="customRadioButton(this);"/>
                                    <label class="m-login__radio__label" for="regUsertype-agent">
                                        Agent
                                    </label>
                                </div>

                                <div class="m-login__remember m-login__radio">
                                    <input type="radio" name="regUsertype" id="regUsertype-builder" class="m-login__radio__input" value="B" required="required" onchange="customRadioButton(this);"/>
                                    <label class="m-login__radio__label" for="regUsertype-builder">
                                        Builder
                                    </label>
                                </div>
                                <div id="regUsertypeError" class="m-login__help-text"></div>
                            </div>
                        
                            <div class="m-login__fieldset">
                                <input type="text" id="regName" class="m-login__input" maxlength="30" required="required"/>
                                <label class="m-login__label" for="regName">
                                    Name
                                </label>
                                <div class="m-login__help-text" id="regNameError">Error</div>
                            </div>

                            <div class="m-login__fieldset">
                                <input type="text" class="m-login__input" id="regEmailid" name="regEmailid" onblur="checkEmailIdExists();" maxlength="100" required="required"/>
                                <label class="m-login__label" for="regEmailid">
                                    Email
                                </label>
                                <div class="m-login__help-text" id="regEmailidError">Error</div>
                            </div>

                            <div class="m-login__fieldset" style={{paddingBottom: "25px"}}>
                                <input type="password" id="regPassword" name="regPassword" class="m-login__input" maxlength="14" onfocus="$('.pwdHints').show();" onblur="$('.pwdHints').hide();" autocomplete="off" required="required"/>
                                <label class="m-login__label" for="regPassword">
                                    Password
                                </label>
                                <a href="#!" class="m-login__pass-show showPassword">SHOW</a>
                                
                                <div class="pwdHints" style={{display: "none"}}>
                                    <div class="pwdHintsHead">Password Rules</div>
                                    <ul>
                                        <li class="pwdHintsItem" id="pwdCharChk">Length must be between 8 to 14 characters.</li>
                                        <li class="pwdHintsItem" id="pwdNumChk">Must have at least 1 digit.</li>
                                        <li class="pwdHintsItem" id="pwdSpclChk">Must have at least 1 special character.</li>
                                        <li class="pwdHintsItem" id="pwdCapChk">Must have at least 1 alphabet.</li>
                                        <li class="pwdHintsItem" id="pwdWhtChk">Allowed special characters are !@#$%^&amp;*_.</li>
                                    </ul>
                                </div>
                                <div class="m-login__help-text" id="regPasswordError">Error</div>
                            </div>

                            <div class="m-login__fieldset">
                                <div class="m-login__country-isd">
                                    <div class="country-code" id="regMobileIsdText" onclick="openIsdDrop(event, 'regMobileIsdUi');"></div>
                                    <ul class="webkit__scroll" id="regMobileIsdUi" style={{display: "none"}}>
                                        
                                            <li onclick="isdSetSelectedVal(this, 'regMobileIsd', 'regMobileIsdText');" value="50" class="selected">IND +91</li>
                                        
                                            <li onclick="isdSetSelectedVal(this, 'regMobileIsd', 'regMobileIsdText');" value="51">USA +1</li>
                                        
                                            <li onclick="isdSetSelectedVal(this, 'regMobileIsd', 'regMobileIsdText');" value="53">ARE +971</li>
                                        
                                            <li onclick="isdSetSelectedVal(this, 'regMobileIsd', 'regMobileIsdText');" value="54">CAN +1</li>
                                        
                                            <li onclick="isdSetSelectedVal(this, 'regMobileIsd', 'regMobileIsdText');" value="55">AUS +61</li>
                                        
                                            <li onclick="isdSetSelectedVal(this, 'regMobileIsd', 'regMobileIsdText');" value="56">PAK +92</li>
                                        
                                        
                                    </ul>

                                    <select class="m-login__select" id="regMobileIsd" name="regMobileIsd" style={{display: "none"}}>
                                        
                                            <option value="50" selected="selected">IND +91</option>
                                        
                                            <option value="51">USA +1</option>
                                        
                                            <option value="53">ARE +971</option>
                                        
                                            <option value="54">CAN +1</option>
                                        
                                            <option value="55">AUS +61</option>
                                        
                                            <option value="56">PAK +92</option>
                                        
                                        
                                    </select>
                                </div>
                                <input type="text" id="regMobile" name="regMobile" class="m-login__input m-login__mobile-no" onblur="checkMobileExists();" maxlength="10" required="required"/>
                                <label class="m-login__label m-login__label-no" for="regMobile">
                                    Mobile Number
                                </label>
                                <div class="m-login__help-text" id="regMobileError">Error</div>
                            </div>


                        <div style={{clear: "both"}}></div>
                        <div class="whatsapp-row" id="whatsapp-row" style={{display: "none"}}>
                            <div class="chk-notification">
                                <input type="checkbox" name="chk-whatsapp" id="chk-whatsapp" value="Y" checked="checked"/> 
                                <label for="chk-whatsapp">I want to receive important updates on <span class="icon__whatsapp"></span>Whatsapp</label>
                            </div>
                        </div>

                        
                            <div class="m-login__disclaimer m-login__fieldset" style={{paddingBottom: "12px"}}> 
                                <div class="tc__checkbox">
                                <input type="checkbox" name="chk-TNC" id="chk-TNC" value="N"/> 
                                    <label for="chk-TNC">
                                        I agree to Magicbricks <a href="http://property.magicbricks.com/terms/terms.html" target="_blank">T&amp;C</a>, <a href="http://property.magicbricks.com/terms/terms.html" target="_blank">Privacy Policy</a>, &amp; <a href="http://property.magicbricks.com/terms/terms.html" target="_blank">Cookie Policy</a>
                                    </label>
                                </div>
                                <div class="m-login__help-text" id="tNCError">Error</div>
                            </div>
                            

                            <div class="m-login__fieldset" style={{paddingBottom: "24px"}}>
                                <button class="m-login__btn m-login__btn--primary m-login__btn--block" type="button" onclick="validateRegistration();">Sign Up</button>
                            </div>

                            <div class="m-login__fieldset" style={{paddingBottom: "0px"}}>
                                <div class="login-block">
                                    Already registered?
                                    <a href="javascript://" onclick="goToNextScreen('signUp', 'firstLoginDiv')" title="Login Now">Login Now</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                    {/* <!--Signup Thanks--> */}
                    <div class="login-container" id="signUp-thanks" style={{display: "none"}}>
                        <div class="m-login m-login--signup">
                            <div class="m-login__thanks" style={{padding: "25px 0px"}}>
                                
                                <div class="m-login__thanks-heading clearfix">
                                    <div class="m-login__thanks-icon"></div>
                                    Thank You
                                </div>

                                <div class="m-login__thanks-text">
                                    You have been registered successfully.
                                </div>
                                
                                <div class="clearfix">
                                    <button type="button" class="m-login__btn m-login__btn--primary m-login__btn--block" onclick="goToNextScreen('signUp-thanks', 'firstLoginDiv');">
                                        Login Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <script language="javascript" src="https://cdn.staticmb.com/magicservicestatic/js/gdpr.js"></script>
                        <script type="text/javascript">
                    if(parent.parentSourceCnd){ 
                    $("#sourceCnd").val(window.parent.document.getElementById('parentSourceCnd').value);
                    alert(window.parent.document.getElementById('parentSourceCnd').value);
                    }
                    
                    </script> */}

                        {/* <script type="javasctript">
                            document.cookie = "ACEGI_SECURITY_HASHED_REMEMBER_ME_COOKIE= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                        </script> */}
                    




                        </div>
                    </div>
        </div>   
 )
}


export default Login