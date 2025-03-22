'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaListAlt, FaComment, FaPaperPlane, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const inputVariants = {
  focus: { scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' },
  blur: { scale: 1, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFocus = (field: string) => {
    setFocusedField(field);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Validate the form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }
      
      // Format WhatsApp message
      const whatsappText = encodeURIComponent(
        `*New Contact Form Submission*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone || 'Not provided'}\n` +
        `*Company:* ${formData.company || 'Not provided'}\n` +
        `*Service Interested In:* ${formData.service || 'Not specified'}\n\n` +
        `*Message:*\n${formData.message}`
      );

      // WhatsApp phone number with international format
      const whatsappNumber = '+447456959750';
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, '_blank');
      
      // Mark form as submitted and reset data
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again later.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 px-4"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="bg-green-100 text-green-500 w-24 h-24 rounded-full flex items-center justify-center">
              <FaCheckCircle size={50} />
            </div>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Thank You!
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 mb-10 text-lg max-w-md mx-auto"
          >
            Your message has been sent successfully. We'll get back to you shortly!
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSubmitted(false)}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center mx-auto"
          >
            <FaComment className="mr-2" /> Send Another Message
          </motion.button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium">Contact Us</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Get in Touch</h3>
            <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>
          
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8 p-4 bg-red-50 text-red-500 rounded-lg border border-red-100 flex items-start"
            >
              <div className="mr-3 mt-1">⚠️</div>
              <div>{error}</div>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaUser className="mr-2 text-primary" /> Full Name <span className="text-red-500 ml-1">*</span>
              </label>
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focus' : 'blur'}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-800 bg-white"
                  placeholder="Your name"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-primary" /> Email Address <span className="text-red-500 ml-1">*</span>
              </label>
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focus' : 'blur'}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-800 bg-white"
                  placeholder="Your email"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaPhone className="mr-2 text-primary" /> Phone Number
              </label>
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'phone' ? 'focus' : 'blur'}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-800 bg-white"
                  placeholder="Your phone number"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaBuilding className="mr-2 text-primary" /> Company Name
              </label>
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'company' ? 'focus' : 'blur'}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => handleFocus('company')}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-800 bg-white"
                  placeholder="Your company name"
                />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaListAlt className="mr-2 text-primary" /> Service You're Interested In
            </label>
            <motion.div
              variants={inputVariants}
              animate={focusedField === 'service' ? 'focus' : 'blur'}
              transition={{ duration: 0.2 }}
            >
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => handleFocus('service')}
                onBlur={handleBlur}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-gray-800"
              >
                <option value="">Select a service</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Strategy Development">Strategy Development</option>
                <option value="Influencer Marketing">Influencer Marketing</option>
                <option value="Analytics & Reporting">Analytics & Reporting</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-10"
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaComment className="mr-2 text-primary" /> Your Message <span className="text-red-500 ml-1">*</span>
            </label>
            <motion.div
              variants={inputVariants}
              animate={focusedField === 'message' ? 'focus' : 'blur'}
              transition={{ duration: 0.2 }}
            >
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none text-gray-800 bg-white"
                placeholder="Tell us about your project or query..."
              ></textarea>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="text-sm text-gray-500">
              <span className="text-red-500">*</span> Required fields
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="mr-2" size={20} /> Send via WhatsApp
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 