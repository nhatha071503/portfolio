import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h4>Sarah Chen</h4>
            <p>Frontend Developer & UI/UX Designer</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h5>Connect</h5>
              <ul>
                <li><a href="https://github.com/sarahchen" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/sarahchen" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/sarahchen" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="mailto:sarah.chen@email.com">Email</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h5>Work</h5>
              <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="/resume.pdf" target="_blank">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sarah Chen. Built with React & passion ✨</p>
          <div className="footer-status">
            <span className="status-indicator"></span>
            Available for new opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}