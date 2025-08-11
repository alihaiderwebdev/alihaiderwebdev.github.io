import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      // Hide header on scroll down for mobile
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          document.querySelector('.navbar').classList.add('hide');
        } else {
          document.querySelector('.navbar').classList.remove('hide');
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = 'auto'; // Reset body overflow
  }, [location]);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? 'auto' : 'hidden';
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" aria-label="Home">
          <span className="logo-text">Ali Haider</span>
          <span className="logo-dot">.</span>
        </Link>

        <nav 
          className={`nav-links ${open ? 'show' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/skills', label: 'Skills' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => {
                    setOpen(false);
                    document.body.style.overflow = 'auto';
                  }}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`hamburger ${open ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;