import React from 'react';
import { personalInfo } from '../../constants/portfolioData';
import './styles.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header text-center">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                {personalInfo.email}
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <a href={`tel:${personalInfo.phone}`} className="contact-link">
                {personalInfo.phone}
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>{personalInfo.location}</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-buttons">
              {personalInfo.social.github && (
                <a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  LinkedIn
                </a>
              )}
              {personalInfo.social.portfolio && (
                <a 
                  href={personalInfo.social.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Portfolio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;