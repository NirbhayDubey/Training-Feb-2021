import React from 'react'
import logo from '../../logo.svg'
import './navbar.scss'

export default function Navbar() {
    return (
      <nav className="navbar">
    <img src={logo} alt="city-tour-logo"></img>
    <ul className="nav-links">
        <li >
            <a className="nav-link" href="/">Home</a>
        </li>
        <li >
            <a className="nav-link" href="/">About</a>
        </li>
        <li >
            <a className="nav-link" href="/">Tours</a>
        </li>
    </ul>
      </nav>
    )
}
