import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateItem = [...this.state.items, newItem];

    this.setState({
      items: updateItem,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItems,
    });
  };
  handleEdit = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitilize text-center">
              Todo Input
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                clearList={this.clearList}
              />
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
