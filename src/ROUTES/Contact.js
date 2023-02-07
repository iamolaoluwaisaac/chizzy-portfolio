import React from 'react'
import HeroImg2 from '../COMPONENTS/HeroImg2'
import Navbar from "../COMPONENTS/Navbar"
import Form from "../COMPONENTS/Form"
import Footer from '../COMPONENTS/Footer'

const Contact = () => {

  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
