import React from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Heart,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { PARLOUR_INFO, SERVICES_DATA } from '../data/parlourData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Beauty Services', href: '#services' },
    { label: 'Pricing Plans', href: '#plan' },
    { label: 'Visual Gallery', href: '#gallery' },
    { label: 'Beauty Blog', href: '#blog' },
    { label: 'Book Appointment', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a050d] via-[#2d0716] to-[#120208] text-pink-100 relative overflow-hidden border-t border-pink-950">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-pink-900/40">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-600 to-red-800 flex items-center justify-center shadow-lg shadow-pink-950/40">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Priyanka
                </span>
                <span className="text-xs font-semibold tracking-widest text-pink-300 uppercase mt-0.5">
                  Beauty Parlour
                </span>
              </div>
            </div>

            <p className="text-sm text-pink-200/80 leading-relaxed max-w-sm">
              {PARLOUR_INFO.description}
            </p>

            {/* Social Icons & WhatsApp Button */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PARLOUR_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 text-pink-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PARLOUR_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 text-pink-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PARLOUR_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 text-pink-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${PARLOUR_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all ml-1 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-pink-200/80 hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 text-sm text-pink-200/80">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-white hover:underline transition-colors flex items-center justify-between"
                  >
                    <span>{service.name}</span>
                    <span className="text-xs text-pink-300">from ₹{service.startingPrice}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information & Hours (3.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact &amp; Timings
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-pink-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>{PARLOUR_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`tel:${PARLOUR_INFO.phone}`} className="hover:text-white transition-colors">
                  {PARLOUR_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`mailto:${PARLOUR_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {PARLOUR_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Fri: {PARLOUR_INFO.openingHours.weekdays}</div>
                  <div>Sat–Sun: {PARLOUR_INFO.openingHours.saturday}</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-pink-600 to-red-800 hover:opacity-90 text-white text-xs font-bold transition-all shadow-md cursor-pointer text-center"
              >
                Book Appointment Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-300/70">
          <div>
            © 2026 Priyanka Beauty Parlour. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" /> for Radiant Elegance
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-pink-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
