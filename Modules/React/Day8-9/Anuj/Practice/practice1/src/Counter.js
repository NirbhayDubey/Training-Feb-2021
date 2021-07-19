import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
    Decrease=()=>{
        this.setState((state,props)=>{return{count:state.count-1}})
        console.log("changed",this.state.count);
    }
    Increase=()=>{
       this.setState({count:this.state.count+1},()=>console.log("Changed",this.state.count))
      
    }
    render() {
        return (
        <React.Fragment>
            <div style={{margin:"3rem",fontSize:"2rem" }}>
                <button type="button" onClick={this.Decrease}>Deacrease</button>
                <span style={{margin:"1rem"}}>count : {this.state.count}</span>
                <button type="button" onClick={this.Increase}>Increase</button>
            </div>
        </React.Fragment>
        )
    }
}
