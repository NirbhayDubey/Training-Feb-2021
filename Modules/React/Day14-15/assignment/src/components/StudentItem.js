import React from 'react'

const StudentItem = ({ id, Name, Enrollment, clgName, clgAdd, logo, pic, handleDelete, handleEdit }) => {
   return (
      <div className="m-3 col-12 col-sm-6 col-md-4">
         <div class="card card-primary card-block m-2" style={{ width: "16rem" }}>
            <div class="card-body">
               <section className="pb-4">
                  <img class="img rounded-circle" width="80px" height="100px" src={pic} alt="student" />
                  <img class="img1" width="80px" height="100px" src={logo} alt="college" />
               </section>
               <div className="text-center mt-5 pt-5">
                  <div>
                     Student Id :
                        </div>
                  <div>
                     {Enrollment}
                  </div>
                  <div>
                     Student name :
                  </div>
                  <div>
                     {Name}
                  </div>
                  <div>
                     College Name :
                  </div>
                  <div>
                     {clgName}
                  </div>
                  <div>
                     College Address :
                  </div>
                  <div>
                     {clgAdd}
                  </div>
               </div>
            </div>
            <div className="card-footer text-center">
               <button type="button" className="btn btn-success " onClick={() => handleEdit(id)} >
                  Edit Data
               </button>
               <button type="button" className="btn btn-danger " onClick={() => handleDelete(id)} >
                  Delete Data
               </button>
            </div>
         </div>
      </div>
   )
}

export default StudentItem
