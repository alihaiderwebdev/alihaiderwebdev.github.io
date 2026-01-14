import React from 'react';
import { personalInfo, experience } from '../../constants/portfolioData';
import './styles.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header text-center">
          <h2>About Me</h2>
          <p>Get to know more about my background and experience</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                I'm a passionate {personalInfo.title.toLowerCase()} with expertise in building 
                modern, responsive web applications. I focus on creating clean, efficient code 
                and delivering exceptional user experiences.
              </p>
              <p>
                My approach combines technical proficiency with creative problem-solving to 
                develop solutions that not only meet requirements but exceed expectations. 
                I'm committed to staying current with the latest web technologies and best practices.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
              <div className="detail-item">
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </p>
              </div>
              <div className="detail-item">
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${personalInfo.phone}`}>
                    {personalInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="about-info">
            <div className="stats-section">
              <h3>Quick Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <h4>6+</h4>
                  <p>Months Experience</p>
                </div>
                <div className="stat-item">
                  <h4>4+</h4>
                  <p>Projects Completed(in-progess)</p>
                </div>
                <div className="stat-item">
                  <h4>6+</h4>
                  <p>Technologies</p>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="skills-preview">
              <h3>Core Technologies</h3>
              <div className="tech-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;