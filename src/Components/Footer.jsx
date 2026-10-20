import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ background: 'rgba(8,8,12,0.95)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/Galaxie Videos Logo.png" alt="Galaxie Videos" className="h-14 md:h-16 w-auto object-contain" />
            <div className="h-6 w-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Plateforme de Streaming
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 Galaxie Videos. Tous droits réservés.
          </p>
        </motion.div>

        {/* Divider with gradient */}
        <div className="mt-8 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(236,72,153,0.2), transparent)'
        }} />

        <p className="text-center text-xs mt-6" style={{ color: 'rgba(255,255,255,0.15)' }}>
          Fait avec ❤️ pour le meilleur divertissement
        </p>
      </div>
    </footer>
  );
};

export default Footer;
