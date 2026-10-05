import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Eye, Clock, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import AnimatedTitle from './AnimatedTitle';
import HorizontalScroller from './home/HorizontalScroller';

const videos = [
  { id: 1, title: 'Le running', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i1.jpg', duration: '5:42', views: '2.1M', category: 'Comédie', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/v1.mp4', accent: '#ec4899' },
  { id: 2, title: 'Bande dessinée', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i3.jpg', duration: '8:15', views: '3.2M', category: 'Comédie', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/v3.mp4', accent: '#ec4899' },
  { id: 3, title: 'Burger au barbecue', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i4.jpg', duration: '7:30', views: '2.3M', category: 'Cuisine', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/v4.mp4', accent: '#f59e0b' },
  { id: 4, title: 'Lasagna Bolognese', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg', duration: '10:20', views: '1.8M', category: 'Cuisine', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/v16.mp4', accent: '#f59e0b' },
  { id: 5, title: 'Acne Routine', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i3.jpg', duration: '6:45', views: '4.1M', category: 'Mode', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v3.mp4', accent: '#3b82f6' },
  { id: 6, title: 'Tuto Turban Facile', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i2.jpg', duration: '12:30', views: '2.9M', category: 'Mode', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v2.mp4', accent: '#3b82f6' },
  { id: 7, title: 'Totally Spies Ep.1', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/i1.jpg', duration: '9:15', views: '1.5M', category: 'Cartoon', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/v1.mp4', accent: '#7c3aed' },
  { id: 8, title: 'Totally Spies Ep.2', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/i2.jpg', duration: '11:00', views: '3.7M', category: 'Cartoon', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/v2.mp4', accent: '#7c3aed' },
  { id: 9, title: 'Maquillage simple', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i8.jpg', duration: '8:45', views: '2.8M', category: 'Mode', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v8.mp4', accent: '#3b82f6' },
  { id: 10, title: 'Moroccan Tagine', thumbnail: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/i20.jpg', duration: '15:20', views: '5.2M', category: 'Cuisine', videoUrl: 'https://api.ameora.fun/content/GalaxiWebsite/COOKING/v20.mp4', accent: '#f59e0b' },
];

const VideoSliderSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <motion.p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#a855f7' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Sélection
              </motion.p>
              <AnimatedTitle
                title="VIDÉOS EN VEDETTE"
                className="font-zentry text-3xl md:text-4xl font-black uppercase text-white"
              />
            </div>
            <motion.button
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(124,58,237,0.25)',
                color: '#a855f7',
              }}
              whileHover={{ scale: 1.03, background: 'rgba(124,58,237,0.2)' }}
            >
              Voir tout
            </motion.button>
          </div>

          <HorizontalScroller>
            {videos.map((video, index) => (
              <TiltCard key={video.id}>
                <motion.div
                  className="min-w-[260px] rounded-2xl overflow-hidden cursor-pointer group snap-center"
                  style={{
                    background: 'rgba(22,22,31,0.8)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setPlayingVideo(video.id)}
                  whileHover={{ y: -4, boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${video.accent}33` }}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />

                    {/* Category badge */}
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold"
                      style={{
                        background: `${video.accent}22`,
                        border: `1px solid ${video.accent}44`,
                        color: video.accent,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {video.category}
                    </div>

                    {/* Duration */}
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-xs"
                      style={{
                        background: 'rgba(0,0,0,0.7)',
                        color: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${video.accent}, ${video.accent}cc)`,
                          boxShadow: `0 8px 32px ${video.accent}66`,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 leading-snug" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      <Eye className="w-3.5 h-3.5" />
                      {video.views} vues
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </HorizontalScroller>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlayingVideo(null)}
          >
            <motion.button
              className="absolute top-5 right-5 p-2.5 rounded-xl z-10"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
              whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.15)' }}
              onClick={() => setPlayingVideo(null)}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              className="w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <video
                autoPlay controls controlsList="nodownload"
                className="w-full aspect-video"
                src={videos.find(v => v.id === playingVideo)?.videoUrl}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoSliderSection;
