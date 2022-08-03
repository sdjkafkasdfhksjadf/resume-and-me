import { Nav } from "react-bootstrap"
import NavBar from 'react-bootstrap/Navbar'
import React from "react";
import Signup from "./Signup";
import Container from "react-bootstrap/esm/Container";
import {AuthProvider} from "../Context/Auth-Context"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css";
import Homepage from "./Homepage"
import Login from "./Login"
import Contact from "./Contact"
import GetData from "./GetData";
import ResumeDisplay from "./ResumeDisplay"
import PrivateRoute from "./PrivateRoute";
import ResumeBuilder from "./ResumeBuilder";

import ProfilePage from "./ProfilePage"




function App() {




  return (

    
      <Container 
        className = "d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
      >
       
      

        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
          
            <AuthProvider>
              <NavBar fixed = "top" bg = "dark" variant ="dark">
                <Container>
                  <NavBar.Brand hfref= "Navibar">Resume and Me</NavBar.Brand>
                    <Nav>
                      <Nav.Link href = "/Homepage">Homepage</Nav.Link>
                      <Nav.Link href = "/ProfilePage">Profile</Nav.Link>
                      <Nav.Link href = "/ResumeDisplay">Resumes</Nav.Link>
                      <Nav.Link href = "/Contact">Contact</Nav.Link>
y                    </Nav>
                </Container>
              </NavBar>
          
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path ="/ProfilePage" element ={<ProfilePage />} />
                  <Route path ="/resumebuilder" element = {<ResumeBuilder/>}/>
                  <Route path = "/Contact" element = {<Contact/>}/>
                  <Route path = "/Homepage" element = {<Homepage/>}/>
                  <Route path = "/ResumeDisplay" element = {<ResumeDisplay/>}/>
                  <Route path = "/GetData" element = {<GetData/>}/>
                  
                </Route>
                <Route path ="/signup" element= {<Signup/>}/>
                <Route path ="/" element = {<Login/>}/>
                
                
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    

  )
    
}

export default App;