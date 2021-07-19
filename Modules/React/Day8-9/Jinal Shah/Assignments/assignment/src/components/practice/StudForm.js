import React, { Component } from 'react'
import Record from './Record'


export default class StudForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			Id : "",
			fname : "",
			lname : "",
			cname : "",
			logo : "",
			pic : ""
		}
	}

	handleSubmit = (e) =>{
		e.preventDefault();

		const file = this.fileUpload.files[0];
		console.log(file.name)
		const file1 = this.fileUpload1.files[0];
		console.log(file1.name)

		this.setState({
			logo : file,
			pic : file1
		})
	}
	
	render() {
		return (
			<div className="container">
				<section className="col-lg-6 col-md-6">
					<h2 className="text-capitalize text-center">
						Student Details Form
					</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group p-2">
							Student ID : 
							<input type="number" className="form-control" />
						</div>
						<div className="form-group p-2">
							First Name : 
							<input type="text" className="form-control" />
						</div>
						<div className="form-group p-2">
							Last Name : 
							<input type="text" className="form-control" />
						</div>
						<div className="form-group p-2">
							College Name : 
							<input type="text" className="form-control" />
						</div>
						<div className="form-group p-2">
							College logo : 
							<input type="file" className="form-control" ref={(ref) => this.fileUpload = ref} />
						</div>
						<div className="form-group p-2" >
							Student photo : 
							<input type="file" className="form-control" ref={(ref) => this.fileUpload1 = ref} />
						</div> 
						<button type="submit" className="btn btn-primary m-2">Submit</button>
					</form>
				</section>
				<Record logo={this.state.logo} img={this.state.img} />
			</div>
		)
	}

}
