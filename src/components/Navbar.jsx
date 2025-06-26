import React from 'react';

export default function Navbar() {
  const sections = ['home', 'about', 'projects', 'contact'];
  return (
    <nav className="navbar">
      <ul>
        {sections.map((sec) => (
          <li key={sec}>
            <a href={`#${sec}`}>{sec.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
