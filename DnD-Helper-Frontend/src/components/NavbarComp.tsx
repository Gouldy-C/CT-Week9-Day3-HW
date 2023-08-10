import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";


export default function NavbarComp(){
  
  const {user:{username}}= useContext(UserContext)

  
  return (
    <>
      <Navbar sticky="top" expand="md" data-bs-theme="dark" className="bg-dark rounded-4 rounded-top-0">
        <Container fluid className="mx-1">
          <Navbar.Brand href="/">D&D Helper</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {username ? (
                <>
                  <Nav.Link as={NavLink} to="/user-home">User Home</Nav.Link>
                  <NavDropdown title="Character Stuff" id="basic-nav-dropdown" data-bs-theme="dark">
                    <NavDropdown.Item as={NavLink} to="/user-home">
                      Characters
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/create-character" >
                      Characters Builder
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/weapons">Weapons</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Account" id="basic-nav-dropdown" data-bs-theme="dark">
                    <NavDropdown.Item as={NavLink} to="/user-home" >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/user-settings">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/sign-up">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
