import React from 'react'
import {Link,useNavigate} from "react-router-dom"
export default function Homepage() {

  return (
    <div className=" w-100 text-center mt-2">
      <Link to="/ResumeBuilder">Build Resume</Link>
      <Link to="/ResumeDisplay">ResumeDisplay</Link>
    </div>
  )
}
