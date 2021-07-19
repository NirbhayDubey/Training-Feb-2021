import React from 'react'
import logo from '../../logo.jpg'
import './navbar.scss'

export default function NavBar(){
 return(
  <nav className="navbar">
   <img src={logo} height="30px" width="70px" alt="city tours company" />
   <ul className="nav-links">
    <li>
     <a href="/" className="nav-link">
      home
     </a>
    </li>
    <li>
     <a href="/" className="nav-link">
      about
     </a>
    </li>
    <li>
     <a href="/" className="nav-link active">
      tours
     </a>
    </li>
   </ul>
  </nav>
 )
}