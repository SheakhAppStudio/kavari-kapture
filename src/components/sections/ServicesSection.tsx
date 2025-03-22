'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCamera, FaVideo, FaInstagram, FaChartLine, FaLaptop, FaSearchPlus, FaComments, FaPaintBrush, FaAd } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <div className="text-3xl text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-gray-700 mb-5">{description}</p>
      <Link href={link} className="bg-primary text-white hover:bg-primary-dark font-medium py-2 px-4 rounded-full inline-flex items-center text-sm transition-colors">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaInstagram />,
      title: "Social Media Management",
      description: "We analyze social media audiences and create tailored strategies which we then implement, monitor and manage.",
      link: "/services/social-media-management",
      delay: 0
    },
    {
      icon: <FaCamera />,
      title: "Content Creation",
      description: "We create all of your social media content for you. From hi-spec product photography to equally high quality promotional video content.",
      link: "/services/content-creation",
      delay: 1
    },
    {
      icon: <FaComments />,
      title: "Community Management",
      description: "We build an engaged community on socials of your target audiences. We reply to enquiries, comments and reviews.",
      link: "/services/community-management",
      delay: 2
    },
    {
      icon: <FaPaintBrush />,
      title: "Branding",
      description: "We offer branding services to businesses being built from scratch as well as re-branding existing businesses.",
      link: "/services/branding",
      delay: 3
    },
    {
      icon: <FaAd />,
      title: "Paid Ad Campaigns",
      description: "We plan, implement, monitor and report on paid ad campaigns on Facebook and Instagram.",
      link: "/services/paid-ads",
      delay: 4
    },
    {
      icon: <FaLaptop />,
      title: "Graphic Design",
      description: "We design digital graphics in various different forms, from posters to infographics to promotional material.",
      link: "/services/graphic-design",
      delay: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="gold-accent text-lg mb-2"
          >
            Our Services
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-md text-gray-800 mb-4"
          >
            What <span className="text-primary">We Do</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="paragraph max-w-3xl mx-auto text-gray-600"
          >
            We operate by a 4-pillar framework, being Understand; Strategise; Create and Manage. This enables a tailored approach to social media management and marketing to be implemented, making sure that your business stands out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>

      {/* Packages Section */}
      <div className="section-container mt-20">
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="gold-accent text-lg mb-2"
          >
            Our Packages
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-md text-gray-800 mb-4"
          >
            Services + <span className="text-primary">Packages</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bronze Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-center">BRONZE PACK</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>8 static 4k posts & 4 reels in 4K</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Social media Management for Facebook and Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>48 hr response time on all social media</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Reputation management</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Daily reposts of uploaded content on stories</span>
              </li>
            </ul>
          </motion.div>

          {/* Silver Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary text-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-center">SILVER PACK</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>12 static 4K photos & 8 reels in 4K</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Social Media Management for Facebook & Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>48 hr response time on all social media platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Reputation Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Daily reposts of uploaded content on Stories</span>
              </li>
            </ul>
          </motion.div>

          {/* Gold Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary text-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-center">GOLD PACK</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>10x photos in 4K</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>8x dynamic 4K video reels monthly</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Management of Facebook, Instagram & TikTok</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Visual story telling included</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Professional caption written</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>UK based operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Daily reposts of uploaded content on stories</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Management of trip advisor and google</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>48hr response time on all social media</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary bg-gold hover:bg-gold-dark text-primary font-bold">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 