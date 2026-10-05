import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Film, ChefHat, Laugh, Tv, Sparkles, TrendingUp, Star, Zap } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';
import comedyImage from '../assets/image.png';

const categories = [
  {
    id: 1, title: 'DESSINS ANIMÉS', subtitle: 'Des aventures animées pour toute la famille',
    page: 'Dessin Animé', bg: 'https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png',
    accent: '#7c3aed', accentLight: '#a855f7', accentDim: 'rgba(124,58,237,0.15)',
    icon: Tv, videoCount: 65, tag: 'Populaire', tagIcon: TrendingUp,
    shows: ['Tom & Jerry', 'Dragon Ball Z', 'Pokémon', 'Totally Spies', 'Les Schtroumpfs'],
    rating: 4.9, viewers: '12K',
  },
  {
    id: 2, title: 'COMÉDIE', subtitle: 'Des fous rires garantis à tout moment',
    page: 'Comédie', bgImg: comedyImage,
    accent: '#ec4899', accentLight: '#f472b6', accentDim: 'rgba(236,72,153,0.15)',
    icon: Laugh, videoCount: 50, tag: 'Tendance', tagIcon: Zap,
    shows: ['Stand-up', 'Sketches', 'Humour', 'Parodies'],
    rating: 4.8, viewers: '9K',
  },
  {
    id: 3, title: 'GASTRONOMIE', subtitle: 'Recettes gourmandes du monde entier',
    page: 'Cuisine', bg: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg',
    accent: '#f59e0b', accentLight: '#fbbf24', accentDim: 'rgba(245,158,11,0.15)',
    icon: ChefHat, videoCount: 41, tag: 'Nouveau', tagIcon: Sparkles,
    shows: ['Recettes', 'Cuisine du monde', 'Pâtisserie', 'BBQ'],
    rating: 4.7, viewers: '7K',
  },
  {
    id: 4, title: 'MODE & STYLE', subtitle: 'Style, beauté et inspirations du moment',
    page: 'Mode', bg: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg',
    accent: '#3b82f6', accentLight: '#60a5fa', accentDim: 'rgba(59,130,246,0.15)',
    icon: Film, videoCount: 50, tag: 'Exclusif', tagIcon: Star,
    shows: ['Maquillage', 'Coiffure', 'Routine', 'Tutoriels'],
    rating: 4.8, viewers: '8K',
  },
];

// Animated counter
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

// Floating particle
const Particle = ({ accent, delay, x, y }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full pointer-events-none"
    style={{ background: accent, left: `${x}%`, top: `${y}%`, boxShadow: `0 0 6px ${accent}` }}
    animate={{ y: [-8, 8, -8], opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
    transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const EnhancedFeatures = ({ onSelectCategory }) => {
  const [hovered, setHovered] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  return (
    <section id="categories" className="py-24 px-4 md:px-8 relative overflow-hidden scroll-mt-28 md:scroll-mt-20" style={{ background: 'var(--bg-primary)' }}>

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                <Sparkles className="w-3 h-3" style={{ color: '#a855f7' }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#a855f7' }}>Explorez</span>
              </div>
            </motion.div>
            <AnimatedTitle title="CATÉGORIES DE CONTENUS"
              className="font-zentry text-4xl md:text-6xl font-black uppercase text-white leading-none" />
            <motion.p className="mt-4 text-sm max-w-md"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }} viewport={{ once: true }}>
              Plongez dans un univers de divertissement — animations, humour, cuisine et mode.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div className="flex gap-5 shrink-0"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }} viewport={{ once: true }}>
            {[
              { value: 206, suffix: '+', label: 'Vidéos HD' },
              { value: 4, suffix: '', label: 'Catégories' },
              { value: 100, suffix: '%', label: 'Gratuit' },
            ].map((s, i) => (
              <div key={i} className="text-center px-5 py-4 rounded-2xl relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-2xl md:text-3xl font-black font-zentry mb-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const TagIcon = cat.tagIcon;
            const isHovered = hovered === cat.id;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={cat.id}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ minHeight: isFeatured ? '480px' : '220px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelectCategory?.(cat.page)}
                whileHover={{ y: -5 }}
              >
                {/* BG image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.bgImg || cat.bg})` }} />

                {/* Base overlay */}
                <div className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: isFeatured
                    ? 'linear-gradient(160deg, rgba(10,10,15,0.75) 0%, rgba(10,10,15,0.4) 40%, rgba(10,10,15,0.85) 100%)'
                    : 'linear-gradient(160deg, rgba(10,10,15,0.82) 0%, rgba(10,10,15,0.5) 50%, rgba(10,10,15,0.88) 100%)'
                  }} />

                {/* Accent glow on hover */}
                <motion.div className="absolute inset-0"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: `radial-gradient(ellipse at 20% 80%, ${cat.accent}28 0%, transparent 60%)` }} />

                {/* Animated border */}
                <motion.div className="absolute inset-0 rounded-3xl"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ boxShadow: `inset 0 0 0 1px ${cat.accent}55, 0 0 40px ${cat.accent}15` }} />

                {/* Floating particles on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      <Particle accent={cat.accentLight} delay={0} x={15} y={20} />
                      <Particle accent={cat.accentLight} delay={0.5} x={80} y={30} />
                      <Particle accent={cat.accentLight} delay={1} x={50} y={15} />
                      {isFeatured && <Particle accent={cat.accentLight} delay={0.3} x={70} y={60} />}
                    </>
                  )}
                </AnimatePresence>

                {/* ── Content ── */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">

                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    {/* Tag badge */}
                    <motion.div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{
                        background: `${cat.accent}20`,
                        border: `1px solid ${cat.accent}45`,
                        color: cat.accentLight,
                        backdropFilter: 'blur(10px)',
                      }}
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                    >
                      <TagIcon className="w-3 h-3" />
                      {cat.tag}
                    </motion.div>

                    {/* Icon box */}
                    <motion.div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${cat.accent}30, ${cat.accent}15)`,
                        border: `1px solid ${cat.accent}40`,
                        backdropFilter: 'blur(10px)',
                      }}
                      animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: cat.accentLight }} />
                    </motion.div>
                  </div>

                  {/* Bottom content */}
                  <div>
                    {/* Shows pills — only featured */}
                    {isFeatured && (
                      <motion.div className="flex flex-wrap gap-2 mb-5"
                        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 4 }}
                        transition={{ duration: 0.3 }}>
                        {cat.shows.map(show => (
                          <span key={show} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                            style={{
                              background: 'rgba(255,255,255,0.08)',
                              border: '1px solid rgba(255,255,255,0.12)',
                              color: 'rgba(255,255,255,0.6)',
                              backdropFilter: 'blur(8px)',
                            }}>
                            {show}
                          </span>
                        ))}
                      </motion.div>
                    )}

                    {/* Title */}
                    <h3 className={`font-zentry font-black uppercase text-white leading-none mb-2 ${isFeatured ? 'text-4xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                      {cat.title}
                    </h3>
                    <p className={`mb-4 ${isFeatured ? 'text-sm max-w-xs' : 'text-xs'}`}
                      style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {cat.subtitle}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Video count with progress arc */}
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.accentLight }} />
                          <span className="text-xs font-semibold" style={{ color: cat.accentLight }}>
                            {cat.videoCount}+ vidéos
                          </span>
                        </div>
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" style={{ color: '#fbbf24' }} />
                          <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            {cat.rating}
                          </span>
                        </div>
                        {/* Viewers */}
                        {isFeatured && (
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full live-dot" style={{ background: '#10b981' }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{cat.viewers} vues</span>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      {isFeatured ? (
                        <motion.button
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                          style={{
                            background: `linear-gradient(135deg, ${cat.accent}, ${cat.accentLight})`,
                            boxShadow: `0 6px 24px ${cat.accent}55`,
                          }}
                          animate={{ scale: isHovered ? 1.04 : 1 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          Explorer
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      ) : (
                        <motion.div
                          className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${cat.accent}, ${cat.accentLight})`,
                            boxShadow: `0 4px 16px ${cat.accent}55`,
                          }}
                          animate={{ scale: isHovered ? 1.1 : 0.85, opacity: isHovered ? 1 : 0.5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Progress bar — video fill indicator */}
                    <motion.div className="mt-4 h-0.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                      animate={{ opacity: isHovered ? 1 : 0.4 }}>
                      <motion.div className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.accent}, ${cat.accentLight})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(cat.videoCount / 70) * 100}%` }}
                        transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                        viewport={{ once: true }} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          className="mt-6 rounded-2xl overflow-hidden relative"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }} viewport={{ once: true }}
        >
          {/* Gradient line top */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(236,72,153,0.4), rgba(245,158,11,0.3), rgba(59,130,246,0.4), transparent)' }} />

          <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))', border: '1px solid rgba(124,58,237,0.25)' }}>
                <Play className="w-4 h-4" style={{ color: '#a855f7' }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Plus de 200 vidéos disponibles</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Contenu mis à jour régulièrement · Accès 100% gratuit</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              {categories.map(cat => {
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => onSelectCategory?.(cat.page)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                    style={{
                      background: activeTab === cat.id ? `${cat.accent}25` : `${cat.accent}10`,
                      border: `1px solid ${activeTab === cat.id ? cat.accent + '55' : cat.accent + '25'}`,
                      color: cat.accentLight,
                    }}
                    onMouseEnter={() => setActiveTab(cat.id)}
                    onMouseLeave={() => setActiveTab(null)}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="w-3 h-3" />
                    {cat.page}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EnhancedFeatures;
