import React from 'react'
import HeroImg2 from '../COMPONENTS/HeroImg2'
import Navbar from '../COMPONENTS/Navbar'
import AboutContent from "../COMPONENTS/AboutContent"
import Footer from '../COMPONENTS/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About Me" text="I pay good attention to details"/>
      <AboutContent/>
      <Footer/>
      
    </div>
  )
}

export default About
