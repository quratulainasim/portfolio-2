import React from "react";
import "../../styles/header.css";

function Header() {
  return (
    <div className="header">
    <div className="container">
      <div className="logo">
        <span className="name">My Portfolio</span>
      </div>
      <nav className="nav">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/about">About Me</a>
        <a className="nav-link" href="/projects">Projects</a>
        <a className="nav-link" href="/contact">Contact</a>
      </nav>
    </div>
  </div>    
  );
}

export default Header;