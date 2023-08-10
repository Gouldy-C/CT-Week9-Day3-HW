import { FormEvent, useContext, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";



export default function LoginForm() {

  const usernameField  = useRef<HTMLInputElement>(null)
  const passwordField  = useRef<HTMLInputElement>(null)


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
        <Form.Label>Username address</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" ref={usernameField}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordField}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="rememberMe">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>

      <Button variant="success" type="submit">Login</Button>
    </Form>
  )
}

