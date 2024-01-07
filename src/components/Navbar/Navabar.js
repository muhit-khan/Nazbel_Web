import React from "react";
import "./Navbar.css";
import { FaTwitter, FaFacebook, FaDribbble } from "react-icons/fa";
import logo from "../../assets/Banner/nazbel-logo.png";

const Navabar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  const socialItem = [
    <FaTwitter style={{ color: "#52D3D8" }} />,
    <FaFacebook style={{ color: "#38419D" }} />,
    <FaDribbble style={{ color: "#AF2655" }} />,
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <div className="nav-left">
            <img src={logo} alt="logo" height="40" />
          </div>
          <ul className="nav-middle">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
          <ul className="nav-right">
            {socialItem.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
