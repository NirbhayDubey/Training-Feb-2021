import React, { Component } from 'react'
// import Button from './Button'

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 1,
            name : "John",
            showInfo : true
        };
    }

    addCount = () => {
        this.setState({ count : this.state.count + 1 });
    };
    lowerCount = () => {
        this.setState({ count : this.state.count - 1 });
    };
    resetCount = () => {
        this.setState({ count : 0 });
    };

    handleInfo = () => {
        this.setState({
            showInfo : !this.state.showInfo
        });
    }

    render() {
        // console.log(this.props);
        const { id, img, title, author } = this.props.info;
        // const { img, title, author } = this.props.info;
        const {handleDelete} =  this.props
       
        const checkInfo = (info) => {
            if(info===true){
                return <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolor recusandae aliquid iure excepturi facere fugiat
                similique omnis quisquam blanditiis.
            </p>
            }
            else {
                return null
            }
        }

        return (
            <div className ="container my-5 d-flex justify-content-center">
                 <div className="col-lg-8 border border-dark border-3 py-2 bg-light">
                        <div className = "row">
                                    <div className="border-dark border-3  col-lg-4 col-md-4" >
                                        <img src = { img } alt = "book" />
                                    
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <h4>Title : { title } </h4>
                                        <h6 className="text-secondary">Author : { author } </h6>
                                        <button type = "button" onClick = {this.addCount} className="p-2 border btn btn-success col-lg-4 col-md-4 col-sm-4 col-12 p-2">
                                                    Add Count
                                        </button>             
                                        <button type = "button" onClick = {this.resetCount} className=" p-2 border btn btn-primary  col-lg-4 col-md-4 col-sm-4 col-12 p-2">
                                                Reset
                                        </button>
                                        <button type = "button" onClick = {this.lowerCount} className="p-2 border btn btn-warning  col-lg-4 col-md-4 col-sm-4 col-12 p-2">
                                            Lower Count
                                        </button>
                                        <h3 className="d-flex justify-content-center">Count : { this.state.count } </h3>
                                        {/* <h3>Name : { this.state.name } </h3> */}
                                    </div>                    
                        
                            </div>
                            <div className = "col-lg-12">
                            <button type = "button" onClick = {() => handleDelete(id) } className="p-2 border btn btn-danger col-lg-4 col-md-6 col-sm-6 col-12">
                                    Delete Me
                                </button>                                                          
                                <button type="button" onClick={this.handleInfo} className ="p-2 border btn btn-secondary col-lg-8 col-md-6 col-sm-6 col-12">
                                    Toggle Info
                                </button>
                                {checkInfo(this.state.showInfo)}
                                    
                        
                    </div>
                 </div>
            </div>
        )
    }
}
