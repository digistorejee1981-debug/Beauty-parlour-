/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PlansSection } from './components/PlansSection';
import { GallerySection } from './components/GallerySection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('bridal-makeup');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromList = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleSelectPlanFromList = (planId: string) => {
    setSelectedServiceId(planId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans selection:bg-pink-600 selection:text-white">
      {/* Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with 3D Beauty Parlour Product Scene */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Signature Services Grid */}
        <ServicesSection onSelectService={handleSelectServiceFromList} />

        {/* Beauty Plans & Packages */}
        <PlansSection onSelectPlan={handleSelectPlanFromList} />

        {/* Visual Gallery with Lightbox */}
        <GallerySection onOpenBooking={() => handleOpenBooking()} />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Beauty Blog & Journal */}
        <BlogSection onOpenBooking={() => handleOpenBooking()} />

        {/* Contact & Appointment Booking Section */}
        <ContactSection initialServiceId={selectedServiceId} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Appointment Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialServiceId={selectedServiceId}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Quick WhatsApp Floating Trigger */}
      <WhatsAppFloat />
    </div>
  );
}
