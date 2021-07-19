import React, { Component } from 'react'

export default class StudentData extends Component {

   render() {
      const { erno, fname, lname, clgName, clgAdd, pic, logo, handleDelete, handleEdit } = this.props;
      return (
         <>
            <div className="m-3 col-12 col-sm-6 col-md-4">
               <div class="card card-primary card-block" style={{ width: "18rem" }}>
                  <div class="card-body">
                     <section className="pb-4">
                        <img class="img rounded-circle" width="80px" src={pic} alt="student" />
                        <img class="img1" width="80px" src={logo} alt="college" />
                     </section>
                     <div className="text-center mt-5 pt-5">
                        <div>
                           Student Id :
                        </div>
                        <div>
                           {erno}
                        </div>
                        <div>
                           Student name : {fname} {lname}
                        </div>
                        <div>
                           College Name : {clgName} <br />
                        </div>
                        <div>
                           College Address : {clgAdd}
                        </div>
                     </div>
                  </div>
                  <div className="card-footer">
                     <button type="button" className="btn btn-success mx-3 pl-3" onClick={handleEdit}>
                        Edit Data
                     </button>
                     <button type="button" className="btn btn-danger ml-2 " onClick={handleDelete}>
                        Delete Data
                     </button>
                  </div>
               </div>
            </div>
         </>

      )
   }

}
