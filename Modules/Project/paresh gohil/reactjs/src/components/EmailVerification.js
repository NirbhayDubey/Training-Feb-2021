import React,{useState} from 'react'
import "../css/Verificationotp.scss"
import {useHistory} from "react-router-dom"
import Property from '../services/Property'

const EmailVerification = (props) => {
    const [arrow,setArrow] = useState("")
    const [left,setLeft] = useState("")
    const [right,setRight] = useState("")
    const [focus1,setFocus1] = useState("")

    const [emailotp,setEmailotp] = useState(null)
 
    const history = useHistory()
    const {state} =  history.location

    console.log(state.otp)
    // const [sendotp,setSendotp] = useState(state.otp)

    const handleArrow = () => {
        if(arrow === "close"){
            setArrow("")
            setLeft("")
            setRight("")

        }
        else{
            setLeft("minus30")
            setRight("width100")
            setArrow("close")

        }
    }

    const handleFocus = (e) => {
        if(e.target.id === "otp"){
            setFocus1("inputFocused")
        }
        else{
            setFocus1("")
        }
    }

    const handleOtp = (e) => {
        setEmailotp(e.target.value)
    }

    const handleClick = () => {
        // Property.verifyOtp(emailotp).then((res) => {
        //     console.log(res)
        // })
        console.log(state.otp,emailotp)
        if(state.otp === parseInt(emailotp)){
            console.log("succesfully register")
        }
        else{
            console.log("wrong otp");
        }
    }

    const handleSubmit = () => {
        history.push("")
    }

    return (
        <div class="bodyWrap">
            <div id="wrapper">
                <div class="contentArea">
                <div class={`leftPanel ${left}`}>
            <div class="leftCont">
            <span class={`arrow ${arrow}`} onClick={handleArrow}></span>
                <h3>Things you Can Do with<br/>Magicbricks Account</h3>
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
        <div class={`rightPanel ${right}`} onClick={handleFocus}>
            <div class="formCont">
                <div class="heading">Verify</div>
                <div class="formRow">
                    <p>Enter 4 digit Verification code sent on <strong>xyz@gmail.com</strong>
                    </p>
                </div>
                {/* action="/user/otp" method="POST" onsubmit="return validateOTPForm();" */}
                <form id="registrationForm" name="smsOtpForm" onSubmit={handleSubmit}>
                <div class="formRow">
                    <div class={`formField ${focus1}`}>
                        <label class="labelText">Enter Verification Code</label>
                        <input type="password" inputMode="numeric" name="otp" id="otp" autocomplete="off" value={emailotp} onClick={handleFocus} onChange={handleOtp} class="inputText" length="4"/>
                    </div>
                    <div class="errorMsg" id="userInputErr"><span class="errorIcon"></span></div>
                </div>
                <input type="hidden" id="fingerprint" name="fingerprint" value=""/>
                <input type="hidden" id="browserName" name="browserName" value=""/>
                <input type="hidden" id="currentUrl" name="currentUrl" value=""/>
                <input type="hidden" id="userCookies" name="userCookies" value=""/>
                <input type="hidden" name="mobile" id="mobilenumber" value="IGCJ4JJlrqtByEDBaMMY g=="/>
                <input type="hidden" name="userType" id="userType" value="I"/>
                <input type="hidden" name="purpose" id="purpose" value="verify"/>
                <input type="hidden" name="email" id="email" value="q5YzTFQ6flp5 P yY6qgVZp4eZvWq1mk"/>
                <input id="ubimobile1" name="ubimobile1" type="hidden" value=""/>
                <div class="formRow btnField">
                    <button type="submit" class="mui-btn mui-btn--primary linkGetPass" id="errorValidOtp" onClick={handleClick}>Submit</button>
                </div>
                <div class="formRow btnWrap otpPageText">
                    <p>Didn't get Verification Code?</p>
                </div>
                <ul class="requestText oneElement">
                    <li><span class="loginSprite codeIcon"></span>
                    <a href="javascript:void(0);" id="resendOTP" class="linkVeriNum">Resend Code</a></li>
                </ul>
                    </form>
                </div>
                <div class="clr"></div>
            </div>  
        </div>
        </div>
        </div>
            )
}

export default EmailVerification