import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Culinary', 'Ambience', 'Architecture', 'Beverages', 'Desserts'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    filterCategory === 'All' ? true : item.category === filterCategory
  );

  const handleOpenLightbox = (originalId: string) => {
    const idx = GALLERY_ITEMS.findIndex((it) => it.id === originalId);
    if (idx !== -1) {
      setSelectedIdx(idx);
    }
  };

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#09090C] border-t border-[#C9A25D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-chinese text-xl text-[#C9A25D]">圖錄薈萃</span>
            <span className="h-[1px] w-10 bg-[#C9A25D]/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A25D] font-semibold">
              Visual Chronicles
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FAF6EE] mb-4">
            The KAO <span className="text-gold-gradient">Gallery</span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#C2B7A5]">
            A visual glimpse into our plated culinary art, illuminated architecture, and tranquil ambience.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-xs cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#C9A25D] text-[#0A0A0C]'
                  : 'bg-[#141419] text-[#A69B89] hover:text-white border border-[#C9A25D]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item.id)}
              className="group relative overflow-hidden bg-[#121217] border border-[#C9A25D]/20 hover:border-[#C9A25D]/70 transition-all duration-300 cursor-pointer rounded-xs shadow-lg hover:shadow-2xl hover:shadow-black"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-[#C9A25D]/40 flex items-center justify-center text-[#E5C378] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption on Card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A25D] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-base font-bold text-[#FAF6EE] group-hover:text-[#E5C378] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedIdx(null)}
            />

            {/* Lightbox Container */}
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between pb-3 text-xs text-[#A89E8D] border-b border-[#C9A25D]/20 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-chinese text-base text-[#C9A25D]">龍王</span>
                  <span className="text-white font-medium">
                    {GALLERY_ITEMS[selectedIdx].title}
                  </span>
                  <span className="text-[#C9A25D]">·</span>
                  <span>{selectedIdx + 1} of {GALLERY_ITEMS.length}</span>
                </div>

                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-1.5 text-[#A89E8D] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close image lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image with Navigation Overlays */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden border border-[#C9A25D]/30 bg-black">
                <img
                  src={GALLERY_ITEMS[selectedIdx].image}
                  alt={GALLERY_ITEMS[selectedIdx].title}
                  className="max-h-[72vh] w-auto max-w-full object-contain"
                />

                {/* Prev Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-[#C9A25D] text-white hover:text-[#0A0A0C] border border-[#C9A25D]/40 transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-[#C9A25D] text-white hover:text-[#0A0A0C] border border-[#C9A25D]/40 transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption */}
              <div className="w-full text-center mt-4">
                <p className="font-editorial text-sm sm:text-base text-[#D4CDBC] italic">
                  {GALLERY_ITEMS[selectedIdx].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
