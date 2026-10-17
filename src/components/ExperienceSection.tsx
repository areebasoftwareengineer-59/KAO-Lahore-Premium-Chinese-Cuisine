import React from 'react';
import { IMAGES } from '../data/restaurantData';
import { Wine, Flame, Sparkles, Users } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Flame,
      title: "Authentic Chinese Culinary Depth",
      description: "Rooted in authentic wok-hei mastery and layered reductions, each dish balances complex aromatics, gentle heat, and crisp textures.",
      tag: "Culinary Heritage"
    },
    {
      icon: Sparkles,
      title: "Refined Luxury Ambience",
      description: "Intimate low-key golden lighting, dark polished timber partitions, and hand-carved dragon screens create an enclave of tranquility.",
      tag: "Atmosphere"
    },
    {
      icon: Users,
      title: "Friends, Families & Milestones",
      description: "Spacious banquettes and generous tables designed to foster meaningful conversations, celebratory toasts, and multi-course gatherings.",
      tag: "Shared Moments"
    },
    {
      icon: Wine,
      title: "Attentive Dining Hospitality",
      description: "Discreet and respectful floor staff committed to graceful pacing, course sequencing, and accommodating individual dietary notes.",
      tag: "Service"
    }
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#0C0C0F] border-t border-[#C9A25D]/20 overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 font-chinese text-[280px] text-[#C9A25D]/[0.03] select-none pointer-events-none">
        龍
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-chinese text-xl text-[#C9A25D]">頂級體驗</span>
            <span className="h-[1px] w-10 bg-[#C9A25D]/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A25D] font-semibold">
              The KAO Distinction
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FAF6EE] mb-4">
            Signature Dining <span className="text-gold-gradient">Experience</span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#C2B7A5]">
            Where genuine Chinese culinary craftsmanship meets the highest standard of DHA Lahore hospitality.
          </p>
        </div>

        {/* Dynamic Image Collage & Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main feature image */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-[#C9A25D]/30 min-h-[380px] sm:min-h-[460px]">
            <img
              src={IMAGES.interior}
              alt="KAO Lahore Luxury Dining Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0F] via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E5C378] block mb-1">
                Refined Ambiance
              </span>
              <h3 className="font-serif-luxury text-2xl text-white font-bold mb-2">
                Intimate Golden Glow & Architectural Serenity
              </h3>
              <p className="text-xs sm:text-sm text-[#D1C8B8] max-w-lg font-light leading-relaxed">
                Step inside an atmosphere crafted with dark mahogany, backlit dragon reliefs, and candlelit tables tailored for tranquil dining in Lahore.
              </p>
            </div>
          </div>

          {/* Secondary feature image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-[#C9A25D]/30 min-h-[380px] sm:min-h-[460px]">
            <img
              src={IMAGES.heroDish}
              alt="KAO Lahore Plated Fine Dining Dish"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0F] via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E5C378] block mb-1">
                Culinary Precision
              </span>
              <h3 className="font-serif-luxury text-2xl text-white font-bold mb-2">
                Uncompromising Ingredient Selection
              </h3>
              <p className="text-xs sm:text-sm text-[#D1C8B8] font-light leading-relaxed">
                From pristine tiger prawns to aged soy infusions and wok-charred noodles, every plate reflects dedication to culinary excellence.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={idx}
                className="bg-[#121217] border border-[#C9A25D]/20 p-6 rounded-xs hover:border-[#C9A25D]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-[#1A1A22] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378]">
                      <IconComponent className="w-5 h-5 text-[#C9A25D]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A69B89] font-medium">
                      {exp.tag}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-base font-bold text-[#FAF6EE] mb-2">
                    {exp.title}
                  </h4>

                  <p className="text-xs text-[#A89E8D] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C9A25D]/10 text-[11px] text-[#C9A25D]/70 font-mono">
                  0{idx + 1} // KAO HOSPITALITY
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
