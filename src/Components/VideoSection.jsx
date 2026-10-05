import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import TiltCard from './TiltCard'
import AnimatedTitle from './AnimatedTitle'
import HorizontalScroller from './home/HorizontalScroller'

const VideoSection = ({ videos }) => {
  const [activeCategory, setActiveCategory] = useState('highlights')
  const [hoveredVideo, setHoveredVideo] = useState(null)
  
  const categories = [
    { id: 'highlights', name: 'Highlights' },
    { id: 'knockouts', name: 'Knockouts' },
    { id: 'matches', name: 'Full Matches' },
    { id: 'interviews', name: 'Interviews' }
  ]
  
  const filteredVideos = videos.filter(video => video.category === activeCategory)

  return (
    <section className="py-8 w-full max-w-7xl mx-auto relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white pointer-events-none" />
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatedTitle
          title="COMBAT VIDEOS"
          className="font-zentry text-3xl md:text-4xl font-bold text-black mb-8 text-center uppercase"
        />
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-white/80 backdrop-blur-xl rounded-xl p-2 border border-gray-200/50 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-general uppercase font-bold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-violet-300 text-white'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <HorizontalScroller>
          {filteredVideos.map((video, index) => (
            <TiltCard key={video.id}>
            <motion.div
              className="min-w-[280px] bg-white/80 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-200/50 shadow-lg snap-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  animate={{
                    opacity: hoveredVideo === video.id ? 1 : 0,
                    scale: hoveredVideo === video.id ? 1.1 : 1
                  }}
                >
                  <div className="bg-black rounded-full p-4">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-4">
                <h3 className="text-black font-semibold text-lg mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Eye className="w-4 h-4" />
                  {video.views} views
                </div>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </HorizontalScroller>
      </motion.div>
    </section>
  )
}

export default VideoSection