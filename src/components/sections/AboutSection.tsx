'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -left-32 top-20 w-64 h-64 bg-primary/5 rounded-full"></div>
      <div className="absolute -right-32 bottom-20 w-80 h-80 bg-gold/5 rounded-full"></div>
      <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-primary/10 rounded-full"></div>
      <div className="absolute right-1/3 top-1/4 w-20 h-20 bg-gold/10 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4"
          >
            <span className="text-primary font-medium">About Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Our Story & Mission
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start mb-8 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 flex-shrink-0">
                <FaCheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  KAVARI KAPTURE IS A DIGITAL MARKETING AGENCY THAT WAS BORN FROM THE VISION THAT EVERY BUSINESS HAS ITS OWN UNIQUE STORY TO TELL, WHICH IF DONE EFFECTIVELY, CAN BE THE KEY DRIVER FOR BUSINESS GROWTH. WE WORK WITH A RANGE OF CLIENTS FROM HOSPITALITY, RETAIL, PROFESSIONAL SERVICES & MORE.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start mb-8 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 flex-shrink-0">
                <FaUsers size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Our Approach</h3>
                <p className="text-gray-700">
                  THIS MOTION HAS SINCE FORMED THE FOUNDATION OF KAVARI KAPTURE'S MARKETING MANAGEMENT STRATEGY FOR EXPANDING REACH AND GENERATING BUSINESS GROWTH. WE DO THIS BY LEVERAGING UNIQUE ATTRIBUTES OF YOUR BUSINESS ACROSS SOCIAL MEDIA THROUGH STRATEGIC MARKETING & MANAGEMENT
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 flex-shrink-0">
                <FaChartLine size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Our Focus</h3>
                <p className="text-gray-700">
                  THROUGH CLIENTS CENTRED PROJECT SCOPING, DEEP FOCUSSED MARKET ANALYSIS AND THE DEVELOPMENT OF UNIQUE, CREATIVE SOLUTIONS, KAVARI KAPTURE CONTINUES TO BE A ONE STOP SHOP FOR EVERYTHING SOCIAL.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
                className="absolute -inset-5 rounded-full border-4 border-dashed border-gold/30 rotate-45"
              ></motion.div>
              
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 60,
                  ease: "linear" 
                }}
                className="absolute -inset-12 rounded-full border-2 border-primary/20"
              ></motion.div>
              
              <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden border-4 border-gold shadow-xl bg-primary flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotateZ: [0, 2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                  className="w-[300px] h-[300px] relative"
                >
                  <Image
                    src="/images/kavari-kapture-logo.png"
                    alt="KAVARI Kapture"
                    width={300}
                    height={300}
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">WHAT DO WE DO</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold/5 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We operate by a 4-pillar framework, being Understand; Strategise; Create and Manage. We do this to ensure that your needs, story and identity can be established the offset of our relationship. This enables a tailored approach to social media management and marketing to be implemented, making sure that your business stands out.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our first step is to understand who you are, how you operate, and any long-term goals and challenges. We use this to help understand your needs, present and in the future, enabling us to create unique solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Strategising is our next step, combining our newly established understanding of your needs with market research and analysis. We do this so we can understand your market positioning from the offset, enabling a focused strategy to be devised. At Kavari Kapture we go the extra mile by producing top quality content such as photos, videos and graphics. We combine this with our strategy to ensure effective delivery of marketing material. Management is the overarching pillar across our services to ensure that all your social media needs are being met. Thanks to our wealth of experience, we are able to understand market trends and effectively manage the social media marketing components of our client's businesses.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Platforms We Manage */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">PLATFORMS WE MANAGE</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Facebook', 'TikTok', 'Instagram', 'Google', 'TripAdvisor'].map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">{platform.charAt(0)}</span>
                </div>
                <p className="text-primary font-medium">{platform}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Businesses Worked With */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">BUSINESSES WE'VE WORKED WITH</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Abbots Tandoori', 'Dalchini Spice', 'KAVARI London', 'Al-Safa'].map((business, index) => (
              <motion.div
                key={business}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">{business.charAt(0)}</span>
                </div>
                <p className="text-primary font-bold text-lg">{business}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 