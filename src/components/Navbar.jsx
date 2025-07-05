import React, { useState, useCallback, useEffect } from 'react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ onNavClick, activeSection = 0, scrollProgress = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollProgress > 0.05);
  }, [scrollProgress]);

  const handleClick = useCallback(
    (idx, e) => {
      e.preventDefault();
      if (onNavClick) onNavClick(idx);
    },
    [onNavClick]
  );

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand">
        <div className="brand-logo">
          <div className="logo-icon">
            <div className="logo-inner"></div>
          </div>
          <span className="brand-text">Portfolio</span>
        </div>
      </div>
      
      <ul className="navbar-menu">
        {SECTIONS.map((section, idx) => (
          <li key={section.id} className="navbar-item">
            <a
              href={`#${section.id}`}
              className={`navbar-link ${activeSection === idx ? 'active' : ''}`}
              onClick={(e) => handleClick(idx, e)}
            >
              <span className="link-text">{section.label}</span>
              <div className="link-underline"></div>
              <div className="link-glow"></div>
            </a>
          </li>
        ))}
      </ul>
      
      <div className="navbar-progress">
        <div 
          className="progress-line" 
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
      
      <div className="navbar-cta">
        <button className="hire-btn magnetic-btn">
          <span>Hire Me</span>
          <div className="btn-particles"></div>
        </button>
      </div>
    </nav>
  );
}