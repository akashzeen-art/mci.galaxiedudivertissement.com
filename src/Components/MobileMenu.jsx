import { X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, libraryItems } from "../data/sidebarData";

const MobileMenu = ({ isOpen, onClose, activePage, setActivePage }) => {
  const handleNavigation = (label) => {
    setActivePage(label);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-72 max-w-[85vw] h-screen z-50 flex flex-col"
            style={{
              background: 'linear-gradient(180deg, rgba(16,16,24,0.98) 0%, rgba(10,10,15,0.98) 100%)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <img src="/55(2).png" alt="GALAXIE" className="h-9 w-auto object-contain" />
              <motion.button
                onClick={onClose}
                className="p-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest px-3 mb-3"
                style={{ color: 'rgba(255,255,255,0.25)' }}>
                Navigation
              </p>

              {menuItems.map((item, index) => {
                const active = activePage === item.label;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleNavigation(item.label)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left relative"
                    style={
                      active
                        ? {
                            background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))',
                            border: '1px solid rgba(124,58,237,0.35)',
                            color: '#c084fc',
                          }
                        : {
                            border: '1px solid transparent',
                            color: 'rgba(255,255,255,0.5)',
                          }
                    }
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                    whileHover={{ scale: 1.01, background: active ? undefined : 'rgba(255,255,255,0.04)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                        style={{ background: 'linear-gradient(180deg, #a855f7, #7c3aed)' }} />
                    )}
                    <item.icon className={`w-5 h-5 shrink-0 ${active ? 'text-purple-400' : ''}`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom gradient */}
            <div className="h-12 shrink-0"
              style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.8), transparent)' }} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
