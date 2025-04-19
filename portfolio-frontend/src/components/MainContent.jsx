// src/components/MainContent.jsx
import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <section className="main-content">
      <div className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Jishan Saha — a passionate full-stack web developer. This portfolio showcases my skills, projects, and professional journey.
        </p>
        <a href="/projects" className="cta-button">Explore Projects</a>
      </div>
      <div className="hero-image">
        <img src="/images/hero-dev.svg" alt="Developer at work" />
      </div>
    </section>
  );
}

export default MainContent;