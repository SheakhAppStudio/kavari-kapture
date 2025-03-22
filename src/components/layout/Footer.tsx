import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/kavari-logo.png"
                alt="KAVARI Kapture Logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <span className="font-serif font-bold text-xl">KAVARI<span className="text-gold">Kapture</span></span>
            </div>
            <p className="text-gray-200 mb-4">
              Your premier social media management & content creation company.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-white hover:text-gold text-xl transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-gold text-xl transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-gold text-xl transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-white hover:text-gold text-xl transition duration-300" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="text-white hover:text-gold text-xl transition duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-gold transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-gold transition duration-150">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-200 hover:text-gold transition duration-150">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-gold transition duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-gold transition duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#social-media-management" className="text-gray-200 hover:text-gold transition duration-150">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services#content-creation" className="text-gray-200 hover:text-gold transition duration-150">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services#community-management" className="text-gray-200 hover:text-gold transition duration-150">
                  Community Management
                </Link>
              </li>
              <li>
                <Link href="/services#branding" className="text-gray-200 hover:text-gold transition duration-150">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services#paid-ad-campaigns" className="text-gray-200 hover:text-gold transition duration-150">
                  Paid Ad Campaigns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact Us</h3>
            <address className="not-italic space-y-2 text-gray-200">
              <p>UK Operations</p>
              <p className="mt-4">
                <a href="tel:+447456959750" className="hover:text-gold transition duration-150">
                  07456959750
                </a>
              </p>
              <p>
                <a href="tel:+447961201249" className="hover:text-gold transition duration-150">
                  07961201249
                </a>
              </p>
              <p className="mt-4">
                <a href="mailto:kavarikapture@gmail.com" className="hover:text-gold transition duration-150">
                  kavarikapture@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} KAVARI Kapture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 