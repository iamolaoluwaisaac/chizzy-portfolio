import React from 'react'
import "./Footer.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <div className='footer'>

        <div className='footer-container'>

            <div className='left'>

                <div className='location'>

                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>

                    <div>
                        <p>15 Emmanuel Bayode Crescent</p>
                        <p>Ogun State, Nigeria</p>
                    </div>

                </div>

                <div className='phone'>

                    <h4>
                          <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                          +2348086619147 
                    </h4>

                </div>

                        <div className='email'>

                    <h4>
                          <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                          olaoluwaisaac369@gmail.com 
                    </h4>

                </div>

            </div>

            <div className='right'>
                <u><h4 style={{fontWeight:"800", textTransform:"uppercase"}}>About Bayode Victor</h4></u>
                <p>I am Bayode Victor, a front-end web developer with experience in frontend web technologies<br></br> like HTML, CSS, REACT, BOOTSTRAP, JAVASCRIPT. <br></br>I am a self-motivated developer and also a self-taught developer. <br></br>I have built over 10+ projects and i am more than willing to work with you on your web development project.</p>

                <div className='social'>
                    <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>

                     <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>

                      <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>

                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Footer
