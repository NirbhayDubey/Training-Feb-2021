import React, { Component } from "react";

/**
 * A component is updated whenever there is a change in the component's state or props.
 * getDerivedStateFromProps()
 * shouldComponentUpdate()
 * render()
 * getSnapshotBeforeUpdate()
 * componentDidUpdate()
 */

export default class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
