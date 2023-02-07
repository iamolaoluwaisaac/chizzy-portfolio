import React from 'react'
import "./Navbar.css"
import Logo from "../ASSETS/chizzy codes1.PNG"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className='header'>
        <Link to="/" className='logo-link'>
        <img className='logo' src={Logo} alt="logo"/>
        </Link>

        <ul className='nav-menu'>
            <li>
                <Link to="/">Home</Link>
            </li>

              <li>
                <Link to="/about">About</Link>
            </li>

              <li>
                <Link to="/project">Project</Link>
            </li>

              <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

    </nav>

    </>
  )
}

export default Navbar





