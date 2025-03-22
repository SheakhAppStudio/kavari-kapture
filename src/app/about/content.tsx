'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaUsers, FaChartLine, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import VideoBackground from '@/components/VideoBackground';

const AboutPageContent = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoBackground 
        videoSrc="/videos/headervideo.mp4" 
        className="py-20 md:py-28"
        overlayOpacity={0.7}
        loopDuration={30}
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 bg-gold/90 text-primary text-sm font-medium rounded-full mb-6">
              WELCOME TO KAVARI KAPTURE
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-md">
              <span className="text-white">About </span>
              <span className="text-gold">Us</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white mb-10 leading-relaxed drop-shadow-md font-medium">
              A premier social media management and content creation company based in the United Kingdom
            </p>
          </motion.div>
        </div>
      </VideoBackground>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-gray-700 mb-6">
                KAVARI Kapture was established with a clear vision—to help businesses tell their unique stories effectively. 
                We recognise that every organisation has a distinct narrative that, when communicated properly, becomes a 
                powerful driver for business growth.
              </p>
              <p className="text-gray-700 mb-6">
                Based in the heart of the United Kingdom, we provide tailored digital marketing solutions that 
                combine creativity with strategic thinking. Our approach is centred on understanding your business's 
                unique characteristics and leveraging them across social media platforms through calculated, 
                data-driven strategies.
              </p>
              <p className="text-gray-700">
                We work with a diverse range of clients across multiple sectors, including hospitality, retail, 
                professional services, and more. Our expertise allows us to adapt our methodologies to suit 
                the particular needs and challenges of your industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gold/5 rounded-lg transform -rotate-3"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl bg-primary p-8 flex items-center justify-center">
                <Image 
                  src="/images/kavari-kapture-logo.png" 
                  alt="KAVARI Kapture Logo"
                  width={400}
                  height={400}
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Our Core Values
            </motion.h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At KAVARI Kapture, our work is guided by a set of fundamental principles that define who we are and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <FaCheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Excellence</h3>
              <p className="text-gray-700">
                We are committed to delivering the highest quality in everything we do. 
                Our standards are exacting, and we continuously strive to exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <FaUsers size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Client Focus</h3>
              <p className="text-gray-700">
                Your success is our success. We prioritise understanding your unique needs 
                and tailoring our solutions to achieve your specific business objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <FaChartLine size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
              <p className="text-gray-700">
                The digital landscape evolves rapidly, and so do we. We embrace creativity and 
                fresh thinking to keep our clients at the cutting edge of social media trends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose KAVARI Kapture?</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-200 max-w-3xl mx-auto">
              We offer a comprehensive approach to social media management and content creation that sets us apart from the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-gold">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">UK-Based Expertise</h3>
                    <p className="text-gray-200">
                      As a company based in the United Kingdom, we understand the local market, cultural nuances, 
                      and consumer behaviours that influence effective digital marketing in the UK.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-gold">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">Strategic Approach</h3>
                    <p className="text-gray-200">
                      We don't just create content—we develop comprehensive strategies that align with your 
                      business goals and target audience preferences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-gold">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">Creative Excellence</h3>
                    <p className="text-gray-200">
                      Our team comprises talented designers, copywriters, and strategists who create 
                      compelling content that resonates with your audience and reflects your brand identity.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-gold">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">Data-Driven Decisions</h3>
                    <p className="text-gray-200">
                      We measure what matters. Our strategies are informed by analytics and adjusted based 
                      on performance data to ensure optimal results.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-gold">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">Personalised Service</h3>
                    <p className="text-gray-200">
                      We don't believe in one-size-fits-all solutions. Our services are tailored to your 
                      specific industry, audience, and business objectives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-gold">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">Transparent Communication</h3>
                    <p className="text-gray-200">
                      We maintain open lines of communication throughout our partnership, providing 
                      regular updates and detailed reports on campaign performance.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Get in Touch
            </motion.h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Ready to elevate your social media presence? Reach out to our team to discuss how we can help your business grow.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-block bg-gold hover:bg-gold-dark text-primary font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="bg-primary text-white p-4 rounded-full mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-primary font-semibold text-xl mb-2">Location</h3>
              <p className="text-gray-700">United Kingdom</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="bg-primary text-white p-4 rounded-full mb-4">
                <FaPhoneAlt size={24} />
              </div>
              <h3 className="text-primary font-semibold text-xl mb-2">Phone</h3>
              <p className="text-gray-700">07456959750 - 07961201249</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="bg-primary text-white p-4 rounded-full mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-primary font-semibold text-xl mb-2">Email</h3>
              <p className="text-gray-700">KAVARIKAPTURE@GMAIL.COM</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageContent; 