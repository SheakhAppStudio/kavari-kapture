'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedServiceCardProps {
  id: string;
  index: number;
  children: ReactNode;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({ id, index, children }) => {
  return (
    <motion.div 
      id={id}
      className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderColor: "rgba(95, 29, 166, 0.2)"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedServiceCard; 