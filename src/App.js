import React from "react"
import Home from "./ROUTES/Home"
import About from "./ROUTES/About"
import Project from "./ROUTES/Project"
import Contact from "./ROUTES/Contact"
import Error from "./ROUTES/Error" 
import {Routes, Route} from "react-router-dom"

const App = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </>
    )
}

export default App