import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { Spinner } from "react-bootstrap"

export default function Logout() {

  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    setUser({username: "", token: ""})
    navigate('/login')
  })

  return(
    <Spinner animation="border" />
  )
}
