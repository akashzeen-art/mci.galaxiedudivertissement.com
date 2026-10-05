import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import HorizontalScroller from './HorizontalScroller';

const TopTenRow = ({ videos, onPlay }) => (
  <HorizontalScroller>
    {videos.map((video, i) => {
      const { accent, accentLight, label } = video.category;
      return (
        <motion.button
          key={video.key}
          type="button"
          onClick={() => onPlay(video)}
          className="group snap-start shrink-0 flex items-end w-[82%] sm:w-[52%] md:w-[38%] lg:w-[29%] text-left"
          style={{ '--rank-accent': accentLight }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.06 }}
          aria-label={`N°${i + 1} : ${video.title}`}
        >
          <span
            aria-hidden="true"
            className="font-zentry font-black leading-[0.8] select-none text-[6.5rem] md:text-[8rem] -mr-5 md:-mr-7 shrink-0 text-transparent transition-[-webkit-text-stroke-color] duration-300 [-webkit-text-stroke:2px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke-color:var(--rank-accent)]"
          >
            {i + 1}
          </span>

          <span
            className="relative flex-1 min-w-0 rounded-2xl overflow-hidden aspect-[16/10] transition-transform duration-300 group-hover:-translate-y-1.5"
            style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 16px 40px rgba(0,0,0,0.45)' }}
          >
            <img
              src={video.thumbnail}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <span
              className="absolute top-2.5 right-2.5 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accentLight})`, boxShadow: `0 6px 20px ${accent}80` }}
            >
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </span>
            <span className="absolute bottom-0 left-0 right-0 p-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: accentLight }}>
                {label}
              </span>
              <span className="block text-sm font-semibold text-white leading-snug line-clamp-2">{video.title}</span>
            </span>
          </span>
        </motion.button>
      );
    })}
  </HorizontalScroller>
);

export default TopTenRow;
