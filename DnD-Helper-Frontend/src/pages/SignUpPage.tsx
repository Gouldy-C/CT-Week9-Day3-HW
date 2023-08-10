import { Container, Nav } from "react-bootstrap";
import Body from "../components/Body";
import SignUpForm from "../components/SignUpForm";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <Body header="Sign Up Page">

        <Container className="form-style container-theme">

        <SignUpForm/>
        
        <p className="my-2">Already have an account? <Nav.Link as={NavLink} to="/login" className="d-inline"> Click Here to <strong className="text-success">Login</strong></Nav.Link></p>

        </Container>
        
      </Body>
    </>
  )
}
