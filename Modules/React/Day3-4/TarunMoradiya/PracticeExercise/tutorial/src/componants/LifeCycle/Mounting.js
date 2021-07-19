import React, { Component } from "react";

/**
 * Mounting means putting elements into the DOM.
 * constructor()
 * getDerivedStateFromProps()
 * render()
 * componentDidMount()
 */

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { favoritecolor: props.favcol };
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}
