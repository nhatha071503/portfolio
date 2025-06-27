import React from 'react';
import PropTypes from 'prop-types';
export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-image">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR42mP8/5+hP6MkwDiqAoAApC0H6ehvYQAAAABJRU5ErkJggg=="
          alt="Avatar"
        />
      </div>
      <div className="about-text glass-card">
        <p>
          Passionate front-end developer with a love for modern design and smooth
          user experiences.
        </p>
      </div>
    </div>
  );
}

About.propTypes = {};
