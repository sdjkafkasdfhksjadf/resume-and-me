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
    <div className='test'>
      
      <h1>Welcome to Resume and Me </h1>
      <p>Select a template</p>
      <Link class = "one" to="/BasicTemplateBuild" style={linkStyle}>Build Basic Resume</Link>
      <Link class = "two" to="/CsTemplateBuild" style={linkStyle}>Build CS Resume</Link>
    </div>
  )
}
