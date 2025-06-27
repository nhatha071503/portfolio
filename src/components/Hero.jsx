import React from 'react';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Hello, I'm Jane Doe</h1>
        <p className="tagline wave-underline glow-text">
          Front-end Developer & Designer
        </p>
        <a className="cta sparkle-hover glow-border" href="#projects">
          View Projects
        </a>
      </div>
      <ScrollIndicator target="#about" />
    </section>
  );
}
