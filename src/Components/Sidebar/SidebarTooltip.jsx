const SidebarTooltip = ({ visible, label, top }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed z-[200] pointer-events-none whitespace-nowrap"
      style={{
        left: '88px',
        top,
        transform: 'translateY(-50%)',
      }}
    >
      <div
        className="px-3 py-2 text-sm font-medium rounded-lg"
        style={{
          background: 'rgba(22,22,31,0.95)',
          border: '1px solid rgba(124,58,237,0.3)',
          color: '#c084fc',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(124,58,237,0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {label}
        {/* Arrow */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-2 h-2 rotate-45"
          style={{
            background: 'rgba(22,22,31,0.95)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRight: 'none',
            borderTop: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default SidebarTooltip;
