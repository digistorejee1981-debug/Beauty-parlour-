import React from 'react';
import { 
  Sparkles, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Star, 
  Heart,
  Users,
  Clock,
  Check
} from 'lucide-react';
import { PARLOUR_INFO, WHY_CHOOSE_US } from '../data/parlourData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-pink-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-red-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>About Priyanka Beauty Parlour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Crafting Elegance, Celebrating <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              Your Unique Radiance
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Welcome to Priyanka Beauty Parlour, where luxury meets bespoke beauty care. Founded with a passion for uplifting confidence, our salon combines artistic finesse with certified techniques to give you an unforgettable beauty experience.
          </p>
        </div>

        {/* Grid: Image Showcase & Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Layered Photography & Visual Trust Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-950/10 border-4 border-white aspect-[4/5] sm:aspect-[4/4.5]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Priyanka Beauty Parlour Salon Treatment Suite"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-red-800 text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs mb-2 inline-block shadow-md">
                    Priyanka Signature Suite
                  </span>
                  <p className="text-sm font-medium text-pink-100">
                    A tranquil, ultra-hygienic haven designed for complete relaxation.
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Small Image Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 sm:w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] z-20">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
                  alt="Bridal Makeup Artistry"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-pink-950/20" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 z-20 bg-gradient-to-br from-pink-600 to-red-800 text-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-pink-900/30 flex items-center gap-3.5 border border-pink-300/40">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold leading-none">5+</div>
                  <div className="text-xs text-pink-100 font-medium mt-0.5">Years of Excellence</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Core Pillars & Features */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Why Discerning Women Choose Us
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe beauty care is not just an appointment—it’s an intimate ritual of self-care. Every touch, product, and technique is curated with deep respect for your skin and hair health.
              </p>
            </div>

            {/* 5 Highlights listed cleanly */}
            <div className="space-y-3.5 mt-2">
              {WHY_CHOOSE_US.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-pink-50/40 hover:bg-pink-50/80 border border-pink-100/60 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-600 to-red-800 flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-red-800 shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:opacity-95 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Schedule Your Pampering Session</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Animated Statistics Banner */}
        <div className="mt-20 pt-10 border-t border-pink-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PARLOUR_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative text-center p-6 rounded-3xl bg-gradient-to-b from-[#fffafb] to-white border border-pink-50 shadow-sm hover:shadow-md hover:border-pink-100 transition-all group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold text-gray-700 tracking-wide uppercase">
                  {stat.label}
                </div>
                <div className="mt-1 text-[11px] text-gray-400">
                  {idx === 0 && 'Verified beauty patrons'}
                  {idx === 1 && 'Serving happy clients'}
                  {idx === 2 && 'Customized treatments'}
                  {idx === 3 && 'Guaranteed happiness'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
