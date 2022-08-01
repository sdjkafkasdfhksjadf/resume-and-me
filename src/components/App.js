
import React from "react";
import Signup from "./Signup";
import Container from "react-bootstrap/esm/Container";
import {AuthProvider} from "../Context/Auth-Context"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Link, useNavigate} from "react-router-dom"
import Homepage from "./Homepage"
import Login from "./Login"
import { useState } from "react";



function App() {

  



  return (

    
      <Container 
        className = "d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
      >
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <nav>
            <Link to="/login"> Logout </Link>
            <Link to="/ResumeBuilder"> ResumeBuilder </Link>


            </nav>
            <AuthProvider>
              <Routes>
                <Route path ="/" element = {<Signup/>}/>
                <Route path ="/Homepage" element= {<Homepage/>}/>
                <Route path ="/login" element = {<Login/>}/>
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    

  )
    
}

export default App;
