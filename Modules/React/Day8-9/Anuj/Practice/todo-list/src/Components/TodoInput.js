import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card  card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book fa-2x"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add to-do item"
              value={item}
              onChange={handleChange}
            ></input>
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3 text-uppercase w-100"
                : "btn btn-block btn-primary mt-3 text-uppercase w-100"
            }
          >
            {editItem ? "edit Item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
