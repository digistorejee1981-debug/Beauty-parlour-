import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenBooking }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100 flex flex-col max-h-[90vh] relative animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="relative h-60 sm:h-72 w-full bg-pink-950">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Post Header on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full bg-pink-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 pb-4 border-b border-gray-100 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-pink-600" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-pink-600" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-pink-600" />
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Expert Tips Callout Box */}
          <div className="p-5 rounded-2xl bg-pink-50/80 border border-pink-200/80 space-y-3">
            <div className="flex items-center gap-2 text-pink-900 font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span>Priyanka's Pro Stylist Takeaway</span>
            </div>
            <ul className="space-y-2">
              {post.tips.map((tip, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Footer in Modal */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900">Want Personalized Beauty Guidance?</h4>
              <p className="text-xs text-gray-500">Visit our salon for a 1-on-1 skin &amp; hair analysis.</p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-red-800 hover:opacity-90 shadow-md transition-transform active:scale-98 cursor-pointer"
            >
              Book Salon Consultation
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
