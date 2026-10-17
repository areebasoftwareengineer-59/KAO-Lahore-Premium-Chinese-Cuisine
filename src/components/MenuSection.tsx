import React, { useState, useMemo } from 'react';
import { Search, Flame, Award, Info, Plus, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToInquiry?: (dishName: string) => void;
  selectedDishes?: string[];
  onOpenReservation?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToInquiry,
  selectedDishes = [],
  onOpenReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDish, setActiveModalDish] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.chineseName && item.chineseName.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#09090C] border-t border-[#C9A25D]/20">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,93,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-chinese text-xl text-[#C9A25D]">佳餚珍饈</span>
            <span className="h-[1px] w-10 bg-[#C9A25D]/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A25D] font-semibold">
              Signature Culinary Collection
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#FAF6EE] mb-4">
            Our Fine Dining <span className="text-gold-gradient">Menu</span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#C5BBAA] italic">
            Artisanal dim sum, flash-charred wok specialties, and prime seafood crafted with authentic Chinese reverence.
          </p>

          {/* Sample Menu Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#141419] border border-[#C9A25D]/30 text-xs text-[#B0A593] rounded-xs">
            <Info className="w-3.5 h-3.5 text-[#C9A25D] shrink-0" />
            <span>
              Representative menu selection for illustration. Daily specials & exact seasonal pricing may be confirmed with our host.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#C9A25D]/15">
          {/* Scrollable category buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer rounded-xs ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C9A25D] to-[#B88E45] text-[#0A0A0C] shadow-md shadow-[#C9A25D]/20'
                      : 'bg-[#121216] text-[#B8AE9D] hover:text-white hover:bg-[#1A1A22] border border-[#C9A25D]/15'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#C9A25D]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121216] border border-[#C9A25D]/25 text-xs text-[#FAF6EE] placeholder-[#7E7464] pl-9 pr-3 py-2 rounded-xs focus:outline-none focus:border-[#C9A25D] transition-colors"
            />
          </div>
        </div>

        {/* Selected Dishes Inquiry Floating Bar if items are added */}
        {selectedDishes.length > 0 && (
          <div className="mb-8 p-4 bg-[#14141C] border border-[#C9A25D]/40 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A25D] animate-ping" />
              <div className="text-xs text-[#FAF6EE]">
                <strong className="text-[#E5C378]">{selectedDishes.length}</strong> dish
                {selectedDishes.length > 1 ? 'es' : ''} added to your reservation inquiry:{' '}
                <span className="text-[#B8AE9D]">{selectedDishes.join(', ')}</span>
              </div>
            </div>
            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className="px-4 py-1.5 bg-[#C9A25D] hover:bg-[#DDB872] text-[#0A0A0C] font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
              >
                Inquire on WhatsApp
              </button>
            )}
          </div>
        )}

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#121217] border border-[#C9A25D]/15 rounded-xs p-8">
            <p className="text-sm text-[#A89E8D] mb-3">No dishes found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#C9A25D] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isSelected = selectedDishes.includes(item.name);
              return (
                <div
                  key={item.id}
                  className="group relative bg-[#121217] border border-[#C9A25D]/20 hover:border-[#C9A25D]/60 transition-all duration-300 rounded-xs flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black"
                >
                  {/* Dish Image Container */}
                  <div
                    onClick={() => setActiveModalDish(item)}
                    className="relative h-56 sm:h-64 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-90" />

                    {/* Badge Pill-Free Overlay: Unboxed Top Indicators */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                      {item.isChefSpecial ? (
                        <div className="flex items-center gap-1.5 text-[#0A0A0C] bg-[#C9A25D] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow">
                          <Award className="w-3 h-3" />
                          <span>Chef Selection</span>
                        </div>
                      ) : (
                        <div />
                      )}

                      {/* Spice indicator */}
                      {item.spicyLevel && item.spicyLevel > 0 ? (
                        <div className="flex items-center gap-0.5 bg-black/70 backdrop-blur-xs px-2 py-0.5 text-[10px] text-[#FF5A5F] border border-red-500/30">
                          <Flame className="w-3 h-3 fill-[#FF5A5F]" />
                          <span>{Array(item.spicyLevel).fill('🌶️').join('')}</span>
                        </div>
                      ) : null}
                    </div>

                    {/* Chinese Calligraphy Overlay */}
                    {item.chineseName && (
                      <span className="absolute bottom-2 right-3 font-chinese text-2xl text-[#C9A25D]/40 group-hover:text-[#C9A25D]/80 transition-colors pointer-events-none">
                        {item.chineseName}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category and Tags - Clean Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-[11px] text-[#A69B89] uppercase tracking-wider mb-2 font-medium">
                        <span>{item.category}</span>
                        {item.tags && item.tags.length > 0 && (
                          <>
                            <span aria-hidden="true" className="text-[#C9A25D]/50">·</span>
                            <span>{item.tags[0]}</span>
                          </>
                        )}
                      </div>

                      {/* Dish Title */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3
                          onClick={() => setActiveModalDish(item)}
                          className="font-serif-luxury text-lg sm:text-xl font-bold text-[#FAF6EE] group-hover:text-[#E5C378] transition-colors cursor-pointer"
                        >
                          {item.name}
                        </h3>
                        <span className="font-serif-luxury text-base font-bold text-[#E5C378] shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {/* Appetizing description */}
                      <p className="text-xs sm:text-sm text-[#A89E8D] leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Interactive Action Footer */}
                    <div className="pt-4 border-t border-[#C9A25D]/15 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setActiveModalDish(item)}
                        className="text-[#C9A25D] hover:text-[#FAF6EE] transition-colors flex items-center gap-1 font-medium cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Dish Details</span>
                      </button>

                      {onAddToInquiry && (
                        <button
                          onClick={() => onAddToInquiry(item.name)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-xs cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
                              : 'bg-[#1C1C24] hover:bg-[#C9A25D] text-[#D4AF37] hover:text-[#0A0A0C] border border-[#C9A25D]/30'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span>Inquired</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              <span>Add to Table</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Dish Details */}
        {activeModalDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveModalDish(null)}
            />
            <div className="relative bg-[#121217] border border-[#C9A25D]/40 max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl rounded-xs">
              <div className="relative h-60 w-full mb-6 overflow-hidden rounded-xs border border-[#C9A25D]/20">
                <img
                  src={activeModalDish.image}
                  alt={activeModalDish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-4 font-chinese text-3xl text-[#C9A25D]">
                  {activeModalDish.chineseName}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C9A25D] font-medium mb-1">
                    {activeModalDish.category}
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#FAF6EE]">
                    {activeModalDish.name}
                  </h3>
                </div>
                <div className="font-serif-luxury text-xl font-bold text-[#E5C378]">
                  {activeModalDish.price}
                </div>
              </div>

              <p className="text-sm text-[#C2B7A5] leading-relaxed mb-6">
                {activeModalDish.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#C9A25D]/20">
                <button
                  onClick={() => setActiveModalDish(null)}
                  className="text-xs uppercase tracking-wider text-[#A89E8D] hover:text-white cursor-pointer"
                >
                  Close
                </button>

                {onAddToInquiry && (
                  <button
                    onClick={() => {
                      onAddToInquiry(activeModalDish.name);
                      setActiveModalDish(null);
                    }}
                    className="px-5 py-2 bg-[#C9A25D] hover:bg-[#DDB872] text-[#0A0A0C] font-semibold text-xs tracking-wider uppercase rounded-xs cursor-pointer"
                  >
                    {selectedDishes.includes(activeModalDish.name)
                      ? 'Remove from Inquiry'
                      : 'Add to Reservation Inquiry'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
