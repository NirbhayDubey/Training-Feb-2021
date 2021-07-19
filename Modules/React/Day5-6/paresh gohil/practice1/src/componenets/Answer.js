import React, { Component } from 'react'

export default class Answer extends Component {

    render(props) {
        return (
            <div>
                <h3>celcius : {this.props.cel}</h3>
                <h3>farenhint : {this.props.far}</h3>
            </div>
        )
    }
}
