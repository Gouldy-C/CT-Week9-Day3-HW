import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


export default function UserPage() {


  const {user} = useContext(UserContext)

  return (
    <h1>{user.username}'s Page</h1>
  )
}

