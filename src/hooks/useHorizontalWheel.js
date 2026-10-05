import { useEffect } from 'react';

// Rows are not native scroll containers on mouse/trackpad devices (see `.row-scroller`),
// so horizontal swipes are applied manually and vertical ones pass straight to the page.
const useHorizontalWheel = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      // Also stops the browser's swipe-to-go-back gesture at the row's ends.
      e.preventDefault();
      el.scrollLeft += e.deltaX;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [ref]);
};

export default useHorizontalWheel;
