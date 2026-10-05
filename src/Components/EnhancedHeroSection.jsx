import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Play, ArrowRight, LayoutGrid, Tv, Laugh, ChefHat, Sparkles } from 'lucide-react';
import comedyImage from '../assets/image.png';

const SLIDE_DURATION_MS = 7000;

const slides = [
  {
    id: 'cartoon',
    page: 'Dessin Animé',
    label: 'Dessins animés',
    title: 'Tom & Jerry',
    description: 'Les grandes aventures fantastiques du duo le plus culte, en version française.',
    video: 'https://api.ameora.fun/content/vas_cartoon/video/tomandjerryfr/LesGRANDESaventuresfantasydeTometJerry.mp4',
    image: 'https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png',
    accent: '#7c3aed',
    accentLight: '#a855f7',
    icon: Tv,
  },
  {
    id: 'comedy',
    page: 'Comédie',
    label: 'Comédie',
    title: 'Fous rires garantis',
    description: 'Stand-up, sketches et parodies pour égayer chacune de vos journées.',
    image: comedyImage,
    accent: '#ec4899',
    accentLight: '#f472b6',
    icon: Laugh,
  },
  {
    id: 'cooking',
    page: 'Cuisine',
    label: 'Gastronomie',
    title: 'Recettes gourmandes',
    description: 'Des plats du monde entier, expliqués pas à pas pour les réussir chez vous.',
    image: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    icon: ChefHat,
  },
  {
    id: 'fashion',
    page: 'Mode',
    label: 'Mode & Style',
    title: 'Beauté & tendances',
    description: 'Maquillage, coiffure et routines beauté pour sublimer votre style.',
    image: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg',
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    icon: Sparkles,
  },
];

const stats = [
  { value: '200+', label: 'Vidéos HD' },
  { value: '4', label: 'Catégories' },
  { value: '100%', label: 'Gratuit' },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const EnhancedHeroSection = ({ isReady = true, onSelectCategory }) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.9], [1, 0]);

  const slide = slides[active];
  const SlideIcon = slide.icon;
  const isAutoplayRunning = isReady && !isPaused && !reduceMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (slides[active].video) video.play().catch(() => {});
    else video.pause();
  }, [active]);

  const goTo = (index) => setActive((index + slides.length) % slides.length);
  const scrollToCategories = () =>
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col min-h-[calc(100svh-7rem)] md:min-h-[calc(100svh-4rem)] overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Backgrounds */}
      <motion.div className="absolute inset-0" style={{ y: reduceMotion ? 0 : backgroundY }}>
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={s.id}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ scale: isActive && !reduceMotion ? 1.12 : 1.02 }}
                transition={{ duration: isActive ? SLIDE_DURATION_MS / 1000 + 1.5 : 1.2, ease: 'linear' }}
              >
                {s.video ? (
                  <video
                    ref={videoRef}
                    autoPlay loop muted playsInline preload="auto"
                    poster={s.image}
                    className="w-full h-full object-cover"
                  >
                    <source src={s.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={s.image} alt="" className="w-full h-full object-cover" />
                )}
              </motion.div>
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 25% 55%, ${s.accent}38 0%, transparent 60%)` }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Readability overlays */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(90deg, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.75) 35%, rgba(10,10,15,0.25) 70%, rgba(10,10,15,0.45) 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to top, var(--bg-primary) 0%, rgba(10,10,15,0.6) 22%, transparent 55%)',
      }} />

      {/* Content */}
      <motion.div
        className="relative z-10 flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-10 pb-10 grid lg:grid-cols-[minmax(0,1fr)_380px] items-center gap-12"
        style={{ opacity: contentOpacity }}
        initial="hidden"
        animate={isReady ? 'show' : 'hidden'}
        variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
      >
        <div className="max-w-3xl">
          <motion.div variants={reveal} className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full live-dot" style={{ background: slide.accentLight }} />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              À l'affiche ·
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={slide.id}
                className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: slide.accentLight }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {slide.label}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="font-zentry font-black uppercase leading-[0.9] text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            DÉCOUVREZ LE
            <span className="block gradient-text">MEILLEUR</span>
            DIVERTISSEMENT
          </motion.h1>

          <motion.p
            variants={reveal}
            className="text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Dessins animés, comédies, recettes et tendances mode — tout votre divertissement réuni en un seul endroit.
          </motion.p>

          <motion.div variants={reveal} className="flex flex-wrap gap-3 md:gap-4">
            <motion.button
              type="button"
              onClick={() => onSelectCategory?.(slide.page)}
              className="flex items-center gap-3 pl-2 pr-6 py-2 rounded-2xl font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${slide.accent}, ${slide.accentLight})`,
                boxShadow: `0 10px 36px ${slide.accent}66`,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Play className="w-4 h-4 fill-white" />
              </span>
              Regarder maintenant
            </motion.button>

            <motion.button
              type="button"
              onClick={scrollToCategories}
              className="glass flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white/85"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <LayoutGrid className="w-4 h-4" />
              Voir les catégories
            </motion.button>
          </motion.div>

          <motion.div variants={reveal} className="flex items-center gap-6 md:gap-10 mt-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-10">
                {i > 0 && <span className="w-px h-8 bg-white/10" />}
                <div>
                  <div className="font-zentry text-2xl md:text-3xl font-black gradient-text leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider mt-1 text-white/40">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured card */}
        <motion.aside
          variants={reveal}
          className="hidden lg:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.button
              key={slide.id}
              type="button"
              onClick={() => onSelectCategory?.(slide.page)}
              className="glass-dark group block w-full text-left rounded-3xl overflow-hidden"
              style={{ boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${slide.accent}33` }}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                  style={{
                    background: `${slide.accent}33`,
                    border: `1px solid ${slide.accent}66`,
                    color: slide.accentLight,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <SlideIcon className="w-3 h-3" />
                  {slide.label}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accent}, ${slide.accentLight})`,
                      boxShadow: `0 10px 30px ${slide.accent}80`,
                    }}
                  >
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </span>
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-2 text-white/40">En vedette</p>
                <h3 className="font-zentry text-2xl font-black uppercase text-white leading-tight mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55 mb-4">{slide.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: slide.accentLight }}>
                  Explorer la catégorie
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.button>
          </AnimatePresence>
        </motion.aside>
      </motion.div>

      {/* Slide tabs */}
      <motion.div
        className="relative z-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-6 md:pb-8">
          <div className="grid grid-cols-4 gap-2 md:gap-4" role="tablist" aria-label="Catégories à l'affiche">
            {slides.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={s.label}
                  onClick={() => goTo(i)}
                  className="group text-left"
                >
                  <div className="h-0.5 w-full rounded-full overflow-hidden mb-3 bg-white/10">
                    {isActive ? (
                      <div
                        className="h-full origin-left rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${s.accent}, ${s.accentLight})`,
                          animation: `heroProgress ${SLIDE_DURATION_MS}ms linear forwards`,
                          animationPlayState: isAutoplayRunning ? 'running' : 'paused',
                        }}
                        onAnimationEnd={() => goTo(active + 1)}
                      />
                    ) : (
                      <div
                        className="h-full w-full rounded-full"
                        style={{ background: i < active ? 'rgba(255,255,255,0.35)' : 'transparent' }}
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      className="w-4 h-4 shrink-0 transition-colors"
                      style={{ color: isActive ? s.accentLight : 'rgba(255,255,255,0.35)' }}
                    />
                    <span
                      className={`hidden sm:block text-xs md:text-sm font-semibold truncate transition-colors ${
                        isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
