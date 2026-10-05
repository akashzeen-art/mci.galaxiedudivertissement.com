import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoPlayerModal = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <motion.button
            type="button"
            aria-label="Fermer"
            className="absolute top-5 right-5 p-2.5 rounded-xl z-10 text-white"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            whileHover={{ scale: 1.1 }}
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </motion.button>

          <motion.div
            className="w-full max-w-5xl rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${video.category.accent}40`, boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={video.videoUrl}
              src={video.videoUrl}
              controls
              controlsList="nodownload"
              autoPlay
              className="w-full aspect-video bg-black"
            />
            <div className="flex items-center gap-3 p-4" style={{ background: 'rgba(16,16,24,0.95)' }}>
              <span
                className="px-2.5 py-1 rounded-lg text-xs font-bold shrink-0"
                style={{
                  background: `${video.category.accent}22`,
                  border: `1px solid ${video.category.accent}44`,
                  color: video.category.accentLight,
                }}
              >
                {video.category.label}
              </span>
              <h3 className="font-semibold text-white truncate">{video.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPlayerModal;
