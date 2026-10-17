import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, MapPin, Phone, Star, ExternalLink, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Signature Menu', href: '#menu' },
    { name: 'Dining Experience', href: '#experience' },
    { name: 'Food & Venue Gallery', href: '#gallery' },
    { name: 'Guest Reviews', href: '#reviews' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#060608] border-t border-[#C9A25D]/25 text-[#A89E8D] pt-16 pb-12 overflow-hidden">
      {/* Subtle top gold gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A25D]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C9A25D]/15">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs border border-[#C9A25D]/50 bg-[#121217] flex items-center justify-center text-[#E5C378] font-serif-luxury font-bold text-lg">
                龍
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-luxury text-2xl font-bold tracking-[0.2em] text-[#FAF6EE]">
                    KAO
                  </span>
                  <span className="font-chinese text-lg text-[#C9A25D]">
                    龍王
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8373]">
                  Premium Chinese Cuisine · DHA Lahore
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#9E9382] leading-relaxed max-w-sm">
              Discover authentic fine-dining Chinese gastronomy at KAO Lahore. High-heat wok mastery, signature seafood, exquisite appetizers, and dignified hospitality in DHA Phase 5.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#E5C378]">
              <Star className="w-3.5 h-3.5 fill-[#E5C378]" />
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-[#8C8373]">on Google Reviews ({RESTAURANT_INFO.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-serif-luxury text-xs uppercase tracking-[0.2em] text-[#C9A25D] font-bold block mb-4">
              Explore
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#E5C378] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hospitality */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-serif-luxury text-xs uppercase tracking-[0.2em] text-[#C9A25D] font-bold block mb-4">
              Visit & Reserve
            </span>

            <div className="space-y-3 text-xs text-[#9E9382]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A25D] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A25D] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                  className="hover:text-[#FAF6EE] text-[#E5C378] font-medium transition-colors"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-2.5 bg-[#C9A25D] hover:bg-[#DDB872] text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve on WhatsApp</span>
                </button>
              </div>

              <div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C9A25D] hover:underline pt-1"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7163]">
          <div>
            © {new Date().getFullYear()} KAO 龍王 – Premium Chinese Cuisine. All rights reserved. 45 CCA C, Phase 5 DHA, Lahore.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A25D] transition-colors"
            >
              Google Maps (4.9 ★)
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C9A25D] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
