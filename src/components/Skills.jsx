import React from 'react';

const skills = [
  { name: 'HTML/CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Design', level: 65 }
];

export default function Skills() {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-card">
          <span>{skill.name}</span>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
