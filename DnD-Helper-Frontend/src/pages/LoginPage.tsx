import { Container, Nav } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Body from "../components/Body";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  
  return (
    <>
      <Body header="Login Page">
        <Container className="form-style container-theme">

        <LoginForm/>
        
        <p className="my-2">Need to Sign up? <Nav.Link as={NavLink} to="/sign-up" className="d-inline"> Click Here to <strong className="text-success">Sign Up</strong></Nav.Link></p>

        </Container>
      </Body>
    </>
  )
}
