import React, { Component } from 'react'

export default class Form extends Component {

   constructor(props) {
      super(props);
      this.state = {
         countries: [],
         states: [],
         cities: [],
         selectedCountry: '--Choose Country--',
         selectedState: '--Choose State--'
      };
      this.changeCountry = this.changeCountry.bind(this);
      this.changeState = this.changeState.bind(this);
   }

   componentDidMount() {
      this.setState({
         countries: [
            {
               name: 'Germany',
               states: [
                  { name: 'Berlin', cities: ['Charlottenburg', 'Wilmersdorf', 'Heinersdorf'] },
                  { name: 'North Rhine-Westphalia', cities: ['Duisburg', 'Wuppertal', 'Bonn', 'Münster'] }
               ]
            },
            {
               name: 'USA',
               states: [
                  { name: 'California', cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Oakland'] },
                  { name: 'Hawaii', cities: ['Honolulu', 'Pearl', 'Lahaina'] },
                  { name: 'Kansas', cities: ['Wichita', 'Olathe', '	Lenexa'] }
               ]
            },
            {
               name: 'India',
               states: [
                  { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Baroda', 'Rajkot', 'Gandhinagar'] },
                  { name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Ponnani', 'Guruvayur'] },
                  { name: 'Rajasthan', cities: ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'] },
                  { name: 'Punjab', cities: ['Amritsar', 'Jalandhar', 'Ludhiana', 'Chandigarh'] },
                  { name: 'Uttar Pradesh', cities: ['Lucknow', 'Varansi', 'Kanpur', 'Delhi'] },
               ]
            }
         ]
      });
   }

   changeCountry(event) {
      this.setState({ selectedCountry: event.target.value });
      this.props.handleChange(event)
      this.setState({ states: this.state.countries.find(cntry => cntry.name === event.target.value).states });
   }

   changeState(event) {
      this.setState({ selectedState: event.target.value });
      this.props.handleChange(event)
      const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
      this.setState({ cities: stats.find(stat => stat.name === event.target.value).cities });
   }


   render() {
      console.log(this.props.data)
      const { StudentFname, StudentMname, StudentLname, StudentEmail, Gender, DateOfBirth, PlaceOfBirth, Language, Country, State, City, Pincode, Enrollment, ClgName, ClgAdd, Logo, Pic, FatherFname, FatherMname, FatherLname, FatherEmail, FatherEQ, FatherProfession, FatherDesignation, FatherPhone, MotherFname, MotherMname, MotherLname, MotherEmail, MotherEQ, MotherProfession, MotherDesignation, MotherPhone, Relation, RelationPhone, ReferenceDetails, ReferenceThrough, ReferenceAddress, ReferencePhone, errors } = this.props.data;
      const { handleChange, handleSubmit, onLogoChange } = this.props
      return (
         <>
            <div className="mb-5 pb-5">
               <div className="card border-rounded border-dark mb-3">
                  <div className="head1 bg-dark text-white">
                     <h3 className="text-capitalize text-center m-2">Student Admission Form</h3>
                  </div>
                  <div className="card-body">

                     <form onSubmit={handleSubmit} >

                        <h4>Student Details : </h4>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">First Name</label>
                           <div className="col-sm-8">
                              <input type="text" value={StudentFname} className="form-control border-dark" name="StudentFname" onChange={handleChange} required />
                              {errors.StudentFname.length > 0 &&
                                 <span className="text-danger mt-3">{errors.StudentFname}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Middle Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" name="StudentMname" value={StudentMname} onChange={handleChange}
                                 required />
                              {/* {errors.StudentMname.length > 0 &&
                                 <span className="text-danger mt-3">{errors.StudentMname}</span>} */}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Last Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" name="StudentLname"
                                 onChange={handleChange} value={StudentLname} required />
                              {/*  {errors.StudentLname.length > 0 &&
                                 <span className="text-danger mt-3">{errors.StudentLname}</span>} */}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Email</label>
                           <div className="col-sm-8">
                              <input type="email" className="form-control border-dark"
                                 name="StudentEmail" value={StudentEmail} onChange={handleChange}
                                 required />
                              {errors.StudentEmail.length > 0 &&
                                 <span className="text-danger mt-3">{errors.StudentEmail}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2">
                           <label className="col-sm-4 col-form-label text-center">Gender</label>
                           <div className="col-sm-2">
                              <div class="form-check">
                                 <input class="form-check-input border-dark" name="Gender" type="radio" onChange={handleChange} value="Male" />
                                 <label class="form-check-label">
                                    Male
                              </label>
                              </div>
                           </div>
                           <div className="col-sm-4">
                              <div class="form-check">
                                 <input class="form-check-input border-dark" name="Gender" type="radio" onChange={handleChange} value="Female" />
                                 <label class="form-check-label">
                                    Female
                              </label>
                              </div>
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Date of birth</label>
                           <div className="col-sm-8">
                              <input type="date" value={DateOfBirth} className="form-control border-dark" name="DateOfBirth" onChange={handleChange} required />
                              {errors.DateOfBirth.length > 0 &&
                                 <span className="text-danger mt-3">{errors.DateOfBirth}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Place of birth</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" name="PlaceOfBirth" value={PlaceOfBirth} onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">First Language</label>
                           <div className="col-sm-8">
                              <select class="form-control border-dark" id="sel1" name="Language" onChange={handleChange}>
                                 <option value="" selected disabled>Please select</option>
                                 <option>Gujarati</option>
                                 <option>English</option>
                                 <option>Hindi</option>
                                 <option>Other</option>
                              </select>
                           </div>
                        </div>

                        <div className="form-group row py-2">
                           <label className="col-sm-4 col-form-label text-center">Address</label>
                           <div className="col-sm-8">
                              <select placeholder="Country" value={this.state.selectedCountry}
                                 onChange={this.changeCountry} className="form-control border-dark" name="Country">
                                 <option>--Choose Country--</option>
                                 {this.state.countries.map((e, key) => {
                                    return <option key={key}>{e.name}</option>;
                                 })}
                              </select>
                           </div>
                        </div>
                        <div className="form-group row py-2">
                           <label className="col-sm-4 col-form-label"></label>
                           <div className="col-sm-8">
                              <select placeholder="State" value={this.state.selectedState}
                                 onChange={this.changeState} className="form-control border-dark" name="State">
                                 <option>--Choose State--</option>
                                 {this.state.states.map((e, key) => {
                                    return <option key={key}>{e.name}</option>;
                                 })}
                              </select>
                           </div>
                        </div>
                        <div className="form-group row py-2">
                           <label className="col-sm-4 col-form-label"></label>
                           <div className="col-sm-8">
                              <select placeholder="City" className="form-control border-dark" name="City" onChange={handleChange}>
                                 <option>--Choose City--</option>
                                 {this.state.cities.map((e, key) => {
                                    return <option key={key}>{e}</option>;
                                 })}
                              </select>
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Pin Code</label>
                           <div className="col-sm-8">
                              <input type="number" value={Pincode} className="form-control border-dark" name="Pincode" onChange={handleChange} required />
                              {errors.Pincode.length > 0 &&
                                 <span className="text-danger mt-3">{errors.Pincode}</span>}
                           </div>
                        </div>

                        <hr />
                        <h4>College Details : </h4>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Enrollment No:</label>
                           <div className="col-sm-8">
                              <input type="number" value={Enrollment} className="form-control border-dark" name="Enrollment" onChange={handleChange} required />
                              {errors.Enrollment.length > 0 &&
                                 <span className="text-danger mt-3">{errors.Enrollment}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">College Name</label>
                           <div className="col-sm-8">
                              <input type="text" value={ClgName} className="form-control border-dark" name="ClgName" onChange={handleChange} required />
                              {/* {errors.erno.ClgName > 0 &&
                                 <span className="text-danger mt-3">{errors.ClgName}</span>} */}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">College Address</label>
                           <div className="col-sm-8">
                              <input type="text" value={ClgAdd} className="form-control border-dark" name="ClgAdd" onChange={handleChange} required />
                              {/* {errors.erno.ClgAdd > 0 &&
                                 <span className="text-danger mt-3">{errors.ClgAdd}</span>} */}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">College Logo</label>
                           <div className="col-sm-8">
                              <input type="file" className="form-control border-dark"
                                 name="Logo" onChange={onLogoChange} required />
                           </div>
                        </div>

                        {
                           Logo &&
                           <div className="form-group row py-2 text-center">
                              <label className="col-sm-4 col-form-label"></label>
                              <div className="col-sm-8">
                                 <img src={Logo} width="100px" alt="studebt" />
                              </div>
                           </div>
                        }

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Student Photo</label>
                           <div className="col-sm-8">
                              <input type="file" className="form-control border-dark"
                                 name="Pic" onChange={onLogoChange} required />
                           </div>
                        </div>

                        {
                           Pic &&
                           <div className="form-group row py-2 text-center">
                              <label className="col-sm-4 col-form-label"></label>
                              <div className="col-sm-8">
                                 <img src={Pic} width="100px" alt="studebt" />
                              </div>
                           </div>
                        }

                        <hr />
                        <h4>Father's Details : </h4>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">First Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={FatherFname} name="FatherFname" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Middle Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={FatherMname} name="FatherMname" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Last Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={FatherLname} name="FatherLname" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Email</label>
                           <div className="col-sm-8">
                              <input type="email" className="form-control border-dark" value={FatherEmail} name="FatherEmail" onChange={handleChange} required />
                              {errors.FatherEmail.length > 0 &&
                                 <span className="text-danger mt-3">{errors.FatherEmail}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Education Qualification</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={FatherEQ} name="FatherEQ" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Profession</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={FatherProfession} name="FatherProfession" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Designation</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={FatherDesignation} name="FatherDesignation" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Phone No:</label>
                           <div className="col-sm-8">
                              <input type="number" className="form-control border-dark" value={FatherPhone} name="FatherPhone" onChange={handleChange} required />
                              {errors.FatherPhone.length > 0 &&
                                 <span className="text-danger mt-3">{errors.FatherPhone}</span>}
                           </div>
                        </div>

                        <hr />
                        <h4>Mother's Details : </h4>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">First Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={MotherFname} name="MotherFname" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Middle Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={MotherMname} name="MotherMname" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Last Name</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={MotherLname} name="MotherLname" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Email</label>
                           <div className="col-sm-8">
                              <input type="email" className="form-control border-dark" value={MotherEmail} name="MotherEmail" onChange={handleChange} required />
                              {errors.MotherEmail.length > 0 &&
                                 <span className="text-danger mt-3">{errors.MotherEmail}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Education Qualification</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={MotherEQ} name="MotherEQ" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Profession</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={MotherProfession} name="MotherProfession" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Designation</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={MotherDesignation} name="MotherDesignation" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Phone No:</label>
                           <div className="col-sm-8">
                              <input type="number" className="form-control border-dark" value={MotherPhone} name="MotherPhone" onChange={handleChange} required />
                              {errors.MotherPhone.length > 0 &&
                                 <span className="text-danger mt-3">{errors.MotherPhone}</span>}
                           </div>
                        </div>

                        <hr />
                        <h4>Emergency Contact List : </h4>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Relation</label>
                           <div className="col-sm-8">
                              <select class="form-control border-dark" name="Relation" id="sel1" onChange={handleChange}>
                                 <option value="" selected disabled>Please select</option>
                                 <option>Brother</option>
                                 <option>Sister</option>
                                 <option>GrandFather</option>
                                 <option>GrandMother</option>
                                 <option>Uncle</option>
                                 <option>Aunt</option>
                                 <option>Other</option>
                              </select>
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Phone No:</label>
                           <div className="col-sm-8">
                              <input type="number" className="form-control border-dark" value={RelationPhone} name="RelationPhone" onChange={handleChange} required />
                              {errors.RelationPhone.length > 0 &&
                                 <span className="text-danger mt-3">{errors.RelationPhone}</span>}
                           </div>
                        </div>

                        <hr />
                        <h4>Other Details : </h4>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Reference Details</label>
                           <div className="col-sm-8">
                              <textarea rows="3" className="form-control border-dark" value={ReferenceDetails} name="ReferenceDetails" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Reference Through</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control border-dark" value={ReferenceThrough} name="ReferenceThrough" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Address</label>
                           <div className="col-sm-8">
                              <textarea rows="2" className="form-control border-dark" value={ReferenceAddress} name="ReferenceAddress" onChange={handleChange} required />
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label">Phone No:</label>
                           <div className="col-sm-8">
                              <input type="number" className="form-control border-dark" value={ReferencePhone} name="ReferencePhone" onChange={handleChange} required />
                              {errors.ReferencePhone.length > 0 &&
                                 <span className="text-danger mt-3">{errors.ReferencePhone}</span>}
                           </div>
                        </div>

                        <div className="form-group row py-2 text-center">
                           <div className="col-sm-4"></div>
                           {/* <button type="submit" className="btn btn-block col-sm-4 btn-primary mt-3"  >
                           Submit Form
                        </button> */}
                           <button type="submit" className="btn btn-block btn-primary col-sm-4 mt-3 text-uppercase" >
                              Submit Form
                           </button>
                        </div>


                     </form>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
