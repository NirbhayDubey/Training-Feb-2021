import React from 'react'

export default function Buttons({handleDelete}) {
  return (
   <button type="button" onClick={handleDelete} style={{background:'red',color:'white',fontSize:'2rem'}}>
     delete me
   </button>
 )
}
