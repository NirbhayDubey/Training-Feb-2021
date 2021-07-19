import React, { Component } from 'react'

export default class Counter extends Component {

	state = {
		count : 0
	}

	handleIncrease = () => {
		console.log('handleIncrease called first : ',this.state.count)

		this.setState({
			count : this.state.count + 1
		},() => {console.log('handleIncrease called third : ',this.state.count)})

		/* this.setState({
			count : this.state.count + 2
		}) */

		console.log('handleIncrease called second : ',this.state.count)
	}

	handleDecrease = () => {
		console.log('handleDecrease called first : ',this.state.count)

		this.setState((state,props) => {
			return{ count : state.count - 1 };
		},() => {console.log('handleDecrease called third : ',this.state.count)});
		// count : state.count - props.amount

		this.setState((state,props) => {
			return{ count : state.count - 2 };
		});

		console.log('handleDecrease called second : ',this.state.count)
	}

	render() {
		return (
			<>
				<div style={{ margin:'3rem', fontSize:'2rem'}}>
					<button type="button" onClick={this.handleDecrease}>decrease</button>
					<span style={{ margin:'3rem', fontSize:'2rem'}}>count : {this.state.count} </span>
					<button type="button" onClick={this.handleIncrease}>increase</button>
				</div>
			</>
		)
	}

}
