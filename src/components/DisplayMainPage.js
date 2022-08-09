import React from 'react'
import "../components/Homepage.css"
import {Link} from "react-router-dom"

export default function DisplayMainPage() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
        
      };
  return (

   
    <div className='test'>
      
      <h1>Welcome to Resume and Me </h1>
      <p>Select a template</p>
      <Link class = "three" to="/BasicTemplateDisplay" style={linkStyle}>View Basic Resumes</Link>
      <Link class = "three" to="/CsTemplateDisplay" style={linkStyle}>View CS Resumes</Link>
    </div>
  )
}
