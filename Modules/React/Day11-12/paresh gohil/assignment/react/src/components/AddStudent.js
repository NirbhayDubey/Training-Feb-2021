import React, { Component } from 'react'
import StudentService from "../services/Studentservice"

export default class AddStudent extends Component {

    state ={
        id : null,
        firstName : "",
        middleName : "",
        lastName : "",
        DOB : "",
        PlaceofBirth : "",
        age : null,
        first_language : "",
        cities : [],
        city : "--Choose City",
        State : "--Choose State--",
        country : "--Choose Country--",
        countriesss : [],
        States : [],
        countries : [
          {country: "Germany" , State: [{name: 'A' , city: ["Duesseldorf","Eschborn"]}]},
          {country: "Spain" , State: [{name: 'B' , city: ["Barcelona"]}]},
          {country: "India" , State: [{name: 'C' , city: ["Delhi","Kolkata","Ahmedabad","Surat","Baroda","Mumbai"]}]}
        ],
        pin: null,
        F_FirstName : "",
        F_LastName : "",
        F_MiddleName : "",
        F_Email : "",
        F_Qualification : "",
        F_Profession : "",
        F_Designation : "",
        F_Phone : null,
        M_FirstName : "",
        M_LastName : "",
        M_MiddleName : "",
        M_Email : "",
        M_Qualification : "",
        M_Profession : "",
        M_Designation : "",
        M_Phone : null,
        Emergency_Contact : null,
        R_Name : "",
        R_Relation : "",
        R_Number : null,
        R_Address : "",
    
        stringError : "",
        ageError : "",
        pinError : "",
        phoneError : "",
        images : null,
        collegeName : "",//[{"Ahmedabad":["LJ","LD","Apollo"]},{"Baroda":["Sigma","MSU","KJ"]},{"Surat":["JK","KO","LP"]},{"Mumbai":["HG","JT","KN"]}],
        logoimage : null,
        // studentList : []
      }



    //   componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         StudentService.getStudentById(this.state.id).then( (res) =>{
    //             let student = res.data;
    //             this.setState({
    //                 id : student.id,
    //                 images : student.images,
    //                 firstName : student.firstName,
    //                 middleName : student.middleName,
    //                 lastName : student.lastName,
    //                 DOB : student.DOB,
    //                 PlaceofBirth : student.PlaceofBirth,
    //                 age : student.age,
    //                 first_language : student.first_language,
    //                 city : student.city,
    //                 State : student.State,
    //                 country : student.country,
    //                 pin: student.pin,
    //                 F_FirstName : student.F_FirstName,
    //                 F_LastName : student.F_LastName,
    //                 F_MiddleName : student.F_MiddleName,
    //                 F_Email : student.F_Email,
    //                 F_Qualification : student.F_Qualification,
    //                 F_Profession : student.F_Profession,
    //                 F_Designation : student.F_Designation,
    //                 F_Phone : student.F_Phone,
    //                 M_FirstName : student.M_FirstName,
    //                 M_LastName : student.M_LastName,
    //                 M_MiddleName : student.M_MiddleName,
    //                 M_Email : student.M_Email,
    //                 M_Qualification : student.M_Qualification,
    //                 M_Profession : student.M_Profession,
    //                 M_Designation : student.M_Designation,
    //                 M_Phone : student.M_Phone,
    //                 Emergency_Contact : student.Emergency_Contact,
    //                 R_Name : student.R_Name,
    //                 R_Relation : student.R_Relation,
    //                 R_Number : student.R_Number,
    //                 R_Address : student.R_Address,  
    //                 collegeName : student.collegeName,
    //                 logoimage : student.logoimg          
    //             });
    //         });
    //     }        
    // }





    
      //---------string validation --------------------------
      stringValidaion = (value) => {
        if(/[0-9]/.test(value)){
          let stringError =  "String not contain any number"
          this.setState({stringError : stringError})
        }
        else{
          this.setState({stringError : ""})
        }
        return true
      } 
    
      //-----------age validation--------------------------------
      ageValidation = (value) => {
        if(value >20 || value <5)
        {
          const ageError = "Wrong age"
          this.setState({ageError : ageError})
        }
        else{
          this.setState({ageError : ""})
        }
        return true
      }
    
      //--------------pin validation------------------------------
      pinValidation = (value) => {
        if(value.toString().length !== 6){
          const pinError = "pin must be 6 digit"
          this.setState({pinError : pinError})
        }
        else{
          this.setState({pinError : ""})
        }
        return true
      }
    
      //--------------phone validation---------------------------
      phoneValidation = (value) => {
        if(value.toString().length !== 10){
          const phoneError = "phone number must be 10 digit"
          this.setState({phoneError : phoneError})
        }
        else{
          this.setState({phoneError : ""})
        }
      }
    
    
    
    
      //----------handlechange-------------------------
      handleChange = (event) =>{
        if(event.target.name === "age"){
          if(this.ageValidation(event.target.value)){
            this.setState({
              //   images : URL.createObjectURL(this.refs.img.files[0])
                [event.target.name] : event.target.value
               })    
          }
            
        }
        else if(event.target.name === "pin"){
          if(this.pinValidation(event.target.value)){
            this.setState({
              //   images : URL.createObjectURL(this.refs.img.files[0])
                [event.target.name] : event.target.value
               })    
          }
    
        }
        else if(event.target.name === "F_Phone" || event.target.name === "R_Number" || event.target.name === "Emergency_Contact" || event.target.name === "M_Phone"){
          if(this.phoneValidation(event.target.value)){
            this.setState({
              //   images : URL.createObjectURL(this.refs.img.files[0])
                [event.target.name] : event.target.value
               })    
          }
    
        }
        else if(event.target.name === "city"){
          this.setState({city : event.target.value})
        }
        else if(event.target.name === "images"){
          this.setState({
            images : URL.createObjectURL(this.refs.img.files[0])
    //       [event.target.name] : event.target.value
          })    
        }
        else if(event.target.name === "logoimg"){
          this.setState({
            logoimage : URL.createObjectURL(this.refs.logoimg.files[0]),
    //       [event.target.name] : event.target.value
          })    
        }
        else if(this.stringValidaion(event.target.value)){
          this.setState({
    //           images : URL.createObjectURL(this.refs.logoimg.files[0]),
              [event.target.name] : event.target.value
             })    
        }
        
      }
    
    
    
      changeCountry = (event) => {
        this.setState({country : event.target.value})
        this.setState({States : this.state.countries.find(cntry => cntry.country === event.target.value).State})
    
      }
    
    
      changeState = (event) => {
        this.setState({State : event.target.value})
        const stats = this.state.countries.find(cntry => cntry.country === this.state.country).State
        this.setState({cities : stats.find(stat => stat.name === event.target.value).city})
        
      }
    
      changeCity = (event) => {
          this.setState({city : event.target.value})
      }
    
    
      //-------------------handlesubmit-------------------------
      handleSubmit = (e) =>{
        e.preventDefault();
        // const firstName = this.state.firstName;
        // const lastName = this.state.lastName;
        // const id = this.state.id;
        // const collegeName = this.state.collegeName
        // const images = URL.createObjectURL(this.refs.img.files[0]) 
        // const logoimges = URL.createObjectURL(this.refs.logoimg.files[0])
        // const student = ` ${images} ${id} ${firstName} ${lastName} ${collegeName} ${logoimges}`//[`img : ${images}, id : ${id}, firstName : ${firstName}, lastName : ${lastName}, collegeName : ${collegeName}, logo : ${logoimges}`];


        const student ={
          id : this.state.id,
          images : URL.createObjectURL(this.refs.img.files[0]),
          firstName : this.state.firstName,
          middleName : this.state.middleName,
          lastName : this.state.lastName,
          DOB : this.state.DOB,
          PlaceofBirth : this.state.PlaceofBirth,
          age : this.state.age,
          first_language : this.state.first_language,
          city : this.state.city,
          State : this.state.State,
          country : this.state.country,
          pin: this.state.pin,
          F_FirstName : this.state.F_FirstName,
          F_LastName : this.state.F_LastName,
          F_MiddleName : this.state.F_MiddleName,
          F_Email : this.state.F_Email,
          F_Qualification : this.state.F_Qualification,
          F_Profession : this.state.F_Profession,
          F_Designation : this.state.F_Designation,
          F_Phone : this.state.F_Phone,
          M_FirstName : this.state.M_FirstName,
          M_LastName : this.state.M_LastName,
          M_MiddleName : this.state.M_MiddleName,
          M_Email : this.state.M_Email,
          M_Qualification : this.state.M_Qualification,
          M_Profession : this.state.M_Profession,
          M_Designation : this.state.M_Designation,
          M_Phone : this.state.M_Phone,
          Emergency_Contact : this.state.Emergency_Contact,
          R_Name : this.state.R_Name,
          R_Relation : this.state.R_Relation,
          R_Number : this.state.R_Number,
          R_Address : this.state.R_Address,  
          collegeName : this.state.collegeName,
          logoimage : URL.createObjectURL(this.refs.logoimg.files[0])
        }


         // step 5
        StudentService.createStudent(student).then(res =>{
            this.props.history.push('/');
        });
        
        // this.setState({
        //   studentList : [...this.state.studentList,student]
        // })
    
      }
    


    //   handleDelete =(id) => {
    //     const record = this.state.studentList.filter(item => item.id !== id)
    //     console.log(record)
    //     this.setState({
    //       studentList : record
    //     })
    //   }
    
    
      // getData = (value) => {
      //   console.log(value)
      //   value.map(item => {
      //     console.log(item)
      //   });
    
      // }
    
    //   handleEdit = (id) => {
    //     const editrecord = this.state.studentList.filter(item => item.id !== id)
    //     const selectedrecord  = this.state.studentList.find(item => item.id === id)
    //     this.setState({
    //       studentList : editrecord,
    //       images : selectedrecord.images,
    //       id : selectedrecord.id,
    //       firstName : selectedrecord.firstName,
    //       middleName : selectedrecord.middleName,
    //       lastName : selectedrecord.lastName,
    //       DOB : selectedrecord.DOB,
    //       age : selectedrecord.age,
    //       collegeName : selectedrecord.collegeName,
    //       logoimage : selectedrecord.logoimage,
    //     })
    //   }
    
    
    
      render(){
        return (
          <section>
            <article className="studentform">
            <form onSubmit={this.handleSubmit}>
                        <h3>Add Student</h3>
                        <label>ID : </label>
                        <input type="number" name="id" value={this.state.id}  onChange={this.handleChange} required/>
                    

                        <label>FirstName : </label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                        <p style={{color:"red" ,fontSize: "15px"}}>{this.state.firstName?this.state.stringError:""}</p>

                        <label>MiddleName : </label>
                        <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleChange} required/>
                        <p style={{color:"red" ,fontSize: "15px"}}>{this.state.middleName?this.state.stringError:""}</p>

                        <label>LastName : </label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                        <p style={{color:"red" ,fontSize: "15px"}}>{this.state.lastName?this.state.stringError:""}</p>

                <label>DOB : </label>
                <input type="date" name="DOB" value={this.state.DOB} onChange={this.handleChange} required/>
            
            
                <label>PlaceofBirth : </label>
                <input type="text" name="PlaceofBirth" value={this.state.PlaceofBirth} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.PlaceofBirth?this.state.stringError:""}</p>
            
            
                <label>Age : </label>
                <input type="number" name="age" value={this.state.age} onChange={this.handleChange} required/>
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.age?this.state.ageError:""}</p>
            
            
                <label>First Language : </label>
                <input type="text" name="first_language" value={this.state.first_language} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.first_language?this.state.stringError:""}</p>
            
            
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
                <select placeholder="city" value={this.state.city} onChange={this.changeCity}>
                  <option>--Choose City--</option>
                  {this.state.cities.map((e,key) => {
                    return <option key={key}>{e}</option>
                  })}
                </select>
                
                

                <label>State : </label>
                {/* <input type="text" name="State" value={this.state.State} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.State?this.state.stringError:""}</p> */}
                <select placeholder="State" value={this.state.State} onChange={this.changeState}>
                  <option>--Choose State--</option>
                  {this.state.States.map((e,key) => {
                    return <option key={key}>{e.name}</option>
                  })}
                </select>
                
                
                <label>Country : </label>
                {/* <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.country?this.state.stringError:""}</p> */}
                <select placeholder="country" value={this.state.country} onChange={this.changeCountry}>
                  <option>--Choose Country--</option>
                  {this.state.countries.map((e,key) => {
                    return <option key={key}>{e.country}</option>
                  })}
                </select><br/>
                
                
                <label>Pin : </label>
                <input type="number" name="pin" value={this.state.pin} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.pin?this.state.pinError:""}</p>
                
                
                <h3>Father Details</h3>
                
                <label>Father_FirstName : </label>
                <input type="text" name="F_FirstName" value={this.state.F_FirstName} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_FirstName?this.state.stringError:""}</p>
                
                
                <label>Father_MiddleName : </label>
                <input type="text" name="F_MiddleName" value={this.state.F_MiddleName} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_MiddleName?this.state.stringError:""}</p>
                
                
                <label>Father_LastName : </label>
                <input type="text" name="F_LastName" value={this.state.F_LastName} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_LastName?this.state.stringError:""}</p>
                
                
                <label>F_Email : </label>
                <input type="Email" name="F_Email" value={this.state.F_Email} onChange={this.handleChange} />
                
                
                <label>F_Education_Qualification : </label>
                <input type="text" name="F_Qualification" value={this.state.F_Qualification} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_Qualification?this.state.stringError:""}</p>
                
                
                <label>F_Profession : </label>
                <input type="text" name="F_Profession" value={this.state.F_Profession} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_Profession?this.state.stringError:""}</p>
                
                
                <label>F_Designation : </label>
                <input type="text" name="F_Designation" value={this.state.F_Designation} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_Designation?this.state.stringError:""}</p>
                
                
                <label>F_Phone : </label>
                <input type="number" name="F_Phone" value={this.state.F_Phone} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.F_Phone?this.state.phoneError:""}</p>
                
                
                <h3>Mother Details</h3>
                
                <label>Mother_FirstName : </label>
                <input type="text" name="M_FirstName" value={this.state.M_FirstName} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_FirstName?this.state.stringError:""}</p>
                
                
                <label>Mother_MiddleName : </label>
                <input type="text" name="M_MiddleName" value={this.state.M_MiddleName} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_MiddleName?this.state.stringError:""}</p>
                
                
                <label>Mother_LastName : </label>
                <input type="text" name="M_LastName" value={this.state.M_LastName} onChange={this.handleChange}/>
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_LastName?this.state.stringError:""}</p>
                
                
                <label>M_Email : </label>
                <input type="email" name="M_Email" value={this.state.M_Email} onChange={this.handleChange} />
                
                
                <label>M_Education_Qualification : </label>
                <input type="text" name="M_Qualification" value={this.state.M_Qualification} onChange={this.handleChange}/>
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_Qualification?this.state.stringError:""}</p>
                
                
                <label>M_Profession : </label>
                <input type="text" name="M_Profession" value={this.state.M_Profession} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_Profession?this.state.stringError:""}</p>
                
                
                <label>M_Designation : </label>
                <input type="text" name="M_Designation" value={this.state.M_Designation} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_Designation?this.state.stringError:""}</p>
                
                
                <label>M_Phone : </label>
                <input type="number" name="M_Phone" value={this.state.M_Phone} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.M_Phone?this.state.phoneError:""}</p>
                
                
                <label>Emergency_Contact : </label>
                <input type="text" name="Emergency_Contact" value={this.state.Emergency_Contact} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.Emergency_Contact?this.state.phoneError:""}</p>
                
                
                <h3>Reference Details</h3>
                
                <label>R_Name : </label>
                <input type="text" name="R_Name" value={this.state.R_Name} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.R_Name?this.state.stringError:""}</p>
                
                
                <label>R_Relation : </label>
                <input type="text" name="R_Relation" value={this.state.R_Relation} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.R_Relation?this.state.stringError:""}</p>
                
                
                <label>R_Number : </label>
                <input type="number" name="R_Number" value={this.state.R_Number} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.R_Number?this.state.phoneError:""}</p>
                
                
                <label>R_Address : </label>
                <input type="text" name="R_Address" value={this.state.R_Address} onChange={this.handleChange} />
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.R_Address?this.state.stringError:""}</p>
                
                
                <label>CollegeName : </label>
                <input type="text" name="collegeName" value={this.state.collegeName} onChange={this.handleChange} required/>
                <p style={{color:"red" ,fontSize: "15px"}}>{this.state.collegeName?this.state.stringError:""}</p>
                {/* <select>
                  {  this.state.collegeName.map((name) =>{
                      let value = name[this.state.city]
                      console.log(value) 
                      //this.getData(value)
                  })
                  }
                </select><br/> */}

                  {/* {name[this.state.city].map((item) => {
                    return <option>{item}</option>
                  })} */}

                <label>CollegeLogo : </label>
                <input type="file" name="logoimg" ref="logoimg" onChange={this.handleChange} required/>
                <img src={this.state.logoimage} alt="logo images"/><br/>
                
                
                <label>Image : </label>
                <input type="file" name="images" ref="img" onChange={this.handleChange} required/>
                <img src={this.state.images} alt="images"/><br/>
                
                <button type="submit">submit</button>
            </form>
            </article>
              {/* {this.state.studentList.map((student) =>(
                <article className="student">
                  <img  src={student.images} alt="images"/>
                  <h5>ID : {student.id}</h5>
                  <h5>Name : {student.firstName +" "+ student.middleName +" "+student.lastName}</h5>
                  <h5>DOB : {student.DOB}</h5>
                  <h5>Age : {student.age}</h5>
                  <h5>CollegeName : {student.collegeName}</h5>
                  <img src={student.logoimage} className="logo" alt="logo"/><br/>
                  <button type="button" style={{marginBottom:"10px",marginRight:"10px",marginTop:"10px"}} onClick={() => this.handleDelete(student.id)}>Delete</button>
                  <button type="button" style={{marginBottom:"10px",marginTop:"10px"}} onClick={() => this.handleEdit(student.id)}>Edit</button>
                </article>
              ))} */}


          </section>
    
        )
      }
    }
