import React from 'react';

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

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-intro">
        <h3>Technical Expertise</h3>
        <p>A comprehensive toolkit for building modern web applications</p>
      </div>
      
      <div className="skills-categories">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="skill-category">
            <h4 className="category-title">{category.title}</h4>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-card"
                  style={{ animationDelay: `${(categoryIndex * 4 + index) * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${(categoryIndex * 4 + index) * 0.1 + 0.5}s`
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
        <h4>Certifications & Learning</h4>
        <div className="cert-badges">
          <span className="cert-badge">AWS Certified Developer</span>
          <span className="cert-badge">Google Analytics Certified</span>
          <span className="cert-badge">React Advanced Patterns</span>
        </div>
      </div>
    </div>
  );
}