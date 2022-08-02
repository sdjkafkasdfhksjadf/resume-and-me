import React from 'react';
import "../components/Homepage.css"
import {Link} from "react-router-dom"


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
  
};

export default function Homepage() {

  return (
    <div>
      <h1>Welcome to Resume and Me </h1>
      <div class = "div1" >
        
        <button class = "one"><Link to="/ResumeBuilder" style={linkStyle}>Build Resume</Link></button>
        <button class = "two"><Link to="/GetData" style={linkStyle}>GetData</Link></button>
      </div>
    </div>
  )
}
