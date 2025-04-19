import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/profile">Profile</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Menu;