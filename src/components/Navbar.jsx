import React, { useState, useCallback } from 'react';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar({ onNavClick, defaultActive = 0 }) {
  const [activeIdx, setActiveIdx] = useState(defaultActive);

  // Dùng useCallback để tránh tạo mới hàm ở mỗi lần render
  const handleClick = useCallback(
    (idx, e) => {
      e.preventDefault();
      setActiveIdx(idx);
      if (onNavClick) onNavClick(idx);
    },
    [onNavClick]
  );

  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar__list">
        {SECTIONS.map((sec, idx) => (
          <li
            key={sec}
            className={`navbar__item${activeIdx === idx ? ' navbar__item--active' : ''}`}
          >
            <a
              href={`#${sec}`}
              className="navbar__link"
              aria-current={activeIdx === idx ? 'page' : undefined}
              tabIndex={0}
              onClick={(e) => handleClick(idx, e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleClick(idx, e);
                }
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
