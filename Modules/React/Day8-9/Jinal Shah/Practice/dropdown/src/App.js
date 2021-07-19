// https://www.codegrepper.com/code-examples/javascript/cascading+dropdown+for+forms+react

import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: '--Choose Country--',
      selectedState: '--Choose State--'
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: 'Germany',
          states: [
            {
              name: 'Berlin',
              cities: ['Charlottenburg', 'Wilmersdorf', 'Heinersdorf']
            },
            {
              name: 'North Rhine-Westphalia',
              cities: ['Duisburg', 'Wuppertal', 'Bonn', 'Münster']
            }
          ]
        },
        {
          name: 'USA',
          states: [
            { name: 'California', cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Oakland'] },
            { name: 'Hawaii', cities: ['Honolulu', 'Pearl', 'Lahaina'] },
            { name: 'Kansas', cities: ['Wichita', 'Olathe', '	Lenexa'] }
          ]
        },
        { name: 'India', states: [{ name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] }] },
      ]
    });
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({ states: this.state.countries.find(cntry => cntry.name === event.target.value).states });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
    this.setState({ cities: stats.find(stat => stat.name === event.target.value).cities });
  }

  render() {
    return (
      <div id="container">
        <h2>Cascading or Dependent Dropdown using React</h2>

        <div>
          <label>Country</label>
          <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
            <option>--Choose Country--</option>
            {this.state.countries.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>State</label>
          <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
            <option>--Choose State--</option>
            {this.state.states.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>City</label>
          <select placeholder="City">
            <option>--Choose City--</option>
            {this.state.cities.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
          </select>
        </div>
      </div>
    )
  }
}

export default Dropdown;