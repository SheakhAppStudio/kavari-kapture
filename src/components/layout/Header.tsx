'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-28 w-80 -my-6 -ml-4">
              <Image
                src="/images/kavari-kapture-logo.png" 
                alt="KAVARI Kapture Logo"
                fill
                style={{objectFit: 'contain'}}
                priority
                className="object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gold font-medium transition duration-150">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-gold font-medium transition duration-150">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-gold font-medium transition duration-150">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-gold font-medium transition duration-150">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gold font-medium transition duration-150">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-gold hover:bg-gold-dark text-primary font-medium py-2 px-6 rounded-full transition-colors">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white hover:text-gold focus:outline-none" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary-dark text-white shadow-md"
        >
          <div className="px-4 py-5 space-y-4">
            <Link 
              href="/" 
              className="block text-white hover:text-gold font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block text-white hover:text-gold font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="block text-white hover:text-gold font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="block text-white hover:text-gold font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-white hover:text-gold font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="block bg-gold hover:bg-gold-dark text-primary font-medium py-2 px-6 rounded-full transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 