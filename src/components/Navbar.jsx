import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ onNavClick }) {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const handleClick = (idx, e) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(idx);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {sections.map((sec, idx) => (
          <li key={sec}>
            <a href={`#${sec}`} onClick={(e) => handleClick(idx, e)}>
              {sec.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  onNavClick: PropTypes.func
};

Navbar.defaultProps = {
  onNavClick: undefined
};
