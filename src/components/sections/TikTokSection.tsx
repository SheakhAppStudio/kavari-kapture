'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';

const TikTokSection: React.FC = () => {
  return (
    <VideoBackground 
      videoSrc="/videos/tiktok-background.mp4" 
      className="py-16"
      overlayOpacity={0.5}
      loopDuration={30}
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl flex justify-center mb-4"
          >
            <FaTiktok />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-md text-white mb-4 drop-shadow-lg"
          >
            TIKTOK <span className="text-gold">PACK</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold drop-shadow-lg">WHY TIKTOK?</h3>
            <p className="paragraph text-gray-200 mb-6 drop-shadow-md">
              TikTok is the perfect place for businesses to invest in. Audiences across the globe, no matter how niche or unique they may be. With an amazing diversity and forever growing audience, TikTok has become the number 1 place to gain brand awareness & the due to the algorithm TikTok uses, your business is 98% more likely to come up on users screens local to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold drop-shadow-lg">WHAT WE OFFER</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-full aspect-square flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white font-bold drop-shadow-md">4 TikTok videos monthly</p>
                <p className="text-sm text-gold mt-2">Content Planning</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-full aspect-square flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white font-bold drop-shadow-md">6 TikTok videos monthly</p>
                <p className="text-sm text-gold mt-2">Content Planning</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-full aspect-square flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white font-bold drop-shadow-md">8 TikTok videos monthly</p>
                <p className="text-sm text-gold mt-2">Content Planning</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-200 drop-shadow-md">
                TikTok pack:<br />
                4/6/8 Vids in 4K
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="inline-block bg-gold hover:bg-gold-dark text-primary font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
          >
            Get TikTok Package
          </Link>
        </div>
      </div>
    </VideoBackground>
  );
};

export default TikTokSection; 