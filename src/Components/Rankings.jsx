import { motion } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const Rankings = ({ rankings }) => {
  return (
    <section className="py-8 w-full max-w-7xl mx-auto relative">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #a855f7, #7c3aed66)' }} />
          <AnimatedTitle title="CLASSEMENT DES CATÉGORIES"
            className="font-zentry text-3xl md:text-4xl font-bold uppercase text-white" />
        </div>

        <div className="rounded-2xl overflow-hidden" style={{
          background: 'rgba(22,22,31,0.8)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
            {['RANG', 'CATÉGORIE', 'VIDÉOS', 'NOTE'].map(h => (
              <div key={h} className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.3)' }}>{h}</div>
            ))}
          </div>

          {rankings.map((item, index) => (
            <motion.div
              key={item.rank}
              className="grid grid-cols-4 gap-4 px-6 py-4 group transition-colors duration-200"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ background: 'rgba(124,58,237,0.05)' }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold`}
                  style={item.rank <= 3
                    ? { background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', boxShadow: '0 4px 12px rgba(124,58,237,0.4)' }
                    : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }
                  }>
                  {item.rank <= 3 ? <Trophy className="w-3.5 h-3.5" /> : item.rank}
                </div>
                {item.rank <= 3 && (
                  <span className="text-sm font-bold" style={{ color: '#a855f7' }}>#{item.rank}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">{item.fighter}</span>
                {index < 3 && <TrendingUp className="w-3.5 h-3.5" style={{ color: '#10b981' }} />}
              </div>

              <div className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {item.record}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-bold" style={{ color: '#a855f7' }}>{item.koPercentage}%</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    className="h-1.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.koPercentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Rankings;
