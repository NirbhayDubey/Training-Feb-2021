import React, { Component } from 'react'

export default class ToggleInfo extends Component {
    constructor(props) {
    super(props);
    this.state = 
                  {
                      isToggleOn: true
                  };
    }

     handleClick = () => {
         this.setState(state => ({
            isToggleOn: !state.isToggleOn
            }));
     }
//   <button type="button" class="btn btn-success">Success</button>

    render() {
        return (
                    <div>
                        <h1 class="text-center text-white bg-info">Toggle Info</h1>
                        <div class="container text-center my-3">
                        <button type="button" class="btn btn-success align-item-ceter" onClick = { this.handleClick}>{this.state.isToggleOn ? "Toggle On" :"Toggle Off"}</button> 
                        { 
                            this.state.isToggleOn ? (
                            <p class="mt-2 text-dark"> This is a Book </p>
                        ) : null
                    }
                    </div>
                    </div>
        )
    }
}


