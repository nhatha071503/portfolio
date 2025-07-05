import React, { useRef, useState } from 'react';
import HorizontalScroller from '../components/HorizontalScroller';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import ProgressBar from '../components/ProgressBar';
import Experience from '../components/Experience';
import projects from '../data/projects';

export default function App() {
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const scrollTo = (idx) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo(idx);
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div>
      <Navbar onNavClick={scrollTo} />
      <ProgressBar progress={progress} />
      <HorizontalScroller ref={scrollerRef} onProgress={setProgress}>
        <Section id="home" title="Home">
          <Hero />
        </Section>
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <div className="projects-container">
            <div className="projects-intro">
              <h3>Featured Projects</h3>
              <p>A selection of my most impactful work</p>
            </div>
            
            <div className="featured-projects">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>

            <div className="other-projects">
              <h4>More Projects</h4>
              <div className="project-grid">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
      </HorizontalScroller>
      <Footer />
    </div>
  );
}