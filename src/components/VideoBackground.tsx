'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  videoSrc?: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  loopDuration?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc = "/videos/background.mp4", 
  children, 
  className = "min-h-[600px]",
  overlayOpacity = 0.5,
  loopDuration = 0
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    console.log(`VideoBackground: Attempting to load video from ${videoSrc}`);

    // Simple play function to ensure video plays
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.warn("Video play prevented:", err);
          setVideoError(`Error playing video: ${err.message}`);
          
          // Try again after a moment - helps with autoplay restrictions
          setTimeout(() => {
            if (videoRef.current) {
              console.log("Attempting to play video again...");
              videoRef.current.play().catch((retryErr) => {
                console.error("Retry failed:", retryErr);
              });
            }
          }, 1000);
        });
      }
    };

    // Function to handle custom loop duration
    const handleTimeUpdate = () => {
      if (videoRef.current && loopDuration > 0 && videoRef.current.currentTime >= loopDuration) {
        console.log(`Looping video back to start (current time: ${videoRef.current.currentTime}s, loop limit: ${loopDuration}s)`);
        videoRef.current.currentTime = 0;
      }
    };

    // Handle video loaded metadata
    const handleLoadedMetadata = () => {
      console.log("Video metadata loaded successfully");
      setIsVideoLoaded(true);
      // Immediate play attempt once loaded
      playVideo();
    };

    // Handle video loading error
    const handleError = (e: Event) => {
      console.error("Error loading video:", e);
      setVideoError("Failed to load video");
      setIsVideoLoaded(false);
    };

    // Add event listeners
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('error', handleError);
      
      // Add timeupdate event listener if custom loop duration is set
      if (loopDuration > 0) {
        videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      }
    }

    // Set up a periodic check to ensure video continues playing
    const intervalId = setInterval(playVideo, 5000);
    
    return () => {
      clearInterval(intervalId);
      // Clean up event listeners
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoRef.current.removeEventListener('error', handleError);
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [videoSrc, loopDuration]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Simple background color as fallback while video loads */}
      <div className="absolute inset-0 bg-primary"></div>
      
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop={loopDuration === 0}
        className="absolute inset-0 w-full h-full object-cover z-10"
        poster="/images/pattern.png"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Debug overlay - only visible during development and when there's an error */}
      {process.env.NODE_ENV === 'development' && videoError && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white p-2 z-50 text-sm">
          Video Error: {videoError} (Path: {videoSrc})
        </div>
      )}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black z-20" style={{ opacity: overlayOpacity }}></div>
      
      {/* Optional texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-5 mix-blend-overlay z-30"></div>
      
      {/* Content layered on top */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-40 h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default VideoBackground; 