import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const BASE = 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32';
const VAS = 'https://api.ameora.fun/content/vas_cartoon';
const ACCENT = '#7c3aed';

const dragonBallZ = [
  { id: 'd1', title: 'Dragon Ball Z – Méga Compilation Saga Boo', thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/1.png`, videoUrl: `${VAS}/video/dragonballZ/DragonBallZ-MégaCompilation-RésuméCompletSagaBoo.mp4` },
  { id: 'd2', title: 'Méga Compilation – Résumé Comp', thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/2.png`, videoUrl: `${VAS}/video/dragonballZ/MégaCompilation-RésuméComp.mp4` },
  { id: 'd3', title: 'Méga Compilation – Résumé Complet', thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/3.png`, videoUrl: `${VAS}/video/dragonballZ/MégaCompilation-RésuméComplet.mp4` },
  { id: 'd4', title: 'Méga Compilation – Résumé Complet Saga', thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/4.png`, videoUrl: `${VAS}/video/dragonballZ/MégaCompilation-RésuméCompletSaga.mp4` },
  { id: 'd5', title: 'Résumé Complet Saga Babidi', thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/5.png`, videoUrl: `${VAS}/video/dragonballZ/RésuméCompletSagaBabidi.mp4` },
];
const heyArnold = [
  { id: 'h1', title: 'Hé Arnold – Canicule !', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/1.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnold_Canicule!.mp4` },
  { id: 'h2', title: 'Hé Arnold – La soirée de filles', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/2.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnold_Lasoiréedefilles.mp4` },
  { id: 'h3', title: 'Hé Arnold – Le samedi parfait', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/3.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnold_Lesamediparfait.mp4` },
  { id: 'h4', title: 'Hé Arnold – Le petit carnet rose', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/4.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnoldLepetitcarnetrose.mp4` },
  { id: 'h5', title: 'Hé Arnold – Monsieur Smith', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/5.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnoldMonsieurSmith.mp4` },
];
const inspectorGadget = [
  { id: 'g1', title: 'Conférence de presse de Gadget', thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/1.png`, videoUrl: `${VAS}/video/inspectorgadget/ConférencedepressedeGadget.mp4` },
  { id: 'g2', title: 'Gadget et le Lama', thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/2.png`, videoUrl: `${VAS}/video/inspectorgadget/GadgetetleLama.mp4` },
  { id: 'g3', title: 'Gadget et le Nain', thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/3.png`, videoUrl: `${VAS}/video/inspectorgadget/GadgetetleNain.mp4` },
  { id: 'g4', title: 'Gadget le somnambule', thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/4.png`, videoUrl: `${VAS}/video/inspectorgadget/Gadgetlesomnambule.mp4` },
  { id: 'g5', title: 'Gadget magique', thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/5.png`, videoUrl: `${VAS}/video/inspectorgadget/Gadgetmagique.mp4` },
];
const pokemon = [
  { id: 'p1', title: 'Le Maître Pokémon Évolutions – Épisode 1', thumbnail: `${VAS}/thumnbnail/POKEMON/1.png`, videoUrl: `${VAS}/video/POKEMON/LeMaîtrePokémonÉvolutions_Épisode1.mp4` },
  { id: 'p2', title: 'Pokémon Évolutions – Bande-annonce 2', thumbnail: `${VAS}/thumnbnail/POKEMON/2.png`, videoUrl: `${VAS}/video/POKEMON/PokémonÉvolutions_Bande-annonce2.mp4` },
  { id: 'p3', title: "L'éclipse – Pokémon Évolutions – Épisode 2", thumbnail: `${VAS}/thumnbnail/POKEMON/3.png`, videoUrl: `${VAS}/video/POKEMON/L'éclipse_PokémonÉvolutions–Épisode2.mp4` },
  { id: 'p4', title: 'Le visionnaire – Pokémon Évolutions – Épisode 3', thumbnail: `${VAS}/thumnbnail/POKEMON/4.png`, videoUrl: `${VAS}/video/POKEMON/Levisionnaire_PokémonÉvolutions_Épisode3.mp4` },
  { id: 'p5', title: 'Le plan – Pokémon Évolutions – Épisode 4', thumbnail: `${VAS}/thumnbnail/POKEMON/5.png`, videoUrl: `${VAS}/video/POKEMON/Leplan_PokémonÉvolutions_Épisode4.mp4` },
];
const smurfs = [
  { id: 's1', title: 'Le Pouvoir du Sourire ! Les Schtroumpfs', thumbnail: `${VAS}/thumnbnail/THESMURFS/1.png`, videoUrl: `${VAS}/video/thesmurfs/ePouvoirduSourire!LesSchtroumpfs.mp4` },
  { id: 's2', title: 'Le Problème du Schtroumpf Paresseux !', thumbnail: `${VAS}/thumnbnail/THESMURFS/2.png`, videoUrl: `${VAS}/video/thesmurfs/LeProblèmeduSchtroumpfParesseux!.mp4` },
  { id: 's3', title: 'Le Retour des Schtroumpfs ! – Clip Exclusif', thumbnail: `${VAS}/thumnbnail/THESMURFS/3.png`, videoUrl: `${VAS}/video/thesmurfs/LeRetourdesSchtroumpfs!_CLIPEXCLUSIF!.mp4` },
  { id: 's4', title: 'Les deux bêtas font la paire – Les Schtroumpfs 3D', thumbnail: `${VAS}/thumnbnail/THESMURFS/4.png`, videoUrl: `${VAS}/video/thesmurfs/LesdeuxbêtasfontlapaireLesSchtroumpfs3D.mp4` },
  { id: 's5', title: 'Qui a cassé le télescope du Grand Schtroumpf ?', thumbnail: `${VAS}/thumnbnail/THESMURFS/5.png`, videoUrl: `${VAS}/video/thesmurfs/QuiacasséletélescopeduGrandSchtroumpf-LesSchtroumpfs.mp4` },
  { id: 's6', title: 'Un Anniversaire EXPLOSIF !', thumbnail: `${VAS}/thumnbnail/THESMURFS/6..png`, videoUrl: `${VAS}/video/thesmurfs/UnAnniversaireEXPLOSIF!.mp4` },
];
const tomAndJerry = [
  { id: 't1', title: 'Folie martienne', thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/1.png`, videoUrl: `${VAS}/video/tomandjerryfr/Foliemartienne.mp4` },
  { id: 't2', title: 'Le chat & la souris détectives', thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/2.png`, videoUrl: `${VAS}/video/tomandjerryfr/Lechat&lasourisdétectives.mp4` },
  { id: 't3', title: 'Les GRANDES aventures fantasy de Tom et Jerry', thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/3.png`, videoUrl: `${VAS}/video/tomandjerryfr/LesGRANDESaventuresfantasydeTometJerry.mp4` },
  { id: 't4', title: 'Tom & Jerry deviennent des RATS DE BIBLIOTHÈQUE', thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/4.png`, videoUrl: `${VAS}/video/tomandjerryfr/Tom&JerrydeviennentdesRATSDEBIBLIOTHÈQUE.mp4` },
  { id: 't5', title: 'Un Jerry IMMENSE vs un Tom MINUSCULE', thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/5.png`, videoUrl: `${VAS}/video/tomandjerryfr/UnJerryIMMENSEvsunTomMINUSCULE.mp4` },
];

const cartoons11 = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1, thumbnail: `${BASE}/CARTOONS-11/i${i + 1}.jpg`, videoUrl: `${BASE}/CARTOONS-11/v${i + 1}.mp4`,
  title: ['Silicon Valley Girls','A Thing For Musicians','Mandy Book','Baddies On A Blimp','Danger TV','Une Vie De Chat','Jeux Vidéo Zéro','Super Méga Danse Show','Mariage Et Sabotages','Les Délices De Grand-Mère','Célébrité Volée'][i],
}));
const cartoons16 = Array.from({ length: 16 }, (_, i) => ({
  id: i + 12, thumbnail: `${BASE}/CARTOONS-16/i${i + 1}.jpg`, videoUrl: `${BASE}/CARTOONS-16/v${i + 1}.mp4`,
  title: ['Chap Kollé','Dansez Petits Rats','Deux Mirette','Faux Pas Sur La Place Rouge','Jean Patonaute','La Griffe Du Caire','La Trahison Du Bortsch','Le Monstre De La Tamise',"L'Invasion Des Potiches Tournantes",'Le Sphinx Se Démonte','Paris Photo Express',"Pour L'Amour Du Sphinx",'Rap À Plondres','Rome Mise À Neuf','Taxi Iii Yi Iii Ha','Un Gorille À New York'][i],
}));
const cartoons5 = Array.from({ length: 5 }, (_, i) => ({
  id: i + 28, thumbnail: `${BASE}/CARTOONS-5/i${i + 1}.jpg`, videoUrl: `${BASE}/CARTOONS-5/v${i + 1}.mp4`,
  title: ['La Chute','La Loi De La Jungle','Miss À Tous Les Prix','Such Is Taken','Les Espionnes De La Silicon Valley'][i],
}));

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

const Slider = ({ videos, slide, onPrev, onNext, onSetSlide, onSelect, accent = ACCENT }) => (
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
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, boxShadow: `0 8px 32px ${accent}66` }}
                  whileHover={{ scale: 1.1 }}>
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
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
          style={{ width: slide === idx ? '24px' : '6px', background: slide === idx ? accent : 'rgba(255,255,255,0.2)' }} />
      ))}
    </div>
  </div>
);

const SectionHeader = ({ title, accent = ACCENT }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-1 h-8 rounded-full" style={{ background: `linear-gradient(180deg, ${accent}, ${accent}66)` }} />
    <AnimatedTitle title={title} className="font-zentry text-3xl md:text-4xl font-black uppercase text-white" />
  </div>
);

const ShowSection = ({ title, videos, slide, setSlide, onSelect, bgImg, accent = ACCENT, dark = false }) => {
  const next = () => setSlide(p => (p + 1) % videos.length);
  const prev = () => setSlide(p => (p - 1 + videos.length) % videos.length);
  return (
    <div className={`relative py-16 md:py-20 overflow-hidden ${dark ? '' : ''}`}>
      {bgImg && (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})`, filter: 'blur(3px)', transform: 'scale(1.05)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.93) 0%, rgba(10,10,15,0.78) 100%)' }} />
        </>
      )}
      {!bgImg && <div className="absolute inset-0" style={{ background: 'rgba(14,14,20,0.95)' }} />}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title={title} accent={accent} />
        <Slider videos={videos} slide={slide} onPrev={prev} onNext={next} onSetSlide={setSlide} onSelect={onSelect} accent={accent} />
      </div>
    </div>
  );
};

const GridSection = ({ title, videos, onSelect, accent = ACCENT }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
    <SectionHeader title={title} accent={accent} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {videos.map((video, i) => (
        <motion.div key={video.id}
          className="relative group cursor-pointer rounded-xl overflow-hidden"
          style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: (i % 8) * 0.05 }} viewport={{ once: true }}
          whileHover={{ y: -4, boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${accent}33` }}
          onClick={() => onSelect(video)}>
          <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, boxShadow: `0 8px 24px ${accent}55` }}>
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
);

const CartoonPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slides, setSlides] = useState({ tj: 0, dbz: 0, ha: 0, ig: 0, pk: 0, sm: 0, c11: 0, c5: 0 });
  const setSlide = (key) => (val) => setSlides(p => ({ ...p, [key]: typeof val === 'function' ? val(p[key]) : val }));

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Hero Banner */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${VAS}/thumnbnail/TOMANDJERRY/3.png)`, filter: 'blur(2px)' }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.65) 50%, rgba(10,10,15,0.85) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 30% 50%, ${ACCENT}18 0%, transparent 60%)`
        }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: ACCENT }}>
              Dessins Animés
            </span>
          </motion.div>
          <AnimatedTitle title="DESSIN ANIMÉ – Épisodes en Vedette"
            className="text-white font-zentry text-4xl md:text-6xl font-black uppercase mb-8" />
          <Slider videos={cartoons11.slice(0, 7)} slide={slides.c11}
            onPrev={() => setSlide('c11')(p => (p - 1 + 7) % 7)}
            onNext={() => setSlide('c11')(p => (p + 1) % 7)}
            onSetSlide={setSlide('c11')} onSelect={setSelectedVideo} />
        </div>
      </div>

      {/* Tom & Jerry */}
      <ShowSection title="Tom & Jerry" videos={tomAndJerry} slide={slides.tj} setSlide={setSlide('tj')}
        onSelect={setSelectedVideo} bgImg={`${VAS}/thumnbnail/TOMANDJERRY/3.png`} />

      {/* Dragon Ball Z */}
      <ShowSection title="Dragon Ball Z" videos={dragonBallZ} slide={slides.dbz} setSlide={setSlide('dbz')}
        onSelect={setSelectedVideo} accent="#ef4444" />

      {/* Hé Arnold */}
      <ShowSection title="Hé Arnold" videos={heyArnold} slide={slides.ha} setSlide={setSlide('ha')}
        onSelect={setSelectedVideo} bgImg={`${VAS}/thumnbnail/HEYARNOLD/3.png`} accent="#10b981" />

      {/* Inspector Gadget */}
      <ShowSection title="Inspector Gadget" videos={inspectorGadget} slide={slides.ig} setSlide={setSlide('ig')}
        onSelect={setSelectedVideo} accent="#f59e0b" />

      {/* Pokémon */}
      <ShowSection title="Pokémon Évolutions" videos={pokemon} slide={slides.pk} setSlide={setSlide('pk')}
        onSelect={setSelectedVideo} bgImg={`${VAS}/thumnbnail/POKEMON/3.png`} accent="#facc15" />

      {/* Smurfs */}
      <ShowSection title="Les Schtroumpfs" videos={smurfs} slide={slides.sm} setSlide={setSlide('sm')}
        onSelect={setSelectedVideo} accent="#3b82f6" />

      {/* Totally Spies Grid */}
      <GridSection title="Plus d'Épisodes Totally Spies" videos={cartoons11.slice(7)} onSelect={setSelectedVideo} />

      {/* Les Enquêtes de Mirette Grid */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE}/CARTOONS-16/i1.jpg)`, filter: 'blur(3px)', transform: 'scale(1.05)' }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,15,0.88)' }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
          <SectionHeader title="Les Enquêtes de Mirette" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cartoons16.map((video, i) => (
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
      </div>

      {/* Totally Spies S6 Extras */}
      <ShowSection title="Totally Spies – Saison 6 Extras" videos={cartoons5} slide={slides.c5}
        setSlide={setSlide('c5')} onSelect={setSelectedVideo} accent="#a855f7" />

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default CartoonPage;
