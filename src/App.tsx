/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import GallerySection from './components/GallerySection';
import ExperiencesSection from './components/ExperiencesSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingWizardModal from './components/BookingWizardModal';
import FloatingActions from './components/FloatingActions';
import { CharterPackage } from './types';

export default function App() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBoatId, setSelectedBoatId] = useState<string>('sea-ray-sundancer');
  const [selectedHours, setSelectedHours] = useState<number>(4);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectBoatForBooking = (boatId: string) => {
    setSelectedBoatId(boatId);
    setIsBookingOpen(true);
  };

  const handleBookPackage = (pkg: CharterPackage) => {
    setSelectedHours(pkg.hours);
    setIsBookingOpen(true);
  };

  const isEs = language === 'ES';

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00F0FF] selection:text-black flex flex-col font-sans">
      {/* Main Navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Application Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero
          language={language}
          onOpenBooking={handleOpenBooking}
          onExploreFleet={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Luxury Fleet Showcase & Services */}
        <FleetSection
          language={language}
          onSelectBoatForBooking={handleSelectBoatForBooking}
        />

        {/* 4. Real Charter Moments Gallery (All 20 Photos) */}
        <GallerySection
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. Destinations & Charter Packages */}
        <ExperiencesSection
          language={language}
          onBookPackage={handleBookPackage}
        />

        {/* 5. Customer Reviews & Why Choose Us */}
        <ReviewsSection language={language} />

        {/* 6. Frequently Asked Questions & Marina Details */}
        <FaqSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Booking Wizard Modal */}
      <BookingWizardModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
        initialBoatId={selectedBoatId}
        initialHours={selectedHours}
      />

      {/* Floating Instant Actions */}
      <FloatingActions
        language={language}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
