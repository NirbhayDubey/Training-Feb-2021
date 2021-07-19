import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2 align-items-center">
        <h6>{title}</h6>
        <div className="todo-icon">
          <button
            className="mr-2 text-success btn"
            style={{ background: "#fff" }}
            onClick={handleEdit}
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="mr-2 text-danger btn"
            style={{ background: "#fff" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}
