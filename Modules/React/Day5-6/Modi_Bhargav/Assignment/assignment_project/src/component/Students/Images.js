import React from 'react'


const Images = (props) => {
  return(
    <div className="imges mt-2">
        <img class="rounded-circle" id="p1" width="80" heigth="80" src = {props.img}  alt="student img"/>

        <img class="img-fulid" id="p2" width="80" src= {props.logo} alt="college logo"/>
    </div>
  )    
}

export default Images