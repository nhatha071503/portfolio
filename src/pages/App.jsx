import React, { useRef, useState, useEffect } from 'react';
import HorizontalScroller from '../components/HorizontalScroller';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

export default function App() {
  const scrollerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Add magnetic effect to buttons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      
      const handleMouseLeave = () => {
        btn.style.transform = 'translate(0, 0)';
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      magneticBtns.forEach(btn => {
        btn.removeEventListener('mousemove', () => {});
        btn.removeEventListener('mouseleave', () => {});
      });
    };
  }, [currentSection]);

  const scrollToSection = (index) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo(index);
    }
  };

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };

  const handleProgress = (progress) => {
    setScrollProgress(progress);
  };

  return (
    <div className="app">
      <Navbar 
        onNavClick={scrollToSection} 
        activeSection={currentSection}
        scrollProgress={scrollProgress}
      />
      
      <HorizontalScroller 
        ref={scrollerRef} 
        onProgress={handleProgress}
        onSectionChange={handleSectionChange}
      >
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </HorizontalScroller>
    </div>
  );
}