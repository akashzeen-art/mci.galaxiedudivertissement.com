import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const BASE = 'https://api.ameora.fun/content/GalaxiWebsite/COOKING';
const TITLES = [
  "Basque aux œufs","Biscuit roulé au chocolat","Boulettes de viande de porc","Burger au barbecue","Burger de boeuf et fraises","Carbonnade flamande","Cotoletta milanaise","Côte de boeuf","Curry de la Réunion","Curry de poulet aux champignons","Dinde farcie","Double burger","Homard grillé","Kumpir turque","Lamb Kebab","Lasagna Bolognese","Mafé au poulet","Mafé cuisine","Maison Saumon","Moroccan Tagine","Nouilles au boeuf","Nouilles de poulet","Pâtes & champignons","Pâtisserie à la viande hachée","Pizza végétarienne","Plat d'aubergine","Plat de Valence","Poisson au curry rouge","Pommes de terre au lait","Poulet BBQ portugais","Quiche de thon","Ragoût de porc","Recette du Ramadan Tunisien","Recette japonaise","Sandwich au banh mi","Sea Spaghetti","Tacos au poulet","Tartelettes au thon","Tartiflette","Tomates farcies","Truffade Cuisine",
];
const v = (n) => ({ id: n, thumbnail: `${BASE}/i${n}.jpg`, title: TITLES[n - 1], videoUrl: `${BASE}/v${n}.mp4` });

const ACCENT = '#f59e0b';

const VideoModal = ({ video, onClose }) => (
  <AnimatePresence>
    {video && (
      <motion.div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.button className="absolute top-5 right-5 p-2.5 rounded-xl z-10"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
          whileHover={{ scale: 1.1 }} onClick={onClose}>
          <X className="w-5 h-5" />
        </motion.button>
        <motion.div className="w-full max-w-5xl rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
          initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}>
          <video src={video.videoUrl} controls controlsList="nodownload" autoPlay className="w-full aspect-video" />
          <div className="p-4" style={{ background: 'rgba(16,16,24,0.95)' }}>
            <h3 className="font-semibold text-white">{video.title}</h3>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Slider = ({ videos, slide, onPrev, onNext, onSetSlide, onSelect }) => (
  <div className="relative">
    <div className="overflow-hidden rounded-2xl">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slide * (100 / 3)}%)` }}>
        {videos.map((video) => (
          <div key={video.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2">
            <motion.div className="relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => onSelect(video)} whileHover={{ y: -4 }}>
              <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <motion.div className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, boxShadow: `0 8px 32px ${ACCENT}66` }}
                  whileHover={{ scale: 1.1 }}>
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <p className="text-white text-sm font-medium line-clamp-1">{video.title}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    <button onClick={onPrev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full z-10"
      style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
      <ChevronLeft className="w-5 h-5 text-white" />
    </button>
    <button onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full z-10"
      style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
      <ChevronRight className="w-5 h-5 text-white" />
    </button>
    <div className="flex justify-center gap-2 mt-5">
      {videos.map((_, idx) => (
        <button key={idx} onClick={() => onSetSlide(idx)}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{ width: slide === idx ? '24px' : '6px', background: slide === idx ? ACCENT : 'rgba(255,255,255,0.2)' }} />
      ))}
    </div>
  </div>
);

const MMAFightPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState(0);

  const topSliderVideos = Array.from({ length: 7 }, (_, i) => v(i + 1));
  const gridVideos = Array.from({ length: 27 }, (_, i) => v(i + 8));
  const hoverSliderVideos = Array.from({ length: 7 }, (_, i) => v(i + 35));

  const nextSlide = () => setCurrentSlide(p => (p + 1) % topSliderVideos.length);
  const prevSlide = () => setCurrentSlide(p => (p - 1 + topSliderVideos.length) % topSliderVideos.length);
  const nextHover = () => setHoverSlide(p => (p + 1) % hoverSliderVideos.length);
  const prevHover = () => setHoverSlide(p => (p - 1 + hoverSliderVideos.length) % hoverSliderVideos.length);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Hero Banner */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${BASE}/i20.jpg)`, filter: 'blur(2px)' }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.7) 50%, rgba(10,10,15,0.85) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 30% 50%, ${ACCENT}12 0%, transparent 60%)`
        }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: ACCENT }}>
              Gastronomie & Recettes
            </span>
          </motion.div>
          <AnimatedTitle title="CUISINE – Recettes en Vedette"
            className="text-white font-zentry text-4xl md:text-6xl font-black uppercase mb-8" />
          <Slider videos={topSliderVideos} slide={currentSlide}
            onPrev={prevSlide} onNext={nextSlide} onSetSlide={setCurrentSlide} onSelect={setSelectedVideo} />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full" style={{ background: `linear-gradient(180deg, ${ACCENT}, ${ACCENT}66)` }} />
          <AnimatedTitle title="Meilleures Recettes de Cuisine"
            className="font-zentry text-3xl md:text-4xl font-black uppercase text-white" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gridVideos.map((video, i) => (
            <motion.div key={video.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }} viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${ACCENT}33` }}
              onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, boxShadow: `0 8px 24px ${ACCENT}55` }}>
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium line-clamp-2 leading-snug" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Second Slider */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE}/i16.jpg)`, filter: 'blur(3px)', transform: 'scale(1.05)' }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,10,15,0.93) 0%, rgba(10,10,15,0.75) 100%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full" style={{ background: `linear-gradient(180deg, ${ACCENT}, ${ACCENT}66)` }} />
            <AnimatedTitle title="Plus de Vidéos de Cuisine"
              className="text-white font-zentry text-3xl md:text-5xl font-black uppercase" />
          </div>
          <Slider videos={hoverSliderVideos} slide={hoverSlide}
            onPrev={prevHover} onNext={nextHover} onSetSlide={setHoverSlide} onSelect={setSelectedVideo} />
        </div>
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default MMAFightPage;
