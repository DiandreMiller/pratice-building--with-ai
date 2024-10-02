import React, { useState } from 'react';
import '../Styles/Navbar.css';
import hamburgerIcon from '../../assets/menuHamburger01.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-container">
          <button className="hamburger-button" onClick={toggleMenu}>
            <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" />
          </button>
          {isOpen && (
            <ul className="nav-menu">
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/about">About</a></li>
              <li className="nav-item"><a href="/services">Services</a></li>
              <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
          )}
        </div>
        <div className="logo">
          <span className="logo-text">Rev</span>
          <div className="logo-icon"></div>
          <span className="logo-text">ews</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
