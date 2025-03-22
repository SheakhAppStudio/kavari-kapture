import React from 'react';
import { Metadata } from 'next';
import AboutPageContent from './content';

export const metadata: Metadata = {
  title: 'About Us - KAVARI Kapture',
  description: 'Learn about KAVARI Kapture, a social media management and content creation company based in the United Kingdom',
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageContent />
    </main>
  );
} 