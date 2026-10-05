import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const MIN_DURATION_MS = 1800;
const MAX_WAIT_MS = 6000;
const RING_RADIUS = 66;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const categories = [
  { label: 'Dessins animés', color: '#a855f7' },
  { label: 'Comédie', color: '#f472b6' },
  { label: 'Gastronomie', color: '#fbbf24' },
  { label: 'Mode & Style', color: '#60a5fa' },
];

const waitForPageLoad = () =>
  new Promise((resolve) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once: true });
  });

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const exitStartedRef = useRef(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    let isLoaded = false;
    let value = 0;
    let frame;
    const start = performance.now();
    const markLoaded = () => {
      isLoaded = true;
    };

    Promise.all([document.fonts?.ready ?? Promise.resolve(), waitForPageLoad()]).then(markLoaded);
    const fallback = setTimeout(markLoaded, MAX_WAIT_MS);

    const tick = (now) => {
      const elapsed = now - start;
      const canFinish = isLoaded && elapsed >= MIN_DURATION_MS;
      const target = canFinish ? 100 : Math.min(90, (elapsed / MIN_DURATION_MS) * 90);
      value += (target - value) * (canFinish ? 0.12 : 0.08);
      if (canFinish && 100 - value < 0.5) value = 100;
      setProgress(Math.round(value));
      if (value < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (progress < 100 || exitStartedRef.current) return;
    exitStartedRef.current = true;

    gsap.timeline({ onComplete: () => onComplete?.() })
      .to(contentRef.current, { scale: 1.08, opacity: 0, duration: 0.5, ease: 'power2.in', delay: 0.3 })
      .to(rootRef.current, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.9, ease: 'power4.inOut' }, '-=0.15');
  }, [progress, onComplete]);

  const isDone = progress >= 100;
  const activeIndex = Math.min(categories.length - 1, Math.floor(progress / 25));

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: '#08080f', clipPath: 'inset(0% 0% 0% 0%)' }}
      role="status"
      aria-live="polite"
      aria-label={`Chargement ${progress}%`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[720px] h-[720px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(236,72,153,0.06) 40%, transparent 65%)' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={contentRef} className="relative z-10 flex flex-col items-center px-6">
        <motion.div
          className="relative w-56 h-56 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Category orbit */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute inset-0 rounded-full" style={{ border: '1px dashed rgba(255,255,255,0.08)' }} />
            {categories.map((c, i) => (
              <span
                key={c.label}
                className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full"
                style={{
                  background: c.color,
                  boxShadow: `0 0 12px ${c.color}`,
                  transform: `rotate(${(i / categories.length) * 360}deg) translateY(-112px)`,
                  opacity: isDone || i <= activeIndex ? 1 : 0.2,
                  transition: 'opacity 0.4s',
                }}
              />
            ))}
          </motion.div>

          {/* Progress ring */}
          <svg className="absolute w-40 h-40 -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
            <defs>
              <linearGradient id="preloader-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r={RING_RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
            <circle
              cx="80" cy="80" r={RING_RADIUS}
              fill="none"
              stroke="url(#preloader-ring)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress / 100)}
              style={{ filter: 'drop-shadow(0 0 6px rgba(168,85,247,0.7))' }}
            />
          </svg>

          <img
            src="/55(2).png"
            alt="GALAXIE"
            className="relative w-24 h-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 24px rgba(124,58,237,0.55))' }}
          />
        </motion.div>

        <motion.div
          className="mt-8 flex items-baseline gap-1 font-zentry text-white"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-5xl md:text-6xl font-black tabular-nums leading-none">{progress}</span>
          <span className="text-xl font-black" style={{ color: 'rgba(255,255,255,0.35)' }}>%</span>
        </motion.div>

        <div className="mt-3 h-5 overflow-hidden text-xs font-semibold uppercase tracking-[0.3em] text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={isDone ? 'done' : activeIndex}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ color: isDone ? '#c084fc' : 'rgba(255,255,255,0.55)' }}
            >
              {isDone ? 'Bienvenue sur Galaxie' : `Chargement · ${categories[activeIndex].label}`}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((c, i) => {
            const isLit = isDone || i <= activeIndex;
            return (
              <span
                key={c.label}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-500"
                style={{
                  background: isLit ? `${c.color}1f` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isLit ? `${c.color}55` : 'rgba(255,255,255,0.06)'}`,
                  color: isLit ? c.color : 'rgba(255,255,255,0.25)',
                }}
              >
                {c.label}
              </span>
            );
          })}
        </motion.div>

        <p
          className="mt-10 text-center text-[11px] uppercase tracking-[0.4em]"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          Plateforme de streaming premium
        </p>
      </div>
    </div>
  );
};

export default Preloader;
