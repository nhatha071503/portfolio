import React from 'react';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="status-indicator"></span>
          Available for new opportunities
        </div>
        <h1>Sarah Chen</h1>
        <p className="tagline wave-underline glow-text">
          Senior Frontend Developer & UI/UX Designer
        </p>
        <p className="hero-description">
          <b>Crafting exceptional digital experiences</b> with 5+ years of expertise in React, TypeScript, and modern web technologies. 
          I specialize in building scalable applications that combine beautiful design with optimal performance.
        </p>
        <div className="hero-skills">
          {['React & Next.js', 'TypeScript', 'UI/UX Design', 'Performance Optimization'].map((skill) => (
            <span key={skill} className="skill-tag sparkle-hover">
              {skill}
            </span>
          ))}
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
        <div className="hero-actions">
          <a className="cta primary sparkle-hover glow-border" href="#projects">
            View My Work
          </a>
          <a className="cta secondary" href="#contact">
            Let's Connect
          </a>
        </div>
      </div>
      <ScrollIndicator target="#about" />
    </section>
  );
}