import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3001/" className="navbar-brand">Student Form</a></div>
                    <ul className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/add-student/">
                            Create
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/list-studentidcard/">
                            StudentIdCard
                        </NavLink>
                    </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent