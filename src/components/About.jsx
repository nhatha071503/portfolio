import React from "react";


export default function About() {
  return (
    <div className="about-wrapper animated-fadein">
      <div className="about-image avatar-glass">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR42mP8/5+hP6MkwDiqAoAApC0H6ehvYQAAAABJRU5ErkJggg=="
          alt="Avatar"
        />
      </div>
      <div className="about-text glass-card animated-slidein">
        <h2 className="wave-underline">About Me</h2>
        <p>
          Passionate front-end developer with a love for modern design and smooth
          user experiences. <br />
          <span className="highlight-gradient">
            Creativity ✦ Performance ✦ User First
          </span>
        </p>
      </div>
    </div>
  );
}
