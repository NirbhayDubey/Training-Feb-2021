import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        // console.log(this.props);
        const { cname, address, logo, id, fname, lname,img, dob } = this.props.info;

        return (
            
            <article className="border border-3 border-dark rounded ">
            
            <div className="container">
            <div className = "row">
                <div className="col-lg-9 col-md-9 col-sm-9 bg-warning">
                    <h2>{cname}</h2>
                    <h5 class="text-secondary">{address}</h5>
                </div>
                <div className="  col-lg-3 col-md-3 col-sm-3 bg-danger" >
                    <img width = "90" src = {logo} alt = "book" />        
                </div>                       
            </div>
                {/* <div className="container "> */}
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3  bl-0"> 
                            <img 
                                width = "150" height="150"
                                src =  {img}
                                alt="wonkey donkey" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 ">

                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 ">
                            
                            <div className="pt-4">
                                <b>ID : </b> {id} <br />
                                <b>FirstName : </b>{fname} <br />
                                <b>LastName : </b>{lname }<br />
                                <b>DOB : </b>{dob} <br />
                            </div>
                        </div>
                    </div>
                </div>   
    </article>
        )
    }
}
