import React from "react";

import { Link } from "react-router-dom";

import "./header.style.scss";

const HeaderLoggedIn = () => (
  <div className="header-container">
    <div className="nav-bar">
      <Link to="/" className="logo-container">
        Logo
      </Link>
      <div className="options">
        <Link to="/profile" className="option hover-underline-animation">
          Profile
        </Link>
        <Link to="/network" className="option hover-underline-animation">
          My Network
        </Link>
        <Link to="/notifications" className="option hover-underline-animation">
          Notifications
        </Link>
        <Link to="/messaging" className="option hover-underline-animation">
          Messaging
        </Link>
        <Link to="/signinsignup" className="option hover-underline-animation">
          Login/Register
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderLoggedIn;
