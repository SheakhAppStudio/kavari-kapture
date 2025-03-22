'use client';

import React, { useState } from 'react';

const WebsitePreviewImage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/images/website-preview.jpg');
  
  const handleError = () => {
    setImgSrc('https://placehold.co/600x400/5E105E/ffffff?text=Website+Design');
  };
  
  return (
    <img 
      src={imgSrc}
      alt="Website Preview" 
      className="rounded w-full h-auto"
      onError={handleError}
    />
  );
};

export default WebsitePreviewImage; 