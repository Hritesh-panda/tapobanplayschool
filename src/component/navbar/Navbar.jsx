import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar_container">
            <div className="logo">
              <a href="/">
                <img src="/logo1.jpg" alt="" />
              </a>
            </div>
            {/* Menu toggle button */}
            <div className="menu-icon">
              {isOpen ? (
                <FiX onClick={closeMenu} size={30} color="#fffff" />
              ) : (
                <FiMenu
                  onClick={toggleMenu}
                  size={30}
                  color="rgb(242, 74, 102)"
                />
              )}
            </div>
            <div className={`nav-right ${isOpen ? "open" : ""}`}>
              <ul>
                <li onClick={closeMenu}>
                  <a href="/">Home</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="/">Gallery</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="/">Our Feess</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
