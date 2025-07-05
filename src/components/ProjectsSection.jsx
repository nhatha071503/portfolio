import React, { useState, useEffect } from 'react';
import projects from '../data/projects';

export default function ProjectsSection({ sectionIndex, mousePosition, isActive }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Stagger project animations
      projects.slice(0, 6).forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 150);
      });
    }
  }, [isActive]);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition?.x * 0.01 || 0}px, ${mousePosition?.y * 0.01 || 0}px, 0)`
  };

  return (
    <section className="projects-section" style={parallaxStyle}>
      <div className="section-background">
        <div className="bg-gradient gradient-1"></div>
        <div className="bg-gradient gradient-2"></div>
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
        </div>
      </div>
      
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-word">Featured</span>
            <span className="title-word gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Discover my latest work showcasing innovation, creativity, and technical excellence
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.slice(0, 6).map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index === 0 ? 'featured' : ''} ${
                visibleProjects.includes(index) ? 'visible' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="card-background">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <button className="overlay-btn primary">
                      <span>View Project</span>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                    </button>
                    <button className="overlay-btn secondary">
                      <span>Source Code</span>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="card-glow"></div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}