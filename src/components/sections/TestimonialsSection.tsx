'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  imageUrl: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Owner",
      company: "Elegant Bites Catering",
      testimonial: "KAVARI Kapture completely transformed our online presence. Their food photography made our dishes shine, and our bookings have increased by 40% since working with them!",
      rating: 5,
      imageUrl: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Michael Torres",
      position: "Marketing Director",
      company: "Grand Events Catering",
      testimonial: "The social media strategy KAVARI developed for us was game-changing. Their content consistently gets engagement, and their team is responsive and professional.",
      rating: 5,
      imageUrl: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Jessica Chen",
      position: "Executive Chef",
      company: "Fusion Kitchen Catering",
      testimonial: "The videos KAVARI produced showcasing our cooking techniques and signature dishes were absolutely stunning. Our clients love seeing behind-the-scenes content.",
      rating: 5,
      imageUrl: "/images/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "Robert Smith",
      position: "CEO",
      company: "Premier Catering Co.",
      testimonial: "Working with KAVARI Kapture has been a complete pleasure. Their team understands the catering industry and knows exactly how to showcase our services beautifully.",
      rating: 5,
      imageUrl: "/images/testimonial-4.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplay]);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setAutoplay(false);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-gold"
        ></motion.div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-gold/20 rounded-full mb-4"
          >
            <span className="text-gold font-medium">Our Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            What Our <span className="text-gold">Clients Say</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gold/50 mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg max-w-3xl mx-auto text-white/80"
          >
            Hear directly from business owners who have seen remarkable results after partnering with KAVARI Kapture.
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 relative"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-8 -left-2 md:-left-6 text-5xl text-gold"
              >
                <FaQuoteLeft />
              </motion.div>
              
              <div className="md:flex items-center gap-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="md:w-1/3 mb-8 md:mb-0"
                >
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-lg">
                    <Image
                      src={testimonials[activeIndex].imageUrl}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <div className="flex justify-center text-gold gap-1 mb-3">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                        >
                          <FaStar size={22} />
                        </motion.div>
                      ))}
                    </div>
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="font-bold text-xl text-gray-800 mb-1"
                    >
                      {testimonials[activeIndex].name}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-primary font-medium mb-1"
                    >
                      {testimonials[activeIndex].position}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="text-sm text-gray-600"
                    >
                      {testimonials[activeIndex].company}
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="md:w-2/3 relative"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -top-4 -left-4 text-3xl text-gold/30 transform -rotate-180"
                  >
                    <FaQuoteLeft />
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-gray-700 italic text-xl leading-relaxed py-4 px-2"
                  >
                    "{testimonials[activeIndex].testimonial}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-4 -right-4 text-3xl text-gold/30"
                  >
                    <FaQuoteLeft />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-10">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevTestimonial}
                  className="bg-primary/10 hover:bg-primary hover:text-white text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
                >
                  <FaChevronLeft size={18} />
                </motion.button>
                
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setAutoplay(false);
                      }}
                      className="group"
                    >
                      <div className={`w-4 h-4 rounded-full ${activeIndex === index ? 'bg-gold' : 'bg-gray-300'} transition-all duration-300 group-hover:bg-primary`}></div>
                    </button>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTestimonial}
                  className="bg-primary/10 hover:bg-primary hover:text-white text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
                >
                  <FaChevronRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 