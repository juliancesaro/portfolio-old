import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import julian from "../../images/julian.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={julian} alt="Julian" width={80}></img>
      <p className="name">Julian Cesaro</p>
      <div className="links">
        <div className="linkwrapper">
          <NavLink exact className="link" activeClassName="activelink" to="/">
            About Me
          </NavLink>
        </div>
        <div className="linkwrapper">
          <NavLink
            exact
            className="link"
            activeClassName="activelink"
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
        <div className="linkwrapper">
          <NavLink
            exact
            className="link"
            activeClassName="activelink"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
