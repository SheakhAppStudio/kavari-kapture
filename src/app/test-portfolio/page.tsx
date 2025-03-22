import React from 'react';

export default function TestPortfolioPage() {
  const portfolioImages = [
    '/portfolio/portfolio-1.jpg',
    '/portfolio/portfolio-2.jpg',
    '/portfolio/portfolio-3.jpg',
    '/portfolio/portfolio-4.jpg',
    '/portfolio/portfolio-5.jpg',
    '/portfolio/portfolio-6.jpg',
    '/portfolio/portfolio-7.jpg',
    '/portfolio/portfolio-8.jpg',
    '/portfolio/portfolio-9.jpg',
    '/portfolio/portfolio-10.jpg',
    '/portfolio/portfolio-11.jpg',
    '/portfolio/portfolio-12.jpg',
    '/portfolio/portfolio-13.jpg',
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test Portfolio Images</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative pt-[100%]">
              <img 
                src={src} 
                alt={`Portfolio image ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <p className="font-medium">Image {index + 1}</p>
              <p className="text-sm text-gray-500 break-all">{src}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 