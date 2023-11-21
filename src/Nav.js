import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {HiOutlineMenuAlt4} from 'react-icons/hi'

export default function Navbar() {
  return (
    <nav className="nav">
     <div className="container">
      <ul className="nav-menu">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
       
      </ul>
      <div className="hambuger" >
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
