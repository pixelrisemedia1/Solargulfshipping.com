import React from 'react';
import HeroSection from '@/components/shipping/HeroSection';
import ServicesSection from '@/components/shipping/ServicesSection';
import WhyChooseUs from '@/components/shipping/WhyChooseUs';
import ImageShowcase from '@/components/shipping/ImageShowcase';
import IndustriesSection from '@/components/shipping/IndustriesSection';
import CommitmentSection from '@/components/shipping/CommitmentSection';
import ContactSection from '@/components/shipping/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ImageShowcase />
      <IndustriesSection />
      <CommitmentSection />
      <ContactSection />
    </div>
  );
}