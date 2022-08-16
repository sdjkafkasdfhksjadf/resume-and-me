import React from 'react'
import {Link} from "react-router-dom"
import CsTemplate from "./imgs/CsTemplate.png"

export default function PreviewCS() {
    
  return (
    <div className='PreviewPage'>
        <h1>Select a CS Template Design</h1>
        <Link to= "/CsTemplateBuild">
          <img className='PreviewSize' src={CsTemplate} alt="Logo" />
        </Link>
    </div>
  )
}
