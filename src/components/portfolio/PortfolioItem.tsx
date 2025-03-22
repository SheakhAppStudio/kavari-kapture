'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioItem as PortfolioItemType } from '@/hooks/usePortfolioData';
import { FaPlay, FaRegCalendar, FaBuilding } from 'react-icons/fa';

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <>
      <motion.div
        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all bg-white cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onClick={toggleDetails}
      >
        <div className="relative h-80 overflow-hidden rounded-t-xl bg-primary/5">
          {item.isVideo ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-all duration-300"></div>
              <div className="absolute flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white">
                  <FaPlay className="ml-1" size={24} />
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 4}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-3">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
              
              {(item.client || item.date) && (
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/80">
                  {item.client && (
                    <div className="flex items-center">
                      <FaBuilding className="mr-1" size={12} />
                      <span>{item.client}</span>
                    </div>
                  )}
                  {item.date && (
                    <div className="flex items-center">
                      <FaRegCalendar className="mr-1" size={12} />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      {showDetails && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleDetails}
        >
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[50vh]">
              {item.isVideo && item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-bold text-primary mb-1">{item.title}</h2>
                </div>
                <button 
                  onClick={toggleDetails}
                  className="text-gray-400 hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-500">
                {item.client && (
                  <div className="flex items-center">
                    <FaBuilding className="mr-2 text-primary" />
                    <span><strong>Client:</strong> {item.client}</span>
                  </div>
                )}
                {item.date && (
                  <div className="flex items-center">
                    <FaRegCalendar className="mr-2 text-primary" />
                    <span><strong>Date:</strong> {item.date}</span>
                  </div>
                )}
              </div>
              
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PortfolioItem; 