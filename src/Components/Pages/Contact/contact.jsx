import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import './contact.css';

const Contact = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 100;
        if (isVisible) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.transitionDelay = `${index * 0.1}s`;
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content fade-in" style={{ opacity: 0 }}>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm a Junior Front-End Developer skilled in HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.
            Open to internships and collaborative projects — feel free to reach out!
          </p>

          <div className="contact-methods">
            <a
              href="mailto:alihaidersinfo@gmail.com"
              className="contact-email fade-in"
              style={{ opacity: 0 }}
            >
              <FaEnvelope className="icon" />
              alihaidersinfo@gmail.com
            </a>

            <a
              href="https://wa.me/#"
              className="contact-phone fade-in"
              style={{ opacity: 0 }}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="icon" />
              Available on request
            </a>
          </div>

          <div className="social-links">
            <h3>Find Me Online</h3>
            <div className="social-icons">
              <a
                href="https://github.com/alihaiderwebdev"
                className="social-icon fade-in"
                style={{ opacity: 0 }}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/#"
                className="social-icon fade-in"
                style={{ opacity: 0 }}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/#"
                className="social-icon fade-in"
                style={{ opacity: 0 }}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
