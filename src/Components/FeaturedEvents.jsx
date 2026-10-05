import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Zap, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from './TiltCard'
import AnimatedTitle from './AnimatedTitle'
import useHorizontalWheel from '../hooks/useHorizontalWheel'
import wrestlingVideo from '../assets/stock-footage-wrestling-match-slow-motion-suplex-in-ring.webm'

gsap.registerPlugin(ScrollTrigger)

const FeaturedEvents = ({ events }) => {
  const scrollRef = useRef(null)
  const [hoveredEvent, setHoveredEvent] = useState(null)
  useHorizontalWheel(scrollRef)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 400
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="py-8 relative w-full max-w-7xl mx-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white pointer-events-none" />
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatedTitle
          title="FEATURED EVENTS"
          className="font-zentry text-3xl md:text-4xl font-bold text-black mb-8"
        />
        <div className="flex justify-end items-center mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="row-scroller flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden snap-x scrollbar-hide pt-3 pb-8 -mt-3 -mb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event, index) => (
            <TiltCard key={event.id}>
            <motion.div
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg snap-center hover:shadow-2xl transition-shadow duration-300 relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Video Background */}
              <div className="absolute inset-0 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src={wrestlingVideo} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-zentry text-xl font-bold text-white mb-2 uppercase">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-blue-50 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  {event.status === 'LIVE' && (
                    <div className="bg-violet-300 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                      <Zap className="w-3 h-3" />
                      LIVE
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <motion.img
                        src={event.fighter1.image}
                        alt={event.fighter1.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                        animate={hoveredEvent === event.id ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <p className="text-white text-sm font-semibold mt-2">{event.fighter1.name}</p>
                      <p className="text-blue-50 text-xs">{event.fighter1.country}</p>
                    </div>
                    
                    <div className="text-white font-bold text-2xl">VS</div>
                    
                    <div className="text-center">
                      <motion.img
                        src={event.fighter2.image}
                        alt={event.fighter2.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                        animate={hoveredEvent === event.id ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <p className="text-white text-sm font-semibold mt-2">{event.fighter2.name}</p>
                      <p className="text-blue-50 text-xs">{event.fighter2.country}</p>
                    </div>
                  </div>
                  
                  <motion.button
                    className="bg-violet-300 hover:bg-violet-300/80 text-white px-6 py-3 rounded-lg font-general uppercase font-bold transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4 fill-white" />
                    {event.status === 'LIVE' ? 'Watch' : 'Tickets'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedEvents