import './App.scss';
import React,{useState,useRef} from 'react';
//import {useForm} from "./components/handleChange"

const App=()=> {
  const [values,setStudent] = useState({ 
    id : "",
    firstName : "",
    middleName : "",
    lastName : "",
    DOB : "",
    PlaceofBirth : "",
    age : 0,
    first_language : "",
    State : "",
    country : "",
    city : "",
    pin: 0,
    F_FirstName : "",
    F_LastName : "",
    F_MiddleName : "",
    F_Email : "",
    F_Education_Qualification : "",
    F_Profession : "",
    F_Designation : "",
    F_Phone : 0,
    M_FirstName : "",
    M_LastName : "",
    M_MiddleName : "",
    M_Email : "",
    M_Education_Qualification : "",
    M_Profession : "",
    M_Designation : "",
    M_Phone : 0,
    Emergency_Contact : 0,
    R_Name : "",
    R_Relation : "",
    R_Number : 0,
    R_Address : "",

    stringError : "",
    ageError : "",
    pinError : "",
    phoneError : "",
    collegeName : ""
  })

  
  const [studentList,setStudentList] = useState([])

  const [images,setImages] = useState({images : ""})
  const [logoimage,setlogoImages] = useState({logoimage : ""})


  const img = useRef(null);
  const image = useRef(null)
  //-------------------handlesubmit-------------------------
  const handleSubmit = (e) =>{
    e.preventDefault();
    const student ={
      id : values.id,
      images : images,
      firstName : values.firstName,
      middleName : values.middleName,
      lastName : values.lastName,
      DOB : values.DOB,
      PlaceofBirth : values.PlaceofBirth,
      age : values.age,
      first_language : values.first_language,
      city : values.city,
      State : values.State,
      country : values.country,
      pin: values.pin,
      F_FirstName : values.F_FirstName,
      F_LastName : values.F_LastName,
      F_MiddleName : values.F_MiddleName,
      F_Email : values.F_Email,
      F_Education_Qualification : values.F_Education_Qualification,
      F_Profession : values.F_Profession,
      F_Designation : values.F_Designation,
      F_Phone : values.F_Phone,
      M_FirstName : values.M_FirstName,
      M_LastName : values.M_LastName,
      M_MiddleName : values.M_MiddleName,
      M_Email : values.M_Email,
      M_Education_Qualification : values.M_Education_Qualification,
      M_Profession : values.M_Profession,
      M_Designation : values.M_Designation,
      M_Phone : values.M_Phone,
      Emergency_Contact : values.Emergency_Contact,
      R_Name : values.R_Name,
      R_Relation : values.R_Relation,
      R_Number : values.R_Number,
      R_Address : values.R_Address,  
      collegeName : values.collegeName,
      logoimage : logoimage
    }
    console.log(values)

    setStudentList(
       [...studentList,student]
    )
  }


          //---------string validation --------------------------
          const stringValidaion = (value) => {
            if(/[0-9]/.test(value)){
              let stringError =  "String not contain any number"
              setStudent({...values,stringError : stringError})
              //return false
            }
            else{
              setStudent({...values,stringError : ""})
                                         
            }
            return true

          } 
        
          //-----------age validation--------------------------------
          const ageValidation = (value) => {
            if(value >20 || value <5)
            {
              const ageError = "Wrong age"
              setStudent({...values,ageError : ageError})
            }
            else{
              setStudent({...values,ageError : ""})
            }
            return true
          }
        
          //--------------pin validation------------------------------
          const pinValidation = (value) => {
            if(value.toString().length !== 6){
              const pinError = "pin must be 6 digit"
              setStudent({...values,pinError : pinError})
            }
            else{
              setStudent({...values,pinError : ""})
            }
            return true
          }
        
          //--------------phone validation---------------------------
          const phoneValidation = (value) => {
            if(value.toString().length !== 10){
              const phoneError = "phone number must be 10 digit"
              setStudent({...values,phoneError : phoneError})
            }
            else{
              setStudent({...values,phoneError : ""})
            }
            return true
          }

          
  const handleChange = (e) =>  {
    // setStudent({
    //   ...values,
    //   [e.target.name]:e.target.value,

    // })
    if(e.target.name === "age"){
      if(ageValidation(e.target.value)){
        setStudent({
          ...values,
          [e.target.name] : e.target.value
           })    
      }
        
    }
    else if(e.target.name === "pin"){
      if(pinValidation(e.target.value)){
        setStudent({
          ...values,
          [e.target.name] : e.target.value
           })    
      }

    }
    else if(e.target.name === "F_Phone" || e.target.name === "R_Number" || e.target.name === "Emergency_Contact" || e.target.name === "M_Phone"){
      if(phoneValidation(e.target.value)){
        setStudent({
          ...values,
          [e.target.name] : e.target.value
           })    
      }

    }
    else if(e.target.name === "DOB"){
      setStudent({
        ...values,
        [e.target.name] : e.target.value
      })
    }
    else if(stringValidaion(e.target.value)){
      setStudent({
          ...values,
          [e.target.name] : e.target.value
         })    
    }
    

  }

  //-------------------handleImages------------------------------
  const handleImages = (e) => {
      setImages(
        URL.createObjectURL(e.target.files[0])
      )
    }
  
    //----------------handlelogoimages--------------------------------
    const handlelogoImages = (e) => {
        setlogoImages(
          URL.createObjectURL(e.target.files[0])
        )
      }
  
      const handleDelete =(id) => {
        const record = studentList.filter(item => item.id !== id)
        setStudentList(record)
      }
    

      const handleEdit = (id) => {
        const editrecord = studentList.filter(item => item.id !== id)
        const selectedrecord  = studentList.find(item => item.id === id)
        console.log(selectedrecord.id)
        setStudentList(editrecord)

        setlogoImages(selectedrecord.logoimage)

        setImages(selectedrecord.images)

        setStudent({
          id : selectedrecord.id,
          firstName : selectedrecord.firstName,
          middleName : selectedrecord.middleName,
          lastName : selectedrecord.lastName,
          DOB : selectedrecord.DOB,
          age : selectedrecord.age,
          collegeName : selectedrecord.collegeName,        
        })
      }
  




    return (
      <section>
        <article className="studentform">
        <form onSubmit={handleSubmit}>
          <h3>Personal Details</h3>

          <label>ID : </label>
          <input type="number" name="id" value={values.id} onChange={handleChange} required/>


          <label>FirstName : </label>
          <input type="text" name="firstName" value={values.firstName} onChange={handleChange} required/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.firstName ? values.stringError :""}</p>


          <label>MiddleName : </label>
          <input type="text" name="middleName" value={values.middleName} onChange={handleChange} required/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.middleName?values.stringError:""}</p>


          <label>LastName : </label>
          <input type="text" name="lastName" value={values.lastName} onChange={handleChange} required/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.lastName?values.stringError:""}</p>


          <label>DOB : </label>
          <input type="date" name="DOB" value={values.DOB} onChange={handleChange} required/>


          <label>PlaceofBirth : </label>
          <input type="text" name="PlaceofBirth" value={values.PlaceofBirth} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.PlaceofBirth?values.stringError:""}</p>


          <label>Age : </label>
          <input type="number" name="age" value={values.age} onChange={handleChange} required/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.age?values.ageError:""}</p>


          <label>First Language : </label>
          <input type="text" name="first_language" value={values.first_language} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.first_language?values.stringError:""}</p>


          <label>City : </label>
          <input type="text" name="city" value={values.city} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.city?values.stringError:""}</p>


            
          <label>State : </label>
          <input type="text" name="State" value={values.State} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.State?values.stringError:""}</p>
          

          <label>Country : </label>
          <input type="text" name="country" value={values.country} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.country?values.stringError:""}</p>

          <label>Pin : </label>
          <input type="number" name="pin" value={values.pin} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.pin?values.pinError:""}</p>


          <h3>Father Details</h3>

          <label>Father_FirstName : </label>
          <input type="text" name="F_FirstName" value={values.F_FirstName} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_FirstName?values.stringError:""}</p>


          <label>Father_MiddleName : </label>
          <input type="text" name="F_MiddleName" value={values.F_MiddleName} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_MiddleName?values.stringError:""}</p>


          <label>Father_LastName : </label>
          <input type="text" name="F_LastName" value={values.F_LastName} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_LastName?values.stringError:""}</p>


          <label>F_Email : </label>
          <input type="Email" name="F_Email" value={values.F_Email} onChange={handleChange} />


          <label>F_Education_Qualification : </label>
          <input type="text" name="F_Education" value={values.F_Education_Qualification} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_Education_Qualification?values.stringError:""}</p>


          <label>F_Profession : </label>
          <input type="text" name="F_Profession" value={values.F_Profession} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_Profession?values.stringError:""}</p>


          <label>F_Designation : </label>
          <input type="text" name="F_Designation" value={values.F_Designation} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_Designation?values.stringError:""}</p>


          <label>F_Phone : </label>
          <input type="number" name="F_Phone" value={values.F_Phone} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.F_Phone?values.phoneError:""}</p>


          <h3>Mother Details</h3>

          <label>Mother_FirstName : </label>
          <input type="text" name="M_FirstName" value={values.M_FirstName} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_FirstName?values.stringError:""}</p>


          <label>Mother_MiddleName : </label>
          <input type="text" name="M_MiddleName" value={values.M_MiddleName} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_MiddleName?values.stringError:""}</p>


          <label>Mother_LastName : </label>
          <input type="text" name="M_LastName" value={values.M_LastName} onChange={handleChange}/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_LastName?values.stringError:""}</p>


          <label>M_Email : </label>
          <input type="email" name="M_Email" value={values.M_Email} onChange={handleChange} />


          <label>M_Education_Qualification : </label>
          <input type="text" name="M_Education" value={values.M_Education_Qualification} onChange={handleChange}/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_Education_Qualification?values.stringError:""}</p>


          <label>M_Profession : </label>
          <input type="text" name="M_Profession" value={values.M_Profession} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_Profession?values.stringError:""}</p>


          <label>M_Designation : </label>
          <input type="text" name="M_Designation" value={values.M_Designation} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_Designation?values.stringError:""}</p>


          <label>M_Phone : </label>
          <input type="number" name="M_Phone" value={values.M_Phone} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.M_Phone?values.phoneError:""}</p>


          <label>Emergency_Contact : </label>
          <input type="text" name="Emergency_Contact" value={values.Emergency_Contact} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.Emergency_Contact?values.phoneError:""}</p>


          <h3>Reference Details</h3>

          <label>R_Name : </label>
          <input type="text" name="R_Name" value={values.R_Name} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.R_Name?values.stringError:""}</p>


          <label>R_Relation : </label>
          <input type="text" name="R_Relation" value={values.R_Relation} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.R_Relation?values.stringError:""}</p>


          <label>R_Number : </label>
          <input type="number" name="R_Number" value={values.R_Number} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.R_Number?values.phoneError:""}</p>


          <label>R_Address : </label>
          <input type="text" name="R_Address" value={values.R_Address} onChange={handleChange} />
          <p style={{color:"red" ,fontSize: "15px"}}>{values.R_Address?values.stringError:""}</p>


          <label>CollegeName : </label>
          <input type="text" name="collegeName" value={values.collegeName} onChange={handleChange} required/>
          <p style={{color:"red" ,fontSize: "15px"}}>{values.collegeName?values.stringError:""}</p>

          <label>CollegeLogo : </label>
          <input type="file" name="logoimg" ref={img} onChange={handlelogoImages} required/>
          <img src={logoimage} alt="logo images"/><br/>


          <label>Image : </label>
          <input type="file" name="images" ref={image} onChange={handleImages} required/>
          <img src={images} alt="images"/><br/>


          <button type="submit">submit</button>
        </form>
        </article>
        {studentList.map((values) =>{
          return(
            <article className="student">
            <img  src={values.images} alt="images"/>
            <h5>ID : {values.id}</h5>
            <h5>Name : {values.firstName +" "+ values.middleName +" "+values.lastName}</h5>
            <h5>DOB : {values.DOB}</h5>
            <h5>Age : {values.age}</h5>
            <h5>CollegeName : {values.collegeName}</h5>
            <img src={values.logoimage} className="logo" alt="logo"/><br/>
            <button type="button" style={{marginBottom:"10px",marginRight:"10px",marginTop:"10px"}} onClick={() => handleDelete(values.id)}>Delete</button>
            <button type="button" style={{marginBottom:"10px",marginTop:"10px"}} onClick={() => handleEdit(values.id)}>Edit</button>
          </article>
          )
          }        

        )
      }
        </section>

    )
  }




export default App;
