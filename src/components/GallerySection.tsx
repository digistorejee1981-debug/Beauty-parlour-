import React, { useState } from 'react';
import { Sparkles, Eye, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { GALLERY_DATA } from '../data/parlourData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Visuals' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'makeup', label: 'Makeup Looks' },
    { id: 'hair', label: 'Hairstyling' },
    { id: 'skincare', label: 'Skincare Glow' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'products', label: 'Luxury Products' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((i) => i.category === activeCategory);

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Our Work &amp; Salon Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Real Clients, Regal Elegance <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              &amp; Serene Salon Ambiance
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Browse through our portfolio of authentic bridal makeovers, trendy hairstyles, radiant skincare transformations, and our modern parlour suite.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-red-800 text-white shadow-md shadow-pink-200 font-semibold scale-105'
                    : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-700 border border-pink-100/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:shadow-pink-950/15 border border-pink-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-pink-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

              {/* Category Pill */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                {item.categoryLabel}
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-pink-700 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title and Caption at bottom on hover */}
              <div className="absolute bottom-4 left-4 right-4 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-base font-bold leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-pink-200 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-pink-200 uppercase tracking-wider">
                  <span>Click to view full preview</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={handleNavigate}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
