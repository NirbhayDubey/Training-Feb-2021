import React, { Component } from 'react'
import StudentData from './StudentData'

export default class StudentList extends Component {

   render() {
      const { items, clearList, handleDelete, handleEdit } = this.props;
      console.log(items)
      return (
         <div className="row mt-5 justify-content-center">
            <h3 className="text-capitalize text-center">
               Student list
				</h3>

            {items.map(item => {
               return (
                  <StudentData key={item.id} erno={item.erno} fname={item.fname} lname={item.lname}
                     clgName={item.clgName} clgAdd={item.clgAdd} logo={item.logo} pic={item.pic}
                     handleDelete={() => handleDelete(item.id)}
                     handleEdit={() => handleEdit(item.id)} />
               );
            })}

            <button type="button" className="btn btn-danger btn-block text-uppercase mt-5"
               onClick={clearList} >
               clear list
				</button>

         </div >

      )
   }

}
