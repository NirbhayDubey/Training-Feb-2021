import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handlInfo=()=>{
      this.setState({
          showInfo:!this.state.showInfo

      })
  }

  render() {
    const { id, city, img, info, name } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <section className="tour">
        <div className="img-container">
          <img src={img} alt=""></img>
          <span className="close-btn" onClick={()=>removeTour(id)}>
            <i class="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3> City : {city}</h3>
          <h4> Name : {name}</h4>
          <h5>
            {" "}
            info : {""}
            <span onClick={this.handlInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </section>
    );
  }
}
