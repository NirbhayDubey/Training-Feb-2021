import React, { Component } from 'react'
import Student from './../components/Student'

export default class studentList extends Component {
    render() {
        const {info}=this.props
        return (
            <div>
                {info.map((item,index)=>{
                    return(
                        <div>
                    
                           <Student info={item} item={index}></Student>
                           <hr className="mt-5"></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}
