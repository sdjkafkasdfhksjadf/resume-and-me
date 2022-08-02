
import React, {useState} from 'react'
import { Button,Card,Alert } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import { useAuth } from "../Context/Auth-Context"

export default function Homepage() {


  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/")
    } catch {
      setError("Failed to log out")
    }
  }

 
  return (
    <>

     <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <div className="w-100 text-center mt-2 btn btn-light "><Button variant="link" onClick={handleLogout}>Log Out</Button></div>
        </Card.Body>
      </Card>
      
    
    </>

  )
}