import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  }
  handleSubmit = (e) => {

    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItem=[...this.state.items,newItem]
    this.setState({
      items:updatedItem,
      item:'',
      id:uuid(),
      editItem:false
    },()=>console.log(this.state.items))

  };
  clearList = () => {
    this.setState({
      items:[]
    })
 
  }
  handleDelete = (id) =>{
    const filteredItems=this.state.items.filter(item=>item.id!==id)
    this.setState({
      items:filteredItems
    })
  }
  handleEdit = (id) => {
    const filteredItems=this.state.items.filter(item=>item.id!==id);
    const selectedItem=this.state.items.find(item=>item.id===id);
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true
    })
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}
