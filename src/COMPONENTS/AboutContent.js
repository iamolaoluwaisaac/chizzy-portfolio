import React from 'react'
import "./AboutContent.css"
import {Link} from "react-router-dom"
import Imgg1 from "../ASSETS/imggg-1.jfif"
import Imgg2 from "../ASSETS/imggg-2.webp"


const AboutContent = () => {
  return (
    <div className='about' style={{color:"white"}}>

        <div className='about-left'>
            <h1>Who Am I?</h1>
            <p>I am a front-end developer.I create responsive web apps for clients</p>
            <Link to="/contact">
                <button className='button-contact'>
                    CONTACT
                </button>
            </Link>
        </div>

        <div className='about-right'>

            <div className='img-container'>

                <div className='img-stack top'>
                    <img src={Imgg1} alt="Imgg1" className='imgg'/>

                </div>

                     <div className='img-stack bottom'>
                    <img src={Imgg2} alt="Imgg2" className='imgg'/>

                </div>

            </div>
        </div>
        
      
    </div>
  )
}

export default AboutContent
