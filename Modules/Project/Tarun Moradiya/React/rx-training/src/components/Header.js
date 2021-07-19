import logo from "../images/logo.jpg";
import { LinkContainer } from "react-router-bootstrap";
import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { TechGroupContext } from "../contexts/techGroupContext";
import MainDropdown from "./MainDropdown";
import Loading from "./Loading";
import loadingGif from "../images/gif/loading-arrow.gif";
import { AuthContext } from "../contexts/authContext";

export default function Header() {
  const { techGroups, loadingTechGrps, loadingNewTechGrp } =
    useContext(TechGroupContext);
  const { logout, isAdminUser, userEmail } = useContext(AuthContext);

  return (
    <Navbar bg="white" id="header" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" id="rx-logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="nav">
            {loadingTechGrps ? (
              <Loading />
            ) : (
              techGroups.map((grp) => <MainDropdown key={grp._id} grp={grp} />)
            )}
            <NavDropdown
              title={<i className="fas fa-users-cog"></i>}
              id="basic-nav-dropdown"
            >
              {isAdminUser === true && (
                <>
                  <LinkContainer to="/users">
                    <NavDropdown.Item className="bg-light text-dark">
                      <i className="fas fa-users"></i> users
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/departments">
                    <NavDropdown.Item className="bg-light text-dark">
                      <i className="fas fa-house-user"></i> departments
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                </>
              )}

              <LinkContainer to="/profile">
                <NavDropdown.Item className="bg-light text-dark">
                  <i className="fas fa-user-circle"></i> user profile
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer id="logout-container" to="/">
              <Nav.Link
                id="logout-btn"
                style={{ borderRadius: "0" }}
                className="btn btn-primary text-light ml-3"
                onClick={logout}
              >
                Logout
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
