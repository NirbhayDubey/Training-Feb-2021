import React, { useState } from 'react'
import {Link,useHistory} from "react-router-dom"
import "../css/Register.scss"
import Property from '../services/Property'
import {v4 as uuidv4} from "uuid"

const Register = () => {

    const [User_Type,setUsertype] = useState("")
    const [UserName,setUsername] = useState("")
    const [User_Email,setEmail] = useState("")
    const [User_Mobile_No,setMobile] = useState(null)
    const [User_Password,setPassword] = useState("")

    const [arrow,setArrow] = useState("")
    const [left,setLeft] = useState("")
    const [right,setRight] = useState("")
    const [check1,setCheck1] = useState("")
    const [check2,setCheck2] = useState("")
    const [check3,setCheck3] = useState("")
    const [focus1,setFocus1] = useState("")
    const [focus2,setFocus2] = useState("")
    const [focus3,setFocus3] = useState("")
    const [focus4,setFocus4] = useState("")
    const [focus5,setFocus5] = useState("")
    const [mobilepre,setMobilepre] = useState("IND +91")
    const [error1,setError1] = useState("none")
    const [error2,setError2] = useState("none")
    const [error3,setError3] = useState("none")
    const [error4,setError4] = useState("none")
    const [error5,setError5] = useState("none")
    const [error6,setError6] = useState("none")
    const [Agree,setAgree] = useState("")
    const [urllink,setUrllink] = useState("/bricks/user/registration")
    const history = useHistory()

    const handleUser = async() => {
        const user = {
            UserID : uuidv4(),
            User_Type : User_Type,
            UserName : UserName,
            User_Mobile_No : User_Mobile_No,
            User_Email : User_Email,
            User_Password : User_Password
        }
        
        if(User_Type === ""){
            setError1("block")
            // setUrllink("/bricks/user/registration")
            // history.push("/bricks/user/registration")
        }
        if(UserName === ""){
            setError2("block")
            // setUrllink("/bricks/user/registration")
            // history.push("/bricks/user/registration")
        }
        if(User_Email === ""){
            setError3("block")
            // setUrllink("/bricks/user/registration")
            // history.push("/bricks/user/registration")
        }
        if(User_Password === ""){
            setError4("block")
            // setUrllink("/bricks/user/registration")
            // history.push("/bricks/user/registration")
        }
        if(User_Mobile_No === null){
            setError5("block")
            // setUrllink("/bricks/user/registration")
            // history.push("/bricks/user/registration")
        }
        if(Agree === ""){
            setError6("block")
            // setUrllink("/bricks/user/registration")
            // history.push("/bricks/user/registration")
        }
        if(User_Type !== "" && UserName !== "" && User_Email !== "" && User_Password !== "" && User_Mobile_No !== null && Agree !== ""){
            Property.createUser(user).then((res) => {
                console.log("user register",res.data)
                history.push("/bricks/user/registration-otp",{otp: res.data})
            })
            // setUrllink("/bricks/user/registration-otp")
            // await handleLink()
            // setUrllink("/bricks/user/registration-otp")
            // history.push("/bricks/user/registration-otp")
        }

    }

    // const handleLink = () => {
    //     // if(User_Type !== "" && UserName !== "" && User_Email !== "" && User_Password !== "" && User_Mobile_No !== null && Agree !== ""){
    //     //     history.push("/bricks/user/registration-otp")
    //     // }
    //     // else{
    //     //     history.push("/bricks/user/registration")
    //     // }
    //     // setUrllink("/bricks/user/registration-otp")
    //     history.push("/bricks/user/registration-otp")

    // }

    const handleAgree = () => {
        if(Agree === ""){
            setAgree("checked")
        }
        else if(Agree === "checked"){
            setAgree("")
        }
    }

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

    const handleCheck = (e) => {
        if(e.target.id === "ubiusertype1"){
            setCheck1("checked")
            setCheck2("")
            setCheck3("")
            setUsertype("Owner")
        }
        else if(e.target.id === "ubiusertype2"){
            setCheck1("")
            setCheck2("checked")
            setCheck3("")
            setUsertype("Agent")
        }
        else if(e.target.id === "ubiusertype3"){
            setCheck1("")
            setCheck2("")
            setCheck3("checked")
            setUsertype("Builder")
        }
        else{
            setCheck1("")
            setCheck2("")
            setCheck3("")
            setUsertype("")
        }

    }

    const handleFocus = (e) => {
        if(e.target.id === "ubifname"){
            setFocus1("inputFocused")
            // setFocus2("")
            // setFocus3("")
            // setFocus4("")
            // setFocus5("")
            // setUsername(e.target.value)            
            if(User_Email !== ""){
                setFocus2("inputFocused")
            }
            else setFocus2("")
            if(User_Password !== ""){
                setFocus3("inputFocused")
            }
            else setFocus3("")
            if(User_Mobile_No !== null){
                setFocus5("inputFocused")
            }
            else setFocus5("")
            if(mobilepre !== "IND +91"){
                setFocus4("inputFocused")
            }
            else setFocus4("")

        }
        else if(e.target.id === "ubiemail"){
            setFocus2("inputFocused")
            // setFocus3("")
            // setFocus4("")
            // setFocus5("")            
            // setEmail(e.target.value)
            if(UserName !== ""){
                setFocus1("inputFocused")
            }
            else setFocus1("")
            if(User_Password !== ""){
                setFocus3("inputFocused")
            }
            else setFocus3("")
            if(User_Mobile_No !== null){
                setFocus5("inputFocused")
            }
            else setFocus5("")
            if(mobilepre !== "IND +91"){
                setFocus4("inputFocused")
            }
            else setFocus4("")



        }
        else if(e.target.id === "ubipass"){
            // setFocus1("")
            // setFocus2("")
            setFocus3("inputFocused")
            // setFocus4("")
            // setFocus5("")          
            // setPassword(e.target.value)  
            if(UserName !== ""){
                setFocus1("inputFocused")
            }
            else setFocus1("")
            if(User_Email !== ""){
                setFocus2("inputFocused")
            }
            else setFocus2("")
            if(User_Mobile_No !== null){
                setFocus5("inputFocused")
            }
            else setFocus5("")
            if(mobilepre !== "IND +91"){
                setFocus4("inputFocused")
            }
            else setFocus4("")

        }
        else if(e.target.id === "isdCodeText"){
            // setFocus1("")
            // setFocus2("")
            // setFocus3("")
            setFocus4("inputFocused")
            // setFocus5("")            
            // setMobilepre(e.target.value)
            if(UserName !== ""){
                setFocus1("inputFocused")
            }
            else setFocus1("")
            if(User_Password !== ""){
                setFocus3("inputFocused")
            }
            else setFocus3("")
            if(User_Mobile_No !== null){
                setFocus5("inputFocused")
            }
            else setFocus5("")
            if(User_Email !== ""){
                setFocus2("inputFocused")
            }
            else setFocus2("")

        }
        else if(e.target.id === "ubimobile1"){
            // setFocus1("")
            // setFocus2("")
            // setFocus3("")
            // setFocus4("")
            setFocus5("inputFocused")  
            // setMobile(e.target.value)          
            if(UserName !== ""){
                setFocus1("inputFocused")
            }
            else setFocus1("")
            if(User_Password !== ""){
                setFocus3("inputFocused")
            }
            else setFocus3("")
            if(User_Email !== ""){
                setFocus2("inputFocused")
            }
            else setFocus2("")
            if(mobilepre !== "IND +91"){
                setFocus4("inputFocused")
            }
            else setFocus4("")

        }
        else{
            if(UserName !== ""){
                setFocus1("inputFocused")
            }
            else setFocus1("")
            if(User_Email !== ""){
                setFocus2("inputFocused")
            }
            else setFocus2("")

            if(User_Password !== ""){
                setFocus3("inputFocused")
            }
            else setFocus3("")
            if(mobilepre !== "IND +91"){
                setFocus4("inputFocused")
            }
            else setFocus4("")
            if(User_Mobile_No !== null){
                setFocus5("inputFocused")
            }
            else setFocus5("")

            // setFocus5("inputFocused")
            // setUsername("")
            // setEmail("")
            // setPassword("")
            // setMobilepre("")  
            // setMobile(null)          
        }

    }

    const handleInput = (e) => {
        if(e.target.id === "ubifname"){
            setUsername(e.target.value)            
        }
        else if(e.target.id === "ubiemail"){
            setEmail(e.target.value)
        }
        else if(e.target.id === "ubipass"){
            setPassword(e.target.value)  
        }
        else if(e.target.id === "isdCodeText"){
            setMobilepre(e.target.value)
        }
        else if(e.target.id === "ubimobile1"){
            setMobile(e.target.value)          
        }
        else{
            // setUsername("")
            // setEmail("")
            // setPassword("")
            // setMobilepre("")  
            // setMobile(null)          
        }

    }

    console.log(User_Type);
    console.log(UserName)
    console.log(User_Email)
    console.log(User_Mobile_No)
    console.log(User_Password)
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
                            {/* action="/bricks/user/registration/otp" method="POST" */}
                                <form id="registrationForm" name="registrationForm" >
                                <div class="registrationWrapper" id="signUp" style={{display: "block"}}>
                                    <div class="formCont">
                                        <div class="heading">
                                            Sign Up
                                        </div>
                                        <div class="formRow">
                                            <div class="formField">
                                                <div class="radioLabel fixCheckbox">I am</div>
                                                    <div class="radioBlock">
                                                        <ul>
                                                            <li>
                                                                <span class={`customRadioButton ${check1}`}>
                                                                    <input id="ubiusertype1" name="ubiusertype" style={{opacity: "0"}} onChange={handleCheck} type="radio" value="I" checked={check1}/>
                                                                </span>
                                                                <label class="curPoint" for="ubiusertype1">Buyer/Owner</label>
                                                            </li>
                                                            <li>
                                                                <span class={`customRadioButton ${check2}`}>
                                                                    <input id="ubiusertype2" name="ubiusertype" style={{opacity: "0"}} onChange={handleCheck} type="radio" value="A" checked={check2}/>
                                                                </span>
                                                                <label class="curPoint" for="ubiusertype2">Agent</label>
                                                            </li>
                                                            <li>
                                                                <span class={`customRadioButton ${check3}`}>
                                                                    <input id="ubiusertype3" name="ubiusertype" style={{opacity: "0"}} onChange={handleCheck} type="radio" value="B" checked={check3}/>
                                                                </span>
                                                                <label class="curPoint" for="ubiusertype3">Builder</label>
                                                            </li>
                                                            <br/>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="errorMsg" id="userTypeErr">
                                                    <span class="errorIcon"></span>
                                                </div>
                                                <div class="errorMsg" style={{display: error1,top:"-10px"}}>
                                                    <span id="ubifname.errors">Please select User type.</span>
                                                    <span class="errorIcon"></span>
                                                </div>

                                            </div>
                                            <div class="formRow">
                                                <div class={`formField ${focus1}`}>
                                                    <label class="labelText">
                                                        Name
                                                    </label>
                                                    <input id="ubifname" name="ubifname" class="inputText" type="text" value={UserName} onClick={handleFocus} onChange={handleInput}/>
                                                </div>
                                                <div class="errorMsg" id="nameErr">
                                                    <span class="errorIcon"></span>
                                                </div>
                                                <div class="errorMsg" style={{display: error2,top:"-18px"}}>
                                                    <span id="ubifname.errors">Compulsory field. Cannot be blank.</span>
                                                    <span class="errorIcon"></span>
                                                </div>
                                            </div>
                                            <div class="formRow">
                                                <div class={`formField ${focus2}`}>
                                                    <label class="labelText">
                                                        Email
                                                    </label>
                                                    <input id="ubiemail" name="ubiemail" class="inputText" onClick={handleFocus} onChange={handleInput} type="text" value={User_Email}/>
                                                </div>
                                                <div class="errorMsg" id="emailErr">
                                                    <span class="errorIcon"></span>
                                                </div>
                                                <div class="errorMsg" style={{display: error3,top:"-18px"}}>
                                                    <span id="ubifname.errors">Compulsory field. Cannot be blank.</span>
                                                    <span class="errorIcon"></span>
                                                </div>

                                            </div>
                                            <div class="formRow">
                                                <div class={`formField ${focus3}`}>
                                                    <label class="labelText">
                                                        Password
                                                    </label>
                                                    <input id="ubipass" name="ubipass" class="inputText" onfocus="$('.pwdHints').show();" onblur="$('.pwdHints').hide();" onClick={handleFocus} onChange={handleInput} type="password" value={User_Password} maxlength="14" autocomplete="off"/>
                                                    <a href="#!" class="showPassword">Show</a>
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
                                                </div>
                                                <div class="errorMsg" id="passwordErr">
                                                    <span class="errorIcon"></span>
                                                </div>
                                                <div class="errorMsg" style={{display: error4,top:"-10px"}}>
                                                    <span id="ubifname.errors">Please enter password.</span>
                                                    <span class="errorIcon"></span>
                                                </div>

                                            </div>
                                            <div class="formRow mobileField">
                                                <div class="isdCode">
                                                    <div class={`formField ${focus4}`} style={{marginTop:"0px"}}>
                                                        <label class="labelText"></label>
                                                        <input class="inputText city" type="button" value={mobilepre} id="isdCodeText" onClick={handleFocus} onChange={handleInput}/>
                                                        <span class="cityArrow"></span>
                                                        <div class="selectDropDown operatingDropDown" id="cityDropDown" style={{display: "none"}}>
                                                            <ul><li onclick="getCityVal(this,'cityDropDown')">IND +91</li><li onclick="getCityVal(this,'cityDropDown')">USA +1</li><li onclick="getCityVal(this,'cityDropDown')">ARE +971</li><li onclick="getCityVal(this,'cityDropDown')">SGP +65</li><li onclick="getCityVal(this,'cityDropDown')">SAU +966</li><li onclick="getCityVal(this,'cityDropDown')">CAN +1</li><li onclick="getCityVal(this,'cityDropDown')">AUS +61</li><li onclick="getCityVal(this,'cityDropDown')">QAT +974</li><li onclick="getCityVal(this,'cityDropDown')">OMN +968</li><li onclick="getCityVal(this,'cityDropDown')">HKG +852</li><li onclick="getCityVal(this,'cityDropDown')">AFG +93</li><li onclick="getCityVal(this,'cityDropDown')">AGO +244</li><li onclick="getCityVal(this,'cityDropDown')">AIA +264</li><li onclick="getCityVal(this,'cityDropDown')">ALB +355</li><li onclick="getCityVal(this,'cityDropDown')">AND +376</li><li onclick="getCityVal(this,'cityDropDown')">ANT +599</li><li onclick="getCityVal(this,'cityDropDown')">ARG +54</li><li onclick="getCityVal(this,'cityDropDown')">ARM +374</li><li onclick="getCityVal(this,'cityDropDown')">ASM +684</li><li onclick="getCityVal(this,'cityDropDown')">ATG +268</li><li onclick="getCityVal(this,'cityDropDown')">AZE +994</li><li onclick="getCityVal(this,'cityDropDown')">BDI +257</li><li onclick="getCityVal(this,'cityDropDown')">BFA +226</li><li onclick="getCityVal(this,'cityDropDown')">BGD +880</li><li onclick="getCityVal(this,'cityDropDown')">BHR +973</li><li onclick="getCityVal(this,'cityDropDown')">BHS +1242</li><li onclick="getCityVal(this,'cityDropDown')">BIH +387</li><li onclick="getCityVal(this,'cityDropDown')">BLR +375</li><li onclick="getCityVal(this,'cityDropDown')">BLZ +501</li><li onclick="getCityVal(this,'cityDropDown')">BMU +1441</li><li onclick="getCityVal(this,'cityDropDown')">BOL +591</li><li onclick="getCityVal(this,'cityDropDown')">BRA +55</li><li onclick="getCityVal(this,'cityDropDown')">BRB +1246</li><li onclick="getCityVal(this,'cityDropDown')">BRN +673</li><li onclick="getCityVal(this,'cityDropDown')">BTN +975</li><li onclick="getCityVal(this,'cityDropDown')">BWA +267</li><li onclick="getCityVal(this,'cityDropDown')">CAF +236</li><li onclick="getCityVal(this,'cityDropDown')">CHE +41</li><li onclick="getCityVal(this,'cityDropDown')">CHL +56</li><li onclick="getCityVal(this,'cityDropDown')">CHN +86</li><li onclick="getCityVal(this,'cityDropDown')">CIV +225</li><li onclick="getCityVal(this,'cityDropDown')">CMR +237</li><li onclick="getCityVal(this,'cityDropDown')">COD +243</li><li onclick="getCityVal(this,'cityDropDown')">COG +242</li><li onclick="getCityVal(this,'cityDropDown')">COK +682</li><li onclick="getCityVal(this,'cityDropDown')">COL +57</li><li onclick="getCityVal(this,'cityDropDown')">COM +269</li><li onclick="getCityVal(this,'cityDropDown')">CPV +238</li><li onclick="getCityVal(this,'cityDropDown')">CRI +506</li><li onclick="getCityVal(this,'cityDropDown')">CUB +53</li><li onclick="getCityVal(this,'cityDropDown')">CYM +345</li><li onclick="getCityVal(this,'cityDropDown')">DJI +253</li><li onclick="getCityVal(this,'cityDropDown')">DMA +767</li><li onclick="getCityVal(this,'cityDropDown')">DOM +1</li><li onclick="getCityVal(this,'cityDropDown')">DZA +213</li><li onclick="getCityVal(this,'cityDropDown')">ECU +593</li><li onclick="getCityVal(this,'cityDropDown')">EGY +20</li><li onclick="getCityVal(this,'cityDropDown')">ERI +291</li><li onclick="getCityVal(this,'cityDropDown')">ETH +251</li><li onclick="getCityVal(this,'cityDropDown')">FJI +679</li><li onclick="getCityVal(this,'cityDropDown')">FLK +500</li><li onclick="getCityVal(this,'cityDropDown')">FRO +298</li><li onclick="getCityVal(this,'cityDropDown')">FSM +691</li><li onclick="getCityVal(this,'cityDropDown')">GAB +241</li><li onclick="getCityVal(this,'cityDropDown')">GEO +995</li><li onclick="getCityVal(this,'cityDropDown')">GHA +233</li><li onclick="getCityVal(this,'cityDropDown')">GIB +350</li><li onclick="getCityVal(this,'cityDropDown')">GIN +224</li><li onclick="getCityVal(this,'cityDropDown')">GLP +590</li><li onclick="getCityVal(this,'cityDropDown')">GMB +220</li><li onclick="getCityVal(this,'cityDropDown')">GNB +245</li><li onclick="getCityVal(this,'cityDropDown')">GNQ +240</li><li onclick="getCityVal(this,'cityDropDown')">GRD +473</li><li onclick="getCityVal(this,'cityDropDown')">GRL +299</li><li onclick="getCityVal(this,'cityDropDown')">GTM +502</li><li onclick="getCityVal(this,'cityDropDown')">GUF +594</li><li onclick="getCityVal(this,'cityDropDown')">GUM +671</li><li onclick="getCityVal(this,'cityDropDown')">GUY +592</li><li onclick="getCityVal(this,'cityDropDown')">HND +504</li><li onclick="getCityVal(this,'cityDropDown')">HTI +509</li><li onclick="getCityVal(this,'cityDropDown')">IDN +62</li><li onclick="getCityVal(this,'cityDropDown')">IRN +98</li><li onclick="getCityVal(this,'cityDropDown')">IRQ +964</li><li onclick="getCityVal(this,'cityDropDown')">ISL +354</li><li onclick="getCityVal(this,'cityDropDown')">ISR +972</li><li onclick="getCityVal(this,'cityDropDown')">JAM +1</li><li onclick="getCityVal(this,'cityDropDown')">JOR +962</li><li onclick="getCityVal(this,'cityDropDown')">JPN +81</li><li onclick="getCityVal(this,'cityDropDown')">KAZ +7</li><li onclick="getCityVal(this,'cityDropDown')">KEN +254</li><li onclick="getCityVal(this,'cityDropDown')">KGZ +996</li><li onclick="getCityVal(this,'cityDropDown')">KHM +855</li><li onclick="getCityVal(this,'cityDropDown')">KIR +686</li><li onclick="getCityVal(this,'cityDropDown')">KNA +869</li><li onclick="getCityVal(this,'cityDropDown')">KOR +373</li><li onclick="getCityVal(this,'cityDropDown')">KWT +965</li><li onclick="getCityVal(this,'cityDropDown')">LAO +856</li><li onclick="getCityVal(this,'cityDropDown')">LBN +961</li><li onclick="getCityVal(this,'cityDropDown')">LBR +231</li><li onclick="getCityVal(this,'cityDropDown')">LBY +218</li><li onclick="getCityVal(this,'cityDropDown')">LCA +758</li><li onclick="getCityVal(this,'cityDropDown')">LIE +423</li><li onclick="getCityVal(this,'cityDropDown')">LKA +94</li><li onclick="getCityVal(this,'cityDropDown')">LSO +266</li><li onclick="getCityVal(this,'cityDropDown')">MAC +853</li><li onclick="getCityVal(this,'cityDropDown')">MAR +212</li><li onclick="getCityVal(this,'cityDropDown')">MCO +377</li><li onclick="getCityVal(this,'cityDropDown')">MDA +82</li><li onclick="getCityVal(this,'cityDropDown')">MDG +261</li><li onclick="getCityVal(this,'cityDropDown')">MDV +960</li><li onclick="getCityVal(this,'cityDropDown')">MEX +52</li><li onclick="getCityVal(this,'cityDropDown')">MKD +389</li><li onclick="getCityVal(this,'cityDropDown')">MLI +223</li><li onclick="getCityVal(this,'cityDropDown')">MMR +95</li><li onclick="getCityVal(this,'cityDropDown')">MNG +976</li><li onclick="getCityVal(this,'cityDropDown')">MOZ +258</li><li onclick="getCityVal(this,'cityDropDown')">MRT +222</li><li onclick="getCityVal(this,'cityDropDown')">MSR +664</li><li onclick="getCityVal(this,'cityDropDown')">MTQ +596</li><li onclick="getCityVal(this,'cityDropDown')">MUS +230</li><li onclick="getCityVal(this,'cityDropDown')">MWI +265</li><li onclick="getCityVal(this,'cityDropDown')">MYS +60</li><li onclick="getCityVal(this,'cityDropDown')">MYT +269</li><li onclick="getCityVal(this,'cityDropDown')">NAM +264</li><li onclick="getCityVal(this,'cityDropDown')">NCL +687</li><li onclick="getCityVal(this,'cityDropDown')">NER +227</li><li onclick="getCityVal(this,'cityDropDown')">NFK +672</li><li onclick="getCityVal(this,'cityDropDown')">NGA +234</li><li onclick="getCityVal(this,'cityDropDown')">NIC +505</li><li onclick="getCityVal(this,'cityDropDown')">NIU +683</li><li onclick="getCityVal(this,'cityDropDown')">NOR +47</li><li onclick="getCityVal(this,'cityDropDown')">NPL +977</li><li onclick="getCityVal(this,'cityDropDown')">NRU +674</li><li onclick="getCityVal(this,'cityDropDown')">NZL +64</li><li onclick="getCityVal(this,'cityDropDown')">PAK +92</li><li onclick="getCityVal(this,'cityDropDown')">PAN +507</li><li onclick="getCityVal(this,'cityDropDown')">PCN +649</li><li onclick="getCityVal(this,'cityDropDown')">PER +51</li><li onclick="getCityVal(this,'cityDropDown')">PHL +63</li><li onclick="getCityVal(this,'cityDropDown')">PNG +675</li><li onclick="getCityVal(this,'cityDropDown')">PRI +939</li><li onclick="getCityVal(this,'cityDropDown')">PRK +850</li><li onclick="getCityVal(this,'cityDropDown')">PRY +595</li><li onclick="getCityVal(this,'cityDropDown')">PYF +689</li><li onclick="getCityVal(this,'cityDropDown')">REU +262</li><li onclick="getCityVal(this,'cityDropDown')">RNR +260</li><li onclick="getCityVal(this,'cityDropDown')">RUS +7</li><li onclick="getCityVal(this,'cityDropDown')">RWA +250</li><li onclick="getCityVal(this,'cityDropDown')">SCG +381</li><li onclick="getCityVal(this,'cityDropDown')">SDN +249</li><li onclick="getCityVal(this,'cityDropDown')">SEN +221</li><li onclick="getCityVal(this,'cityDropDown')">SHN +290</li><li onclick="getCityVal(this,'cityDropDown')">SLB +677</li><li onclick="getCityVal(this,'cityDropDown')">SLE +232</li><li onclick="getCityVal(this,'cityDropDown')">SLV +503</li><li onclick="getCityVal(this,'cityDropDown')">SMR +378</li><li onclick="getCityVal(this,'cityDropDown')">SOM +252</li><li onclick="getCityVal(this,'cityDropDown')">SPM +508</li><li onclick="getCityVal(this,'cityDropDown')">STP +239</li><li onclick="getCityVal(this,'cityDropDown')">SUR +597</li><li onclick="getCityVal(this,'cityDropDown')">SWZ +268</li><li onclick="getCityVal(this,'cityDropDown')">SYC +248</li><li onclick="getCityVal(this,'cityDropDown')">SYR +963</li><li onclick="getCityVal(this,'cityDropDown')">TCA +649</li><li onclick="getCityVal(this,'cityDropDown')">TCD +235</li><li onclick="getCityVal(this,'cityDropDown')">TGO +228</li><li onclick="getCityVal(this,'cityDropDown')">THA +66</li><li onclick="getCityVal(this,'cityDropDown')">TJK +992</li><li onclick="getCityVal(this,'cityDropDown')">TKL +690</li><li onclick="getCityVal(this,'cityDropDown')">TKM +993</li><li onclick="getCityVal(this,'cityDropDown')">TLS +670</li><li onclick="getCityVal(this,'cityDropDown')">TON +676</li><li onclick="getCityVal(this,'cityDropDown')">TTO +868</li><li onclick="getCityVal(this,'cityDropDown')">TUN +216</li><li onclick="getCityVal(this,'cityDropDown')">TUR +90</li><li onclick="getCityVal(this,'cityDropDown')">TUV +688</li><li onclick="getCityVal(this,'cityDropDown')">TWN +886</li><li onclick="getCityVal(this,'cityDropDown')">TZA +255</li><li onclick="getCityVal(this,'cityDropDown')">UGA +256</li><li onclick="getCityVal(this,'cityDropDown')">UKR +380</li><li onclick="getCityVal(this,'cityDropDown')">URY +598</li><li onclick="getCityVal(this,'cityDropDown')">UZB +998</li><li onclick="getCityVal(this,'cityDropDown')">VCT +784</li><li onclick="getCityVal(this,'cityDropDown')">VEN +58</li><li onclick="getCityVal(this,'cityDropDown')">VGB +284</li><li onclick="getCityVal(this,'cityDropDown')">VIR +340</li><li onclick="getCityVal(this,'cityDropDown')">VNM +84</li><li onclick="getCityVal(this,'cityDropDown')">VUT +678</li><li onclick="getCityVal(this,'cityDropDown')">WLF +681</li><li onclick="getCityVal(this,'cityDropDown')">WSM +685</li><li onclick="getCityVal(this,'cityDropDown')">YEM +967</li><li onclick="getCityVal(this,'cityDropDown')">YUG +381</li><li onclick="getCityVal(this,'cityDropDown')">ZAF +27</li><li onclick="getCityVal(this,'cityDropDown')">ZWE +263</li></ul>
                                                        </div>
                                                        <select id="citySelect" name="ubimobileisd1" class="frm_cnt mobileISD citySelect" style={{display:"none"}} size="1">
                                                            <option value="50" selected="selected">IND +91</option><option value="51">USA +1</option><option value="53">ARE +971</option><option value="227">SGP +65</option><option value="57">SAU +966</option><option value="54">CAN +1</option><option value="55">AUS +61</option><option value="215">QAT +974</option><option value="205">OMN +968</option><option value="144">HKG +852</option><option value="60">AFG +93</option><option value="65">AGO +244</option><option value="66">AIA +264</option><option value="61">ALB +355</option><option value="64">AND +376</option><option value="194">ANT +599</option><option value="68">ARG +54</option><option value="69">ARM +374</option><option value="63">ASM +684</option><option value="67">ATG +268</option><option value="71">AZE +994</option><option value="88">BDI +257</option><option value="87">BFA +226</option><option value="74">BGD +880</option><option value="73">BHR +973</option><option value="72">BHS +1242</option><option value="82">BIH +387</option><option value="76">BLR +375</option><option value="78">BLZ +501</option><option value="79">BMU +1441</option><option value="81">BOL +591</option><option value="84">BRA +55</option><option value="75">BRB +1246</option><option value="85">BRN +673</option><option value="80">BTN +975</option><option value="83">BWA +267</option><option value="93">CAF +236</option><option value="243">CHE +41</option><option value="95">CHL +56</option><option value="96">CHN +86</option><option value="103">CIV +225</option><option value="90">CMR +237</option><option value="99">COD +243</option><option value="100">COG +242</option><option value="101">COK +682</option><option value="97">COL +57</option><option value="98">COM +269</option><option value="91">CPV +238</option><option value="102">CRI +506</option><option value="105">CUB +53</option><option value="92">CYM +345</option><option value="109">DJI +253</option><option value="110">DMA +767</option><option value="111">DOM +1</option><option value="62">DZA +213</option><option value="113">ECU +593</option><option value="114">EGY +20</option><option value="117">ERI +291</option><option value="119">ETH +251</option><option value="122">FJI +679</option><option value="120">FLK +500</option><option value="121">FRO +298</option><option value="183">FSM +691</option><option value="127">GAB +241</option><option value="129">GEO +995</option><option value="131">GHA +233</option><option value="132">GIB +350</option><option value="139">GIN +224</option><option value="136">GLP +590</option><option value="128">GMB +220</option><option value="140">GNB +245</option><option value="116">GNQ +240</option><option value="135">GRD +473</option><option value="134">GRL +299</option><option value="138">GTM +502</option><option value="125">GUF +594</option><option value="137">GUM +671</option><option value="141">GUY +592</option><option value="143">HND +504</option><option value="142">HTI +509</option><option value="147">IDN +62</option><option value="148">IRN +98</option><option value="149">IRQ +964</option><option value="146">ISL +354</option><option value="151">ISR +972</option><option value="153">JAM +1</option><option value="155">JOR +962</option><option value="154">JPN +81</option><option value="156">KAZ +7</option><option value="157">KEN +254</option><option value="160">KGZ +996</option><option value="89">KHM +855</option><option value="158">KIR +686</option><option value="235">KNA +869</option><option value="184">KOR +373</option><option value="58">KWT +965</option><option value="161">LAO +856</option><option value="163">LBN +961</option><option value="165">LBR +231</option><option value="166">LBY +218</option><option value="236">LCA +758</option><option value="167">LIE +423</option><option value="233">LKA +94</option><option value="164">LSO +266</option><option value="170">MAC +853</option><option value="188">MAR +212</option><option value="185">MCO +377</option><option value="159">MDA +82</option><option value="172">MDG +261</option><option value="175">MDV +960</option><option value="182">MEX +52</option><option value="171">MKD +389</option><option value="176">MLI +223</option><option value="190">MMR +95</option><option value="186">MNG +976</option><option value="189">MOZ +258</option><option value="179">MRT +222</option><option value="187">MSR +664</option><option value="178">MTQ +596</option><option value="180">MUS +230</option><option value="173">MWI +265</option><option value="174">MYS +60</option><option value="181">MYT +269</option><option value="191">NAM +264</option><option value="196">NCL +687</option><option value="199">NER +227</option><option value="202">NFK +672</option><option value="200">NGA +234</option><option value="198">NIC +505</option><option value="201">NIU +683</option><option value="204">NOR +47</option><option value="193">NPL +977</option><option value="192">NRU +674</option><option value="197">NZL +64</option><option value="56">PAK +92</option><option value="206">PAN +507</option><option value="211">PCN +649</option><option value="209">PER +51</option><option value="210">PHL +63</option><option value="207">PNG +675</option><option value="214">PRI +939</option><option value="203">PRK +850</option><option value="208">PRY +595</option><option value="126">PYF +689</option><option value="216">REU +262</option><option value="270">RNR +260</option><option value="218">RUS +7</option><option value="219">RWA +250</option><option value="224">SCG +381</option><option value="239">SDN +249</option><option value="223">SEN +221</option><option value="234">SHN +290</option><option value="230">SLB +677</option><option value="226">SLE +232</option><option value="115">SLV +503</option><option value="221">SMR +378</option><option value="231">SOM +252</option><option value="237">SPM +508</option><option value="222">STP +239</option><option value="240">SUR +597</option><option value="241">SWZ +268</option><option value="225">SYC +248</option><option value="244">SYR +963</option><option value="256">TCA +649</option><option value="94">TCD +235</option><option value="249">TGO +228</option><option value="248">THA +66</option><option value="246">TJK +992</option><option value="250">TKL +690</option><option value="255">TKM +993</option><option value="112">TLS +670</option><option value="251">TON +676</option><option value="252">TTO +868</option><option value="253">TUN +216</option><option value="254">TUR +90</option><option value="257">TUV +688</option><option value="245">TWN +886</option><option value="247">TZA +255</option><option value="258">UGA +256</option><option value="259">UKR +380</option><option value="260">URY +598</option><option value="261">UZB +998</option><option value="238">VCT +784</option><option value="263">VEN +58</option><option value="265">VGB +284</option><option value="266">VIR +340</option><option value="264">VNM +84</option><option value="262">VUT +678</option><option value="267">WLF +681</option><option value="220">WSM +685</option><option value="268">YEM +967</option><option value="269">YUG +381</option><option value="59">ZAF +27</option><option value="271">ZWE +263</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="isdNumber">
                                                    <div class={`formField ${focus5}`}>
                                                        <label class="labelText">
                                                            Mobile Number
                                                        </label>
                                                        <input id="ubimobile1" name="ubimobile1" class="inputText" onClick={handleFocus} onChange={handleInput} type="tel" value={User_Mobile_No} maxlength="12"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="errorMsg" id="mobilelErr1">
                                                <span class="errorIcon"></span>
                                            </div>
                                            <div class="errorMsg" style={{display: error5,top:"-10px"}}>
                                                <span id="ubifname.errors">Compulsory field. Cannot be blank.</span>
                                                <span class="errorIcon"></span>
                                            </div>

                                            <div style={{clear: "both"}}></div>
                                            <div class="whatsapp-row" id="whatsapp-row" style={{display:"none"}}>
                                                <div class="chk-notification">
                                                    <input id="chkWhatsapp" name="whatsAppOpt" onclick="saveWhatsappSubscription()" type="checkbox" value="true" checked="checked"/>
                                                    <label for="chkWhatsapp">I want to receive important updates on <span class="icon__whatsapp"></span>Whatsapp</label>
                                                </div>
                                            <div id="chk-notificationHidden"><input type="hidden" name="_whatsAppOpt" value="on"/></div>
                                        </div>
                                        <div class="termsMBWrap m-login__disclaimer m-login__fieldset">
                                            <div class="tc__checkbox">
                                                <input id="tc__checkbox" name="termsAndConditions" onClick={handleAgree} type="checkbox" value="true" checked={Agree}/><input type="hidden" name="_termsAndConditions" value="on"/>
                                                <label for="tc__checkbox">
                                                    I agree to Magicbricks
                                                    <a href="http://property.magicbricks.com/terms/terms.html" target="_blank">T&amp;C</a>, <a href="http://property.magicbricks.com/terms/terms.html" target="_blank">Privacy Policy</a>, &amp; <a href="http://property.magicbricks.com/terms/terms.html" target="_blank">Cookie Policy</a>
                                                </label>
                                            </div>
                                            <div class="errorMsg" style={{display: error6,top:"-5px"}}>
                                                    <span id="ubifname.errors">Please read Terms &amp; Conditions &amp; accept by selecting the check box</span>
                                                    <span class="errorIcon"></span>
                                                </div>

                                        </div>
                                        <input id="ubiAutoRegister" name="ubiAutoRegister" type="hidden" value=""/>
                                        <div class="formRow btnWrap">
                                            <Link to="/bricks/user/registration-otp" style={{color:"white",textDecoration:"none"}}><button class="mui-btn mui-btn--primary" type="submit" onClick={handleUser}>Sign Up</button></Link>
                                            {/* <button class="mui-btn mui-btn--primary" type="submit" onClick={handleUser}>Sign Up</button> */}
                                        </div>
                                        <div class="login-block">
                                            Already registered?
                                            <a href="https://accounts.magicbricks.com/userauth/login" title="Login Now">Login Now</a>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" value="" id="userTypeVal"/>
                            </form>
                            <div class="clr"></div>
                        </div>


                        {/* <noscript>
                        <div style="display: inline;">
                        <img height="1" width="1" style="border-style: none;" alt="" src="http://www.googleadservices.com/pagead/conversion/1066604303/?label=signup&amp;guid=ON&amp;script=0"/>
                        </div>
                        </noscript> */}
                    </div>
                </div>
            </div>
    )
}

export default Register