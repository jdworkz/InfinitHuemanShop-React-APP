import Navbar from "./Nav.js"

import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

import "./App.css";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
  
    <>
      <Navbar />
      <div >
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App

