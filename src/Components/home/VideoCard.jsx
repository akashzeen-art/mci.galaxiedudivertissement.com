import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoCard = ({ video, onPlay, showCategory = false, className = '' }) => {
  const { accent, accentLight, label } = video.category;

  return (
    <motion.button
      type="button"
      onClick={() => onPlay(video)}
      className={`group block text-left rounded-2xl overflow-hidden ${className}`}
      style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.45), 0 0 0 1px ${accent}40` }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="w-12 h-12 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accentLight})`, boxShadow: `0 8px 28px ${accent}80` }}
          >
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </span>
        </span>
      </div>
      <div className="p-4">
        {showCategory && (
          <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentLight }}>
            {label}
          </p>
        )}
        <h3 className="text-sm font-semibold leading-snug line-clamp-2 min-h-[2.5rem] text-white/90">{video.title}</h3>
      </div>
    </motion.button>
  );
};

export default VideoCard;
