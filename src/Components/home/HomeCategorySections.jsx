import { useCallback, useState } from 'react';
import { Flame, Tv, Laugh, ChefHat, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import {
  topTen, cartoonShows, cartoonEpisodes, comedyPicks, cookingSpotlight, cookingMore, fashionPicks,
} from '../../data/homeSections';
import SectionHeader from './SectionHeader';
import VideoRow from './VideoRow';
import TopTenRow from './TopTenRow';
import ShowsRow from './ShowsRow';
import SpotlightGrid from './SpotlightGrid';
import VideoPlayerModal from './VideoPlayerModal';

const HomeSection = ({ accent, glowSide = 'left', children }) => (
  <section className="relative py-14 md:py-20 px-4 md:px-8 overflow-hidden">
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
    />
    <div
      className={`absolute -top-40 ${glowSide === 'left' ? '-left-40' : '-right-40'} w-[560px] h-[560px] rounded-full pointer-events-none`}
      style={{ background: `radial-gradient(circle, ${accent}1f 0%, transparent 65%)` }}
    />
    <div className="relative max-w-7xl mx-auto">{children}</div>
  </section>
);

const SubHeading = ({ accent, children }) => (
  <div className="flex items-center gap-3 mt-12 mb-5">
    <span className="w-1 h-6 rounded-full" style={{ background: `linear-gradient(180deg, ${accent}, ${accent}55)` }} />
    <h3 className="font-zentry text-xl md:text-2xl font-black uppercase text-white">{children}</h3>
  </div>
);

const HomeCategorySections = ({ onSelectCategory }) => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const closePlayer = useCallback(() => setPlayingVideo(null), []);
  const { cartoon, comedy, cooking, fashion } = CATEGORIES;

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <HomeSection accent="#ec4899" glowSide="right">
        <SectionHeader
          icon={Flame}
          eyebrow="Tendances"
          title="Top 10 de la semaine"
          subtitle="Les vidéos les plus regardées sur Galaxie Videos, toutes catégories confondues."
          accent="#ec4899"
          accentLight="#f472b6"
        />
        <TopTenRow videos={topTen} onPlay={setPlayingVideo} />
      </HomeSection>

      <HomeSection accent={cartoon.accent}>
        <SectionHeader
          icon={Tv}
          eyebrow={cartoon.label}
          title="Séries cultes"
          subtitle="Retrouvez les héros de votre enfance et les nouvelles aventures animées."
          accent={cartoon.accent}
          accentLight={cartoon.accentLight}
          onSeeAll={() => onSelectCategory?.(cartoon.page)}
        />
        <ShowsRow shows={cartoonShows} onPlay={setPlayingVideo} />
        <SubHeading accent={cartoon.accent}>Épisodes populaires</SubHeading>
        <VideoRow videos={cartoonEpisodes} onPlay={setPlayingVideo} />
      </HomeSection>

      <HomeSection accent={comedy.accent} glowSide="right">
        <SectionHeader
          icon={Laugh}
          eyebrow={comedy.label}
          title="Fous rires garantis"
          subtitle="Sketches, stand-up et parodies pour décompresser en quelques minutes."
          accent={comedy.accent}
          accentLight={comedy.accentLight}
          onSeeAll={() => onSelectCategory?.(comedy.page)}
        />
        <VideoRow videos={comedyPicks} onPlay={setPlayingVideo} />
      </HomeSection>

      <HomeSection accent={cooking.accent}>
        <SectionHeader
          icon={ChefHat}
          eyebrow={cooking.label}
          title="En cuisine"
          subtitle="Des recettes du monde entier, expliquées pas à pas pour les réussir chez vous."
          accent={cooking.accent}
          accentLight={cooking.accentLight}
          onSeeAll={() => onSelectCategory?.(cooking.page)}
        />
        <SpotlightGrid
          featured={cookingSpotlight.featured}
          items={cookingSpotlight.items}
          badge="Recette à la une"
          onPlay={setPlayingVideo}
        />
        <SubHeading accent={cooking.accent}>Plus de recettes</SubHeading>
        <VideoRow videos={cookingMore} onPlay={setPlayingVideo} />
      </HomeSection>

      <HomeSection accent={fashion.accent} glowSide="right">
        <SectionHeader
          icon={Sparkles}
          eyebrow={fashion.label}
          title="Beauté & tendances"
          subtitle="Maquillage, coiffure et routines pour sublimer votre style au quotidien."
          accent={fashion.accent}
          accentLight={fashion.accentLight}
          onSeeAll={() => onSelectCategory?.(fashion.page)}
        />
        <VideoRow videos={fashionPicks} onPlay={setPlayingVideo} />
      </HomeSection>

      <VideoPlayerModal video={playingVideo} onClose={closePlayer} />
    </div>
  );
};

export default HomeCategorySections;
