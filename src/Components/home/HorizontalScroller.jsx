import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useHorizontalWheel from '../../hooks/useHorizontalWheel';

const ArrowButton = ({ direction, visible, onClick }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'left' ? 'Précédent' : 'Suivant'}
      tabIndex={visible ? 0 : -1}
      className={`row-arrow absolute top-[38%] -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 ${
        direction === 'left' ? 'left-0 md:-left-5' : 'right-0 md:-right-5'
      } ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{
        background: 'rgba(10,10,15,0.85)',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
      }}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

const HorizontalScroller = ({ children }) => {
  const scrollerRef = useRef(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  useHorizontalWheel(scrollerRef);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollBack(el.scrollLeft > 8);
    setCanScrollForward(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scrollByPage = (direction) => {
    const el = scrollerRef.current;
    el?.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={updateArrows}
        className="row-scroller flex gap-4 md:gap-5 overflow-x-auto overflow-y-hidden snap-x scrollbar-hide pt-4 pb-10 -mt-2 -mb-7 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {children}
      </div>
      <ArrowButton direction="left" visible={canScrollBack} onClick={() => scrollByPage(-1)} />
      <ArrowButton direction="right" visible={canScrollForward} onClick={() => scrollByPage(1)} />
    </div>
  );
};

export default HorizontalScroller;
