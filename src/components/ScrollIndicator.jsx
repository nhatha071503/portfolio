import React from 'react';

export default function ScrollIndicator({ target = '#about' }) {
  return (
    <a href={target} className="scroll-indicator" aria-label="Scroll to next section">
      <div className="scroll-indicator__arrow">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 16l-6-6h12l-6 6z" />
        </svg>
      </div>
    </a>
  );
}
