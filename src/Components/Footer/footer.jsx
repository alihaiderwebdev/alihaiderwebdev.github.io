import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/skills" className="footer-link">Skills</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          
          <div className="footer-info">
            <p className="copyright">
              &copy; {new Date().getFullYear()} <span>Ali Haider</span> | All Rights Reserved
            </p>
          </div>
        </div>

        <button 
          className={`scroll-top ${isVisible ? 'visible' : ''}`} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="arrow-icon" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;