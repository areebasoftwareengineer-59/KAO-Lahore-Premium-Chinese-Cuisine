import React from 'react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#0C0C0F] border-t border-[#C9A25D]/15">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A25D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 group">
              {/* Main Interior Photography */}
              <div className="relative overflow-hidden border border-[#C9A25D]/30 shadow-2xl bg-[#141419]">
                <img
                  src={IMAGES.interior}
                  alt="KAO Lahore Luxury Chinese Restaurant Interior and Dining Ambience"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-[#E5C378] font-medium mb-1">
                    Ambient Dining Hall
                  </p>
                  <p className="font-editorial text-lg text-white font-normal italic">
                    Intimate seating surrounded by intricate illuminated dragon woodwork.
                  </p>
                </div>
              </div>

              {/* Offset Decorative Golden Border */}
              <div className="absolute -top-4 -left-4 -bottom-4 -right-4 border border-[#C9A25D]/20 -z-10 hidden sm:block pointer-events-none" />
            </div>

            {/* Inset Storefront Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#14141A] border border-[#C9A25D]/40 p-4 shadow-2xl max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-chinese text-xl text-[#C9A25D]">龍王</span>
                <span className="text-xs font-serif-luxury tracking-widest text-[#FAF6EE]">DHA PHASE 5</span>
              </div>
              <p className="text-[11px] text-[#A69B89] leading-tight">
                45 CCA C, Sector C, Lahore. Fine Chinese hospitality in an upscale haven.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Header Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-chinese text-lg text-[#C9A25D]">尊貴傳承</span>
              <span className="h-[1px] w-8 bg-[#C9A25D]/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A25D]">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6EE] leading-tight mb-6">
              A Refined Sanctuary of <br />
              <span className="text-gold-gradient">Authentic Chinese Flavors</span>
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#C2B7A5] leading-relaxed mb-8">
              <p>
                Nestled in the prestigious Civic Commercial Area of DHA Phase 5,{' '}
                <strong className="text-[#F5E5C9] font-medium">KAO 龍王</strong> welcomes discerning diners
                seeking the heights of premium Chinese gastronomy in Lahore.
              </p>
              <p>
                From the moment you step past our illuminated gold dragon facade, the experience is designed to
                immerse you in understated luxury. Our culinary philosophy centers on time-honored wok traditions,
                uncompromising ingredient freshness, and deeply layered Szechuan and Cantonese flavor profiles.
              </p>
              <p>
                Whether celebrating milestones with family, hosting esteemed colleagues, or enjoying an intimate
                evening, our thoughtful hospitality and tranquil, dark-wood ambience create a memorable fine-dining
                setting.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C9A25D]/20">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#E5C378] mb-1">
                  <Sparkles className="w-4 h-4 text-[#C9A25D]" />
                  <span className="font-serif-luxury text-xs font-semibold uppercase tracking-wider text-[#FAF6EE]">
                    Wok Mastery
                  </span>
                </div>
                <p className="text-xs text-[#9E9382]">
                  Authentic high-heat wok craft balancing aroma, texture, and deep savory notes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#E5C378] mb-1">
                  <Compass className="w-4 h-4 text-[#C9A25D]" />
                  <span className="font-serif-luxury text-xs font-semibold uppercase tracking-wider text-[#FAF6EE]">
                    Serene Ambiance
                  </span>
                </div>
                <p className="text-xs text-[#9E9382]">
                  Warm golden lanterns, dark mahogany finishes, and plush comfortable banquettes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#E5C378] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#C9A25D]" />
                  <span className="font-serif-luxury text-xs font-semibold uppercase tracking-wider text-[#FAF6EE]">
                    Warm Service
                  </span>
                </div>
                <p className="text-xs text-[#9E9382]">
                  Attentive, courteous floor hospitality attuned to every guest preference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
