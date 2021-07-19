import React from 'react'


const Images = (props) => {
  return(
    <div className="imges mt-3">
        <img class="img-circle" id="p1" width="80" heigth="80" src = {props.img}  alt="student img"/>

        <img class="img-circle float-right" id="p2" width="80" heigth="80" src= {props.logo} alt="college logo"/>
    </div>
  )    
}

export default Images