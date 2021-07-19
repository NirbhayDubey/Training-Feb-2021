import React, { Component } from 'react'
import uuid from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'


class App extends Component {

  state = {
    items : [],
    id : uuid(),
    item : "",
    editItem : false
  };

  handleChange = e => {
    console.log('handle change')
    this.setState({
      item: e.target.value
    })
  } 

  handleSubmit = e => {
    console.log('handle submit')
    e.preventDefault();
    const newItem = {
      id : this.state.id,
      title : this.state.item
    }
    const updatedItems = [...this.state.items, newItem];

    this.setState(
      {
        items : updatedItems,
        item : "",
        id : uuid(),
        editItem : false
      }, 
      () => { console.log(this.state) }
    )
  } 

  clearList = () => {
    console.log('clear list')
    this.setState({
      items : []
    });
  }

  handleDelete = id => {
    console.log(`handle edit ${id}`)
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items : filteredItems
    })
  }  

  handleEdit = id => {
    console.log(`edit edit ${id}`)
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  }  

  render() {

    console.log(this.state);

    return(
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">todo input</h3>
          
          <TodoInput item={this.state.item} handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} />

        </div>
      </div>
    </div>
    );
  }
}

export default App;
