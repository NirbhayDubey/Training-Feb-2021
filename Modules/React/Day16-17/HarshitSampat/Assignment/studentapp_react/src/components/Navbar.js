import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../img/logo.png'
export default function Navbar1() {
    return (
      <Navbar bg="light" varient="dark" fixed="top">
        <div className="container">
          <Navbar.Brand>
            <img width="35" src={logo} alt="logo" />
            Student Details
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="add-student/_add">Add Student</Nav.Link>
            <Nav.Link href="/">StudentList</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    );
}
