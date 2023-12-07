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

       <div className="img1-container">
      <img className="order-1" src={tincture} height='300' width='300' alt=""/>
      <div className="middle">
        <div className="text">Hello this is where a disciption will go...</div>
        <button className="btn">Shop Now</button>
    </div>
      </div>
      

      <div className="img1-container">
      <img className="order-1"src={logo} height='300' width='300' alt=""/>
      <div className="middle">
        <p>Hello this is where a disciption will go....\n hkhkhikgkhkgjhgvjhujghvj</p>
        <button className="btn">Shop Now</button>
    </div>
      </div>
      

      
      
      <div className="img1-container">
      <img className="order-1" src={tincture} height='300' width='300' alt=""/>
      <div className="middle">
        <div className="text">Hello this is where a disciption will go....</div>
        <button className="btn">Shop Now</button>
    </div>
      </div>
      
      </div>
      </div>

  )

}

 export default  Home;
