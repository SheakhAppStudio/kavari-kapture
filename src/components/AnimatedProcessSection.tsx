'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AnimatedProcessSectionProps {
  title: string;
  subtitle: string;
  description: string;
  steps: ProcessStep[];
  noteText?: string;
}

export default function AnimatedProcessSection({
  title,
  subtitle,
  description,
  steps,
  noteText
}: AnimatedProcessSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary/10 px-4 py-1 rounded-full mb-6">
            <h3 className="text-primary text-sm font-medium tracking-wider uppercase">{title}</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {subtitle} <span className="text-primary">{title}</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 text-center relative shadow-lg border border-gray-100"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="bg-primary/5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                  
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {noteText && (
            <div className="text-center mt-16">
              <div className="inline-block bg-gold/20 px-6 py-3 rounded-full">
                <p className="text-primary font-medium">{noteText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 