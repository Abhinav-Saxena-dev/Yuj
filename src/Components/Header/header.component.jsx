import React from "react";

import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => (
  <div className="header-container">
    <div className="nav-bar">
      <Link to="/" className="logo-container">
        Logo
      </Link>
      <div className="options">
        <Link to="/contactus" className="option hover-underline-animation">
          Contact Us
        </Link>
        <Link to="/signup" className="option hover-underline-animation">
          Login/Register
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
