import React from 'react';
import { Star, ExternalLink, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, GOOGLE_REVIEWS_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#0C0C0F] border-t border-[#C9A25D]/20 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#C9A25D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-chinese text-xl text-[#C9A25D]">真實評價</span>
            <span className="h-[1px] w-10 bg-[#C9A25D]/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A25D] font-semibold">
              Guest Impressions
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FAF6EE] mb-4">
            Verified Dining <span className="text-gold-gradient">Reviews</span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#C5BBAA]">
            Reflecting genuine guest sentiments on Google Maps from our dining patrons in Lahore.
          </p>
        </div>

        {/* Central Verified Rating Hero Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#14141A] to-[#0E0E12] border border-[#C9A25D]/30 p-8 sm:p-12 rounded-xs shadow-2xl mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A22] border border-[#C9A25D]/30 text-[11px] uppercase tracking-wider text-[#E5C378] mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A25D]" />
            <span>Google Maps Verified Dining Score</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-8">
            {/* Score */}
            <div className="flex flex-col items-center">
              <span className="font-serif-luxury text-6xl sm:text-7xl font-bold text-white tracking-tight leading-none mb-2">
                {GOOGLE_REVIEWS_INFO.rating}
              </span>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#E5C378] text-[#E5C378]"
                  />
                ))}
              </div>
              <span className="text-xs text-[#9E9382] uppercase tracking-wider">
                Overall Rating / 5.0
              </span>
            </div>

            <div className="h-16 w-[1px] bg-[#C9A25D]/30 hidden sm:block" />

            {/* Total verified count */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#FAF6EE] mb-1">
                {GOOGLE_REVIEWS_INFO.totalReviews}+
              </span>
              <span className="text-sm text-[#E5C378] font-medium mb-1">
                Verified Google Reviews
              </span>
              <span className="text-xs text-[#8E8474]">
                Location: 45 CCA C, Phase 5 DHA, Lahore
              </span>
            </div>
          </div>

          {/* Honest note: No fabricated individual quotes */}
          <p className="text-xs sm:text-sm text-[#B8AE9D] max-w-2xl mx-auto leading-relaxed mb-8">
            Patrons frequently applaud our delicious food, attentive and courteous staff, authentic Chinese flavor depth, and the calm, cozy evening ambience. Read unfiltered guest feedback directly on Google.
          </p>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#C9A25D] hover:bg-[#DDB872] text-[#0A0A0C] font-semibold text-xs tracking-wider uppercase rounded-xs transition-all duration-300 shadow-lg hover:shadow-[#C9A25D]/30 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Live Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Feedback Category Pillars based strictly on supplied feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS_INFO.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121217] border border-[#C9A25D]/20 p-6 rounded-xs hover:border-[#C9A25D]/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#1A1A22] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] mb-4">
                <Sparkles className="w-4 h-4 text-[#C9A25D]" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#FAF6EE] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#A89E8D] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
