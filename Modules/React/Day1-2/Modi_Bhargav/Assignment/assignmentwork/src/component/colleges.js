import React from 'react'

const College = (props) => {
  var {logo,collegeName,Address} = props.info
  
  return (
    <article>
      <img src={logo} alt="college logo"/>
      <h4>{collegeName}</h4>
      <h4>{Address}</h4>
    </article>
  )
}

export default College