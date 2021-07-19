import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {

   render() {
      return (
         <div>
            <header>
               <nav class="navbar navbar-expand-lg navbar-expand-md bg-dark">
                  <ul className="navbar-nav">
                     <li className="nav-item ml-3">
                        <a className="nav-link">
                           <Link to="/" className="link">
                              List Of Students
                           </Link>
                        </a>
                     </li>
                     <li className="nav-item ml-3">
                        <a className="nav-link">
                           <Link to="/add-student" className="link">
                              Add New Student
                           </Link>
                        </a>
                     </li>
                     <li className="nav-item ml-3">
                        <a className="nav-link">
                           <Link to="/id-card" className="link">
                              Print ID Card
                           </Link>
                        </a>
                     </li>
                  </ul>
               </nav>
            </header>
         </div >
      )
   }
}

export default HeaderComponent