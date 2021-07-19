import React, { Component } from 'react'

export default class Book extends Component {

  constructor(props){
    super(props);
    this.state = {
      count : 1,
      showInfo:false
    }
  }

  handleInfo = () => {
      this.setState({
        showInfo : !this.state.showInfo
      }) 
    }

    addCount = () => {
      this.setState({
        count : this.state.count + 1
      })
    }
    reSet = () => {
      this.setState({
        count : 0
      })
    }
    lowerCount = () => {
      this.setState({
        count : this.state.count - 1
      })
    } 

  

  render() {
  const {id, img , title , author} = this.props.info
  const {handleDelete} = this.props

  const checkInfo = (Info) => {
    if(Info === true){
      return <p>This is a Book</p>
    }
    else{
      return null
    }
  } 

  return (
    <article className="book">
      <img src= {img} width="150" alt="book"/>
      <div>
        <h4>Title : {title}</h4>
        <h6>Author : {author}</h6>
        <h4>Count : {this.state.count} </h4>
        <button type = "button" onClick = { () =>  handleDelete(id) }>delete me</button>
        <button type = "button" onClick = { this.handleInfo }>Hide Data</button>
        <button type = "button" onClick = { this.addCount}>add Book</button>
        <button type = "button" onClick = { this.reSet }>Reset</button>
        <button type = "button" onClick = { this.lowerCount }>remove Book</button>
        {/* third method */}
        {checkInfo(this.state.showInfo)}
        {/* ternary operator */}
          {/* {
            this.state.showInfo ? (
              <p> This is a Book </p>
            ) : null
          } */}
        {/* {
          this.state.showInfo && (
            <p>
              this is a data
            </p>
          )
        } */}
      </div>
    </article>
  )
  }
}
