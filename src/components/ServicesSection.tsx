import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Scissors, Sparkle, Heart, Gem } from 'lucide-react';
import { SERVICES_DATA } from '../data/parlourData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Care & Styling' },
    { id: 'makeup', label: 'Party Makeup' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'skincare', label: 'Facial & Skincare' },
    { id: 'spa', label: 'Spa & Grooming' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fffafb] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-red-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Our Signature Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Indulgent Beauty &amp; Salon <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              Experiences Tailored for You
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            From precision cuts and restorative hair spas to luminous facials and majestic bridal makeovers, explore our complete salon menu.
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

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-white border border-pink-100/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-950/10 hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Area */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-pink-50">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                {/* Popular Ribbon */}
                {service.popular && (
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-red-800 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-gray-800 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-pink-600" />
                  <span>{service.duration}</span>
                </div>

                {/* Price Tag in Image */}
                <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-gray-900/85 backdrop-blur-xs text-white text-xs font-bold shadow-sm">
                  <span>Starts ₹{service.startingPrice}</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefit Checklist */}
                  <div className="mt-4 pt-4 border-t border-pink-50 space-y-1.5">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Starting from</span>
                    <span className="text-lg font-bold text-pink-600">₹{service.startingPrice}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-pink-700 bg-pink-50 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-800 group-hover:text-white transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
