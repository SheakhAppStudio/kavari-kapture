'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaComments, FaRocket } from 'react-icons/fa';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] border-[40px] border-primary/10 rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] border-[30px] border-gold/10 rounded-full"
        />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] bg-repeat"></div>
          </div>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-20 -left-20 w-48 h-48 bg-gold rounded-full"
          />
          
          <div className="relative z-10 px-8 py-16 md:p-16 lg:p-20 text-center md:text-left md:flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-2/3 mb-12 md:mb-0 md:pr-12"
            >
              <div className="inline-block px-6 py-2 bg-white/10 rounded-full mb-6">
                <span className="text-gold font-medium flex items-center">
                  <FaRocket className="mr-2" /> Start Your Digital Journey
                </span>
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Ready to <span className="text-gold">Transform</span> Your Business Online?
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "120px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-1 bg-gold mb-6 hidden md:block"
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                Let's discuss how we can boost your business with our specialized social media marketing services. Book a free consultation today!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-3 md:hidden"
              >
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                  <FaComments className="text-gold text-xl" />
                </div>
                <div className="text-white text-sm">
                  <div>No obligation</div>
                  <div className="font-bold">Free consultation</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mb-8"
              >
                <Link 
                  href="/contact" 
                  className="inline-block bg-gold hover:bg-gold-dark text-primary font-bold py-5 px-10 rounded-xl transition-all shadow-xl hover:shadow-gold/20 hover:shadow-2xl group"
                >
                  <span className="flex items-center text-lg">
                    Get Started Today
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaArrowRight className="ml-3" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-3 hidden md:flex"
              >
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                  <FaComments className="text-gold text-xl" />
                </div>
                <div className="text-white text-sm">
                  <div>No obligation</div>
                  <div className="font-bold">Free consultation</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 