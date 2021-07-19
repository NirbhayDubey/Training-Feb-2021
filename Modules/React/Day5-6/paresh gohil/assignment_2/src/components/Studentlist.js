import React, { Component } from 'react'
import Student from "./Student"
import studentdata from "./studentdata"


export default class Studentlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            students : studentdata
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Studentlist</h1>
                {this.state.students.map((item)=> <Student key={item.id} student={item}/>)}
            </div>
        )
    }
}

