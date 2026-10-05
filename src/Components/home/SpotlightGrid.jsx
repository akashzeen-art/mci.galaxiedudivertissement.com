import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoCard from './VideoCard';

const SpotlightGrid = ({ featured, items, badge, onPlay }) => {
  const { accent, accentLight } = featured.category;

  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
      <motion.button
        type="button"
        onClick={() => onPlay(featured)}
        className="group relative rounded-3xl overflow-hidden text-left aspect-video lg:aspect-auto lg:min-h-full"
        style={{ border: `1px solid ${accent}33` }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={featured.thumbnail}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />
        <span
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 15% 100%, ${accent}38 0%, transparent 60%)` }}
        />
        <span className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
          <span
            className="self-start px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3"
            style={{ background: `${accent}2e`, border: `1px solid ${accent}66`, color: accentLight, backdropFilter: 'blur(10px)' }}
          >
            {badge}
          </span>
          <span className="block font-zentry text-2xl md:text-4xl font-black uppercase text-white leading-none mb-4">
            {featured.title}
          </span>
          <span
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accentLight})`, boxShadow: `0 8px 24px ${accent}66` }}
          >
            <Play className="w-4 h-4 fill-white" />
            Regarder la recette
          </span>
        </span>
      </motion.button>

      <div className="grid grid-cols-2 gap-4 md:gap-5">
        {items.map((video, i) => (
          <motion.div
            key={video.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
          >
            <VideoCard video={video} onPlay={onPlay} className="w-full h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpotlightGrid;
