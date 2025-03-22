'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
}

interface AnimatedPricingSectionProps {
  title: string;
  description: string;
  tiers: PricingTier[];
}

export default function AnimatedPricingSection({
  title,
  description,
  tiers
}: AnimatedPricingSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-primary-dark text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">{title}</h2>
          <p className="mt-4 text-gray-200 max-w-3xl mx-auto">{description}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              className={`flex flex-col p-6 rounded-xl shadow-lg ${
                tier.highlighted ? 'border-2 border-gold ring-4 ring-gold/20 bg-primary-dark' : 'border border-white/20 bg-primary/80'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="mb-5">
                <h3 className="text-xl font-bold text-gold">{tier.name}</h3>
                <div className="mt-3">
                  <p className="text-gray-200">{tier.description}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-sm text-gray-200">Contact us for custom pricing</p>
                </div>
              </div>
              
              <ul className="mb-6 space-y-2 flex-1">
                {tier.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) + (idx * 0.05) }}
                  >
                    <svg
                      className="w-5 h-5 text-gold mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-auto"
              >
                <Link 
                  href={tier.ctaLink} 
                  className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-md font-medium ${
                    tier.highlighted 
                      ? 'bg-gold hover:bg-gold-dark text-primary' 
                      : 'bg-white hover:bg-gray-100 text-primary'
                  }`}
                >
                  {tier.ctaText}
                  <svg 
                    className="ml-2 -mr-1 w-5 h-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 