import React from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLin } from "react-icons/ri"

const Navbar = () => {
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
