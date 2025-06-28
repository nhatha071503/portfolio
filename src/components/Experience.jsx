import React from 'react';
import experiences from '../data/experience';

export default function Experience() {
  return (
    <ul className="experience-list">
      {experiences.map((exp) => (
        <li key={exp.id} className="experience-item">
          <h3 className="experience-role">
            {exp.role} <span className="experience-company">@ {exp.company}</span>
          </h3>
          <span className="experience-time">{exp.time}</span>
          <p className="experience-description">{exp.description}</p>
        </li>
      ))}
    </ul>
  );
}
