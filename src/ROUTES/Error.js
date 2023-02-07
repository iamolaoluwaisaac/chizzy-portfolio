import React from 'react'
import "./Error.css"
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className='error-page'>
        <div className='error-container' style={{textAlign:"center", color:"white"}}>

              <b><h2>ERROR 404!!</h2></b>
        <p>Page not Found</p>
        <Link to="/" className='link'>Go to home</Link>

        </div>
      
    </div>
  )
}

export default Error
