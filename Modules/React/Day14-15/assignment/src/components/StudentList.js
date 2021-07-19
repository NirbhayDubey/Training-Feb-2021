import React from 'react'
import StudentItem from './StudentItem'

const StudentList = ({ data, clearList, handleDelete, handleEdit }) => {
   return (
      <div>
         <div className="card-group p-2">
            {data.map(d1 => {
               return <StudentItem key={d1.id} id={d1.id} Name={d1.Name} Enrollment={d1.Enrollment} clgName={d1.clgName} clgAdd={d1.clgAdd} logo={d1.logo} pic={d1.pic} handleDelete={handleDelete} handleEdit={handleEdit} />
            })}
         </div>
         <div className="row mt-5 mb-5 justify-content-center">
            {data.length > 0 && <button className="btn btn-danger" onClick={clearList}>
               Clear All Cards
         </button>}
         </div>
      </div>
   )
}

export default StudentList