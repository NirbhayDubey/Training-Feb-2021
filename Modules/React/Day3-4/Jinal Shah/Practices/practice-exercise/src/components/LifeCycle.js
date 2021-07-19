import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timerID = setInterval(
        () => this.tick(),
        5000
    );
  }

  componentWillUnmount() {
    console.log('componentDidMount')
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

setInterval(Clock.componentWillUnmount, 5000);

export default Clock