import React, { Component } from 'react'





class Counter extends Component {
  state = {
    count: 0,
  };

  hadelDncrease = () => {
    console.log("called first :", this.state.count);
    console.log("called second:", this.state.count);

    this.setState((state,props)=>{
      return {count:state.count-1};
    });
    this.setState((state, props) => {
      return { count: state.count - 1 };
    });

  };

  // hadelincrease = () => {
  //   console.log("called first :", this.state.count);
  //   this.setState(
  //     {
  //       count: this.state.count + 1,
  //     },
  //     () => console.log("called second:", this.state.count)
  //   );
  //   console.log("called second:", this.state.count);
  // };

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.hadelDncrease}>decrease</button>
          <span style={{ margin: "1rem" }}>count: {this.state.count}</span>
          <button type="button" onClick={this.hadelincrease}>
            increse
          </button>
        </div>
      </React.Fragment>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <Counter amount="2"/>
      </div>
    )
  }
}
export default App