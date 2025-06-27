import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
      >
        <h1>Hello, I'm Jane Doe</h1>
        <p className="tagline">Front-end Developer & Designer</p>
        <a className="cta" href="#projects">View Projects</a>
      </motion.div>
    </section>
  );
}
