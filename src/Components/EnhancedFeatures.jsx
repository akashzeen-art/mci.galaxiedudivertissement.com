import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import AnimatedTitle from './AnimatedTitle';
import comedyImage from '../assets/image.png';

const categories = [
  {
    id: 1, title: 'DESSINS ANIMÉS', description: 'Des aventures animées pour toute la famille',
    page: 'Dessin Animé', span: 'lg:col-span-2 lg:row-span-2',
    bg: 'url(https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png)',
    accent: '#7c3aed',
  },
  {
    id: 2, title: 'COMÉDIE', description: 'Des fous rires à tout moment',
    page: 'Comédie', span: '',
    bgImg: comedyImage,
    accent: '#ec4899',
  },
  {
    id: 3, title: 'GASTRONOMIE', description: 'Recettes gourmandes et idées faciles',
    page: 'Cuisine', span: '',
    bg: 'url(https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg)',
    accent: '#f59e0b',
  },
  {
    id: 4, title: 'MODE & STYLE', description: 'Style, beauté et inspirations',
    page: 'Mode', span: 'lg:col-span-2',
    bg: 'url(https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg)',
    accent: '#3b82f6',
  },
];

const EnhancedFeatures = ({ onSelectCategory }) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#a855f7' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explorez
          </motion.p>
          <AnimatedTitle
            title="CATÉGORIES DE CONTENUS"
            className="font-zentry text-4xl md:text-6xl font-black uppercase"
            style={{ color: '#f8fafc' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
          {categories.map((cat, index) => (
            <TiltCard
              key={cat.id}
              onClick={onSelectCategory ? () => onSelectCategory(cat.page) : undefined}
              className={`${cat.span} category-card cursor-pointer`}
            >
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: cat.bg || `url(${cat.bgImg})`,
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.5) 50%, rgba(10,10,15,0.2) 100%)`,
                  }}
                />

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at bottom left, ${cat.accent}22 0%, transparent 60%)`,
                  }}
                />

                {/* Border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `inset 0 0 0 1px ${cat.accent}44` }}
                />

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  {/* Accent tag */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit"
                    style={{
                      background: `${cat.accent}22`,
                      border: `1px solid ${cat.accent}44`,
                      color: cat.accent,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: cat.accent }} />
                    {cat.page}
                  </div>

                  <h3 className="font-zentry text-2xl md:text-3xl font-black uppercase text-white mb-2 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {cat.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: cat.accent }}
                  >
                    Explorer
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;
