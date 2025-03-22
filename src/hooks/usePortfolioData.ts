import { useState, useEffect } from 'react';

// Define types for portfolio items
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  isVideo?: boolean;
  videoUrl?: string;
  client?: string;
  date?: string;
  featured?: boolean;
}

// Define the data structure for portfolio
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Social Media Strategy',
    category: 'Strategy',
    imageUrl: '/portfolio/portfolio-1.jpg',
    description: 'Comprehensive social media strategy for a growing hospitality brand focusing on brand awareness and customer engagement.',
    client: 'Luxury Hotel Chain',
    date: 'January 2023',
    featured: true
  },
  {
    id: 2,
    title: 'Brand Photography',
    category: 'Photography',
    imageUrl: '/portfolio/portfolio-2.jpg',
    description: 'Professional brand photography for product launches and marketing materials that elevated brand perception.',
    client: 'Fashion Retailer',
    date: 'February 2023'
  },
  {
    id: 3,
    title: 'Content Creation',
    category: 'Content',
    imageUrl: '/portfolio/portfolio-3.jpg',
    description: 'Content creation for lifestyle and fashion brands that increased engagement by 45% across platforms.',
    client: 'Lifestyle Brand',
    date: 'March 2023',
    featured: true
  },
  {
    id: 4,
    title: 'Instagram Campaign',
    category: 'Social Media',
    imageUrl: '/portfolio/portfolio-4.jpg',
    description: 'Instagram growth strategy that increased followers by 200% and engagement by 75% in just three months.',
    client: 'Beauty Brand',
    date: 'April 2023'
  },
  {
    id: 5,
    title: 'Logo Design',
    category: 'Branding',
    imageUrl: '/portfolio/portfolio-5.jpg',
    description: 'Logo and visual identity for upscale restaurant that helped establish a premium brand image.',
    client: 'Fine Dining Restaurant',
    date: 'May 2023'
  },
  {
    id: 6,
    title: 'Food Photography',
    category: 'Photography',
    imageUrl: '/portfolio/portfolio-6.jpg',
    description: 'Food photography for restaurant menu and social media that boosted online reservations by 35%.',
    client: 'Gourmet Restaurant',
    date: 'June 2023'
  },
  {
    id: 7,
    title: 'Social Media Management',
    category: 'Social Media',
    imageUrl: '/portfolio/portfolio-7.jpg',
    description: 'Ongoing social media management for retail brand that resulted in consistent growth across all platforms.',
    client: 'Retail Chain',
    date: 'July 2023',
    featured: true
  },
  {
    id: 8,
    title: 'Content Calendar',
    category: 'Content',
    imageUrl: '/portfolio/portfolio-8.jpg',
    description: 'Strategic content calendar development for consistent brand presence that improved audience retention.',
    client: 'Media Company',
    date: 'August 2023'
  },
  {
    id: 9,
    title: 'Influencer Marketing',
    category: 'Strategy',
    imageUrl: '/portfolio/portfolio-9.jpg',
    description: 'Influencer marketing campaign that generated 350K+ impressions and 15K+ profile visits.',
    client: 'Cosmetics Brand',
    date: 'September 2023'
  },
  {
    id: 10,
    title: 'Brand Identity',
    category: 'Branding',
    imageUrl: '/portfolio/portfolio-10.jpg',
    description: 'Full brand identity package including logo, colours, and typography that united brand communications.',
    client: 'Tech Startup',
    date: 'October 2023',
    featured: true
  },
  {
    id: 11,
    title: 'Social Media Audit',
    category: 'Strategy',
    imageUrl: '/portfolio/portfolio-11.jpg',
    description: 'Comprehensive social media audit with actionable recommendations that increased ROI by 40%.',
    client: 'E-commerce Company',
    date: 'November 2023'
  },
  {
    id: 12,
    title: 'Product Photography',
    category: 'Photography',
    imageUrl: '/portfolio/portfolio-12.jpg',
    description: 'Product photography for e-commerce and social media that improved conversion rates by 25%.',
    client: 'Jewellery Brand',
    date: 'December 2023'
  },
  {
    id: 13,
    title: 'Video Production',
    category: 'Video',
    imageUrl: '/portfolio/portfolio-13.jpg',
    description: 'High-quality video production for brand stories and social media campaigns that captured brand essence.',
    client: 'Lifestyle Company',
    date: 'January 2024',
    isVideo: true,
    videoUrl: '/videos/background.mp4',
    featured: true
  },
  {
    id: 14,
    title: 'TikTok Content Strategy',
    category: 'Video',
    imageUrl: '/portfolio/portfolio-7.jpg',
    description: 'TikTok content strategy and production that resulted in 2M+ views and significant brand recognition.',
    client: 'Fashion Retailer',
    date: 'February 2024',
    isVideo: true,
    videoUrl: '/videos/tiktok-background.mp4'
  },
  {
    id: 15,
    title: 'Brand Story Video',
    category: 'Video',
    imageUrl: '/portfolio/portfolio-3.jpg',
    description: 'Compelling brand story video that effectively communicated company values and mission.',
    client: 'Corporate Client',
    date: 'March 2024',
    isVideo: true,
    videoUrl: '/videos/headervideo.mp4',
    featured: true
  }
];

// Extract unique categories from portfolio data
const extractCategories = (items: PortfolioItem[]): string[] => {
  const uniqueCategories = new Set(items.map(item => item.category));
  return ['All', ...Array.from(uniqueCategories)];
};

export const usePortfolioData = () => {
  const [items, setItems] = useState<PortfolioItem[]>(portfolioData);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioData);
  const [featuredItems, setFeaturedItems] = useState<PortfolioItem[]>([]);
  
  // Initialize categories and featured items
  useEffect(() => {
    setCategories(extractCategories(portfolioData));
    setFeaturedItems(portfolioData.filter(item => item.featured));
  }, []);
  
  // Filter items based on active category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === activeCategory));
    }
  }, [activeCategory, items]);
  
  return {
    items,
    categories,
    activeCategory,
    filteredItems,
    featuredItems,
    setActiveCategory
  };
};

export default usePortfolioData; 