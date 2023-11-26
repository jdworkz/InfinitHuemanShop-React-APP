import React from "react"
import tincture from "./assets/IMG_4352 (1).jpg"
import logo from "./assets/INFINITE HUEMAN LOGO-4.png"
import "./Home.css"

function Home(){
  return(
    <div className="home">
      <h1>Welcome to Infinite Hueman</h1>
      <div>

      </div>
      <div className="container">
      <img src={tincture} height='300' width='300' alt=""/>
      <img src={logo} height='300' width='300' alt=""/>
      <img src={tincture} height='300' width='300' alt=""/>
      </div>
<button className="btn">Shop Now</button>
    </div>
  )

}

 export default  Home;
