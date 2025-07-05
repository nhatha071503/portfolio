import React from 'react';
import experiences from '../data/experience';

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-intro">
        <h3>Professional Journey</h3>
        <p>Building exceptional digital experiences across diverse industries</p>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="experience-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <div className="experience-title">
                  <h4 className="experience-role">{exp.role}</h4>
                  <span className="experience-company">@ {exp.company}</span>
                </div>
                <div className="experience-meta">
                  <span className="experience-time">{exp.time}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="experience-achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="experience-technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag small">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="experience-summary">
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500k+</span>
            <span className="stat-label">Users Impacted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies Mastered</span>
          </div>
        </div>
      </div>
    </div>
  );
}