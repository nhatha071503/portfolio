import React, { useEffect, useState } from 'react';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div 
        className="hero-gradient-orb" 
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }}
      />
      <div 
        className="hero-gradient-orb-2" 
        style={{
          transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
        }}
      />
      
      <div className="hero-content">
        <div className={`hero-badge ${isLoaded ? 'animate-in' : ''}`}>
          <div className="status-pulse"></div>
          Available for new opportunities
        </div>
        
        <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`}>
          <span className="title-line">Creative</span>
          <span className="title-line gradient-text">Frontend</span>
          <span className="title-line">Developer</span>
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
      
      <div className="hero-visual">
        <div className="floating-elements">
          <div className="floating-card card-1">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon">⚡</div>
              <div className="card-text">Performance</div>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon">🎨</div>
              <div className="card-text">Design</div>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovation</div>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollIndicator target="#projects" />
    </section>
  );
}