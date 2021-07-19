import React from 'react'

export const StudentForm = ({ students, handleSubmit, handleChange, onPicChange, edit }) => {
   console.log(students)
   return (
      <>
         <div className="card border-rounded mb-2">
            <div className="head1">
               <h3 className="text-capitalize text-center m-2">Student Admission Form</h3>
            </div>
            <div className="card-body">
               <form onSubmit={handleSubmit} >

                  <div className="form-group row py-2 text-center">
                     <label className="col-sm-4 col-form-label">Name</label>
                     <div className="col-sm-8">
                        <input type="text" className="form-control border-dark" name="Name" value={students.Name} onChange={handleChange} required />
                     </div>
                  </div>

                  <div className="form-group row py-2 text-center">
                     <label className="col-sm-4 col-form-label">Enrollment No:</label>
                     <div className="col-sm-8">
                        <input type="number" className="form-control border-dark" name="Enrollment" value={students.Enrollment} onChange={handleChange} required />
                     </div>
                  </div>

                  <div className="form-group row py-2 text-center">
                     <label className="col-sm-4 col-form-label">College Name</label>
                     <div className="col-sm-8">
                        <input type="text" className="form-control border-dark" name="clgName" value={students.clgName} onChange={handleChange} required />
                     </div>
                  </div>

                  <div className="form-group row py-2 text-center">
                     <label className="col-sm-4 col-form-label">College Address</label>
                     <div className="col-sm-8">
                        <input type="text" className="form-control border-dark" name="clgAdd" value={students.clgAdd} onChange={handleChange} required />
                     </div>
                  </div>

                  <div className="form-group row py-2 text-center">
                     <label className="col-sm-4 col-form-label">College Logo</label>
                     <div className="col-sm-8">
                        <input type="file" className="form-control border-dark"
                           name="logo" onChange={onPicChange} required />
                     </div>
                  </div>

                  {
                     students.logo &&
                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label"></label>
                        <div className="col-sm-8">
                           <img src={students.logo} width="100px" alt="studebt" />
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
                     students.pic &&
                     <div className="form-group row py-2 text-center">
                        <label className="col-sm-4 col-form-label"></label>
                        <div className="col-sm-8">
                           <img src={students.pic} width="100px" alt="studebt" />
                        </div>
                     </div>
                  }

                  <div className="form-group row py-2 text-center">
                     <div className="col-sm-4"></div>
                     <button type="submit" className="btn btn-block btn-primary col-sm-4 mt-3 text-uppercase">
                        {edit ? 'edit' : 'submit'}
                     </button>
                  </div>

               </form>
            </div>
         </div>
      </>
   )
}
