import Navbar from "./Nav"

import Home from "./Home"
import Contact from "./Contact"
import "./App.css";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
       
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/Contact" component={<Contact />} />
          <Route path="/About" component={<About />} />
        </Routes>
       
      </div>
    </>
  )
}

export default App

