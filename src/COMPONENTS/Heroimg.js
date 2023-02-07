import React from 'react'
import Img2 from "../ASSETS/Img2.avif"
import {Link} from "react-router-dom"
import "./Heroimg.css"

const Heroimg = () => {
  return (
    <>
    <div className='hero'>

      <div className='mask'>
        <img className='intro-img' src={Img2} alt="hero-img"/>
      </div>

      <div className='content'>
        <p>HI, I AM BAYODE VICTOR.</p>
        <h1>A REACT DEVELOPER</h1>

        <div>
          <Link style={{textDecoration:"none"}} to="/project" className="btn1">
            PROJECT
            </Link>

             <Link style={{textDecoration:"none"}} to="/contact" className="btn-light">
            CONTACT
            </Link>
        </div>

      </div>

    </div>
    </>
  )
}

export default Heroimg

