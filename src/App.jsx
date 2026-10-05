import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './Components/Preloader.jsx';
import MobileMenu from './Components/MobileMenu.jsx';
import Header from './Components/Header.jsx';
import EnhancedHeroSection from './Components/EnhancedHeroSection.jsx';
import EnhancedFeatures from './Components/EnhancedFeatures.jsx';
import VideoSliderSection from './Components/VideoSliderSection.jsx';
import HomeCategorySections from './Components/home/HomeCategorySections.jsx';
import HeroSection from './Components/HeroSection.jsx';
import FeaturedEvents from './Components/FeaturedEvents.jsx';
import VideoSection from './Components/VideoSection.jsx';
import TopFighters from './Components/TopFighters.jsx';
import Rankings from './Components/Rankings.jsx';
import CommunitySection from './Components/CommunitySection.jsx';
import Footer from './Components/Footer.jsx';
import CartoonPage from './Components/ArmWrestlingPage.jsx';
import ComedyPage from './Components/SlapFightPage.jsx';
import CookingPage from './Components/MMAFightPage.jsx';
import FashionPage from './Components/TaekwondoPage.jsx';
import { heroData, featuredEvents, slapVideos, topFighters, rankings } from './data/allData';

const App = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Accueil');

  const renderPageContent = () => {
    switch (activePage) {
      case 'Accueil':
        return (
          <>
            <EnhancedHeroSection isReady={preloaderDone} onSelectCategory={setActivePage} />
            <EnhancedFeatures onSelectCategory={setActivePage} />
            <VideoSliderSection />
            <HomeCategorySections onSelectCategory={setActivePage} />
          </>
        );
      case 'Dessin Animé':
        return <CartoonPage />;
      case 'Comédie':
        return <ComedyPage />;
      case 'Cuisine':
        return <CookingPage />;
      case 'Mode':
        return <FashionPage />;
      default:
        return (
          <>
            <HeroSection heroData={heroData} />
            <div className="px-4 md:px-8 pb-8 space-y-12 md:space-y-16" style={{ background: 'var(--bg-primary)' }}>
              <FeaturedEvents events={featuredEvents} />
              <VideoSection videos={slapVideos} />
              <TopFighters fighters={topFighters} />
              <Rankings rankings={rankings} />
              <CommunitySection />
            </div>
          </>
        );
    }
  };

  return (
    <>
      {/* Preloader — only on first visit */}
      <AnimatePresence>
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}
      </AnimatePresence>

      {/* Main App — mounted under the preloader so media starts loading early */}
      <div
        className="min-h-screen w-full overflow-x-hidden"
        style={{ background: 'var(--bg-primary)' }}
      >
        {/* Header with nav */}
        <Header
          activePage={activePage}
          setActivePage={setActivePage}
          onMobileMenuClick={() => setIsMobileMenuOpen(p => !p)}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        {/* Page content */}
        <motion.main
          key={activePage}
          className="pt-28 md:pt-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          {renderPageContent()}
        </motion.main>

        <Footer />
      </div>
    </>
  );
};

export default App;
