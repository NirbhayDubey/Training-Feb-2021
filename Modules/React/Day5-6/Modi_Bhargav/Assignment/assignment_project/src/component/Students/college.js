import React from 'react'
function College (props){
  return (
  <ul class="list-group list-group-flush text-dark">
        <li class="list-group-item border border-info">CollegeName : {props.CollegeName}</li>
        <li class="list-group-item border border-info">Location : {props.Location}
        </li>
  </ul>
  )
}

export default College