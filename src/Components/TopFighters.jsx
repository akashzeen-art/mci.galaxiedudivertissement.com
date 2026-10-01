import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import TiltCard from './TiltCard';
import AnimatedTitle from './AnimatedTitle';

const TopFighters = ({ fighters }) => {
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
          <AnimatedTitle title="MEILLEURES CATÉGORIES"
            className="font-zentry text-3xl md:text-4xl font-bold uppercase text-white" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {fighters.slice(0, 4).map((fighter, index) => (
            <TiltCard key={fighter.id}>
              <motion.div
                className="group relative rounded-2xl p-6 text-center overflow-hidden"
                style={{
                  background: 'rgba(22,22,31,0.8)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.25)',
                  border: '1px solid rgba(124,58,237,0.25)',
                }}
              >
                {/* Glow bg on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />

                {fighter.trending && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.35)', color: '#a855f7' }}>
                    <TrendingUp className="w-3 h-3" />
                    Tendance
                  </div>
                )}

                <div className="relative mb-4 inline-block">
                  <img src={fighter.image} alt={fighter.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
                    style={{ border: '2px solid rgba(124,58,237,0.3)' }} />
                  <div className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 20px rgba(124,58,237,0.2)' }} />
                </div>

                <h3 className="font-zentry text-xl font-black uppercase text-white mb-1">{fighter.name}</h3>
                <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{fighter.weightClass}</p>
                <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>{fighter.country}</p>

                <div className="space-y-3">
                  {[
                    { label: 'Popularité', value: fighter.powerRating, color: '#a855f7' },
                    { label: 'Note', value: fighter.koPercentage, color: '#f59e0b' },
                  ].map(bar => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{bar.label}</span>
                        <span className="font-bold" style={{ color: bar.color }}>{bar.value}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{ background: `linear-gradient(90deg, ${bar.color}99, ${bar.color})` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.value}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TopFighters;
