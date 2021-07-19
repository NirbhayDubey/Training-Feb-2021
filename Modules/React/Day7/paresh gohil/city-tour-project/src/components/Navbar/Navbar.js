import React from 'react'
import logo from "../../logo.PNG"
import "./navbar.scss"

export default function Navbar() {
    return (
        <nav className="Navbar">
            <img className="logo" src={logo} alt="city tour companry"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">Tours</a>
                </li>
            </ul>
        </nav>
    )
}
