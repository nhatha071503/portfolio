import React, { useEffect, useState } from 'react';

export default function AboutSection({ sectionIndex, mousePosition, isActive }) {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (isActive) {
      const stages = [1, 2, 3, 4];
      stages.forEach((stage, index) => {
        setTimeout(() => setAnimationStage(stage), index * 300);
      });
    }
  }, [isActive]);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition?.x * 0.02 || 0}px, ${mousePosition?.y * 0.02 || 0}px, 0)`
  };

  return (
    <section className="about-section" style={parallaxStyle}>
      <div className="section-background">
        <div className="morphing-blob blob-1"></div>
        <div className="morphing-blob blob-2"></div>
        <div className="morphing-blob blob-3"></div>
      </div>
      
      <div className="about-container">
        <div className="about-visual">
          <div className={`profile-card ${animationStage >= 1 ? 'animate-in' : ''}`}>
            <div className="card-glow"></div>
            <img
              src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="profile-image"
            />
            <div className="experience-badge">
              <span className="badge-number">5+</span>
              <span className="badge-text">Years</span>
            </div>
          </div>
          
          <div className="floating-stats">
            <div className={`stat-bubble bubble-1 ${animationStage >= 2 ? 'animate-in' : ''}`}>
              <div className="stat-icon">🚀</div>
              <div className="stat-text">Performance</div>
            </div>
            <div className={`stat-bubble bubble-2 ${animationStage >= 3 ? 'animate-in' : ''}`}>
              <div className="stat-icon">🎨</div>
              <div className="stat-text">Design</div>
            </div>
            <div className={`stat-bubble bubble-3 ${animationStage >= 4 ? 'animate-in' : ''}`}>
              <div className="stat-icon">⚡</div>
              <div className="stat-text">Innovation</div>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className={`section-title ${animationStage >= 1 ? 'animate-in' : ''}`}>
            <span className="title-word">About</span>
            <span className="title-word gradient-text">Me</span>
          </h2>
          
          <div className={`about-text ${animationStage >= 2 ? 'animate-in' : ''}`}>
            <p className="intro-text">
              I'm a passionate frontend developer who believes that great design and clean code go hand in hand. 
              With over 5 years of experience, I've helped startups and established companies create digital products 
              that users love.
            </p>
            
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Performance First</h4>
                  <p>Optimizing for speed and user experience in every project</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🎨</div>
                <div className="highlight-content">
                  <h4>Design Systems</h4>
                  <p>Building scalable, consistent design systems and component libraries</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Modern Stack</h4>
                  <p>Leveraging the latest technologies to build future-proof applications</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`values-section ${animationStage >= 3 ? 'animate-in' : ''}`}>
            <div className="values-text">
              <span className="highlight-gradient">
                Innovation ✦ Quality ✦ Collaboration ✦ Growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}