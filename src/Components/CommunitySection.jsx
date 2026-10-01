import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, MessageCircle } from 'lucide-react';

const CommunitySection = () => {
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [reactions, setReactions] = useState({ fire: 1247, punch: 892, crown: 634 });

  const polls = [
    { name: 'CARTOON', percentage: 45, votes: 2847 },
    { name: 'COMEDY', percentage: 35, votes: 2213 },
    { name: 'COOKING', percentage: 20, votes: 1264 },
  ];

  return (
    <section className="py-8 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #a855f7, #7c3aed66)' }} />
          <h2 className="font-zentry text-3xl md:text-4xl font-bold uppercase text-white">
            ESPACE FANS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Poll */}
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4" style={{ color: '#a855f7' }} />
              <h3 className="font-semibold text-white">Sondage Communautaire</h3>
            </div>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Quelle est votre catégorie préférée ?
            </p>
            <div className="space-y-3">
              {polls.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => setSelectedPoll(item.name)}
                  className="w-full p-4 rounded-xl text-left transition-all duration-200"
                  style={selectedPoll === item.name
                    ? { background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }
                    : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }
                  }
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold" style={{ color: selectedPoll === item.name ? '#c084fc' : 'rgba(255,255,255,0.7)' }}>
                      {item.name}
                    </span>
                    <span className="text-xs font-bold" style={{ color: '#a855f7' }}>{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <motion.div className="h-1.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{item.votes.toLocaleString()} votes</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Reactions */}
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4" style={{ color: '#a855f7' }} />
              <h3 className="font-semibold text-white">Réactions en Direct</h3>
            </div>

            <div className="flex justify-around mb-6">
              {[
                { emoji: '🔥', label: 'Feu', key: 'fire' },
                { emoji: '👊', label: 'Punch', key: 'punch' },
                { emoji: '👑', label: 'Couronne', key: 'crown' },
              ].map(r => (
                <motion.button key={r.key}
                  onClick={() => setReactions(p => ({ ...p, [r.key]: p[r.key] + 1 }))}
                  className="flex flex-col items-center p-4 rounded-xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{ scale: 1.08, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}
                  whileTap={{ scale: 0.92 }}
                >
                  <span className="text-3xl mb-2">{r.emoji}</span>
                  <span className="text-xs font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.label}</span>
                  <span className="text-sm font-bold" style={{ color: '#a855f7' }}>{reactions[r.key].toLocaleString()}</span>
                </motion.button>
              ))}
            </div>

            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <h4 className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>Commentaires Récents</h4>
              </div>
              <div className="space-y-3">
                {[
                  { initial: 'A', color: '#7c3aed', user: 'Cartoon_Fan', text: "CARTOON c'est trop bien ! 🎉", time: 'il y a 2 min' },
                  { initial: 'M', color: '#ec4899', user: 'Comedy_King', text: 'COMEDY me fait toujours rire ! 😂', time: 'il y a 5 min' },
                ].map(c => (
                  <div key={c.user} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: c.color }}>
                      {c.initial}
                    </div>
                    <div>
                      <p className="text-sm text-white">
                        <span className="font-semibold">{c.user}</span>{' '}
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>{c.text}</span>
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{c.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
