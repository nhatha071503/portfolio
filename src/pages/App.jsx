import React from 'react';
import HorizontalScroller from '../components/HorizontalScroller';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import projects from '../data/projects';

export default function App() {
  return (
    <div>
      <Navbar />
      <HorizontalScroller>
        <Section id="home" title="Home">
          <Hero />
        </Section>
        <Section id="about" title="About">
          <p>About me section</p>
        </Section>
        <Section id="projects" title="Projects">
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
      </HorizontalScroller>
      <Footer />
    </div>
  );
}
