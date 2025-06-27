import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
