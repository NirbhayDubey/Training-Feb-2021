import React, { Component } from 'react'
import Images from './Images'
import Students from './student'
import Colleges from './college'

export default class StudentData extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    isToggleOn: true
                  };
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
            }));
    }
  

  render() {

      const {img , logo, ID , FirstName, LastName, DOB, CollegeName, Address} = this.props.info
      const {handleDelete} = this.props
  return (

<div class="m-3 col-12 col-sm-6 col-md-4" style={{width:"20rem"}}
>     
      {this.state.isToggleOn ? 

        <div class="card card-body bg-dark mb-0"> 

            <Images img = {img} logo = {logo} />
            <h6 class="card-title text-center text-primary"> {this.props.children} </h6>  

            <Students ID = {ID} FirstName = {FirstName} LastName = {LastName} DOB = {DOB}/>

            <Colleges CollegeName = {CollegeName} Location = {Address} /> 
        </div>: null}

        <div class = "card-footer bg-primary">
            <button type="button" class="btn btn-danger my-3 ml-2" onClick = {() => handleDelete(ID)}>Delete Data</button> 

            <button type="button" class="btn btn-success b2" onClick = {this.handleClick}>
            {this.state.isToggleOn ? 'Hide Info' : 'Show Info'}
        </button>
      </div>
  </div>
    )
  }
}


