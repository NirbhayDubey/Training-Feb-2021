import React, { Component } from "react";



export default class Student extends Component {
  render(props) {
    // console.log(this.props)
    const { children } = this.props;
    //const { img } = this.props.student;
    const { Id,img, firstname, lastName, DOB } = this.props.info;
    const { collegeName, addr, logo } = this.props.info;

    
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
      <div class="container">
        <div class="row">
          <div calss="col-sm-12">
            <div class="card-body text-dark">
              <img src={url} width="150" alt="StudentImg" class="car-img-top" />
              <div class="card-body">
                <h4>Id: {Id}</h4>
                <h6>Name: {firstname + " " + lastName}</h6>
                <h6>DOB:{DOB}</h6>
                <h6>CollegeName:{collegeName}</h6>
                <h6>Addr:{addr}</h6>
                <img src={logo} width="50" alt="StudentImg" />
                <hr />
                {/* <img src={img}>logo:{logo}</img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
