'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VideoBackground from '@/components/VideoBackground';

const HeroSection: React.FC = () => {
  return (
    <VideoBackground 
      videoSrc="/videos/headervideo.mp4" 
      className="py-16 md:py-24"
      overlayOpacity={0.6}
      loopDuration={30}
    >
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-1 bg-primary-dark/80 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="text-gold text-sm font-medium">Social Media Management & Content Creation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg"
            >
              <span className="text-gold">WHERE CREATIVITY</span> <br className="hidden md:block" />
              MEETS <span className="text-gold">RESULTS</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-gray-200 mb-8 max-w-xl drop-shadow-md"
            >
              KAVARI Kapture is a digital marketing agency that was born from the vision that every business has its own unique story to tell which, if done effectively, can be the key driver for business growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services" className="bg-gold hover:bg-gold-dark text-primary font-medium py-3 px-8 rounded-full transition-colors shadow-lg inline-flex items-center justify-center">
                <span>Explore Our Services</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center">
                Get in Touch
              </Link>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 text-sm text-gray-200 backdrop-blur-sm bg-primary-dark/30 p-4 rounded-lg inline-block drop-shadow-md"
            >
              <p>A SOCIAL MEDIA MANAGEMENT & CONTENT CREATION COMPANY</p>
              <p className="mt-2">KAVARIKAPTURE@GMAIL.COM | 07456959750 - 07961201249</p>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gold/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotateZ: [0, -2, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gold/10 rounded-full rotate-45 transform scale-[0.8]"></div>
                  <div className="absolute inset-0 bg-primary-dark/20 rounded-full -rotate-45 transform scale-[0.9]"></div>
                  <div className="relative z-10">
                    <Image
                      src="/images/kavari-kapture-logo.png"
                      alt="KAVARI Kapture Logo"
                      width={450}
                      height={450}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </VideoBackground>
  );
};

export default HeroSection; 