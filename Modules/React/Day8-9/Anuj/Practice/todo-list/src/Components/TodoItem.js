import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between text-capitalize">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}><i class="fa fa-pencil" aria-hidden="true"></i></span>
          <span className="mx-2 text-danger" onClick={handleDelete}><i class="fa fa-trash" aria-hidden="true"></i></span>
        </div>
      </li>
    );
  }
}
