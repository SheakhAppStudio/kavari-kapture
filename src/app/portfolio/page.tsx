'use client';

import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import PortfolioItem from '@/components/portfolio/PortfolioItem';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';
import InstagramFeed from '@/components/portfolio/InstagramFeed';
import usePortfolioData from '@/hooks/usePortfolioData';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const { 
    items, 
    categories, 
    activeCategory, 
    setActiveCategory, 
    filteredItems,
    featuredItems 
  } = usePortfolioData();
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <PortfolioHero />
      
      {/* Featured Projects Section */}
      {featuredItems.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore some of our most impactful work that demonstrates our creativity and expertise
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <PortfolioItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Portfolio Filter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          {/* Grid Layout */}
          {filteredItems.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item, index) => (
                <PortfolioItem key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl text-gray-600">No projects found in this category</h3>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <PortfolioCTA />
      
      {/* Instagram Feed Preview */}
      <InstagramFeed />
    </div>
  );
};

export default PortfolioPage; 