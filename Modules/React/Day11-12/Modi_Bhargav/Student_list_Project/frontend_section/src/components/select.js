import React, { Component } from "react";
import Data from "./country";

export class Countrys extends Component {
  render() {
    return (
      <>
        {Data.map((country) => (
          <option key={country.countrys} value={country.countrys}>
            {country.countrys}
          </option>
        ))}
      </>
    );
  }
}

export class States extends Component {
  render() {
    const countrys = this.props.countrys;
    var myCountry = Data.find((country) => country.countrys === countrys);
    var data = [];
    for (var i in myCountry) {
      data = myCountry[i];
    }
    return (
      <>
        {data.map((state) => (
          <option key={state.states} value={state.states}>
            {state.states}
          </option>
        ))}
      </>
    );
  }
}

export class Citys extends Component {
  render() {
    const state = this.props.states;
    var myCity = Data.find((state) =>
      state.stated.map((city) => city.states === state)
    );
    var data = [];
    for (var i in myCity) {
      data = myCity[i];
    }
    let data1 = data.find((so) => so.states === state);
    let data2 = [];
    for (var j in data1) {
      data2 = data1[j];
    }
    return (
      <>
        {data2.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </>
    );
  }
}
