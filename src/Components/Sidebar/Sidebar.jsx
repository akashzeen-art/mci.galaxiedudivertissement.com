import { useEffect, useState } from "react";
import { ListCollapse } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, libraryItems } from "../../data/sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ isMinimized, onToggle, isMobile, setTooltip, activePage, setActivePage }) => {
  const showTooltip = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ visible: true, label, top: rect.top + rect.height / 2 });
  };

  const hideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <motion.div
      className={`${isMinimized && !isMobile ? 'w-20 px-3 py-5' : 'w-64 px-5 py-5'} 
        fixed left-0 top-0 h-screen z-50 flex flex-col overflow-y-auto overflow-x-hidden
        transition-all duration-300`}
      style={{
        background: 'linear-gradient(180deg, rgba(13,13,20,0.98) 0%, rgba(10,10,15,0.98) 100%)',
        backdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '4px 0 24px rgba(0,0,0,0.4)',
      }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Logo */}
      <div className={`flex items-center ${isMinimized && !isMobile ? 'justify-center' : 'justify-between'} mb-8 shrink-0`}>
        {isMinimized && !isMobile ? (
          <motion.img
            src="/Galaxie Videos Logo.png"
            alt="Galaxie Videos"
            className="h-10 w-auto object-contain cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            onClick={onToggle}
            whileHover={{ scale: 1.05 }}
          />
        ) : (
          <>
            <img src="/Galaxie Videos Logo.png" alt="Galaxie Videos" className="h-14 w-auto object-contain" />
            <motion.button
              onClick={onToggle}
              className="p-2 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              whileHover={{ scale: 1.1, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >
              <ListCollapse className="w-5 h-5 rotate-180" />
            </motion.button>
          </>
        )}
      </div>

      {/* Nav label */}
      {!isMinimized && (
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-3"
          style={{ color: 'rgba(255,255,255,0.25)' }}>
          Menu
        </p>
      )}

      <nav className="overflow-y-auto overflow-x-hidden flex-1 space-y-1">
        {menuItems.map(item => (
          <SidebarItem
            key={item.label}
            {...item}
            active={activePage === item.label}
            isMinimized={isMinimized}
            isMobile={isMobile}
            onHover={(e) => showTooltip(e, item.label)}
            onLeave={hideTooltip}
            onClick={() => setActivePage(item.label)}
          />
        ))}

        {libraryItems.length > 0 && (
          <>
            <div className="my-4 mx-2" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            {!isMinimized && (
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-3"
                style={{ color: 'rgba(255,255,255,0.25)' }}>
                Library
              </p>
            )}
            {libraryItems.map(item => (
              <SidebarItem
                key={item.label}
                {...item}
                isMinimized={isMinimized}
                isMobile={isMobile}
                onHover={(e) => showTooltip(e, item.label)}
                onLeave={hideTooltip}
              />
            ))}
          </>
        )}
      </nav>

      {/* Bottom toggle */}
      {isMinimized && !isMobile && (
        <motion.button
          onClick={onToggle}
          className="mt-4 w-full flex items-center justify-center py-3 rounded-lg transition-colors cursor-pointer"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          whileHover={{ scale: 1.05 }}
        >
          <ListCollapse className="w-5 h-5" />
        </motion.button>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.8), transparent)' }} />
    </motion.div>
  );
};

export default Sidebar;
