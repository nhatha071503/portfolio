import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectShowcase from '../components/ProjectShowcase';
import ContactSection from '../components/ContactSection';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Add magnetic effect to buttons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });

    // Cleanup
    return () => {
      magneticBtns.forEach(btn => {
        btn.removeEventListener('mousemove', () => {});
        btn.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const scrollToSection = (index) => {
    const sections = ['home', 'projects', 'about', 'skills', 'contact'];
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);
    }
  };

  return (
    <div className="app">
      <Navbar onNavClick={scrollToSection} defaultActive={currentSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="projects">
          <ProjectShowcase />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}