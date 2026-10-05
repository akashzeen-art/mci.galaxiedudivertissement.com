import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import HorizontalScroller from './HorizontalScroller';

const ShowsRow = ({ shows, onPlay }) => (
  <HorizontalScroller>
    {shows.map((show, i) => {
      const firstEpisode = show.episodes[0];
      const { accent, accentLight } = firstEpisode.category;
      return (
        <motion.button
          key={show.name}
          type="button"
          onClick={() => onPlay(firstEpisode)}
          className="group snap-start shrink-0 relative w-[82%] sm:w-[48%] md:w-[38%] lg:w-[31.5%] aspect-video rounded-2xl overflow-hidden text-left"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.06 }}
          whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accent}55` }}
          aria-label={`${show.name} : lire le premier épisode`}
        >
          <img
            src={firstEpisode.thumbnail}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(ellipse at 50% 100%, ${accent}40 0%, transparent 70%)` }}
          />
          <span
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accentLight})` }}
          >
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </span>
          <span className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <span className="block font-zentry text-base sm:text-lg xl:text-xl font-black uppercase text-white leading-tight mb-1">
              {show.name}
            </span>
            <span className="block text-xs font-medium text-white/50">{show.episodes.length} épisodes</span>
          </span>
        </motion.button>
      );
    })}
  </HorizontalScroller>
);

export default ShowsRow;
