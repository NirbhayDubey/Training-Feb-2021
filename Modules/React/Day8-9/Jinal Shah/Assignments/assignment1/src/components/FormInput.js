//https://codingshiksha.com/react/react-js-age-calculator-from-date-of-birth-in-browser-using-typescript-full-project-for-beginners/

import React, { Component } from "react";

export default class FormInput extends Component {

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
      const { fname, mname, lname, email, dob, place, lan, pin, erno, gender, clgName, clgAdd, logo, pic, f1, f2, f3, f4, f5, f6, f7, f8, m1, m2, m3, m4, m5, m6, m7, m8, rel, relNo, ref1, ref2, ref3, ref4, handleChange, handleSubmit, errors, onPicChange, onLogoChange, editData } = this.props;
      //console.log(this.props)

      return (
         <>

            <div className="card border-rounded mb-2">
               <div className="head1">
                  <h3 className="text-capitalize text-center m-2">Student Admission Form</h3>
               </div>
               <div className="card-body">

                  <form onSubmit={handleSubmit} >

                     <h4>Student Details : </h4>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-8">
                           <input type="text" value={fname} className="form-control border-dark" name="fname" onChange={handleChange} required />
                           {errors.fname.length > 0 &&
                              <span className="text-danger mt-3">{errors.fname}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Middle Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" name="mname"
                              value={mname} onChange={handleChange} required />
                           {errors.mname.length > 0 &&
                              <span className="text-danger mt-3">{errors.mname}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" name="lname"
                              onChange={handleChange} value={lname} required />
                           {errors.lname.length > 0 &&
                              <span className="text-danger mt-3">{errors.lname}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                           <input type="email" className="form-control border-dark" name="email"
                              value={email} onChange={handleChange} required />
                           {errors.email.length > 0 &&
                              <span className="text-danger mt-3">{errors.email}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2">
                        <label className="col-sm-4 col-form-label text-center">Gender</label>
                        <div className="col-sm-2">
                           <div class="form-check">
                              <input class="form-check-input border-dark" name="gender" value={gender} type="radio" />
                              <label class="form-check-label">
                                 Male
                              </label>
                           </div>
                        </div>
                        <div className="col-sm-4">
                           <div class="form-check">
                              <input class="form-check-input border-dark" name="gender" value={gender} type="radio" />
                              <label class="form-check-label">
                                 Female
                              </label>
                           </div>
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Date of birth</label>
                        <div className="col-sm-8">
                           <input type="date" value={dob} className="form-control border-dark" name="dob"
                              onChange={handleChange} required />
                           {errors.dob.length > 0 &&
                              <span className="text-danger mt-3">{errors.dob}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Place of birth</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" name="place"
                              value={place} onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">First Language</label>
                        <div className="col-sm-8">
                           <select class="form-control border-dark" id="sel1" onChange={handleChange} name="lan">
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
                              onChange={this.changeCountry} className="form-control border-dark" name="country">
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
                              onChange={this.changeState} className="form-control border-dark" name="state" >
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
                           <select placeholder="City" className="form-control border-dark" name="city" >
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
                           <input type="number" value={pin} className="form-control border-dark" name="pin" onChange={handleChange} required />
                           {errors.pin.length > 0 &&
                              <span className="text-danger mt-3">{errors.pin}</span>}
                        </div>
                     </div>

                     <hr />
                     <h4>College Details : </h4>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Enrollment No:</label>
                        <div className="col-sm-8">
                           <input type="number" value={erno} className="form-control border-dark" name="erno" onChange={handleChange} required />
                           {errors.erno.length > 0 &&
                              <span className="text-danger mt-3">{errors.erno}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">College Name</label>
                        <div className="col-sm-8">
                           <input type="text" value={clgName} className="form-control border-dark" name="clgName" onChange={handleChange} required />
                           {errors.erno.clgName > 0 &&
                              <span className="text-danger mt-3">{errors.clgName}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">College Address</label>
                        <div className="col-sm-8">
                           <input type="text" value={clgAdd} className="form-control border-dark" name="clgAdd" onChange={handleChange} required />
                           {errors.erno.clgAdd > 0 &&
                              <span className="text-danger mt-3">{errors.clgAdd}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">College Logo</label>
                        <div className="col-sm-8">
                           <input type="file" className="form-control border-dark"
                              name="logo" onChange={onLogoChange} required />
                        </div>
                     </div>

                     {
                        logo &&
                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label"></label>
                           <div className="col-sm-8">
                              <img src={logo} width="100px" alt="studebt" />
                           </div>
                        </div>
                     }

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Student Photo</label>
                        <div className="col-sm-8">
                           <input type="file" className="form-control border-dark"
                              name="pic" onChange={onPicChange} required />
                        </div>
                     </div>

                     {
                        pic &&
                        <div className="form-group row py-2 text-center">
                           <label className="col-sm-4 col-form-label"></label>
                           <div className="col-sm-8">
                              <img src={pic} width="100px" alt="studebt" />
                           </div>
                        </div>
                     }

                     <hr />
                     <h4>Father's Details : </h4>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={f1} name="f1" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Middle Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={f2} name="f2" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={f3} name="f3" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                           <input type="email" className="form-control border-dark" value={f4} name="f4" onChange={handleChange} required />
                           {errors.f4.length > 0 &&
                              <span className="text-danger mt-3">{errors.f4}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Education Qualification</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={f5} name="f5" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Profession</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={f6} name="f6" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Designation</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={f7} name="f7" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Phone No:</label>
                        <div className="col-sm-8">
                           <input type="number" className="form-control border-dark" value={f8} name="f8" onChange={handleChange} required />
                           {errors.f8.length > 0 &&
                              <span className="text-danger mt-3">{errors.f8}</span>}
                        </div>
                     </div>

                     <hr />
                     <h4>Mother's Details : </h4>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={m1} name="m1" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Middle Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={m2} name="m2" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={m3} name="m3" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                           <input type="email" className="form-control border-dark" value={m4} name="m4" onChange={handleChange} required />
                           {errors.m4.length > 0 &&
                              <span className="text-danger mt-3">{errors.m4}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Education Qualification</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={m5} name="m5" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Profession</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={m6} name="m6" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Designation</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={m7} name="m7" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Phone No:</label>
                        <div className="col-sm-8">
                           <input type="number" className="form-control border-dark" value={m8} name="m8" onChange={handleChange} required />
                           {errors.m8.length > 0 &&
                              <span className="text-danger mt-3">{errors.m8}</span>}
                        </div>
                     </div>

                     <hr />
                     <h4>Emergency Contact List : </h4>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Relation</label>
                        <div className="col-sm-8">
                           <select class="form-control border-dark" id="sel1" name="rel">
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
                           <input type="number" className="form-control border-dark" value={relNo} name="relNo" onChange={handleChange} required />
                           {errors.relNo.length > 0 &&
                              <span className="text-danger mt-3">{errors.relNo}</span>}
                        </div>
                     </div>

                     <hr />
                     <h4>Other Details : </h4>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Reference Details</label>
                        <div className="col-sm-8">
                           <textarea rows="3" className="form-control border-dark" value={ref1} name="ref1" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Reference Through</label>
                        <div className="col-sm-8">
                           <input type="text" className="form-control border-dark" value={ref2} name="ref2" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-8">
                           <textarea rows="2" className="form-control border-dark" value={ref3} name="ref3" onChange={handleChange} required />
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label">Phone No:</label>
                        <div className="col-sm-8">
                           <input type="number" className="form-control border-dark" value={ref4} name="ref4" onChange={handleChange} required />
                           {errors.ref4.length > 0 &&
                              <span className="text-danger mt-3">{errors.ref4}</span>}
                        </div>
                     </div>

                     <div className="form-group row py-2 text-center">
                        <div className="col-sm-4"></div>
                        {/* <button type="submit" className="btn btn-block col-sm-4 btn-primary mt-3"  >
                           Submit Form
                        </button> */}
                        <button type="submit" className={editData ? "btn btn-block btn-success col-sm-4 mt-3" : "btn btn-block btn-primary col-sm-4 mt-3 text-uppercase"} >
                           {editData ? "edit item" : "add item"}
                        </button>
                     </div>


                  </form>
               </div>
            </div>
         </>
      )
   }

}


