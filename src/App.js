import Navbar from "./Nav.js"

import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Footer from "./footer/Footer.js"
import Shop from "./shop/Shop.js"

import "./App.css";

import { Route, Routes,  } from "react-router-dom"

function App() {
  return (
  
    <>
   
      <Navbar />
      <div >
       
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
         
          
        </Routes>
        
      </div>
      
      <Footer/>
    </>
  )
}

export default App

