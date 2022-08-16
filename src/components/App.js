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

import BasicTemplateDisplay from "./templates/BasicTemplateDisplay"
import PrivateRoute from "./PrivateRoute";
import BasicTemplateBuild from "./templates/BasicTemplateBuild";
import DisplayMainPage from "./DisplayMainPage";
import CsTemplateBuild from "./templates/CsTemplateBuild";
import CsTemplateDisplay from "./templates/CsTemplateDisplay";
import ProfilePage from "./ProfilePage"
import PreviewBasic from "./PreviewBasic"
import PreviewCS from "./PreviewCS"




function App() {

  console.log("test")




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
                      
                      <Nav.Link href = "/DisplayMainPage">Resumes</Nav.Link>
                      <Nav.Link href = "/Contact">Contact</Nav.Link>
                      <Nav.Link href = "/ProfilePage">Account</Nav.Link>
                      
                    </Nav>
                </Container>
              </NavBar>
          
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path ="/ProfilePage" element ={<ProfilePage />} />
                  <Route path ="/BasicTemplateBuild" element = {<BasicTemplateBuild/>}/>
                  <Route path = "/Contact" element = {<Contact/>}/>
                  <Route path = "/Homepage" element = {<Homepage/>}/>
                  <Route path = "/BasicTemplateDisplay" element = {<BasicTemplateDisplay/>}/>
                  
                  <Route path = "/DisplayMainPage" element = {<DisplayMainPage/>}/>
                  <Route path = "/CsTemplateBuild" element = {<CsTemplateBuild/>}/>
                  <Route path = "/CsTemplateDisplay" element = {<CsTemplateDisplay/>}/>
                  <Route path = "/PreviewBasic" element = {<PreviewBasic/>}/>
                  <Route path = "/PreviewCS" element = {<PreviewCS/>}/>
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