import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, CheckCircle2, Sparkles, Clock, Phone, User, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, BEAUTY_PLANS, PARLOUR_INFO } from '../data/parlourData';
import { AppointmentFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  initialServiceId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialServiceId,
  onClose,
}) => {
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

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#be185d', '#f43f5e', '#f59e0b', '#fb7185']
        });
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  const getSelectedServiceName = () => {
    const s = SERVICES_DATA.find((item) => item.id === formData.serviceId);
    if (s) return s.name;
    const p = BEAUTY_PLANS.find((item) => item.id === formData.serviceId);
    if (p) return `${p.name} Package`;
    return 'Beauty Consultation';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100 relative animate-in zoom-in-95 duration-200 max-h-[95vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-pink-600 via-pink-700 to-red-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-pink-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>Priyanka Beauty Parlour</span>
          </div>

          <h3 className="text-2xl font-bold font-serif">Quick Appointment</h3>
          <p className="text-xs text-pink-100 mt-0.5">
            Instant booking confirmation with zero upfront payment.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isBooked ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Appointment Reserved!</h4>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xs">
                We have registered your booking for <span className="font-semibold text-pink-700">{getSelectedServiceName()}</span>. Our team will call or WhatsApp <span className="font-semibold">{formData.phone}</span> shortly.
              </p>

              <div className="mt-5 p-3.5 rounded-xl bg-pink-50 border border-pink-100 text-xs text-pink-900 w-full text-left space-y-1">
                <div>• Client: {formData.fullName}</div>
                <div>• Service: {getSelectedServiceName()}</div>
                <div>• Slot: {formData.preferredDate} at {formData.preferredTime}</div>
              </div>

              <button
                onClick={() => {
                  setIsBooked(false);
                  onClose();
                }}
                className="mt-6 w-full py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-pink-600 to-red-800 hover:opacity-90 cursor-pointer shadow-md shadow-pink-200"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deepika Mehra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs sm:text-sm text-gray-900"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs sm:text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="deepika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs sm:text-sm text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Select Service / Package <span className="text-pink-600">*</span>
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs sm:text-sm text-gray-900 cursor-pointer"
                >
                  <optgroup label="✨ Curated Beauty Packages">
                    {BEAUTY_PLANS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} Package (₹{p.price})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="💄 Salon Services">
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (₹{s.startingPrice})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs sm:text-sm text-gray-900 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs sm:text-sm text-gray-900 cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Notes / Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="Optional preferences or bridal requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-pink-50/30 border border-gray-200 focus:border-pink-600 focus:bg-white focus:outline-none text-xs text-gray-900 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-red-800 shadow-md shadow-pink-200 hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Appointment Slot</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
