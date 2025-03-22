'use client';

import React from 'react';
import { FaCamera, FaVideo, FaInstagram, FaComments, FaPaintBrush, FaAd, FaLaptop, FaTiktok, FaGlobe, FaDesktop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import WebsitePreviewImage from '@/components/WebsitePreviewImage';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedFeatureItem from '@/components/AnimatedFeatureItem';
import AnimatedPageHeader from '@/components/AnimatedPageHeader';
import AnimatedPricingSection from '@/components/AnimatedPricingSection';
import AnimatedTikTokSection from '@/components/AnimatedTikTokSection';
import AnimatedProcessSection from '@/components/AnimatedProcessSection';
import AnimatedCtaSection from '@/components/AnimatedCtaSection';
import AnimatedWebsiteHighlight from '@/components/AnimatedWebsiteHighlight';
import VideoBackground from '@/components/VideoBackground';

const ServicePage = () => {
  const services = [
    {
      icon: <FaInstagram className="text-5xl text-primary mb-4" />,
      title: "Social Media Management",
      description: "We analyze social media audiences and create tailored strategies which we then implement, monitor and manage. Our comprehensive social media management service ensures your social presence grows consistently while maintaining brand voice and engagement.",
      features: [
        "Platform strategy development",
        "Content calendar creation",
        "Performance analytics and reporting",
        "Audience growth tactics",
        "Engagement monitoring",
        "Trend analysis and implementation"
      ]
    },
    {
      icon: <FaCamera className="text-5xl text-primary mb-4" />,
      title: "Content Creation",
      description: "We create all of your social media content for you. From hi-spec product photography to equally high quality promotional video content. Our professional content creation services ensure your brand stands out with visually stunning material.",
      features: [
        "Professional photography",
        "High-quality video production",
        "Graphic design for social posts",
        "Carousel and slideshow creation",
        "Product showcases",
        "Brand story content"
      ]
    },
    {
      icon: <FaComments className="text-5xl text-primary mb-4" />,
      title: "Community Management",
      description: "We build an engaged community on socials of your target audiences. We reply to enquiries, comments and reviews. Our community management service ensures your audience feels valued and heard, building loyalty and trust in your brand.",
      features: [
        "Comment monitoring and response",
        "Private message management",
        "Review management and response",
        "Community guidelines enforcement",
        "Crisis management protocols",
        "Audience engagement initiatives"
      ]
    },
    {
      icon: <FaPaintBrush className="text-5xl text-primary mb-4" />,
      title: "Branding",
      description: "We offer branding services to businesses being built from scratch as well as re-branding existing businesses. Our branding experts help you craft a unique identity that resonates with your target audience and stands out in the marketplace.",
      features: [
        "Brand strategy development",
        "Logo design and brand identity",
        "Brand voice and messaging",
        "Social media visual identity",
        "Brand guideline creation",
        "Rebranding strategy and implementation"
      ]
    },
    {
      icon: <FaAd className="text-5xl text-primary mb-4" />,
      title: "Paid Ad Campaigns",
      description: "We plan, implement, monitor and report on paid ad campaigns on Facebook and Instagram. Our strategic approach to paid advertising ensures maximum ROI and targeted reach to grow your business effectively.",
      features: [
        "Campaign strategy development",
        "Ad creative design",
        "Audience targeting optimization",
        "A/B testing",
        "Budget management",
        "Performance reporting and analysis"
      ]
    },
    {
      icon: <FaGlobe className="text-5xl text-primary mb-4" />,
      title: "Website Creation & Management",
      description: "We design, develop, and manage professional websites for your business. Our website services include custom design, responsive layouts, and ongoing maintenance to ensure your digital presence matches your social media branding.",
      features: [
        "Custom website design",
        "Mobile-responsive layouts",
        "Content management systems",
        "Regular maintenance and updates",
        "SEO optimization",
        "Analytics and performance tracking"
      ]
    },
    {
      icon: <FaDesktop className="text-5xl text-primary mb-4" />,
      title: "Graphic Design",
      description: "We design digital graphics in various different forms, from posters to infographics to promotional material. Our professional graphic design services ensure your visual communications are impactful and on-brand.",
      features: [
        "Social media graphics",
        "Promotional materials",
        "Infographics and data visualization",
        "Digital posters and flyers",
        "Banner ads",
        "Email marketing templates"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "BRONZE PACK",
      description: "Perfect for small businesses just starting with social media",
      features: [
        "8 static 4k posts & 4 reels in 4K",
        "Social media Management for Facebook and Instagram",
        "Basic website maintenance",
        "48 hr response time on all social media",
        "Reputation management",
        "Daily reposts of uploaded content on stories"
      ],
      highlighted: false,
      ctaText: "Contact for Pricing",
      ctaLink: "/contact"
    },
    {
      name: "SILVER PACK",
      description: "Ideal for growing businesses looking to expand their online presence",
      features: [
        "12 static 4K photos & 8 reels in 4K",
        "Social Media Management for Facebook & Instagram",
        "Website maintenance and updates",
        "48 hr response time on all social media platforms",
        "Reputation Management",
        "Daily reposts of uploaded content on Stories"
      ],
      highlighted: false,
      ctaText: "Contact for Pricing",
      ctaLink: "/contact"
    },
    {
      name: "GOLD PACK",
      description: "Our premium package for established businesses seeking maximum impact",
      features: [
        "10x photos in 4K",
        "8x dynamic 4K video reels monthly",
        "Management of Facebook, Instagram & TikTok",
        "Full website management and optimization",
        "Visual story telling included",
        "Professional caption written",
        "UK based operations",
        "Daily reposts of uploaded content on stories",
        "Management of trip advisor and google",
        "48hr response time on all social media"
      ],
      highlighted: true,
      ctaText: "Contact for Pricing",
      ctaLink: "/contact"
    }
  ];

  const tikTokTiers = [
    {
      name: "Basic Pack",
      videosCount: 4,
      features: [
        "Content Planning Included",
        "4K Quality Videos",
        "Performance Analytics"
      ],
      isPopular: false
    },
    {
      name: "Standard Pack",
      videosCount: 6,
      features: [
        "Content Planning Included",
        "4K Quality Videos",
        "Performance Analytics",
        "Trend Research"
      ],
      isPopular: true
    },
    {
      name: "Premium Pack",
      videosCount: 8,
      features: [
        "Content Planning Included",
        "4K Quality Videos",
        "Performance Analytics",
        "Trend Research",
        "Hashtag Strategy"
      ],
      isPopular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Understand",
      description: "We take time to understand your business, brand voice, target audience, and goals to create a customized strategy.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      step: 2,
      title: "Strategise",
      description: "We develop a comprehensive strategy based on research, market analysis, and industry best practices.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      step: 3,
      title: "Create",
      description: "We produce high-quality content tailored to your brand and optimized for each platform's requirements.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      step: 4,
      title: "Manage",
      description: "We handle ongoing management, engagement, analysis, and optimization to ensure continuous improvement.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )
    }
  ];

  const websiteFeatures = [
    {
      text: "Modern, responsive design that works on all devices"
    },
    {
      text: "Ongoing maintenance and content updates"
    },
    {
      text: "Seamless integration with your social media accounts"
    }
  ];

  return (
    <>
      {/* Main video background */}
      <VideoBackground 
        videoSrc="/videos/background.mp4"
        className="min-h-[85vh]"
        overlayOpacity={0.4}
      >
        <AnimatedPageHeader 
          title="Our Services"
          description="We operate by a 4-pillar framework, being Understand; Strategise; Create and Manage. This enables a tailored approach to social media management and marketing to be implemented, making sure that your business stands out."
          highlightedText="Contact us to discuss our professional social media management packages"
          secondaryText="All packages include website creation and management services"
        />
      </VideoBackground>

      {/* Hidden fallback section */}
      <div className="hidden">
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="/images/pattern.png"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary opacity-70"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-bold mb-6">Video Fallback Section</h1>
            <p>This section is for testing direct video implementation.</p>
          </div>
        </div>
      </div>

      {/* Services Navigation */}
      <section className="bg-white py-4 md:py-6 border-b border-gray-200 overflow-hidden">
        <div className="section-container">
          <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 py-2 -mx-4 px-4 md:px-0 md:mx-0 no-scrollbar">
            {services.map((service, index) => (
              <motion.a 
                key={index}
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap flex items-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1 md:mr-2 text-sm md:text-base">{service.icon}</span>
                {service.title}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16">
            {services.map((service, index) => (
              <AnimatedServiceCard 
                key={index} 
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                index={index}
              >
                <div className="flex items-center mb-8">
                  <div className="bg-primary/10 p-5 rounded-full mr-5">
                    <div className="text-5xl text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">{service.title}</h2>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-5 flex items-center">
                    <span className="w-1.5 h-6 bg-gold rounded-full mr-3"></span>
                    Key Benefits:
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <AnimatedFeatureItem key={idx} idx={idx} feature={feature} />
                    ))}
                  </ul>
                  
                  <motion.div 
                    className="mt-6 text-center"
                    whileHover={{ scale: 1.03 }}
                  >
                    <a 
                      href="/contact" 
                      className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md"
                    >
                      Learn more about {service.title}
                    </a>
                  </motion.div>
                </div>
              </AnimatedServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* Website Services Highlight */}
      <AnimatedWebsiteHighlight
        title="Complete Website Services"
        description="Along with our social media management, we also provide complete website creation and management services. Our team designs beautiful, responsive websites that integrate seamlessly with your social media presence - all included as part of our comprehensive service packages."
        features={websiteFeatures}
        ctaText="Discuss Your Website Needs"
        ctaLink="/contact"
      />

      {/* TikTok Section */}
      <AnimatedTikTokSection
        title="TIKTOK"
        subtitle="PACK"
        description="TikTok is the perfect place for businesses to invest in. Audiences across the globe, no matter how niche or unique they may be. With an amazing diversity and forever growing audience, TikTok has become the number 1 place to gain brand awareness. Our packages include TikTok content creation and management to help your business reach its full potential on this growing platform."
        tiers={tikTokTiers}
        ctaText="Get Started with TikTok"
        ctaLink="/contact"
      />

      {/* Packages Section */}
      <AnimatedPricingSection 
        title="Services + Packages"
        description="Choose the perfect package for your business needs. We offer various service levels to ensure you get exactly what your business requires to thrive online."
        tiers={pricingTiers}
      />

      {/* Our Process Section */}
      <AnimatedProcessSection
        title="Process"
        subtitle="Our"
        description="We follow a systematic approach to ensure your social media success. Our 4-pillar framework guides everything we do."
        steps={processSteps}
        noteText="Ready to begin? Our packages include website services along with social media management"
      />

      {/* CTA Section */}
      <AnimatedCtaSection
        subtitle="Ready to Get Started?"
        title="Ready to transform your social media presence?"
        description="Contact us today for a free consultation to discuss how we can help your business grow through strategic social media management and website services. Our comprehensive packages include everything you need for a strong online presence."
        buttonText="Get a Personalized Quote"
        buttonLink="/contact"
      />
    </>
  );
};

export default ServicePage; 