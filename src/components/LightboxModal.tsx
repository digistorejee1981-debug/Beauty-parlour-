import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
  onOpenBooking
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-50 cursor-pointer hover:scale-110"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation */}
      <button
        onClick={() => onNavigate('next')}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-50 cursor-pointer hover:scale-110"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Content Card */}
      <div className="max-w-4xl w-full bg-[#18040c] rounded-3xl overflow-hidden shadow-2xl border border-pink-900/50 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Large Image Preview */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[70vh] object-contain md:object-cover"
          />
        </div>

        {/* Details Pane */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-pink-600/30 text-pink-300 text-xs font-semibold uppercase tracking-wider border border-pink-500/30">
                {item.categoryLabel}
              </span>
              <span className="text-xs text-pink-300/80">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white leading-snug">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-pink-100/80 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
                Salon Highlights
              </div>
              <p className="text-xs text-pink-200">
                Crafted using premier international cosmetics and personalized styling consultations at Priyanka Beauty Parlour.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-pink-900/60">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-red-800 hover:opacity-90 flex items-center justify-center gap-2 shadow-lg shadow-pink-950/40 transition-transform active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Similar Look</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
