import { FormEvent, useContext, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


export default function SignUpForm() {

  const usernameField  = useRef<HTMLInputElement>(null)
  const emailField  = useRef<HTMLInputElement>(null)
  const passwordField  = useRef<HTMLInputElement>(null)
  const verifyPasswordField  = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserContext)

  function signUpFormSubmit(e:FormEvent) {
    e.preventDefault()
    setUser({username: usernameField.current!.value, token: 'Great token string' })
  }

  useEffect(() => {
    if (user.username){
      navigate('/')
    }
  }, [user.username])
  
  return (
    <Form onSubmit={signUpFormSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" ref={usernameField}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailField}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordField}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" ref={verifyPasswordField}/>
      </Form.Group>

      <Button variant="success" type="submit">Sign Up</Button>
    </Form>
  )
}