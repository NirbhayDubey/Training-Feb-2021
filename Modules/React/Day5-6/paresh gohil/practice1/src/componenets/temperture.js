import React, { Component } from 'react'

export default class temperture extends Component {

    handleClick = (e) => {
        this.props.onclickchange(e.target.value)
    }

    render(props) {
        return (
            <div>
                <label>
                    <input type="text" value={this.props.ans} onChange={this.handleClick}></input><br/>
                </label>
            </div>
        )
    }
}
