import React from 'react';
import PropTypes from 'prop-types';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Hello, I'm Jane Doe</h1>
        <p className="tagline">Front-end Developer & Designer</p>
        <a className="cta" href="#projects">View Projects</a>
      </div>
    </section>
  );
}

Hero.propTypes = {};
