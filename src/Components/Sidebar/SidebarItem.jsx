import { motion } from 'framer-motion';

const SidebarItem = ({ icon: Icon, label, active, isMinimized, isMobile, onHover, onLeave, onClick }) => {
  return (
    <motion.button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`w-full flex items-center cursor-pointer ${isMinimized && !isMobile ? 'justify-center px-2' : 'gap-3 px-3'} py-3 rounded-xl transition-all duration-200 relative group`}
      style={
        active
          ? {
              background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.12))',
              border: '1px solid rgba(124,58,237,0.35)',
              boxShadow: '0 0 20px rgba(124,58,237,0.12), inset 0 0 20px rgba(124,58,237,0.04)',
              color: '#c084fc',
            }
          : {
              border: '1px solid transparent',
              color: 'rgba(255,255,255,0.45)',
            }
      }
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Active left bar */}
      {active && (
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full"
          style={{ background: 'linear-gradient(180deg, #a855f7, #7c3aed)' }}
          layoutId="activeBar"
        />
      )}

      <Icon
        className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
          active ? 'text-purple-400' : 'group-hover:text-white'
        }`}
      />

      {(!isMinimized || isMobile) && (
        <span
          className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            active ? 'text-purple-300' : 'group-hover:text-white'
          }`}
        >
          {label}
        </span>
      )}

      {/* Hover bg */}
      {!active && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(255,255,255,0.04)' }} />
      )}
    </motion.button>
  );
};

export default SidebarItem;
