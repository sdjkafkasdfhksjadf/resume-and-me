import React from 'react';
import "../components/Homepage.css"
import {Link} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




export default function Homepage() {

  return (
    <div className='test'>
      
      <h1>Welcome to Resume and Me </h1>
      
       {/*<Link class = "one" to="/BasicTemplateBuild" style={linkStyle}>Build Basic Resume</Link>
      <Link class = "two" to="/CsTemplateBuild" style={linkStyle}>Build CS Resume</Link>*/}
      <DropdownButton id="dropdown-basic-button" title="Select a Template" size="lg">
      <Dropdown.Item as={Link} to="/PreviewBasic">Build Basic Resume</Dropdown.Item>
      <Dropdown.Item as={Link} to="/PreviewCS">Build CS Resume</Dropdown.Item>
      
      </DropdownButton>
    </div>
  )
}
