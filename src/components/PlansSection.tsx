import React from 'react';
import { Sparkles, Check, Crown, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BEAUTY_PLANS } from '../data/parlourData';

interface PlansSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="plan" className="py-20 lg:py-28 bg-[#fffafb] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-pink-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3">
            <Crown className="w-3.5 h-3.5 text-pink-600" />
            <span>Curated Beauty Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Indulgent Beauty Plans <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              Crafted for Every Occasion
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Enjoy premium bundled salon rituals offering maximum relaxation, glowing beauty results, and substantial package savings.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {BEAUTY_PLANS.map((plan) => {
            const isPremium = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPremium
                    ? 'bg-gradient-to-br from-pink-600 via-pink-700 to-red-800 text-white shadow-xl shadow-pink-900/25 border-2 border-pink-300/40 lg:-translate-y-3 p-8 sm:p-9'
                    : 'bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-xl p-7 sm:p-8 hover:border-pink-200'
                }`}
              >
                {/* Recommended Badge on Premium Plan */}
                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap border border-white/30">
                    <Crown className="w-3.5 h-3.5 text-amber-300" />
                    <span>Best Value &amp; Recommended</span>
                  </div>
                )}

                <div>
                  {/* Header Title & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isPremium
                          ? 'bg-white/20 text-white backdrop-blur-xs'
                          : 'bg-pink-100 text-pink-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs opacity-80">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.duration}</span>
                    </div>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-bold mt-3 ${isPremium ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>

                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isPremium ? 'text-pink-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-gray-100/20">
                    <div className="flex items-baseline gap-3">
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isPremium ? 'text-white' : 'text-gray-900'}`}>
                        ₹{plan.price.toLocaleString()}
                      </span>
                      {plan.originalPrice && (
                        <span className={`text-sm sm:text-base line-through ${isPremium ? 'text-pink-200' : 'text-gray-400'}`}>
                          ₹{plan.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs block mt-1 ${isPremium ? 'text-pink-100/90' : 'text-gray-500'}`}>
                      All taxes &amp; professional products included
                    </span>
                  </div>

                  {/* Included Services Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className={`text-xs font-bold tracking-wider uppercase ${isPremium ? 'text-pink-200' : 'text-pink-700'}`}>
                      Included in this plan:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPremium ? 'bg-white/20 text-white' : 'bg-pink-100 text-pink-700'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={isPremium ? 'text-pink-50' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                      isPremium
                        ? 'bg-white text-pink-700 hover:bg-pink-50 hover:scale-[1.02] shadow-pink-900/30'
                        : 'bg-gradient-to-r from-pink-600 to-red-800 text-white hover:opacity-95 hover:scale-[1.02]'
                    }`}
                  >
                    <span>Book {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className={`text-center text-[11px] mt-2.5 ${isPremium ? 'text-pink-200' : 'text-gray-400'}`}>
                    Instant confirmation • Reschedule anytime
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
