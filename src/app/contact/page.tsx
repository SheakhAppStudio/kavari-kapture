'use client';

import React from 'react';
import ContactForm from '@/components/sections/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-white"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold"></div>
        </div>
        
        <div className="section-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-6 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-gold">We'd Love To Hear From You</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-10">
              Have questions about our services? Ready to transform your social media presence? Our team is here to help you succeed.
            </p>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:block"
            >
              <a href="#contact-section" className="inline-block text-white">
                <FaChevronDown size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact-section" className="py-20 relative bg-white">
        <div className="absolute left-0 top-0 w-full h-40 bg-gradient-to-b from-primary/5 to-transparent"></div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-full mt-1 mr-5 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Our Office</h4>
                      <address className="not-italic text-gray-600 mt-2 leading-relaxed">
                        United Kingdom
                      </address>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-full mt-1 mr-5 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                      <p className="text-gray-600 mt-2">
                        <a href="tel:+447456959750" className="hover:text-primary transition-colors">
                          +447456959750
                        </a>
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-full mt-1 mr-5 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                      <p className="text-gray-600 mt-2">
                        <a href="mailto:kavarikapture@gmail.com" className="hover:text-primary transition-colors">
                          kavarikapture@gmail.com
                        </a>
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-full mt-1 mr-5 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaWhatsapp size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">WhatsApp</h4>
                      <p className="text-gray-600 mt-2">
                        <a href="https://wa.me/447456959750" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          Message us on WhatsApp
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Social Media */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: <FaInstagram size={18} />, url: '#', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
                      { icon: <FaFacebook size={18} />, url: '#', color: 'bg-blue-600' },
                      { icon: <FaTwitter size={18} />, url: '#', color: 'bg-sky-500' },
                      { icon: <FaLinkedin size={18} />, url: '#', color: 'bg-blue-700' }
                    ].map((social, index) => (
                      <motion.a 
                        key={index}
                        href={social.url} 
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center shadow-md`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Company Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 rounded-xl overflow-hidden shadow-xl p-6 bg-primary text-white"
              >
                <h3 className="text-xl font-semibold mb-4">KAVARI Kapture</h3>
                <p className="mb-3">WHERE CREATIVITY MEETS RESULTS</p>
                <p className="text-sm opacity-90 mb-4">A SOCIAL MEDIA MANAGEMENT & CONTENT CREATION COMPANY</p>
                <div className="flex items-center space-x-2">
                  <a href="mailto:kavarikapture@gmail.com" className="text-gold hover:underline transition-colors">
                    kavarikapture@gmail.com
                  </a>
                  <span className="text-white/50">|</span>
                  <a href="tel:+447456959750" className="text-gold hover:underline transition-colors">
                    +447456959750
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute -right-40 top-40 w-80 h-80 bg-gold/5 rounded-full"></div>
        
        <div className="section-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ABOUT US</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              KAVARI Kapture is a social media management and content creation company dedicated to helping businesses 
              achieve remarkable results through creative and strategic digital marketing solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 