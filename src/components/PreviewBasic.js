import React from 'react'
import {Link} from "react-router-dom"
import BasicTemplate from "./imgs/BasicTemplate.png"

export default function PreviewBasic() {

  
  return (
    <div className='PreviewPage'>
        <h1>Select a Basic Template Design</h1>
        <Link to= "/BasicTemplateBuild">
          <img className='PreviewSize' src={BasicTemplate} alt="Logo" />
        </Link>
    </div>
  )
}
