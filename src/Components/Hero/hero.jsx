import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span>Faraz Ahmad</span></h1>
        <h2 className="typewriter">SEO Expert | Marketing Specialist</h2>
        <p>I help websites grow with strategic search engine optimization, analytics, and digital strategy.</p>
        <a href="#contact" className="btn">Hire Me</a>
      </div>
    </section>
  );
};

export default Hero;
