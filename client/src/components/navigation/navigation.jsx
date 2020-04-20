import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="topbar">
      <h1>Linden House of Pizza</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/location">Location</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
