import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaMobile, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './home.css';

const Home = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const stats = [
    { value: "100%", label: "Responsive Designs", icon: <FaMobile /> },
    { value: "6+", label: "Frontend Skills", icon: <FaLaptopCode /> },
    { value: "10+", label: "Projects Built", icon: <FaCode /> }
  ];

  return (
    <section id="home" className="home-section">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content slide-up">
          <div className="expert-badge">
            <FaLaptopCode className="icon" />
            FRONTEND DEVELOPER
          </div>
          
          <h1>
            <span className="gradient-text">Building Modern & Responsive Websites</span>
            <span className="sub-headline">Clean Code • Great UI • Smooth UX</span>
          </h1>
          
          <p className="value-prop">
            I'm <strong>Ali Haider</strong>, a <strong>Junior Frontend Developer</strong> skilled in 
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React JS.  
            I create responsive and user-friendly websites, and I’m currently open to internships and collaboration opportunities.
          </p>

          <div className="cta-group">
            <Link to="/contact" className="primary-cta">
              Hire Me <FaArrowRight className="cta-icon" />
            </Link>
            <a href="#results" className="secondary-cta">
              View My Work <FaChevronDown className="cta-icon" />
            </a>
          </div>
        </div>

        <div className="hero-image fade-in">
          <div className="image-glow"></div>
          <img 
            src={require('../../../Assets/pro4.jpeg')} 
            alt="Ali Haider - Frontend Developer" 
            loading="lazy"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div id="results" className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card fade-in">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CTA Section */}
      <div className="embedded-cta fade-in">
        <h2>Let's Build Something Great Together</h2>
        <p>I'm ready to bring your ideas to life with clean, responsive, and modern websites.</p>
        <Link to="/contact" className="primary-cta outline">
          Contact Me <FaArrowRight className="cta-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
