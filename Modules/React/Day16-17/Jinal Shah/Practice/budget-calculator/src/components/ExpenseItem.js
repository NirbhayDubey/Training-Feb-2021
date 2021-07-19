import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
   const { id, charge, amount } = expense;
   return (
      <li className="item">
         <div className="info">
            <span className="expense">
               {charge}
            </span>
            <span className="amount">
               ${amount}
            </span>
         </div>
         <div className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
            <MdEdit />
         </div>
         <div className="edit-btn" aria-label="edit button" onClick={() => handleDelete(id)}>
            <MdDelete />
         </div>
      </li>
   )
}
