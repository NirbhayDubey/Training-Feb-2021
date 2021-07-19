import React, { Component } from "react";

export default class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    return (
      <div className="mt-5">
        {/* <span
          className="text-center mt-5 mx-auto
        "
        >
          Copyright © {this.getYear()} Anuj Pal <br></br> inc All RIght Reseverd
        </span> */}
      </div>
    );
  }
}
