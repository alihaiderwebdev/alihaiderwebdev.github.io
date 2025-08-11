import React, { useEffect } from 'react';
import profileImage from '../../../Assets/pro4.jpeg'; // Your image path
import './about.css';

const About = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text slide-in">
            <h2 className="section-title">
              About <span>Me</span>
            </h2>
            <p className="lead-text">
              I'm <strong>Ali Haider</strong>, a passionate <strong>Junior Frontend Developer </strong> 
               with a strong foundation in creating modern, responsive, and user-friendly websites.
            </p>
            <p>
              My skills include HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React JS.  
              I focus on building clean, efficient, and visually appealing interfaces that work seamlessly across all devices.  
              Currently, I’m open to internship opportunities where I can contribute to real-world projects and grow as a developer.
            </p>
            <div className="stats-grid fade-in">
              <div className="stat-card">
                <div className="stat-value">6+</div>
                <div className="stat-label">Frontend Skills</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Responsive Designs</div>
              </div>
            </div>
          </div>

          <div className="about-image fade-in">
            <div className="image-wrapper">
              <img 
                src={profileImage} 
                alt="Ali Haider - Frontend Developer" 
                className="profile-img"
                loading="lazy"
              />
              <div className="image-border"></div>
              <div className="image-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
