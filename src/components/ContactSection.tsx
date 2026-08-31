import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PARLOUR_INFO, SERVICES_DATA, BEAUTY_PLANS } from '../data/parlourData';
import { AppointmentFormData } from '../types';

interface ContactSectionProps {
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'bridal-makeup',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:30 PM', 
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#db2777', '#be185d', '#991b1b', '#f472b6']
        });
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(PARLOUR_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const getSelectedServiceName = () => {
    const s = SERVICES_DATA.find((item) => item.id === formData.serviceId);
    if (s) return s.name;
    const p = BEAUTY_PLANS.find((item) => item.id === formData.serviceId);
    if (p) return `${p.name} Package`;
    return 'General Beauty Consultation';
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-[#fffafb] to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-red-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-pink-600" />
            <span>Visit Us &amp; Book Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Schedule Your Appointment <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              &amp; Contact Our Stylists
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Have questions about a service or ready to lock in your bridal makeover? Fill out the form or reach us via phone &amp; WhatsApp directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info & Opening Hours & Interactive Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Cards */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-pink-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 pb-3 border-b border-gray-100">
                Priyanka Beauty Parlour
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Call Us Directly</div>
                  <a
                    href={`tel:${PARLOUR_INFO.phone}`}
                    className="text-base font-bold text-gray-900 hover:text-pink-700 transition-colors"
                  >
                    {PARLOUR_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Quick telephone appointments &amp; queries</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Instant WhatsApp Chat</div>
                  <a
                    href={`https://wa.me/${PARLOUR_INFO.whatsappNumber}?text=Hi%20Priyanka%20Beauty%20Parlour,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Instant quotes, photos &amp; instant replies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Email Inquiries</div>
                  <a
                    href={`mailto:${PARLOUR_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-gray-900 hover:text-pink-700 transition-colors break-all"
                  >
                    {PARLOUR_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address with Copy Option */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 font-medium">Salon Location</div>
                    <button
                      onClick={copyAddress}
                      className="text-xs text-pink-700 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      {copiedAddress ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">
                    {PARLOUR_INFO.address}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 font-medium">Operating Hours</div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                      Open Today
                    </span>
                  </div>
                  <div className="mt-1 space-y-1 text-xs text-gray-700">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Mon – Fri:</span>
                      <span className="font-semibold">{PARLOUR_INFO.openingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday:</span>
                      <span className="font-semibold">{PARLOUR_INFO.openingHours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sunday:</span>
                      <span className="font-semibold">{PARLOUR_INFO.openingHours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Stylized Map Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-600 via-pink-700 to-red-800 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col justify-between h-44">
                <div>
                  <div className="flex items-center gap-2 text-pink-200 text-xs font-semibold uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4 text-pink-300" />
                    <span>Crystal Plaza Branch, Mumbai</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Find Us on Google Maps</h4>
                  <p className="text-xs text-pink-100/80 mt-1">Easy parking &amp; central access near Orchid Avenue.</p>
                </div>

                <a
                  href={PARLOUR_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-pink-700 text-xs font-bold hover:bg-pink-50 shadow-md transition-transform active:scale-98 w-fit cursor-pointer"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Decorative map grid lines */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
            </div>

          </div>

          {/* Right: Contact & Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-pink-100 shadow-xl shadow-pink-950/5 relative">
              
              {isBooked ? (
                <div className="py-12 px-4 text-center flex flex-col items-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Appointment Request Received!
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-md">
                    Thank you, <span className="font-semibold text-pink-700">{formData.fullName}</span>. Our reception team will call you at <span className="font-semibold">{formData.phone}</span> to confirm your session for <span className="font-semibold text-pink-700">{getSelectedServiceName()}</span> on <span className="font-semibold">{formData.preferredDate || 'your selected date'}</span>.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-pink-50 border border-pink-100 text-xs text-pink-900 max-w-sm text-left space-y-1">
                    <div className="font-bold uppercase tracking-wider text-[11px] text-pink-800">Booking Summary:</div>
                    <div>• Service: {getSelectedServiceName()}</div>
                    <div>• Time: {formData.preferredTime}</div>
                    <div>• Location: Crystal Plaza, Mumbai</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceId: 'bridal-makeup',
                        preferredDate: '',
                        preferredTime: '11:00 AM',
                        message: '',
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-colors cursor-pointer"
                  >
                    Book Another Service
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Book an Appointment
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Reserve your slot in less than 60 seconds with instant WhatsApp &amp; phone confirmation.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pooja Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. pooja@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Select Service / Plan <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors cursor-pointer"
                      >
                        <optgroup label="✨ Special Beauty Plans">
                          {BEAUTY_PLANS.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} Package (₹{p.price})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="💄 Individual Salon Services">
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name} (Starts ₹{s.startingPrice})
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Preferred Date <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Message / Requests */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Special Notes / Bridal Queries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any skin sensitivity, bridal trial requests, or specific hairstyles..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-sm text-gray-900 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-pink-600 to-red-800 shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:opacity-95 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Reserving Your Slot...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit &amp; Book Appointment</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-gray-400 mt-2">
                      🔒 No upfront payment required. Pay conveniently at the salon after service.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
