import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import '../styles/main.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function HorizontalScroller({ children, onProgress }, ref) {
  const wrapperRef = useRef(null);
  const scrollRef = useRef(0);
  const maxScroll = useRef(0);
  const pageCount = useRef(0);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const updateMaxScroll = () => {
      maxScroll.current = wrapper.scrollWidth - wrapper.clientWidth;
      pageCount.current = wrapper.children.length;
      scrollRef.current = clamp(
        currentIndex.current * window.innerWidth,
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
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    const onWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;
      const delta = e.deltaY;
      if (delta > 0) {
        currentIndex.current = clamp(
          currentIndex.current + 1,
          0,
          pageCount.current - 1
        );
      } else if (delta < 0) {
        currentIndex.current = clamp(
          currentIndex.current - 1,
          0,
          pageCount.current - 1
        );
      }
      scrollRef.current = currentIndex.current * window.innerWidth;
      wrapper.style.transform = `translateX(-${scrollRef.current}px)`;
      if (onProgress) {
        const progress = maxScroll.current
          ? scrollRef.current / maxScroll.current
          : 0;
        onProgress(progress);
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      wrapper.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    scrollTo(index) {
      currentIndex.current = clamp(index, 0, pageCount.current - 1);
      scrollRef.current = clamp(
        currentIndex.current * window.innerWidth,
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

export default forwardRef(HorizontalScroller);
