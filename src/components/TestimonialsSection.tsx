import React from 'react';
import { Star, Sparkles, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/parlourData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#fffafb] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-pink-600 text-pink-600" />
            <span>Loved by 500+ Clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Client Words &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              Glow Stories
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Hear directly from brides, regular clients, and salon patrons who trust Priyanka Beauty Parlour.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative p-7 sm:p-8 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-pink-200 absolute top-6 right-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{t.comment}"
                </p>

                {/* Service Tag */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[11px] font-semibold text-pink-700">
                  <CheckCircle2 className="w-3 h-3 text-pink-600" />
                  <span>{t.service}</span>
                </div>
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role} • {t.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
