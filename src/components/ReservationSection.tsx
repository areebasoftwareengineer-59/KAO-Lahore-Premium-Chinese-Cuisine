import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, Phone, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  selectedDishes?: string[];
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  selectedDishes = [],
}) => {
  // Today's date as min
  const todayStr = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2 Guests');
  const [seatingPreference, setSeatingPreference] = useState('Main Dining Room');
  const [specialRequests, setSpecialRequests] = useState('');
  const [showConfirmationNote, setShowConfirmationNote] = useState(false);

  // Generate polite WhatsApp inquiry text
  const dishesNote =
    selectedDishes.length > 0
      ? `\n\nPreferred Dishes for Inquiry: ${selectedDishes.join(', ')}`
      : '';

  const politeInquiryText =
    `Hello KAO Lahore (龍王), I would like to request a table reservation with the following details:\n` +
    `• Guest Name: ${fullName.trim() || '[Your Name]'}\n` +
    `• Contact Number: ${phoneNumber.trim() || '[Phone Number]'}\n` +
    (email.trim() ? `• Email: ${email.trim()}\n` : '') +
    `• Date: ${date}\n` +
    `• Preferred Time: ${time}\n` +
    `• Party Size: ${guests}\n` +
    `• Seating: ${seatingPreference}\n` +
    (specialRequests.trim() ? `• Special Notes: ${specialRequests.trim()}\n` : '') +
    dishesNote +
    `\nKindly confirm table availability. Thank you!`;

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
    politeInquiryText
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmationNote(true);
    // Programmatically open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="relative py-24 sm:py-32 bg-[#0A0A0D] border-t border-[#C9A25D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Hospitality & Booking Notice */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="font-chinese text-xl text-[#C9A25D]">預約席位</span>
                <span className="h-[1px] w-10 bg-[#C9A25D]/40" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9A25D] font-semibold">
                  Table Reservations
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FAF6EE] mb-6">
                Reserve Your <span className="text-gold-gradient">Table</span>
              </h2>

              <p className="font-editorial text-lg text-[#C5BBAA] leading-relaxed mb-6">
                We invite you to experience the finest Chinese hospitality in DHA Lahore. For seamless real-time confirmation, reservation inquiries are handled directly with our restaurant concierge team.
              </p>

              {/* Verified Process Explanation */}
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-[#121217] border border-[#C9A25D]/25 rounded-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1C1C24] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#C9A25D]" />
                  </div>
                  <div className="text-xs text-[#A89E8D]">
                    <strong className="text-[#FAF6EE] block text-sm mb-1 font-serif-luxury">
                      Direct WhatsApp Concierge
                    </strong>
                    Submitting this form prepares your reservation message and connects directly with our host at{' '}
                    <span className="text-[#E5C378] font-medium">{RESTAURANT_INFO.phoneFormatted}</span> for real-time table allocation.
                  </div>
                </div>

                <div className="p-4 bg-[#121217] border border-[#C9A25D]/25 rounded-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1C1C24] border border-[#C9A25D]/30 flex items-center justify-center text-[#E5C378] shrink-0">
                    <Clock className="w-4 h-4 text-[#C9A25D]" />
                  </div>
                  <div className="text-xs text-[#A89E8D]">
                    <strong className="text-[#FAF6EE] block text-sm mb-1 font-serif-luxury">
                      Seating Timings
                    </strong>
                    Lunch: 1:00 PM – 4:30 PM <br />
                    Dinner: 7:00 PM – 12:00 AM (Midnight)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Call Direct */}
            <div className="p-5 bg-gradient-to-r from-[#17171F] to-[#121216] border border-[#C9A25D]/30 rounded-xs">
              <span className="text-xs uppercase tracking-wider text-[#A69B89] block mb-1">
                Prefer to call directly?
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneFormatted}`}
                className="font-serif-luxury text-xl font-bold text-[#E5C378] hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A25D]" />
                <span>{RESTAURANT_INFO.phoneFormatted}</span>
              </a>
              <span className="text-[11px] text-[#8C8373] mt-1 block">
                Available during operational hours for immediate assistance.
              </span>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7 bg-[#121217] border border-[#C9A25D]/30 p-6 sm:p-10 rounded-xs shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-[#C9A25D]/20 mb-8">
              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FAF6EE]">
                  Reservation Request
                </h3>
                <span className="text-xs text-[#A69B89]">
                  Instant WhatsApp dispatch · No payment required
                </span>
              </div>
              <span className="font-chinese text-2xl text-[#C9A25D]">龍王</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                    Full Name <span className="text-[#C9A25D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Khan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-sm text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                    Phone / WhatsApp <span className="text-[#C9A25D]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-sm text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                    Email Address <span className="text-[#8C8373] text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-sm text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                    Party Size <span className="text-[#C9A25D]">*</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-sm text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5-6 Guests">5 – 6 Guests (Family Table)</option>
                    <option value="7-8 Guests">7 – 8 Guests</option>
                    <option value="9-12 Guests">9 – 12 Guests (Private Booth)</option>
                    <option value="12+ Guests">12+ Guests (Large Gathering)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                    Reservation Date <span className="text-[#C9A25D]">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-sm text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                    Preferred Time <span className="text-[#C9A25D]">*</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-sm text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors cursor-pointer"
                  >
                    <optgroup label="Lunch Service">
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="15:30">3:30 PM</option>
                    </optgroup>
                    <optgroup label="Dinner Service">
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="22:30">10:30 PM</option>
                      <option value="23:00">11:00 PM</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 4: Seating Preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {['Main Dining Room', 'Quiet Window Table', 'Private Booth'].map((pref) => (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => setSeatingPreference(pref)}
                      className={`p-2.5 text-center border rounded-xs transition-colors cursor-pointer ${
                        seatingPreference === pref
                          ? 'bg-[#C9A25D]/15 border-[#C9A25D] text-[#E5C378]'
                          : 'bg-[#181820] border-[#C9A25D]/20 text-[#A89E8D] hover:text-white'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D5CDBC] font-medium mb-2">
                  Special Occasion or Dietary Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Anniversary dinner, birthday celebration, seafood preference, or low-spice requests..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#181820] border border-[#C9A25D]/25 focus:border-[#C9A25D] text-xs text-[#FAF6EE] px-4 py-2.5 rounded-xs focus:outline-none transition-colors"
                />
              </div>

              {/* Selected Dishes Summary if any */}
              {selectedDishes.length > 0 && (
                <div className="p-3 bg-[#171720] border border-[#C9A25D]/30 text-xs text-[#C5BBAA] rounded-xs">
                  <span className="text-[#C9A25D] font-medium">Pre-selected Dishes: </span>
                  {selectedDishes.join(', ')}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#C9A25D] via-[#DDB872] to-[#B88E45] text-[#0A0A0C] font-bold text-xs uppercase tracking-[0.2em] rounded-xs shadow-xl hover:shadow-[0_0_25px_rgba(201,162,93,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Table Inquiry via WhatsApp (+92 308 0999901)</span>
              </button>

              {/* Confirmation Explanation */}
              {showConfirmationNote && (
                <div className="p-4 bg-[#141E15] border border-emerald-500/40 rounded-xs flex items-start gap-3 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium mb-0.5">WhatsApp Inquiry Dispatched</strong>
                    Your reservation details have been formatted. Our floor host at KAO Lahore will reply directly on WhatsApp to confirm your table placement.
                  </div>
                </div>
              )}

              <p className="text-[11px] text-center text-[#8C8373] leading-relaxed">
                By submitting, your formatted reservation request opens directly with KAO Lahore's host on WhatsApp for immediate and genuine table booking.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
