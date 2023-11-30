import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import React, {useState} from "react"
import logo from "./assets/INFINITE HUEMAN LOGO-4.png"
import {FaRegTimesCircle} from 'react-icons/fa'
import "./Nav.css"

const Navbar = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
      <div className='navbar'>
          <div className='container'>
          <logo ><img src={logo} width="100px"height="100px" alt="logo"/></logo>
              <button className='btn'>Sign In</button>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/Shop">Shop</CustomLink>
        
              </ul>
              <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
              
              </div>
          </div>
      </div>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar