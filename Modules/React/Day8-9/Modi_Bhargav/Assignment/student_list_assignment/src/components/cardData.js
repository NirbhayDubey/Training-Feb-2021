import React, { Component } from "react";
import CardItem from "./cardItem";

export default class cardData extends Component {
  render() {
    const { students, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div class="row mt-5 justify-content-center">
        <h3 className="text-capitalize text-center text-white bg-dark">
          Students List
        </h3>

        {students.map((item) => {
          return (
            <CardItem
              key={item.id}
              Number={item.Number}
              fName={item.fName}
              lName={item.lName}
              dob={item.dob}
              gender1={item.gender1}
              colName={item.colName}
              location={item.location}
              pick={item.pick}
              logo1={item.logo1}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            >
              <h3>Students Info</h3>
            </CardItem>
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </div>
    );
  }
}
