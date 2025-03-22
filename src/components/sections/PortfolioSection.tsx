'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaVideo, FaPalette, FaHashtag, FaArrowRight, FaPlus } from 'react-icons/fa';

// Define a constant for image dimensions to ensure consistency
const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 600;

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  client: string;
  description: string;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'photography':
      return <FaCamera />;
    case 'video':
      return <FaVideo />;
    case 'branding':
      return <FaPalette />;
    case 'social':
      return <FaHashtag />;
    default:
      return null;
  }
};

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Elegant Catering Rebrand",
      category: "branding",
      imageUrl: "/portfolio/portfolio-1.jpg",
      client: "Luxury Events Catering",
      description: "Complete social media rebrand including photography, strategy and content creation."
    },
    {
      id: 2,
      title: "Food Photography Series",
      category: "photography",
      imageUrl: "/portfolio/portfolio-2.jpg",
      client: "Gourmet Delights",
      description: "Premium food photography showcasing signature dishes for social media and website."
    },
    {
      id: 3,
      title: "Catering Promo Video",
      category: "video",
      imageUrl: "/portfolio/portfolio-3.jpg",
      client: "Wedding Feast Co.",
      description: "Promotional video highlighting wedding catering services for social media ads."
    },
    {
      id: 4,
      title: "Restaurant Social Campaign",
      category: "social",
      imageUrl: "/portfolio/portfolio-4.jpg",
      client: "Fine Dining Experience",
      description: "Multi-platform social media campaign increasing bookings by 45% in 3 months."
    },
    {
      id: 5,
      title: "Menu Photography",
      category: "photography",
      imageUrl: "/portfolio/portfolio-5.jpg",
      client: "Tasty Creations Catering",
      description: "Full menu photography shoot with styling and art direction."
    },
    {
      id: 6,
      title: "Chef Profile Series",
      category: "video",
      imageUrl: "/portfolio/portfolio-6.jpg",
      client: "Master Chef Catering",
      description: "Series of chef profile videos highlighting talent and specialties for Instagram."
    },
    {
      id: 7,
      title: "Cocktail Menu Showcase",
      category: "photography",
      imageUrl: "/portfolio/portfolio-7.jpg",
      client: "Urban Bar & Grill",
      description: "Creative cocktail photography highlighting specialty drinks for social media marketing."
    },
    {
      id: 8,
      title: "Indian Cuisine Branding",
      category: "branding",
      imageUrl: "/portfolio/portfolio-8.jpg",
      client: "Spice Fusion Restaurant",
      description: "Complete visual identity and social media content strategy for authentic Indian cuisine."
    },
    {
      id: 9,
      title: "Seafood Restaurant Campaign",
      category: "social",
      imageUrl: "/portfolio/portfolio-9.jpg",
      client: "Ocean Delights",
      description: "Social media campaign featuring premium seafood dishes increasing engagement by 60%."
    },
    {
      id: 10,
      title: "Catering Event Coverage",
      category: "video",
      imageUrl: "/portfolio/portfolio-10.jpg",
      client: "Celebrations Catering",
      description: "Live event coverage and promotional video for high-end corporate catering services."
    },
    {
      id: 11,
      title: "Traditional Cuisine Spotlight",
      category: "photography",
      imageUrl: "/portfolio/portfolio-11.jpg",
      client: "Heritage Kitchen",
      description: "Photo series showcasing traditional cooking techniques and signature dishes."
    },
    {
      id: 12,
      title: "Restaurant Rebrand",
      category: "branding",
      imageUrl: "/portfolio/portfolio-12.jpg",
      client: "Modern Taste",
      description: "Complete brand refresh including logo design, menu styling, and social media templates."
    },
    {
      id: 13,
      title: "Dessert Collection",
      category: "photography",
      imageUrl: "/portfolio/portfolio-13.jpg",
      client: "Sweet Creations Bakery",
      description: "Stunning dessert photography series showcasing artisanal pastries and cakes."
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const categories = ['all', 'photography', 'video', 'branding', 'social'];
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* DEBUG: Display image URLs */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-black text-white p-4 mb-8 text-xs">
          <h3 className="text-lg font-bold mb-2">Debug Image URLs:</h3>
          <ul>
            {portfolioItems.slice(0, 3).map((item, index) => (
              <li key={index}>
                {index}: {item.imageUrl} - <a href={item.imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Test link</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Decorative background elements */}
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-primary/5 rounded-full"></div>
      <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-primary/5 rounded-full"></div>
      <div className="absolute left-1/4 top-1/2 w-20 h-20 bg-gold/10 rounded-full"></div>
      <div className="absolute right-1/4 bottom-1/3 w-16 h-16 bg-primary/10 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4"
          >
            <span className="text-primary font-medium">Our Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            <span className="text-primary">Stunning</span> Results for Our Clients
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg max-w-3xl mx-auto text-gray-600"
          >
            Explore our portfolio of successful projects for businesses. Each project represents our dedication to quality and results-driven marketing.
          </motion.p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ y: 0 }}
              className={`px-6 py-3 rounded-full border-2 flex items-center ${
                activeFilter === category 
                  ? 'bg-primary text-white border-primary shadow-md shadow-primary/20' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary/20 hover:text-primary'
              } transition-all duration-300`}
              onClick={() => setActiveFilter(category)}
            >
              {category !== 'all' && (
                <span className="mr-2 text-sm">
                  {getCategoryIcon(category)}
                </span>
              )}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* First item with regular img tag for testing */}
              {filteredItems.slice(0, 1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={IMAGE_WIDTH}
                      height={IMAGE_HEIGHT}
                      quality={85}
                      priority={true}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={hoveredItem === item.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm mb-4">{item.client}</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            {getCategoryIcon(item.category)}
                          </div>
                          <span className="text-white/90 text-sm">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlus />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-xl text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-primary font-medium">{item.client}</p>
                      </div>
                      <div className="flex items-center justify-center bg-primary/10 text-primary p-2 rounded-full">
                        {getCategoryIcon(item.category)}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mt-3 mb-4">{item.description}</p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <Link href={`/portfolio/${item.id}`} className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors">
                        View Project
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="ml-2"
                        >
                          <FaArrowRight size={12} />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Rest of the items using Image component */}
              {filteredItems.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={IMAGE_WIDTH}
                      height={IMAGE_HEIGHT}
                      quality={85}
                      priority={index < 5}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={hoveredItem === item.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm mb-4">{item.client}</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            {getCategoryIcon(item.category)}
                          </div>
                          <span className="text-white/90 text-sm">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlus />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-xl text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-primary font-medium">{item.client}</p>
                      </div>
                      <div className="flex items-center justify-center bg-primary/10 text-primary p-2 rounded-full">
                        {getCategoryIcon(item.category)}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mt-3 mb-4">{item.description}</p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <Link href={`/portfolio/${item.id}`} className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors">
                        View Project
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="ml-2"
                        >
                          <FaArrowRight size={12} />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/portfolio" className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg group">
            <span className="flex items-center">
              View Full Portfolio
              <motion.span
                className="ml-2 group-hover:ml-3 transition-all"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 