import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
    >
      <div className="section-inner">
        <h1>{title}</h1>
        {children}
      </div>
    </motion.section>
  );
}
