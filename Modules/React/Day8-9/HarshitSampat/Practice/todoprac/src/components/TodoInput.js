import React, { Component } from "react";
// import TodoItem from './TodoItem'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body mt-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"> </i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add todo item"
              value={item}
              onChange={handleChange}
            ></input>
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3 "
                : "btn btn-block btn-primary mt-3 "
            }
          >
            {editItem ? "Edit item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}
