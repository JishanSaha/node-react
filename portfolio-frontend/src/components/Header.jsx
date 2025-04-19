import React from "react";
import "./Header.css"; // Optional: use this if you want to style separately

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">My Portfolio</h1>
        <nav className="site-nav">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/profile">Profile</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;