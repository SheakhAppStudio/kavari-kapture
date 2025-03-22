'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import WebsitePreviewImage from './WebsitePreviewImage';

interface Feature {
  text: string;
}

interface AnimatedWebsiteHighlightProps {
  title: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
}

export default function AnimatedWebsiteHighlight({
  title,
  description,
  features,
  ctaText,
  ctaLink
}: AnimatedWebsiteHighlightProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-8 border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-10 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-x-5 translate-y-10"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaGlobe className="text-3xl text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{title}</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {description}
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  >
                    <span className="bg-gold/20 p-1.5 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={ctaLink} 
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md"
                >
                  {ctaText}
                </Link>
              </motion.div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-lg transform rotate-3"></div>
              <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg transform -rotate-2">
                <WebsitePreviewImage />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 