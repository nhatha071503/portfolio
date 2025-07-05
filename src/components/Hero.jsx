import React, { useEffect, useState, useRef } from 'react';
import ScrollIndicator from './ScrollIndicator';

export default function Hero({ sectionIndex, mousePosition, isActive }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect based on mouse position
  const parallaxStyle = {
    transform: `translate3d(${mousePosition?.x * 0.02 || 0}px, ${mousePosition?.y * 0.02 || 0}px, 0)`
  };

  const deepParallaxStyle = {
    transform: `translate3d(${mousePosition?.x * 0.05 || 0}px, ${mousePosition?.y * 0.05 || 0}px, 0)`
  };

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Multi-layered parallax backgrounds */}
      <div className="parallax-layer layer-1" style={parallaxStyle}>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="parallax-layer layer-2" style={deepParallaxStyle}>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="parallax-layer layer-3">
        <div className="hero-content">
          <div className={`hero-badge ${isLoaded ? 'animate-in' : ''}`}>
            <div className="status-pulse"></div>
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`}>
            <div className="title-line">
              <span className="word" ref={el => textRefs.current[0] = el}>Creative</span>
            </div>
            <div className="title-line">
              <span className="word gradient-text" ref={el => textRefs.current[1] = el}>Frontend</span>
            </div>
            <div className="title-line">
              <span className="word" ref={el => textRefs.current[2] = el}>Developer</span>
            </div>
          </h1>
          
          <p className={`hero-subtitle ${isLoaded ? 'animate-in' : ''}`}>
            Crafting exceptional digital experiences with cutting-edge technologies
            and innovative design solutions that captivate and inspire.
          </p>
          
          <div className={`hero-stats ${isLoaded ? 'animate-in' : ''}`}>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          
          <div className={`hero-actions ${isLoaded ? 'animate-in' : ''}`}>
            <button className="cta-primary magnetic-btn">
              <span>View My Work</span>
              <div className="btn-shine"></div>
              <div className="btn-particles"></div>
            </button>
            <button className="cta-secondary magnetic-btn">
              <span>Let's Connect</span>
              <div className="btn-ripple"></div>
            </button>
          </div>
          
          <div className={`hero-tech-stack ${isLoaded ? 'animate-in' : ''}`}>
            {['React', 'TypeScript', 'Next.js', 'Three.js', 'GSAP', 'Framer Motion'].map((tech, index) => (
              <div key={tech} className="tech-bubble" style={{ animationDelay: `${index * 0.1}s` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}