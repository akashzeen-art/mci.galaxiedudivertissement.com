import { motion } from 'framer-motion';
import HorizontalScroller from './HorizontalScroller';
import VideoCard from './VideoCard';

const VideoRow = ({ videos, onPlay, showCategory = false }) => (
  <HorizontalScroller>
    {videos.map((video, i) => (
      <motion.div
        key={video.key}
        className="snap-start shrink-0 w-[72%] sm:w-[46%] md:w-[31%] lg:w-[23.5%]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.06 }}
      >
        <VideoCard video={video} onPlay={onPlay} showCategory={showCategory} className="w-full" />
      </motion.div>
    ))}
  </HorizontalScroller>
);

export default VideoRow;
