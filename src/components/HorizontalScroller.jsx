import React, { useRef, useEffect } from 'react';
import '../styles/main.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function HorizontalScroller({ children }) {
  const wrapperRef = useRef(null);
  const scrollRef = useRef(0);
  const maxScroll = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const updateMaxScroll = () => {
      maxScroll.current = wrapper.scrollWidth - wrapper.clientWidth;
    };
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      scrollRef.current = clamp(
        scrollRef.current + delta,
        0,
        maxScroll.current
      );
      wrapper.style.transform = `translateX(-${scrollRef.current}px)`;
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      wrapper.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, []);

  return (
    <div className="horizontal-viewport">
      <div className="horizontal-wrapper" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
}
