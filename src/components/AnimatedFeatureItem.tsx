'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedFeatureItemProps {
  idx: number;
  feature: string;
}

const AnimatedFeatureItem: React.FC<AnimatedFeatureItemProps> = ({ idx, feature }) => {
  return (
    <motion.li 
      className="flex items-start"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="bg-gold/20 p-1.5 rounded-full mr-3 flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      </span>
      <span className="text-gray-800 font-medium">{feature}</span>
    </motion.li>
  );
};

export default AnimatedFeatureItem; 