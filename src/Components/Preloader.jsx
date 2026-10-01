import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);
  const particlesRef = useRef(null);
  const taglineRef = useRef(null);
  const ringRef = useRef(null);
  const ring2Ref = useRef(null);

  // Tick progress
  useEffect(() => {
    let current = 0;
    const total = 120; // ~2.4s
    const interval = setInterval(() => {
      current++;
      const eased = Math.round(Math.min(100, (current / total) * 100 * (1 + (current / total) * 0.4)));
      setProgress(Math.min(eased, 100));
      if (current >= total) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current, { scale: 0.4, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' })
      .fromTo(taglineRef.current, { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .fromTo(progressBarRef.current?.parentElement, { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');

    // Rotating rings
    gsap.to(ringRef.current, { rotation: 360, duration: 4, repeat: -1, ease: 'none' });
    gsap.to(ring2Ref.current, { rotation: -360, duration: 6, repeat: -1, ease: 'none' });
  }, []);

  // Exit animation when progress hits 100
  useEffect(() => {
    if (progress < 100) return;

    const tl = gsap.timeline({ onComplete: () => onComplete?.() });

    // Particle burst
    const particles = particlesRef.current?.querySelectorAll('.particle');
    if (particles) {
      particles.forEach((p, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const dist = 120 + Math.random() * 80;
        gsap.to(p, {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          opacity: 0,
          scale: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.02,
        });
      });
    }

    tl.to([logoRef.current, taglineRef.current, progressBarRef.current?.parentElement], {
      opacity: 0, scale: 0.85, duration: 0.5, ease: 'power2.in',
    }, 0.3)
      .to(curtainTopRef.current, {
        scaleY: 1, duration: 0.7, ease: 'power4.inOut', transformOrigin: 'top',
      }, 0.5)
      .to(curtainBottomRef.current, {
        scaleY: 1, duration: 0.7, ease: 'power4.inOut', transformOrigin: 'bottom',
      }, 0.5)
      .to(preloaderRef.current, {
        opacity: 0, duration: 0.4, ease: 'power2.out',
      }, 1.1);
  }, [progress]);

  const particles = Array.from({ length: 20 });

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: '#08080f' }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Curtains */}
      <div ref={curtainTopRef} className="absolute top-0 left-0 right-0 h-1/2 z-10 origin-top scale-y-0"
        style={{ background: 'linear-gradient(180deg, #08080f 0%, #0f0f1a 100%)' }} />
      <div ref={curtainBottomRef} className="absolute bottom-0 left-0 right-0 h-1/2 z-10 origin-bottom scale-y-0"
        style={{ background: 'linear-gradient(0deg, #08080f 0%, #0f0f1a 100%)' }} />

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div ref={ringRef} className="absolute w-64 h-64 rounded-full"
          style={{
            border: '1px solid transparent',
            borderTopColor: 'rgba(124,58,237,0.4)',
            borderRightColor: 'rgba(124,58,237,0.1)',
          }} />
        <div ref={ring2Ref} className="absolute w-80 h-80 rounded-full"
          style={{
            border: '1px solid transparent',
            borderBottomColor: 'rgba(236,72,153,0.3)',
            borderLeftColor: 'rgba(236,72,153,0.08)',
          }} />
        <div className="absolute w-96 h-96 rounded-full"
          style={{ border: '1px solid rgba(255,255,255,0.03)' }} />
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {particles.map((_, i) => (
          <div key={i} className="particle absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#3b82f6',
              opacity: 0.7,
              transform: 'scale(0)',
            }} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div ref={logoRef} className="mb-6 opacity-0">
          <img src="/55(2).png" alt="GALAXIE" className="h-20 md:h-24 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 30px rgba(124,58,237,0.5)) drop-shadow(0 0 60px rgba(124,58,237,0.2))' }} />
        </div>

        {/* Tagline */}
        <p ref={taglineRef} className="text-sm font-semibold uppercase tracking-[0.3em] mb-10 opacity-0"
          style={{ color: 'rgba(255,255,255,0.35)' }}>
          Plateforme de Streaming Premium
        </p>

        {/* Progress */}
        <div className="flex flex-col items-center gap-3 w-64">
          {/* Bar */}
          <div className="w-full h-px rounded-full overflow-hidden relative"
            style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              ref={progressBarRef}
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)',
                boxShadow: '0 0 12px rgba(168,85,247,0.8)',
              }}
            />
            {/* Shimmer */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-8 absolute top-0"
                style={{
                  left: `${progress - 4}%`,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  transition: 'left 0.1s',
                }} />
            </div>
          </div>

          {/* Percentage + dots */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1 h-1 rounded-full"
                  style={{
                    background: progress > i * 33 ? '#a855f7' : 'rgba(255,255,255,0.15)',
                    boxShadow: progress > i * 33 ? '0 0 6px rgba(168,85,247,0.8)' : 'none',
                    transition: 'all 0.3s',
                  }} />
              ))}
            </div>
            <span ref={progressTextRef}
              className="text-xs font-bold tabular-nums"
              style={{
                color: progress === 100 ? '#a855f7' : 'rgba(255,255,255,0.4)',
                textShadow: progress === 100 ? '0 0 12px rgba(168,85,247,0.8)' : 'none',
                transition: 'all 0.3s',
              }}>
              {progress}%
            </span>
          </div>

          {/* Status text */}
          <p className="text-xs transition-all duration-300"
            style={{ color: 'rgba(255,255,255,0.2)' }}>
            {progress < 30 ? 'Initialisation...' : progress < 60 ? 'Chargement des contenus...' : progress < 90 ? 'Préparation...' : 'Prêt !'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
