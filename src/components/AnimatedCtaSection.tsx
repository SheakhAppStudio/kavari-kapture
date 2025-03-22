'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedCtaSectionProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function AnimatedCtaSection({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink
}: AnimatedCtaSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl overflow-hidden shadow-xl relative p-12 text-center"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full -translate-x-20 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold opacity-10 rounded-full translate-x-20 translate-y-32"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-6">
              <h3 className="text-gold text-sm font-medium tracking-wider uppercase">{subtitle}</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{title}</h2>
            <p className="text-gray-200 mb-10 text-lg">
              {description}
            </p>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={buttonLink} 
                className="inline-block bg-gold hover:bg-gold-dark text-primary font-bold py-4 px-10 rounded-lg transition-colors shadow-lg"
              >
                {buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 