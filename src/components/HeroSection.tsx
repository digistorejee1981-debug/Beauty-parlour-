import React from 'react';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, Heart } from 'lucide-react';
import { Hero3DScene } from './Hero3DScene';
import { PARLOUR_INFO } from '../data/parlourData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 bg-pink-50/30"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-pink-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Small Badge */}
            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase rounded-full w-max shadow-xs">
              BEAUTY • STYLE • CONFIDENCE
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.12] tracking-tight">
              Enhance Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
                Natural Beauty
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl pr-2">
              Discover professional beauty, makeup, skincare and hair services designed to make you look and feel your absolute best.
            </p>

            {/* CTAs: Action Button Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                id="hero-book-appointment-btn"
                onClick={onOpenBooking}
                className="px-7 py-3 bg-gradient-to-r from-pink-600 to-red-800 text-white rounded-xl text-sm font-semibold shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:opacity-95 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={scrollToServices}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
              >
                Our Services
              </button>

              <button
                onClick={scrollToGallery}
                className="px-6 py-3 border border-pink-200 text-pink-700 rounded-xl text-sm font-semibold hover:bg-pink-100/70 transition-all cursor-pointer"
              >
                View Gallery
              </button>
            </div>

            {/* Vibrant Stat Cards Grid */}
            <div className="pt-4 w-full grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                <div className="text-2xl font-bold text-pink-600">500+</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium mt-0.5">Happy Clients</div>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                <div className="text-2xl font-bold text-pink-600">20+</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium mt-0.5">Beauty Services</div>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                <div className="text-2xl font-bold text-pink-600">5+</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium mt-0.5">Years Experience</div>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium mt-0.5">Hygienic Care</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Beauty Product Scene with Vibrant Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl bg-white p-3 shadow-2xl border-[10px] border-pink-50/60 overflow-hidden">
              
              {/* Top Promo Banner inside Card */}
              <div className="px-4 py-2 bg-gradient-to-r from-pink-50 to-white rounded-xl border border-pink-100 flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800">
                  <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                  <span>Premium Salon Suite</span>
                </div>
                <span className="text-[11px] text-pink-600 font-bold uppercase tracking-wider">
                  Special 20% Off
                </span>
              </div>

              {/* Three.js Interactive 3D Component */}
              <Hero3DScene />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
