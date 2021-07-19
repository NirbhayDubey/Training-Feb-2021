/*
Create Student Form With ID,FirstName, LastName,image, CollegeName and College Logo.
Submit this value to the list. And display this list.
Note: state and ref both should be used.
  State: ID,FirstName,LastName,CollegeName
  Ref: Logo and image
*/

import React, { Component } from 'react'
import FormInput from './components/FormInput'
import Record from './components/Record'

export default class App extends Component {

	state = {
		id: "",
		fname: "",
		lname: "",
		cname: "",
		pic: "",
		logo: ""
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		}, () => console.log(this.state))
	}

	onPicChange = val => {
		this.setState({ pic: URL.createObjectURL(val) }, () => console.log(this.state.pic))
	}

	onLogoChange = val => {
		this.setState({ logo: URL.createObjectURL(val) }, () => console.log(this.state.logo))
	}



	render() {
		return (
			<div className="container">
				<FormInput id={this.state.id} fname={this.state.fname} lname={this.state.lname} cname={this.state.cname} logo={this.state.logo} pic={this.state.pic} onPicChange={this.onPicChange} onLogoChange={this.onLogoChange} handleChange={this.handleChange} />

				<Record id={this.state.id} fname={this.state.fname} lname={this.state.lname} cname={this.state.cname} logo={this.state.logo} pic={this.state.pic} />

				{/* <Record state1={this.state} /> */}

				{/* {this.state.student.map(item => ( <FormInput key={item.id} info={item} handleChange={this.handleChange} /> ) )} */}

				{/* {this.state.map(item => ( <Record key={item.ID} info={item}> </Record> ) )} */}

			</div>

		);
	}
}
