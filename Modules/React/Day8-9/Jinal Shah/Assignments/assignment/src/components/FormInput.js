import React, { Component } from 'react'

export default class FormInput extends Component {

	handleChange = (event) => {
		console.log('change')
		this.props.handleChange(event)
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const logo = this.fileUpload.files[0];
		const pic = this.fileUpload1.files[0];
		this.props.onPicChange(pic)
		this.props.onLogoChange(logo)
		console.log(pic)
	}

	render() {
		return (
			<div>
				<section className="col-lg-6 col-md-6">
					<h2 className="text-capitalize text-center">
						Student Details Form
					</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group p-2">
							Student ID :
							<input name="id" type="number" className="form-control" value={this.props.id} onChange={this.handleChange} />
						</div>
						<div className="form-group p-2">
							First Name :
							<input name="fname" type="text" className="form-control" value={this.props.fname} onChange={this.handleChange} />
						</div>
						<div className="form-group p-2">
							Last Name :
							<input name="lname" type="text" className="form-control" value={this.props.lname} onChange={this.handleChange} />
						</div>
						<div className="form-group p-2">
							College Name :
							<input name="cname" type="text" className="form-control" value={this.props.cname} onChange={this.handleChange} />
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
			</div>
		)
	}
}
