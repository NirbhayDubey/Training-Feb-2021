import React, { Component } from "react";
// import Button from "./Button"

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: false,
    };
    // this.handleClick=this.handleClick.bind(this)
  }
  // handleClick(){
  //   console.log("You clicked me");
  //   console.log(this.state.count);

  // }

  // handleClick = () => {
  //   console.log("You clicked me");
  //   console.log(this.state.count);
  // };

  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // lowerCount=()=>{
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // };

  // resetCount=()=>{
  //   this.setState({
  //     count: 0
  //   });
  // }
  handleInfo = () => {
    
    this.setState({
      showInfo:!this.state.showInfo
    })
  };
  render() {
    const { id, img, author, title } = this.props.info;

    // const{handleDelete}=this.props
    return (
      <article className="book">
        <img src={img} alt="book" width="150"></img>
        <div>
          <h4>Title:{title}</h4>
          <h6>Author:{author}</h6>
          <button type="button" onClick={this.handleInfo}>
            Toggle Info
          </button>
          {this.state.showInfo && (
            <p>lsdjks kfjsl lskdls lzkdslc xlkdslc lsdkfdsxc </p>
          )}
          {/* <button type="button" onClick={()=>handleDelete(id)}>Delete Me</button> */}
          {/* <Button handleDelete={handleDelete}></Button> */}
          {/* <h3>{this.state.count}</h3> */}
          {/* <button type="button" onClick={this.addCount}>
            Add Count
          </button>
          <button type="button" onClick={this.lowerCount}>
            Lower Count
          </button>
          <button type="button" onClick={this.resetCount}>
            Reset Count
          </button> */}
        </div>
      </article>
    );
  }
}
