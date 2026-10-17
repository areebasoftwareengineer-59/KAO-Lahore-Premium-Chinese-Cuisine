import React from 'react';
import { Star, ChevronDown, Utensils, Calendar } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#08080A]"
    >
      {/* Background Hero Image with Moody Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.storefront}
          alt="KAO Lahore Luxury Chinese Restaurant Front Exterior at Night"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/75 to-[#0A0A0C]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/90 via-transparent to-[#0A0A0C]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,93,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Traditional Border Accents */}
      <div className="absolute top-28 left-6 sm:left-12 pointer-events-none hidden md:block">
        <div className="w-16 h-16 border-t-2 border-l-2 border-[#C9A25D]/30" />
      </div>
      <div className="absolute top-28 right-6 sm:right-12 pointer-events-none hidden md:block">
        <div className="w-16 h-16 border-t-2 border-r-2 border-[#C9A25D]/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Unboxed Metadata & Verified Rating */}
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm text-[#E5C378] tracking-widest uppercase mb-6 font-medium">
          <span className="font-chinese text-base text-[#D4AF37]">龍王</span>
          <span aria-hidden="true" className="text-[#C9A25D]/40">·</span>
          <span>DHA Phase 5, Lahore</span>
          <span aria-hidden="true" className="text-[#C9A25D]/40">·</span>
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#E6C875] hover:text-white transition-colors"
          >
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span>{RESTAURANT_INFO.googleRating} Google Rating ({RESTAURANT_INFO.reviewCount} Reviews)</span>
          </a>
        </div>

        {/* Restaurant Grand Title */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#C9A25D]/60" />
          <span className="font-chinese text-2xl sm:text-3xl text-[#C9A25D] tracking-widest font-normal">
            龍王 · 殿堂級中菜
          </span>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#C9A25D]/60" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6EE] max-w-4xl leading-[1.12] mb-6 drop-shadow-md">
          An Exquisite Journey Through{' '}
          <span className="text-gold-gradient block sm:inline">Chinese Cuisine</span>
        </h1>

        {/* Supporting Text */}
        <p className="font-editorial text-lg sm:text-2xl text-[#D8D0C0] max-w-2xl font-normal leading-relaxed mb-10 tracking-wide">
          {RESTAURANT_INFO.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C9A25D] via-[#DDB872] to-[#B88E45] text-[#0A0A0C] font-semibold text-xs tracking-[0.18em] uppercase rounded-xs transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,162,93,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Our Menu</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent border border-[#C9A25D]/60 text-[#F5E5C9] hover:bg-[#C9A25D]/10 hover:border-[#C9A25D] font-semibold text-xs tracking-[0.18em] uppercase rounded-xs transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C9A25D]" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Location & Contact Bar Footnote */}
        <div className="mt-14 pt-8 border-t border-[#C9A25D]/20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-xs text-[#B5AB99]">
          <div className="text-center">
            <span className="text-[#C9A25D] font-medium block uppercase tracking-wider text-[11px] mb-1">Location</span>
            <span>45 CCA C, Phase 5 DHA, Lahore</span>
          </div>
          <div className="text-center">
            <span className="text-[#C9A25D] font-medium block uppercase tracking-wider text-[11px] mb-1">Inquiries & Booking</span>
            <a href={`tel:${RESTAURANT_INFO.phoneFormatted}`} className="hover:text-white transition-colors">
              {RESTAURANT_INFO.phoneFormatted}
            </a>
          </div>
          <div className="text-center">
            <span className="text-[#C9A25D] font-medium block uppercase tracking-wider text-[11px] mb-1">Service Hours</span>
            <span>Lunch 1:00 PM · Dinner 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        onClick={onExploreMenu}
        aria-label="Scroll to menu"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#C9A25D]/60 hover:text-[#C9A25D] transition-colors p-2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
