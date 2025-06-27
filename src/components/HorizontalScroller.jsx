import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function HorizontalScrollerImpl({ children, onProgress }, ref) {
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
      if (onProgress) {
        const progress = maxScroll.current
          ? scrollRef.current / maxScroll.current
          : 0;
        onProgress(progress);
      }
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      wrapper.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    scrollTo(index) {
      scrollRef.current = clamp(
        index * window.innerWidth,
        0,
        maxScroll.current
      );
      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.transform = `translateX(-${scrollRef.current}px)`;
        if (onProgress) {
          const progress = maxScroll.current
            ? scrollRef.current / maxScroll.current
            : 0;
          onProgress(progress);
        }
      }
    }
  }));

  return (
    <div className="horizontal-viewport">
      <div className="horizontal-wrapper" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
}

const HorizontalScroller = forwardRef(HorizontalScrollerImpl);

HorizontalScroller.propTypes = {
  children: PropTypes.node,
  onProgress: PropTypes.func
};

HorizontalScroller.defaultProps = {
  onProgress: undefined
};

export default HorizontalScroller;
