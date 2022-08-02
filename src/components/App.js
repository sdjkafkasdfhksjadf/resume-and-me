import { Nav } from "react-bootstrap"
import NavBar from 'react-bootstrap/Navbar'
import React from "react";
import Signup from "./Signup";
import Container from "react-bootstrap/esm/Container";
import {AuthProvider} from "../Context/Auth-Context"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Link, useNavigate} from "react-router-dom"
import Homepage from "./Homepage"
import Login from "./Login"
import Contact from "./Contact"
import OldResume from "./OldResume"
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import ResumeBuilder from "./ResumeBuilder";



function App() {

  


  return (

    
      <Container 
        className = "d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
      >
      <NavBar fixed = "top" bg = "dark" variant ="dark">
        <Container>
          <NavBar.Brand hfref= "Navibar">Resume and Me</NavBar.Brand>
            <Nav>
              <Nav.Link href = "/">Home</Nav.Link>
              <Nav.Link href = "/OldResume">Old Resume</Nav.Link>
              <Nav.Link href = "/Contact">Contact</Nav.Link>
              <Nav.Link href= "">Log Out</Nav.Link>
            </Nav>
        </Container>
      </NavBar>

        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
          
            <AuthProvider>
            
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Homepage />} />
                  <Route path ="/resumebuilder" element = {<ResumeBuilder/>}/>
                  <Route path = "/Contact" element = {<Contact/>}/>
                  <Route path = "/OldResume" element = {<OldResume/>}/>
                  
                </Route>
                <Route path ="/signup" element= {<Signup/>}/>
                <Route path ="/login" element = {<Login/>}/>
                
                
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    

  )
    
}

export default App;
