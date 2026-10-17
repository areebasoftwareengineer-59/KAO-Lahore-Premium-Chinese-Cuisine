/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const handleToggleDishInquiry = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName)
        ? prev.filter((name) => name !== dishName)
        : [...prev, dishName]
    );
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E7E2D9] selection:bg-[#C9A25D]/30 selection:text-[#F3E5C8] font-sans relative">
      {/* Top Sticky Navigation */}
      <Navbar onOpenReservation={scrollToReservation} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenReservation={scrollToReservation}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. Our Story Section */}
        <StorySection />

        {/* 3. Signature Food Menu Section */}
        <MenuSection
          onAddToInquiry={handleToggleDishInquiry}
          selectedDishes={selectedDishes}
          onOpenReservation={scrollToReservation}
        />

        {/* 4. Signature Dining Experience */}
        <ExperienceSection />

        {/* 5. Food & Venue Gallery with Lightbox */}
        <GallerySection />

        {/* 6. Customer Reviews (Google Maps Verified) */}
        <ReviewsSection />

        {/* 7. Table Reservation & WhatsApp Inquiry */}
        <ReservationSection selectedDishes={selectedDishes} />

        {/* 8. Location & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={scrollToReservation} />

      {/* Floating Quick Action Button on Mobile/Desktop */}
      <aside aria-label="Quick Concierge Access" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {selectedDishes.length > 0 && (
          <div className="bg-[#14141C] border border-[#C9A25D]/50 px-3 py-1.5 rounded-xs text-[11px] text-[#FAF6EE] shadow-xl animate-fade-in hidden sm:block">
            <span className="text-[#E5C378] font-bold">{selectedDishes.length}</span> dishes in reservation inquiry
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Direct Phone Call */}
          <a
            href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
            className="w-11 h-11 rounded-full bg-[#14141A] border border-[#C9A25D]/40 text-[#E5C378] hover:text-white hover:border-[#C9A25D] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
            title="Call KAO Lahore"
            aria-label="Call KAO Lahore"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Quick WhatsApp Concierge Button */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
              'Hello KAO Lahore (龍王), I would like to inquire about table reservations at your DHA Phase 5 restaurant.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium text-xs tracking-wider uppercase rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
            title="WhatsApp Reservation Concierge"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline font-semibold">WhatsApp Concierge</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
