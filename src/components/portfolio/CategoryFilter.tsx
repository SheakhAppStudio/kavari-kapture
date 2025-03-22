'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-4">Browse Our Work</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Filter through our projects to see examples of our work across different categories
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {category}
            {activeCategory === category && (
              <motion.span
                layoutId="categoryIndicator"
                className="absolute inset-0 rounded-full bg-primary -z-10"
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryFilter; 