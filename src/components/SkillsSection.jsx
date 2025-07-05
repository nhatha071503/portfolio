import React, { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React & Next.js', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'JavaScript (ES6+)', level: 95, icon: '🟨' },
      { name: 'HTML5 & CSS3', level: 98, icon: '🎨' }
    ]
  },
  {
    title: 'Styling & Design',
    skills: [
      { name: 'Tailwind CSS', level: 92, icon: '💨' },
      { name: 'Styled Components', level: 88, icon: '💅' },
      { name: 'Figma', level: 85, icon: '🎯' },
      { name: 'Responsive Design', level: 95, icon: '📱' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: '🔧' },
      { name: 'Webpack & Vite', level: 85, icon: '📦' },
      { name: 'Testing (Jest, RTL)', level: 80, icon: '🧪' },
      { name: 'Performance Optimization', level: 88, icon: '⚡' }
    ]
  }
];

export default function SkillsSection({ sectionIndex, mousePosition, isActive }) {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    if (isActive) {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setVisibleSkills(prev => [...prev, `${categoryIndex}-${skillIndex}`]);
          }, (categoryIndex * 4 + skillIndex) * 100);
        });
      });
    }
  }, [isActive]);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition?.x * 0.015 || 0}px, ${mousePosition?.y * 0.015 || 0}px, 0)`
  };

  return (
    <section className="skills-section" style={parallaxStyle}>
      <div className="section-background">
        <div className="skill-orb orb-1"></div>
        <div className="skill-orb orb-2"></div>
        <div className="skill-orb orb-3"></div>
      </div>
      
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-word">Technical</span>
            <span className="title-word gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`skill-item ${
                      visibleSkills.includes(`${categoryIndex}-${skillIndex}`) ? 'visible' : ''
                    }`}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="progress-bar"
                        style={{ 
                          width: visibleSkills.includes(`${categoryIndex}-${skillIndex}`) ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications">
          <h3 className="cert-title">Certifications & Learning</h3>
          <div className="cert-badges">
            <span className="cert-badge">AWS Certified Developer</span>
            <span className="cert-badge">Google Analytics Certified</span>
            <span className="cert-badge">React Advanced Patterns</span>
          </div>
        </div>
      </div>
    </section>
  );
}