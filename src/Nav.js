import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import React, {useState} from "react"

export default function Navbar() {
  const[click, setClick]= useState(false)
  const handleClick =() => setClick(!click)
  return (
    <nav className="nav">
     <div className="container">
      <ul className={click ? 'nav-menu active':'nav-menu'}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
       
      </ul>
      <div className="hamburger" onClick ={handleClick}>
        <HiOutlineMenuAlt4 className="menu-ham"/>
      </div>
      </div>
    </nav>
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
