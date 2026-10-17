import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Car, Shield } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0C0C10] border-t border-[#C9A25D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-chinese text-xl text-[#C9A25D]">蒞臨指引</span>
            <span className="h-[1px] w-10 bg-[#C9A25D]/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A25D] font-semibold">
              Location & Hospitality
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FAF6EE] mb-4">
            Visit <span className="text-gold-gradient">KAO Lahore</span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#C5BBAA]">
            Conveniently situated in DHA Phase 5's vibrant Civic Commercial Area with valet arrival.
          </p>
        </div>

        {/* Content Grid: Contact Details & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Essential Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#121217] border border-[#C9A25D]/25 p-8 rounded-xs space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#1A1A22] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#C9A25D]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9A25D] font-semibold block mb-1">
                    Address
                  </span>
                  <p className="text-sm text-[#FAF6EE] font-medium leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <span className="text-xs text-[#9E9382] mt-1 block">
                    Civic Commercial Area, Sector C, DHA Phase 5
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#C9A25D]/15">
                <div className="w-10 h-10 rounded-xs bg-[#1A1A22] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#C9A25D]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9A25D] font-semibold block mb-1">
                    Reservations & Inquiries
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                    className="font-serif-luxury text-lg font-bold text-[#E5C378] hover:text-white transition-colors block"
                  >
                    {RESTAURANT_INFO.phoneFormatted}
                  </a>
                  <span className="text-xs text-[#9E9382] mt-0.5 block">
                    Direct calls & WhatsApp table reservations
                  </span>
                </div>
              </div>

              {/* Service Timings */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#C9A25D]/15">
                <div className="w-10 h-10 rounded-xs bg-[#1A1A22] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#C9A25D]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9A25D] font-semibold block mb-1">
                    Service Hours (Monday – Sunday)
                  </span>
                  <div className="text-xs text-[#D8D0C0] space-y-1">
                    <p className="flex justify-between gap-4">
                      <span>Lunch Service:</span>
                      <strong className="text-[#FAF6EE] font-medium">1:00 PM – 4:30 PM</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Dinner Service:</span>
                      <strong className="text-[#FAF6EE] font-medium">7:00 PM – 12:00 AM</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Valet Parking & Dress Note */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#C9A25D]/15">
                <div className="w-10 h-10 rounded-xs bg-[#1A1A22] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] shrink-0 mt-1">
                  <Car className="w-5 h-5 text-[#C9A25D]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9A25D] font-semibold block mb-1">
                    Guest Services & Parking
                  </span>
                  <p className="text-xs text-[#A89E8D] leading-relaxed">
                    Complimentary valet parking is available for all dining guests upon arrival in DHA Phase 5.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Action */}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#C9A25D] hover:bg-[#DDB872] text-[#0A0A0C] font-semibold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xs shadow-lg transition-colors cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column: Interactive Map Box */}
          <div className="lg:col-span-7 relative min-h-[420px] rounded-xs overflow-hidden border border-[#C9A25D]/30 shadow-2xl bg-[#121217]">
            {/* Map iframe: Centered on DHA Phase 5 Lahore CCA */}
            <iframe
              title="KAO Lahore Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.486241088497!2d74.4032!3d31.4725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190564a51bb1a7%3A0x8e5f2a1e67bb939c!2sDHA%20Phase%205%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              className="w-full h-full min-h-[450px] border-0 filter invert-[0.9] hue-rotate-[190deg] contrast-[1.15]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay card for quick orientation */}
            <div className="absolute top-4 left-4 bg-[#0E0E12]/95 border border-[#C9A25D]/40 p-4 rounded-xs shadow-2xl backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif-luxury font-bold text-sm text-[#FAF6EE]">KAO 龍王</span>
                <span className="text-[10px] text-[#C9A25D] uppercase tracking-wider">DHA Phase 5</span>
              </div>
              <p className="text-[11px] text-[#B8AE9D] leading-tight mb-2">
                45 CCA C, Sector C, DHA Phase 5, Lahore
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-semibold text-[#E5C378] hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
