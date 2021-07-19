import React, { Component } from "react";
import Button from "./Buttons";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "John",
      showInfo: true,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log("You clicked me");
  //   console.log(this.state.count++);
  // }

  // handleClick = () => {
  //   console.log("You clicked me");
  //   console.log(this.state.count++);
  // };

  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // lowerCount = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // };

  // resetCount = () => {
  //   this.setState({
  //     count: 0,
  //   });
  // };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  checkInfo = (info) => {
    if (info) {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
          aperiam?
        </p>
      );
    } else {
      return null;
    }
  };

  render() {
    const { id, img, title, auther } = this.props.info;
    const { handleDelete } = this.props;
    return (
      <article className="book">
        <img src={img} alt="img" />
        <div>
          <h4>Title: {title}</h4>
          <h6>Auther: {auther}</h6>

          {/* <button onClick={this.handleClick}>add count</button> */}

          {/* <h3>Count: {this.state.count} </h3>
          <h3>Name: {this.state.name} </h3>
          <button onClick={this.addCount}>add count</button>
          <button onClick={this.resetCount}>reset</button>
          <button onClick={this.lowerCount}>Lower count</button> */}

          {/* <Button handleDelete={handleDelete} /> */}

          <button onClick={() => handleDelete(id)}>Delete</button>

          <button onClick={this.handleInfo}>toggle info</button>

          {/* and */}
          {/* {this.state.showInfo && (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              animi cupiditate, consequuntur sunt optio sequi? Atque recusandae
              unde aspernatur modi.
            </p>
          )} */}

          {/* ternary */}
          {/* {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, illo?
            </p>
          ) : null} */}

          {/* function */}
          {this.checkInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}
