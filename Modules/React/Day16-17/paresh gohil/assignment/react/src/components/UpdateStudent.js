import React, { useState, useEffect,useRef } from 'react'
import StudentService from "../services/Studentservice"


const UpdateStudent = (props) => {
  const [values,setStudent] = useState({
      id : props.match.params.id,
      firstName : "",
      middleName : "",
      lastName : "",
      DOB : "",
      PlaceofBirth : "",
      age : 0,
      first_language : "",
      cities : [],
      city : "",
      State : "",
      country : "",
      countriesss : [],
      States : [],
      countries : [
        {country: "Germany" , State: [{name: 'A' , city: ["Duesseldorf","Eschborn"]}]},
        {country: "Spain" , State: [{name: 'B' , city: ["Barcelona"]}]},
        {country: "India" , State: [{name: 'C' , city: ["Delhi","Kolkata","Ahmedabad","Surat","Baroda","Mumbai"]}]}
      ],
      pin: 0,
      F_FirstName : "",
      F_LastName : "",
      F_MiddleName : "",
      F_Email : "",
      F_Qualification : "",
      F_Profession : "",
      F_Designation : "",
      F_Phone : 0,
      M_FirstName : "",
      M_LastName : "",
      M_MiddleName : "",
      M_Email : "",
      M_Qualification : "",
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
      images : "",
      collegeName : "",//[{"Ahmedabad":["LJ","LD","Apollo"]},{"Baroda":["Sigma","MSU","KJ"]},{"Surat":["JK","KO","LP"]},{"Mumbai":["HG","JT","KN"]}],
      logoimage : "",
      //studentList : []
  })

  const img = useRef(null);
  const logoimg = useRef(null)


      useEffect(() => {

        // step 4
            StudentService.getStudentById(values.id).then( (res) =>{
                let student = res.data[0];
                console.log(student.country)
                setStudent({
                  ...values,
                    images : student.images,
                    firstName : student.firstName,
                    middleName : student.middleName,
                    lastName : student.lastName,
                    DOB : student.DOB,
                    PlaceofBirth : student.PlaceofBirth,
                    age : student.age,
                    first_language : student.first_language,
                    // countriesss : values.countries.find(cntry => cntry.country === student.country),
                    States : values.countries.find(cntry => cntry.country === student.country).State,
                    cities : values.countries.find(cntry => cntry.country === student.country).State[0].city,
                    city : student.city,
                    State : student.State,
                    country : student.country,
                    pin: student.pin,
                    F_FirstName : student.F_FirstName,
                    F_LastName : student.F_LastName,
                    F_MiddleName : student.F_MiddleName,
                    F_Email : student.F_Email,
                    F_Qualification : student.F_Qualification,
                    F_Profession : student.F_Profession,
                    F_Designation : student.F_Designation,
                    F_Phone : student.F_Phone,
                    M_FirstName : student.M_FirstName,
                    M_LastName : student.M_LastName,
                    M_MiddleName : student.M_MiddleName,
                    M_Email : student.M_Email,
                    M_Qualification : student.M_Qualification,
                    M_Profession : student.M_Profession,
                    M_Designation : student.M_Designation,
                    M_Phone : student.M_Phone,
                    Emergency_Contact : student.Emergency_Contact,
                    R_Name : student.R_Name,
                    R_Relation : student.R_Relation,
                    R_Number : student.R_Number,
                    R_Address : student.R_Address,  
                    collegeName : student.collegeName,
                    logoimage : student.logoimg          
                });
            });
                
    },[values.id,values.countries])





    
      //---------string validation --------------------------
      const stringValidaion = (value) => {
        if(/[0-9]/.test(value)){
          let stringError =  "String not contain any number"
          setStudent({...values,stringError : stringError})
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
      }
    
    
    
    
      //----------handlechange-------------------------
      const handleChange = (event) =>{
        if(event.target.name === "age"){
          if(ageValidation(event.target.value)){
            setStudent({
              ...values,
              [event.target.name] : event.target.value
             })    
          }
            
        }
        else if(event.target.name === "pin"){
          if(pinValidation(event.target.value)){
            setStudent({
              ...values,
                [event.target.name] : event.target.value
              })    
          }
    
        }
        else if(event.target.name === "F_Phone" || event.target.name === "R_Number" || event.target.name === "Emergency_Contact" || event.target.name === "M_Phone"){
          if(phoneValidation(event.target.value)){
            setStudent({
              ...values,
                [event.target.name] : event.target.value
              })    
          }
    
        }
        else if(event.target.name === "city"){
          setStudent({...values,city : event.target.value})
        }
        else if(event.target.name === "images"){
          setStudent({
            ...values,
            images : URL.createObjectURL(event.target.files[0])
          })    
        }
        else if(event.target.name === "logoimg"){
          setStudent({
            ...values,
            logoimage : URL.createObjectURL(event.target.files[0]),
          })    
        }
        else if(stringValidaion(event.target.value)){
          setStudent({
            ...values,
              [event.target.name] : event.target.value
             })    
        }
        
      }
    
    
    
      const changeCountry = (event) => {
        setStudent({...values,country : event.target.value})
        setStudent({...values,States : values.countries.find(cntry => cntry.country === event.target.value).State})
    
      }
    
    
      const changeState = (event) => {
        setStudent({...values,State : event.target.value})
        const stats = values.States
        setStudent({...values,cities : stats.find(stat => stat.name === event.target.value).city})
        
      }
    
      const changeCity = (event) => {
          setStudent({...values,city : event.target.value})
      }
    
    
      //-------------------handlesubmit-------------------------
      const handleSubmit = (e) =>{
        e.preventDefault();


          const student ={
            id : values.id,
            images : values.images,
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
            F_Qualification : values.F_Qualification,
            F_Profession : values.F_Profession,
            F_Designation : values.F_Designation,
            F_Phone : values.F_Phone,
            M_FirstName : values.M_FirstName,
            M_LastName : values.M_LastName,
            M_MiddleName : values.M_MiddleName,
            M_Email : values.M_Email,
            M_Qualification : values.M_Qualification,
            M_Profession : values.M_Profession,
            M_Designation : values.M_Designation,
            M_Phone : values.M_Phone,
            Emergency_Contact : values.Emergency_Contact,
            R_Name : values.R_Name,
            R_Relation : values.R_Relation,
            R_Number : values.R_Number,
            R_Address : values.R_Address,  
            collegeName : values.collegeName,
            logoimage : values.logoimage
          }
        


         // step 5
        StudentService.updateStudent(student,values.id).then(res =>{
            props.history.push('/');
        });
        
      }
      
    


    
    
    
      return (
        <section>
          <article className="studentform">
          <form onSubmit={handleSubmit}>
                    
              <h3>Add Student</h3>
              <label>ID : </label>
              <input type="number" name="id" value={values.id}  onChange={handleChange} required/>
                
              <label>FirstName : </label>
              <input type="text" name="firstName" value={values.firstName} onChange={handleChange} required/>
              <p style={{color:"red" ,fontSize: "15px"}}>{values.firstName?values.stringError:""}</p>
             
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
              {/* <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
              <p style={{color:"red" ,fontSize: "15px"}}>{this.state.city?this.state.stringError:""}</p> */}
              {/* <select onChange={this.handleChange} name="city">
                <option></option>
                <option>Ahmedabad</option>
                <option>Baroda</option>
                <option>Surat</option>
                <option>Mumbai</option>
              </select><br/> */}
              <select placeholder="city" value={values.city} onChange={changeCity}>
                <option>--Choose City--</option>
                {values.cities.map((e,key) => {
                  console.log(e)
                  return <option key={key}>{e}</option>
                })}
              </select>
              
              

              <label>State : </label>
              {/* <input type="text" name="State" value={this.state.State} onChange={this.handleChange} />
              <p style={{color:"red" ,fontSize: "15px"}}>{this.state.State?this.state.stringError:""}</p> */}
              <select placeholder="State" value={values.State[0]} onChange={changeState}>
                <option>--Choose State--</option>
                {values.States.map((e,key) => {
                  return <option key={key}>{e.name}</option>
                })}
              </select>
              
              
              <label>Country : </label>
              {/* <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
              <p style={{color:"red" ,fontSize: "15px"}}>{this.state.country?this.state.stringError:""}</p> */}
              <select placeholder="country" value={values.country[0]} onChange={changeCountry}>
                <option>--Choose Country--</option>
                {values.countries.map((e,key) => {
                  return <option key={key}>{e.country}</option>
                })}
              </select><br/>
              
              
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
              <input type="text" name="F_Qualification" value={values.F_Qualification} onChange={handleChange} />
              <p style={{color:"red" ,fontSize: "15px"}}>{values.F_Qualification?values.stringError:""}</p>
              
              
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
              <input type="text" name="M_Qualification" value={values.M_Qualification} onChange={handleChange}/>
              <p style={{color:"red" ,fontSize: "15px"}}>{values.M_Qualification?values.stringError:""}</p>
              
              
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
              <input type="file" name="logoimg" ref={logoimg} onChange={handleChange} required/>
              <img src={values.logoimage} alt="logo images"/><br/>
              
              
              <label>Image : </label>
              <input type="file" name="images" ref={img} onChange={handleChange} required/>
              <img src={values.images} alt="images"/><br/>
              
              <button type="submit">submit</button>
          </form>
          </article>
        </section>
  
      )
    }    
  

export default UpdateStudent
