import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState
} from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function HorizontalScroller({ children, onProgress, onSectionChange }, ref) {
  const wrapperRef = useRef(null);
  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const maxScroll = useRef(0);
  const pageCount = useRef(0);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);
  const animationFrameRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Smooth scroll animation with physics
  const animateScroll = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const diff = targetScrollRef.current - scrollRef.current;
    const speed = Math.abs(diff) > 1 ? 0.08 : 0.12;
    
    scrollRef.current += diff * speed;
    
    if (Math.abs(diff) < 0.1) {
      scrollRef.current = targetScrollRef.current;
    }

    wrapper.style.transform = `translateX(-${scrollRef.current}px)`;
    
    if (onProgress) {
      const progress = maxScroll.current ? scrollRef.current / maxScroll.current : 0;
      onProgress(progress);
    }

    if (Math.abs(diff) > 0.1) {
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    } else {
      isScrolling.current = false;
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateMaxScroll = () => {
      maxScroll.current = wrapper.scrollWidth - wrapper.clientWidth;
      pageCount.current = wrapper.children.length;
      targetScrollRef.current = clamp(
        currentIndex.current * window.innerWidth,
        0,
        maxScroll.current
      );
      animateScroll();
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    // Enhanced wheel handling with momentum
    const onWheel = (e) => {
      const section = e.target.closest(
        '.hero-section, .projects-section, .about-section, .skills-section, .contact-section'
      );
      if (section && section.scrollHeight > section.clientHeight) {
        const atTop = section.scrollTop === 0;
        const atBottom =
          section.scrollTop + section.clientHeight >= section.scrollHeight;
        if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
          // Allow vertical scrolling inside the section
          return;
        }
      }

      e.preventDefault();
      if (isScrolling.current) return;

      isScrolling.current = true;
      const delta = e.deltaY;
      const sensitivity = 0.8;

      if (Math.abs(delta) > 10) {
        if (delta > 0) {
          currentIndex.current = clamp(
            currentIndex.current + 1,
            0,
            pageCount.current - 1
          );
        } else {
          currentIndex.current = clamp(
            currentIndex.current - 1,
            0,
            pageCount.current - 1
          );
        }

        targetScrollRef.current = currentIndex.current * window.innerWidth;

        if (onSectionChange) {
          onSectionChange(currentIndex.current);
        }

        animationFrameRef.current = requestAnimationFrame(animateScroll);
      }
    };

    // Touch handling for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    
    const onTouchEnd = (e) => {
      if (isScrolling.current) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;
      
      // Only handle horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        isScrolling.current = true;
        
        if (deltaX > 0) {
          currentIndex.current = clamp(
            currentIndex.current + 1,
            0,
            pageCount.current - 1
          );
        } else {
          currentIndex.current = clamp(
            currentIndex.current - 1,
            0,
            pageCount.current - 1
          );
        }
        
        targetScrollRef.current = currentIndex.current * window.innerWidth;
        
        if (onSectionChange) {
          onSectionChange(currentIndex.current);
        }
        
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      }
    };

    // Mouse tracking for parallax effects
    const onMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    wrapper.addEventListener('touchstart', onTouchStart);
    wrapper.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      wrapper.removeEventListener('wheel', onWheel);
      wrapper.removeEventListener('touchstart', onTouchStart);
      wrapper.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', updateMaxScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onProgress, onSectionChange]);

  useImperativeHandle(ref, () => ({
    scrollTo(index) {
      currentIndex.current = clamp(index, 0, pageCount.current - 1);
      targetScrollRef.current = currentIndex.current * window.innerWidth;
      isScrolling.current = true;
      
      if (onSectionChange) {
        onSectionChange(currentIndex.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    },
    getCurrentIndex() {
      return currentIndex.current;
    },
    getMousePosition() {
      return mousePosition;
    }
  }));

  return (
    <div className="horizontal-viewport">
      <div className="horizontal-wrapper" ref={wrapperRef}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { 
            sectionIndex: index,
            mousePosition,
            isActive: index === currentIndex.current
          })
        )}
      </div>
    </div>
  );
}

export default forwardRef(HorizontalScroller);