import React from 'react';
import HorizontalScroller from '../components/HorizontalScroller';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <HorizontalScroller>
        <Section id="home" title="Home">
          <p>Welcome to my portfolio</p>
        </Section>
        <Section id="about" title="About">
          <p>About me section</p>
        </Section>
        <Section id="projects" title="Projects">
          <p>Here are some projects</p>
        </Section>
        <Section id="contact" title="Contact">
          <p>Contact me at email@example.com</p>
        </Section>
      </HorizontalScroller>
      <Footer />
    </div>
  );
}
