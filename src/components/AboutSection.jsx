import React, { useEffect, useState } from "react";

export default function AboutSection({ sectionIndex, mousePosition, isActive }) {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStage(0);
      const timeouts = [1, 2, 3, 4, 5].map((stage, i) =>
        setTimeout(() => setAnimationStage(stage), i * 260)
      );
      return () => timeouts.forEach(clearTimeout);
    }
  }, [isActive]);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition?.x * 0.014 || 0}px, ${mousePosition?.y * 0.014 || 0}px, 0)`,
    transition: "transform 0.4s cubic-bezier(.41,1,.47,1)"
  };

  return (
    <section className="about-section-epic" style={parallaxStyle}>
      {/* Blobs + Animated Background */}
      <div className="section-bg">
        <div className="morph-blob blob-1"></div>
        <div className="morph-blob blob-2"></div>
        <div className="morph-blob blob-3"></div>
        <div className="animated-gradient-bg"></div>
        <div className="particle-glow" />
      </div>

      <div className="about-grid">
        {/* Visual - Card - Stats */}
        <div className="about-visual">
          <div className={`profile-card-glass ${animationStage >= 1 ? "in" : ""}`}>
            <div className="avatar-3d">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="profile-img"
              />
              <span className="avatar-glow"></span>
            </div>
            <div className="badge-exp glassmorph">{animationStage >= 2 && <>
              <span className="badge-yrs gradient-flash">5+</span>
              <span className="badge-label">Years</span>
            </>}</div>
            {/* Cinematic light sweep */}
            <div className="cinematic-sweep"></div>
          </div>
          {/* Floating animated stats */}
          <div className="floating-stats-epic">
            <div className={`stat-bubble bubble-1 ${animationStage >= 2 ? "in" : ""}`}>
              <div className="stat-ico">🚀</div>
              <div className="stat-desc">Performance</div>
            </div>
            <div className={`stat-bubble bubble-2 ${animationStage >= 3 ? "in" : ""}`}>
              <div className="stat-ico">🎨</div>
              <div className="stat-desc">Design</div>
            </div>
            <div className={`stat-bubble bubble-3 ${animationStage >= 4 ? "in" : ""}`}>
              <div className="stat-ico">⚡</div>
              <div className="stat-desc">Innovation</div>
            </div>
            <div className={`stat-bubble bubble-4 ${animationStage >= 5 ? "in" : ""}`}>
              <div className="stat-ico">💡</div>
              <div className="stat-desc">Ideas</div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="about-content-epic">
          <h2 className={`section-title-epic ${animationStage >= 1 ? "in" : ""}`}>
            <span className="word">About</span>
            <span className="word gradient-glow">Me</span>
            <span className="hero-pulse" />
          </h2>
          <div className={`about-text-epic ${animationStage >= 2 ? "in" : ""}`}>
            <p className="intro epic-intro">
              <b>Creative</b> front-end developer—<span className="rainbow-text">bold visuals</span>,
              <span className="epic-underline"> clean code</span>, micro-interactions.<br />
              <span className="gradient-text">5+ years</span> crafting stunning UI for startups & products users love.
              <span className="animated-gradient-bar" />
            </p>
            {/* Animated highlights */}
            <div className="highlights-epic">
              <div className="highlight-epic">
                <div className="highlight-ico">🚀</div>
                <div className="highlight-details">
                  <h4>Performance First</h4>
                  <p>Ultra-fast, smooth, <span className="glow">buttery</span> experience.</p>
                </div>
              </div>
              <div className="highlight-epic">
                <div className="highlight-ico">🎨</div>
                <div className="highlight-details">
                  <h4>Animated Systems</h4>
                  <p>Reusable, scalable, animated component libraries.</p>
                </div>
              </div>
              <div className="highlight-epic">
                <div className="highlight-ico">⚡</div>
                <div className="highlight-details">
                  <h4>Modern Tech</h4>
                  <p>React, Framer Motion, SCSS, dynamic gradients.</p>
                </div>
              </div>
              <div className="highlight-epic">
                <div className="highlight-ico">💡</div>
                <div className="highlight-details">
                  <h4>Proactive Ideas</h4>
                  <p>Constantly pushing UI/UX boundaries.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Animated values section */}
          <div className={`values-epic ${animationStage >= 4 ? "in" : ""}`}>
            <div className="values-gradient">
              <span className="val-gradient-move">
                ✦ Innovation &nbsp;&nbsp; ✦ Quality &nbsp;&nbsp; ✦ Collaboration &nbsp;&nbsp; ✦ Growth
              </span>
            </div>
          </div>
          {/* Animated call to action */}
          <div className={`about-cta ${animationStage >= 5 ? "in" : ""}`}>
            <a href="#contact" className="cta-btn">
              <span>Let’s Connect</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
