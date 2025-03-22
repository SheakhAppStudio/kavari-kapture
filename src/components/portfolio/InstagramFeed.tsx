'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  
  // Instagram feed data with actual images from the public/instagram folder
  const instagramPosts = [
    {
      id: 1,
      imageUrl: '/instagram/01B6538F-733F-4224-9F6D-A3EE06E7F140_1_201_a.jpeg',
      caption: 'Creating engaging content that resonates with your audience',
      likes: 243,
      comments: 18,
      link: 'https://instagram.com'
    },
    {
      id: 2,
      imageUrl: '/instagram/3EDDFFF6-00C1-4306-9DC5-81E46FB6E087_1_201_a.jpeg',
      caption: 'Behind the scenes at our latest photoshoot',
      likes: 187,
      comments: 24,
      link: 'https://instagram.com'
    },
    {
      id: 3,
      imageUrl: '/instagram/4C700297-117F-4EA7-AC20-FDC1CCA4E0C1_1_201_a.jpeg',
      caption: 'Elevating brands with our strategic social media approach',
      likes: 326,
      comments: 31,
      link: 'https://instagram.com'
    },
    {
      id: 4,
      imageUrl: '/instagram/4D2A35FE-761F-4E0E-8ED0-A590FF87ABC2_1_201_a.jpeg',
      caption: 'Quality content that stands out in the digital landscape',
      likes: 215,
      comments: 12,
      link: 'https://instagram.com'
    },
    {
      id: 5,
      imageUrl: '/instagram/5E28DB09-7C2E-4506-9D72-2F5B6987EB56_1_201_a.jpeg',
      caption: 'Working with amazing clients to tell their unique stories',
      likes: 278,
      comments: 22,
      link: 'https://instagram.com'
    },
    {
      id: 6,
      imageUrl: '/instagram/6A45FF94-C69F-4EC0-B595-6D175CF195C6_1_201_a.jpeg',
      caption: 'Creative social media management that gets results',
      likes: 193,
      comments: 15,
      link: 'https://instagram.com'
    },
    {
      id: 7,
      imageUrl: '/instagram/7BABF684-8757-4D78-AAA4-4CF827CF3C00_1_201_a.jpeg',
      caption: 'Transforming brands through authentic visual storytelling',
      likes: 255,
      comments: 27,
      link: 'https://instagram.com'
    }
  ];

  const getSelectedPost = () => {
    if (selectedPost === null) return null;
    return instagramPosts.find(post => post.id === selectedPost);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4"
            >
              <Instagram size={18} />
              <span>Follow Us @kavarikapture</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Get Inspired by Our Instagram
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Follow us for daily inspiration, behind-the-scenes content, and the latest trends in social media marketing.
            </motion.p>
          </div>
          
          {/* Instagram Video Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <VideoShowcase 
              videoSrc="/videos/tiktok-background.mp4"
              caption="Creating viral TikTok content for our clients"
              likes={1243}
              comments={86}
              views={15800}
            />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <InstagramPost 
                key={post.id} 
                post={post} 
                index={index}
                onClick={() => setSelectedPost(post.id)} 
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <Link 
              href="https://instagram.com/kavarikapture" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#405DE6] via-[#5B51D8] to-[#833AB4] text-white font-medium hover:shadow-lg transition-all"
            >
              <Instagram className="mr-2 h-4 w-4" />
              <span>Follow on Instagram</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Modal for expanded post view */}
      <AnimatePresence>
        {selectedPost !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-black/30 text-white rounded-full p-1 hover:bg-black/50 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-3/5 relative bg-black aspect-square">
                  {getSelectedPost() && (
                    <Image
                      src={getSelectedPost()!.imageUrl}
                      alt={`Instagram post ${getSelectedPost()!.id}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                <div className="w-full md:w-2/5 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#405DE6] via-[#5B51D8] to-[#833AB4] flex items-center justify-center">
                      <Instagram size={16} className="text-white" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">kavarikapture</h4>
                      <p className="text-xs text-gray-500">Original post</p>
                    </div>
                  </div>
                  
                  {getSelectedPost() && (
                    <>
                      <p className="text-sm mb-6">{getSelectedPost()!.caption}</p>
                      
                      <div className="flex items-center gap-4 mt-auto border-t pt-4">
                        <div className="flex items-center">
                          <Heart size={18} className="mr-1" />
                          <span className="text-sm">{getSelectedPost()!.likes} likes</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle size={18} className="mr-1" />
                          <span className="text-sm">{getSelectedPost()!.comments} comments</span>
                        </div>
                      </div>
                      
                      <Link 
                        href={getSelectedPost()!.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-sm text-blue-600 hover:underline flex items-center"
                      >
                        <span>View on Instagram</span>
                        <ExternalLink size={12} className="ml-1" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface InstagramPostProps {
  post: {
    id: number;
    imageUrl: string;
    caption?: string;
    likes: number;
    comments: number;
    link: string;
  };
  index: number;
  onClick: () => void;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative bg-gray-200">
        <Image
          src={post.imageUrl}
          alt={`Instagram post ${post.id}`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNjY2NjY2MiLz4KPC9zdmc+"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
          {post.caption && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="text-white text-sm text-center mb-3 line-clamp-2"
            >
              {post.caption}
            </motion.p>
          )}
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="flex items-center">
              <Heart size={16} className="mr-1" strokeWidth={1.5} />
              <span className="text-xs">{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle size={16} className="mr-1" strokeWidth={1.5} />
              <span className="text-xs">{post.comments}</span>
            </div>
          </div>
        </div>
        
        {/* Instagram icon overlay */}
        <div className="absolute top-3 right-3">
          <div className="bg-white rounded-full p-1.5 shadow-md">
            <Instagram size={14} className="text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface VideoShowcaseProps {
  videoSrc: string;
  caption: string;
  likes: number;
  comments: number;
  views: number;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ videoSrc, caption, likes, comments, views }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl bg-black aspect-video">
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Overlay with controls and info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
        {/* Top section with Instagram branding */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#405DE6] via-[#5B51D8] to-[#833AB4] flex items-center justify-center">
            <Instagram size={18} className="text-white" />
          </div>
          <div className="ml-3">
            <h4 className="font-bold text-white">kavarikapture</h4>
            <p className="text-xs text-white/70">Featured video</p>
          </div>
        </div>
        
        {/* Middle section with play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-5 pointer-events-auto"
              onClick={togglePlay}
            >
              <Play size={30} className="text-white" />
            </motion.button>
          )}
        </div>
        
        {/* Bottom section with caption and stats */}
        <div>
          <div className="mb-4">
            <p className="text-white text-lg mb-2">{caption}</p>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Heart size={16} className="mr-1" />
                <span className="text-sm">{likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-1" />
                <span className="text-sm">{comments.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" />
                  <path d="M21 12C21 12 18 18 12 18C6 18 3 12 3 12C3 12 6 6 12 6C18 6 21 12 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">{views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
          
          {/* Video controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button 
                onClick={togglePlay}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                {isPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white" />}
              </button>
              <button 
                onClick={toggleMute}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
              </button>
            </div>
            
            <Link 
              href="https://instagram.com/kavarikapture" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#405DE6] via-[#5B51D8] to-[#833AB4] text-white text-sm py-2 px-4 rounded-full hover:shadow-lg transition-all flex items-center"
            >
              <span>Watch on Instagram</span>
              <ExternalLink size={12} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed; 