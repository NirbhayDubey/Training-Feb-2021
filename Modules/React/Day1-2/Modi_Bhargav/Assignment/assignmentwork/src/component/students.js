import React from 'react'

const Student = (props) => {
  const {img,logo,ID,FirstName,LastName,DOB,collegeName,Address} = props.info
  var url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <div className="student">
      {props.children}
      <img src={url} alt="student img" id="p1"/>
      <img src={logo} alt="college logo" id="p2"/>
      <h4 style={{marginLeft:"-20px"}}>studentID: {ID}</h4>
      <h4>Name: {FirstName + ' ' + LastName}</h4>
      <h4>DOB: {DOB}</h4>
      <h4>CollegeName: {collegeName} </h4>
      <h4>Address: {Address}</h4>
    </div>
    )
}

export default Student