import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PARLOUR_INFO } from '../data/parlourData';

export const WhatsAppFloat: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on Hover */}
      <div className="mr-3 px-3 py-1.5 rounded-2xl bg-gray-900/90 text-white text-xs font-medium shadow-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block whitespace-nowrap">
        Chat with Priyanka Beauty Stylist
      </div>

      <a
        id="whatsapp-floating-button"
        href={`https://wa.me/${PARLOUR_INFO.whatsappNumber}?text=Hello%20Priyanka%20Beauty%20Parlour,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20packages.`}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
