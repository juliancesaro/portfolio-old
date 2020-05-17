import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import julian from "../images/julian.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={julian} alt="Julian" width={80}></img>
      <p className="name">Julian Cesaro</p>
      <div className="links">
        <Link className="link" to="/">
          About
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/resume">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
