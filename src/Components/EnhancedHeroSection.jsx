import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const EnhancedHeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    gsap.to(video, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0%',
      scrollTrigger: {
        trigger: container,
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        <source src="https://api.ameora.fun/content/vas_cartoon/video/tomandjerryfr/LesGRANDESaventuresfantasydeTometJerry.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.6) 40%, rgba(10,10,15,0.3) 70%, rgba(10,10,15,0.5) 100%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to top, rgba(10,10,15,1) 0%, rgba(10,10,15,0.4) 30%, transparent 60%)'
      }} />
      {/* Purple tint */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.12) 0%, transparent 60%)'
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 max-w-4xl">
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.35)',
            backdropFilter: 'blur(12px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full live-dot" style={{ background: '#a855f7' }} />
          <span className="text-sm font-semibold" style={{ color: '#c084fc' }}>
            Plateforme de Streaming Premium
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-zentry text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-4"
          style={{ color: '#f8fafc' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          DÉCOUVREZ LE{' '}
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            MEILLEUR
          </span>
          DIVERTISSEMENT
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Dessins animés, comédies, recettes et tendances mode — tout en un seul endroit.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <motion.button
            className="flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 8px 32px rgba(124,58,237,0.45)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(124,58,237,0.6)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Play className="w-5 h-5 fill-white" />
            Explorer Maintenant
          </motion.button>

          <motion.button
            className="flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
            }}
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.97 }}
          >
            Voir les Catégories
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: '500+', label: 'Vidéos' },
            { value: '4', label: 'Catégories' },
            { value: 'HD', label: 'Qualité' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.3)' }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnhancedHeroSection;
