import React from 'react';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Hello, I'm Jane Doe</h1>
        <p className="tagline wave-underline glow-text">
          Crafting delightful user experiences with React
        </p>
        <p className="hero-description">
          <b>Front-end developer</b> focused on performance and accessibility.
          Passionate about clean design and smooth interactions.
        </p>
        <div className="hero-skills">
          {['React', 'UI Design', 'Accessibility'].map((skill) => (
            <span key={skill} className="skill-tag sparkle-hover">
              {skill}
            </span>
          ))}
        </div>
        <blockquote className="hero-quote">
          Code is poetry.
          <span>Let's build something amazing!</span>
        </blockquote>
        <a className="cta sparkle-hover glow-border" href="#projects">
          View Projects
        </a>
      </div>
      <ScrollIndicator target="#about" />
    </section>
  );
}
