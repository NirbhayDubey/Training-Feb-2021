import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class StudentInfo extends Component {
  render() {
    console.log(this.props.info);
    const { id, name, college, city } = this.props.info;
    return (
      <div className="text-center mt-2">
        <h5>ID : {id}</h5>
        <h5>Name : {name}</h5>
        <h5>College : {college}</h5>
        <h5>City : {city}</h5>
        <hr className="bg-primary"></hr>
      </div>
    );
  }
}
