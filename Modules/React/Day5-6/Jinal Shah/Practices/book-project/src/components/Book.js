import React, {Component} from 'react'
import Buttton from './Buttons'

/* export default function Book(props) {
  return (
    <article>
      <h3>book : {props.book.book} </h3>
      <h5>author : {props.book.author}</h5>
    </article>
  )
} */

export default class Book extends Component {

  constructor(props){
    super(props);
    this.state = {
      count : 1,
      name : "john",
      showInfo : true
    };
    //this.handleClick = this.handleClick.bind(this);
  }

/*   handleClick() {
    console.log("button clicked !!")
    console.log(this.state.count)
  } */

  handleClick = () => {
    console.log("button clicked !!")
    console.log(this.state.count)
  }

  addCount = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  lowerCount = () => {
    this.setState({
      count : this.state.count - 1
    })
  }
  resetCount = () => {
    this.setState({
      count : 0
    })
  }

  handleInfo = () => {
    this.setState({
      showInfo : !this.state.showInfo
    });
  }

  render() {
    const { id, img ,title, author } = this.props.info

    const checkInfo = info =>{
      if(info === true){
        return(
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, fugiat.
          </p>
        )
      }
      else return null;
    }

    return (
      <article className="book">
        <img src={img} width="150" alt=""/>
        <div>
          <h4 >Title : {title} </h4>
          <h6 >Author : {author}</h6> 

          <button type="button" onClick={this.handleInfo} >
            toggle info
          </button>
          {checkInfo(this.state.showInfo)}

          <br/><br/>
          <button type="button" onClick={ () => this.props.handleDelete(id)} >
            delete me
          </button><br/><br/>

          <Buttton handleDelete = {this.props.handleDelete}/>

          <h3>Count : {this.state.count}</h3>
          {/* <button type="button" onClick={this.handleClick}>add count</button> */}
          <button type="button" onClick={this.addCount}>add count</button>
          <button type="button" onClick={this.resetCount}>reset count</button>
          <button type="button" onClick={this.lowerCount}>lower count</button>
        </div>
      </article>
    )
  }
}
