'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

interface TikTokTier {
  name: string;
  videosCount: number;
  features: string[];
  isPopular?: boolean;
}

interface AnimatedTikTokSectionProps {
  title: string;
  subtitle: string;
  description: string;
  tiers: TikTokTier[];
  ctaText: string;
  ctaLink: string;
}

export default function AnimatedTikTokSection({
  title,
  subtitle,
  description,
  tiers,
  ctaText,
  ctaLink
}: AnimatedTikTokSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white opacity-5"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <FaTiktok className="text-6xl inline-block mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title} <span className="text-gold">{subtitle}</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-200 mb-10 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-sm rounded-xl p-8 text-center ${
                tier.isPopular 
                  ? 'border-2 border-gold transform scale-105 relative bg-primary-dark' 
                  : 'border border-white/20 bg-primary/80'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-gold text-primary font-bold py-1 px-3 text-xs uppercase rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}
              <h3 className="font-bold text-xl mb-4 text-gold">{tier.name}</h3>
              <div className="text-gold text-5xl font-bold mb-2">{tier.videosCount}</div>
              <p className="mb-6 text-lg">TikTok videos monthly</p>
              <div className="border-t border-white/20 pt-6 mt-4">
                <ul className="space-y-3 text-left">
                  {tier.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) + (idx * 0.05) }}
                    >
                      <span className="bg-gold/20 p-1 rounded-full mr-3">
                        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={ctaLink}
              className="inline-block bg-gold hover:bg-gold-dark text-primary font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 