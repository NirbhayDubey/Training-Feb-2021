import {React,useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Images/logo-4.png";
import { CgProfile, } from "react-icons/cg";
import { BsHeartFill } from "react-icons/bs";
import { BrowserRouter as Router} from 'react-router-dom'
// import Modal from 'react-modal'


export default function Navbar1() {
  // const [loginlIsOpen, setloginIsOpen] = useState(false);
  return (
    // code for navabar
    <Navbar
      bg=""
      varient="dark"
      fixed="top"
      className="text-white navbar-background"
    >
      <div className="container">
        {/* navbar logo */}
        <Navbar.Brand className="navbar-brand">
          <Nav.Link href="/">
            <img src={logo} alt="logo" className="image" />
          </Nav.Link>
        </Navbar.Brand>

        {/* Navlinks */}
        <Router>
          <Nav>
            <Nav.Link href="/list-property" className="favourite-box text-info">
              List Property
              <span className="free-box"> Free</span>
            </Nav.Link>

            <Nav.Link href="/favourites-property" className="text-white">
              <BsHeartFill className="text-danger" />
              Favourite
            </Nav.Link>
            <Nav.Link href="https://housing.com/news/" className="text-white">
              News
            </Nav.Link>
            <Nav.Link href="/Login" className="text-white">
              <CgProfile className="text-white" />
              Login
            </Nav.Link>
          </Nav>
        </Router>
      </div>
    </Navbar>
  );
}
