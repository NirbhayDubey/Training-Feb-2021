import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../Tour";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    const filteredData = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: filteredData,
    });
  };
  render() {
    console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
