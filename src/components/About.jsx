import React from "react";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-image">
        <img
          src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Sarah Chen - Frontend Developer"
        />
        <div className="about-image-overlay">
          <div className="experience-badge">5+ Years</div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-text glass-card">
          <h2 className="wave-underline">About Me</h2>
          <p className="about-intro">
            I'm a passionate frontend developer who believes that great design and clean code go hand in hand. 
            With over 5 years of experience, I've helped startups and established companies create digital products 
            that users love.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div>
                <h4>Performance First</h4>
                <p>Optimizing for speed and user experience in every project</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🎨</div>
              <div>
                <h4>Design Systems</h4>
                <p>Building scalable, consistent design systems and component libraries</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">⚡</div>
              <div>
                <h4>Modern Stack</h4>
                <p>Leveraging the latest technologies to build future-proof applications</p>
              </div>
            </div>
          </div>

          <div className="about-values">
            <span className="highlight-gradient">
              Innovation ✦ Quality ✦ Collaboration ✦ Growth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}