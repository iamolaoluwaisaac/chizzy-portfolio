import React from 'react'
import HeroImg2 from '../COMPONENTS/HeroImg2'
import Navbar from "../COMPONENTS/Navbar"
import PricingCard from '../COMPONENTS/PricingCard'
import Work from '../COMPONENTS/Work'
import Footer from "../COMPONENTS/Footer"

const Project = () => {
  return (
    <>
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
    </>
  )
}

export default Project
