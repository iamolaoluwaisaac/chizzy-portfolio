import React from 'react'
import Heroimg from '../COMPONENTS/Heroimg'
import Navbar from "../COMPONENTS/Navbar"
import Footer from "../COMPONENTS/Footer"
import Work from "../COMPONENTS/Work"

const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Heroimg/>
        <Work/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
