import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { PARLOUR_INFO } from '../data/parlourData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'plan', 'gallery', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Plan', href: '#plan', id: 'plan' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 px-4 border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-pink-500" />
              <span>Mon - Sun: {PARLOUR_INFO.openingHours.weekdays}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-pink-500" />
              <span>Crystal Plaza, Mumbai</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PARLOUR_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-pink-500" />
              <span>Call: {PARLOUR_INFO.phoneDisplay}</span>
            </a>
            <span className="text-gray-700">|</span>
            <div className="flex items-center gap-1 text-pink-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span>Special 20% Off on First Visit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-pink-100/40 border-b border-pink-50 py-3'
            : 'bg-white py-4 border-b border-pink-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-600 to-red-800 text-white font-bold text-xl shadow-md shadow-pink-300/40 group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-gray-800 leading-none group-hover:text-pink-600 transition-colors">
                Priyanka <span className="text-pink-600">Beauty</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mt-0.5">
                Luxury Parlour
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-500">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-pink-600 font-semibold border-b-2 border-pink-600 pb-1'
                      : 'hover:text-pink-600'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-pink-600 to-red-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-book-icon-btn"
              onClick={() => onOpenBooking()}
              className="sm:hidden p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100"
              title="Book Appointment"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-pink-50 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-pink-50 text-pink-600 font-semibold'
                        : 'text-gray-700 hover:bg-pink-50/60 hover:text-pink-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-pink-600" />}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-pink-50 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-600 to-red-800 shadow-lg shadow-pink-200 hover:opacity-95"
              >
                Book Appointment
              </button>
              <a
                href={`tel:${PARLOUR_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-gray-800 bg-pink-50 hover:bg-pink-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-pink-600" />
                <span>Call {PARLOUR_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
