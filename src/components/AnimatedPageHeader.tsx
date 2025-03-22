'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageHeaderProps {
  title: string;
  description: string;
  highlightedText?: string;
  secondaryText?: string;
}

const AnimatedPageHeader: React.FC<AnimatedPageHeaderProps> = ({
  title,
  description,
  highlightedText,
  secondaryText
}) => {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <span className="inline-block px-4 py-1 bg-gold/90 text-primary text-sm font-medium rounded-full mb-6">
          EXPERT SOCIAL MEDIA SOLUTIONS
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-md">
          <span className="text-white">Our </span>
          <span className="text-gold">Services</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-white mb-10 leading-relaxed drop-shadow-md font-medium">
          {description}
        </p>
        
        {highlightedText && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-primary-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-4 max-w-3xl mx-auto"
          >
            <p className="text-gold font-medium text-lg">
              {highlightedText}
            </p>
            {secondaryText && (
              <p className="text-white/90 text-base mt-2">
                {secondaryText}
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedPageHeader; 