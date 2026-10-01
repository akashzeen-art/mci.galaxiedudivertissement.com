import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Film, ChefHat, Laugh, Tv } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';
import comedyImage from '../assets/image.png';

const categories = [
  {
    id: 1,
    title: 'DESSINS ANIMÉS',
    subtitle: 'Des aventures animées pour toute la famille',
    page: 'Dessin Animé',
    bg: 'https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png',
    accent: '#7c3aed',
    accentLight: '#a855f7',
    icon: Tv,
    videoCount: '65+',
    tag: 'Populaire',
    shows: ['Tom & Jerry', 'Dragon Ball Z', 'Pokémon', 'Totally Spies'],
    featured: true,
  },
  {
    id: 2,
    title: 'COMÉDIE',
    subtitle: 'Des fous rires à tout moment',
    page: 'Comédie',
    bg: comedyImage,
    accent: '#ec4899',
    accentLight: '#f472b6',
    icon: Laugh,
    videoCount: '50+',
    tag: 'Tendance',
    shows: ['Stand-up', 'Sketches', 'Humour', 'Parodies'],
    featured: false,
  },
  {
    id: 3,
    title: 'GASTRONOMIE',
    subtitle: 'Recettes gourmandes et idées faciles',
    page: 'Cuisine',
    bg: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    icon: ChefHat,
    videoCount: '41+',
    tag: 'Nouveau',
    shows: ['Recettes', 'Cuisine du monde', 'Pâtisserie', 'BBQ'],
    featured: false,
  },
  {
    id: 4,
    title: 'MODE & STYLE',
    subtitle: 'Style, beauté et inspirations du moment',
    page: 'Mode',
    bg: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg',
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    icon: Film,
    videoCount: '50+',
    tag: 'Exclusif',
    shows: ['Maquillage', 'Coiffure', 'Routine', 'Tutoriels'],
    featured: false,
  },
];

const stats = [
  { value: '200+', label: 'Vidéos HD' },
  { value: '4', label: 'Catégories' },
  { value: '100%', label: 'Gratuit' },
  { value: '24/7', label: 'Disponible' },
];

const EnhancedFeatures = ({ onSelectCategory }) => {
  const [hovered, setHovered] = useState(null);
  const featured = categories[0];
  const rest = categories.slice(1);

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }} />
              <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#a855f7' }}>
                Explorez
              </span>
            </motion.div>
            <AnimatedTitle
              title="CATÉGORIES DE CONTENUS"
              className="font-zentry text-4xl md:text-6xl font-black uppercase text-white"
            />
          </div>

          {/* Stats row */}
          <motion.div
            className="flex gap-6 md:gap-8 shrink-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-xl md:text-2xl font-black font-zentry"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {s.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">

          {/* Featured large card */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative rounded-3xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '520px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => onSelectCategory?.(featured.page)}
            onMouseEnter={() => setHovered(featured.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* BG image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featured.bg})` }}
            />

            {/* Overlays */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.4) 50%, rgba(10,10,15,0.6) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(ellipse at bottom left, ${featured.accent}25 0%, transparent 65%)` }} />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ boxShadow: `inset 0 0 0 1px ${featured.accent}55` }} />

            {/* Top badges */}
            <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: `${featured.accent}25`,
                  border: `1px solid ${featured.accent}50`,
                  color: featured.accentLight,
                  backdropFilter: 'blur(8px)',
                }}>
                <span className="w-1.5 h-1.5 rounded-full live-dot" style={{ background: featured.accentLight }} />
                {featured.tag}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(8px)',
                }}>
                <Play className="w-3 h-3 fill-current" />
                {featured.videoCount} vidéos
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
              {/* Shows pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.shows.map(show => (
                  <span key={show} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.55)',
                      backdropFilter: 'blur(8px)',
                    }}>
                    {show}
                  </span>
                ))}
              </div>

              <h3 className="font-zentry text-4xl md:text-5xl font-black uppercase text-white mb-2 leading-none">
                {featured.title}
              </h3>
              <p className="text-sm mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {featured.subtitle}
              </p>

              {/* CTA */}
              <motion.button
                className="flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, ${featured.accent}, ${featured.accentLight})`,
                  boxShadow: `0 8px 32px ${featured.accent}55`,
                }}
                whileHover={{ scale: 1.04, boxShadow: `0 12px 40px ${featured.accent}77` }}
                whileTap={{ scale: 0.97 }}
              >
                <Play className="w-4 h-4 fill-white" />
                Explorer la catégorie
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right column — 3 smaller cards */}
          <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-1 gap-4 md:gap-5">
            {rest.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group flex-1"
                  style={{ minHeight: '155px' }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => onSelectCategory?.(cat.page)}
                  onMouseEnter={() => setHovered(cat.id)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -3 }}
                >
                  {/* BG */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-110"
                    style={{ backgroundImage: cat.bgImg ? `url(${cat.bgImg})` : `url(${cat.bg})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.88) 0%, rgba(10,10,15,0.45) 60%, rgba(10,10,15,0.65) 100%)' }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `radial-gradient(ellipse at left center, ${cat.accent}20 0%, transparent 65%)` }} />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `inset 0 0 0 1px ${cat.accent}44` }} />

                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center gap-5 p-5">
                    {/* Icon box */}
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${cat.accent}30, ${cat.accent}15)`,
                        border: `1px solid ${cat.accent}40`,
                        boxShadow: `0 4px 16px ${cat.accent}25`,
                      }}>
                      <Icon className="w-5 h-5" style={{ color: cat.accentLight }} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-zentry text-lg font-black uppercase text-white leading-none truncate">
                          {cat.title}
                        </h3>
                        <span className="shrink-0 px-2 py-0.5 rounded-md text-xs font-bold"
                          style={{
                            background: `${cat.accent}20`,
                            border: `1px solid ${cat.accent}35`,
                            color: cat.accentLight,
                          }}>
                          {cat.tag}
                        </span>
                      </div>
                      <p className="text-xs mb-3 line-clamp-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {cat.subtitle}
                      </p>
                      {/* Shows */}
                      <div className="flex gap-1.5 flex-wrap">
                        {cat.shows.slice(0, 3).map(show => (
                          <span key={show} className="text-xs px-2 py-0.5 rounded-md"
                            style={{
                              background: 'rgba(255,255,255,0.06)',
                              color: 'rgba(255,255,255,0.35)',
                            }}>
                            {show}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side */}
                    <div className="shrink-0 flex flex-col items-end gap-3">
                      <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {cat.videoCount} vidéos
                      </span>
                      <motion.div
                        className="w-9 h-9 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${cat.accent}, ${cat.accentLight})`,
                          boxShadow: `0 4px 16px ${cat.accent}55`,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-8 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed22, #a855f722)', border: '1px solid rgba(124,58,237,0.25)' }}>
              <Play className="w-4 h-4" style={{ color: '#a855f7' }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Plus de 200 vidéos disponibles</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Contenu mis à jour régulièrement</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.page)}
                className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                style={{
                  background: `${cat.accent}15`,
                  border: `1px solid ${cat.accent}30`,
                  color: cat.accentLight,
                }}
                whileHover={{ scale: 1.05, background: `${cat.accent}25` }}
                whileTap={{ scale: 0.96 }}
              >
                {cat.page}
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EnhancedFeatures;
