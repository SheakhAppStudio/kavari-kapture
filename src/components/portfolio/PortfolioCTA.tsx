'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import VideoBackground from '@/components/VideoBackground';

const PortfolioCTA = () => {
  return (
    <VideoBackground 
      videoSrc="/videos/tiktok-background.mp4" 
      overlayOpacity={0.7}
      loopDuration={30}
    >
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Let&apos;s Create Something Exceptional Together
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-lg mb-10 drop-shadow"
          >
            Our expertise in social media management and content creation will help your brand stand out in today&apos;s digital landscape. Ready to see your presence thrive?
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-colors border border-white/30"
            >
              Explore Services
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-white/80 text-sm mx-4">SEE MORE OF OUR WORK</p>
              <div className="h-px w-12 bg-white/30"></div>
            </div>
            <div className="mt-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white/80 animate-bounce mx-auto"
              >
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default PortfolioCTA; 