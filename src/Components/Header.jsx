import { Search, Bell, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { menuItems } from '../data/sidebarData';

const Header = ({ activePage, setActivePage, onMobileMenuClick, isMobileMenuOpen }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(8,8,15,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center gap-4">

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={() => setActivePage('Accueil')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img src="/Galaxie Videos Logo.png" alt="Galaxie Videos" className="h-12 md:h-16 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 12px rgba(124,58,237,0.4))' }} />
        </motion.div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-5 shrink-0"
          style={{ background: 'rgba(255,255,255,0.1)' }} />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 flex-1">
          {menuItems.map((item) => {
            const active = activePage === item.label;
            return (
              <motion.button
                key={item.label}
                onClick={() => setActivePage(item.label)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
                style={{
                  color: active ? '#c084fc' : 'rgba(255,255,255,0.5)',
                  background: active ? 'rgba(124,58,237,0.12)' : 'transparent',
                }}
                whileHover={{ color: '#fff', background: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.96 }}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
                {/* Active underline */}
                {active && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }}
                    layoutId="navUnderline"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 ml-auto">

          {/* Desktop Search */}
          <AnimatePresence>
            {searchOpen ? (
              <motion.div
                className="hidden md:flex items-center"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 280, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: searchFocused ? '#a855f7' : 'rgba(255,255,255,0.3)' }} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Rechercher..."
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => { setSearchFocused(false); setSearchOpen(false); }}
                    className="w-full pl-9 pr-4 py-2 text-sm rounded-xl outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(124,58,237,0.4)',
                      color: 'rgba(255,255,255,0.85)',
                      boxShadow: '0 0 16px rgba(124,58,237,0.1)',
                    }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.button
                className="hidden md:flex p-2.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
                onClick={() => setSearchOpen(true)}
                whileHover={{ scale: 1.05, color: '#fff', background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Bell */}
          <motion.button
            className="relative p-2.5 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
            whileHover={{ scale: 1.05, color: '#fff', background: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
              style={{ background: '#a855f7', boxShadow: '0 0 6px rgba(168,85,247,0.9)' }} />
          </motion.button>

          {/* Avatar */}
          <motion.div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white cursor-pointer shrink-0"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 4px 14px rgba(124,58,237,0.45)',
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            G
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={onMobileMenuClick}
            className="lg:hidden p-2.5 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-5 h-5" /></motion.div>
                : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.div>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl outline-none"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.8)',
            }}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
