import React, {useState} from 'react'
import { Button, } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../Context/Auth-Context"

export default function Homepage() {


  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    
    </>

  )
}
