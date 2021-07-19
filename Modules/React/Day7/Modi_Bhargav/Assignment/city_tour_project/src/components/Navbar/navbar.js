import React from 'react'
import './navbar.scss'

export default function navbar() {
 return (
   <nav className="navbar">
    <img src="logo.png" alt="city tour"/>
    <ul className="nav-links">
     <li>
      <a href="/" className="nav-link">
       Home
      </a>
     </li>
     <li>
      <a href="/" className="nav-link">
       About
      </a>
     </li>
     <li>
      <a href="/" className="nav-link active">
       Tours
      </a>
     </li>
    </ul>
   </nav>
 )
}
