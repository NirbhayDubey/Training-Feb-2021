import React, { Component } from "react";

/**
 * React has only one built-in method that gets called when a component is unmounted:
 * componentWillUnmount()
 */

export default class Unmounting extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}
