import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SectionHeader = ({ icon: Icon, eyebrow, title, subtitle, accent, accentLight, onSeeAll }) => (
  <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
        >
          <Icon className="w-4 h-4" style={{ color: accentLight }} />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: accentLight }}>
          {eyebrow}
        </span>
      </div>
      <h2 className="font-zentry text-3xl md:text-5xl font-black uppercase text-white leading-none">{title}</h2>
      {subtitle && <p className="mt-3 text-sm md:text-base max-w-xl text-white/45">{subtitle}</p>}
    </motion.div>

    {onSeeAll && (
      <motion.button
        type="button"
        onClick={onSeeAll}
        className="group shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-semibold"
        style={{ background: `${accent}14`, border: `1px solid ${accent}33`, color: accentLight }}
        whileHover={{ scale: 1.03, backgroundColor: `${accent}26` }}
        whileTap={{ scale: 0.97 }}
        aria-label={`Voir tout : ${eyebrow}`}
      >
        <span className="hidden sm:inline">Voir tout</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </motion.button>
    )}
  </div>
);

export default SectionHeader;
