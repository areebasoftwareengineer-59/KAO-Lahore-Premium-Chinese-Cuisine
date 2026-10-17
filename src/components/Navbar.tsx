import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#C9A25D]/20 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A25D]"
            >
              <div className="w-10 h-10 rounded-sm border border-[#C9A25D]/40 bg-[#121215] flex items-center justify-center text-[#E5C378] font-serif-luxury font-bold text-lg shadow-inner group-hover:border-[#C9A25D] transition-colors">
                龍
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5E5C9] group-hover:text-white transition-colors">
                    KAO
                  </span>
                  <span className="font-chinese text-sm sm:text-base text-[#C9A25D] font-normal tracking-wider">
                    龍王
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A69B89] font-medium">
                  DHA Phase 5 · Lahore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-[#D5CEBF] hover:text-[#E5C378] transition-colors tracking-wide py-1 text-sm group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A25D] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                className="hidden xl:flex items-center gap-2 text-xs text-[#D1C8B8] hover:text-[#E5C378] transition-colors px-3 py-1.5"
                title="Call KAO Lahore"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A25D]" />
                <span>{RESTAURANT_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C9A25D] via-[#DDB872] to-[#B88E45] text-[#0A0A0C] font-semibold text-xs tracking-wider uppercase rounded-xs transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,93,0.45)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenReservation}
                className="sm:hidden px-3 py-1.5 bg-[#C9A25D] text-[#0A0A0C] font-semibold text-[11px] tracking-wider uppercase rounded-xs"
              >
                Reserve
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#E5C378] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A25D]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0E0E12] border-l border-[#C9A25D]/30 p-6 flex flex-col justify-between z-50 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C9A25D]/20">
                <div className="flex items-center gap-2">
                  <span className="font-serif-luxury text-xl font-bold text-[#F5E5C9]">KAO</span>
                  <span className="font-chinese text-base text-[#C9A25D]">龍王</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#A89E8D] hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-serif-luxury text-[#E8E2D5] hover:text-[#E5C378] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#C9A25D]/50 font-sans">0{navLinks.indexOf(link) + 1}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#C9A25D]/20 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-[#C9A25D] text-[#0A0A0C] font-semibold text-xs uppercase tracking-widest text-center shadow-lg hover:bg-[#DDB872] transition-colors"
              >
                Reserve a Table
              </button>

              <div className="text-xs text-[#9E9382] space-y-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                  className="flex items-center gap-2 hover:text-[#E5C378] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A25D]" />
                  <span>{RESTAURANT_INFO.phoneFormatted}</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A25D] mt-0.5 shrink-0" />
                  <span>{RESTAURANT_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
