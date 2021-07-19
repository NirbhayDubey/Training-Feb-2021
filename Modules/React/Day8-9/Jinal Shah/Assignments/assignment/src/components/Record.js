import React, { Component } from 'react'

/* export default class Record extends Component {
	render() {
		console.log(this.props.info)
		return (
			<div>
				{this.props.pic === "" ? <h1></h1> :
					<div class="col-lg-6 col-md-6 col-sm-6 m-2 p-2 ">
						<div class="card bg-light text-center border-info font-weight-bold" >
							<div class="card-body">
								<section>
									<img class="img rounded-circle" width="80px" src={this.props.pic} alt="" />
									<img class="img1" width="80px" src={this.props.logo} alt="" />
								</section>
								<div className="my-auto text-center mt-3">
									<div>
										Student Id : {this.props.id}
									</div>
									<div>
										Student name : {this.props.fname} {this.props.lname}
									</div>
									<div>
										College Name : {this.props.cname}<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
} */

export default class Record extends Component {
	render() {
		console.log(this.props.info)
		return (
			<div>
				{this.props.pic === "" ? <h1></h1> :
					<div class="container mt-5">
						<div class="card card-primary card-block" >
							<div class="card-body">
								<section>
									<img class="img rounded-circle" width="80px" src={this.props.pic} alt="" />
									<img class="img1" width="80px" src={this.props.logo} alt="" />
								</section>
								<div className="text-center mt-5 pt-5">
									<div>
										Student Id : {this.props.id}
									</div>
									<div>
										Student name : {this.props.fname} {this.props.lname}
									</div>
									<div>
										College Name : {this.props.cname}<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}


/* { this.props.pic === "" ? <h1></h1> :
	<div>
		id = {this.props.id} <br/>
		name = {this.props.fname} {this.props.lname} <br/>
		college = {this.props.cname}<br/>
		<img src={this.props.pic} alt="" />
		<img src={this.props.logo} alt=""  />
		{this.props.info}
	 </div> }  */