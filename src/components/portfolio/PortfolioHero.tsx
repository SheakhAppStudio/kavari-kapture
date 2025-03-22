'use client';

import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '@/components/VideoBackground';

const PortfolioHero: React.FC = () => {
  return (
    <VideoBackground
      videoSrc="/videos/background.mp4"
      className="py-20 md:py-28"
      overlayOpacity={0.6}
      loopDuration={30}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-4 py-1 bg-gold text-primary text-sm font-medium rounded-full mb-6"
          >
            OUR WORK SPEAKS FOR ITSELF
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md"
          >
            Our <span className="text-gold">Portfolio</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md"
          >
            Discover our collection of creative work across social media management, content creation, and brand development for clients throughout the United Kingdom.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center text-white"
          >
            <span className="mr-2">Scroll to explore</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </VideoBackground>
  );
};

export default PortfolioHero; 