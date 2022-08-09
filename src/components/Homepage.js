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
      <Link class = "one" to="/ResumeBuilder" style={linkStyle}>Build Resume</Link>
      <Link class = "two" to="/GetData" style={linkStyle}>GetData</Link>
    </div>
  )
}
