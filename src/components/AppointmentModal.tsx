import React, { useState, useEffect } from 'react';
import { SALON_INFO, SERVICES } from '../data/salonData';
import { BookingFormData } from '../types';
import { X, Calendar, Clock, Phone, User, MessageSquare, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  initialService = '',
  onClose,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: initialService,
    preferredDate: '',
    preferredTime: '12:00 PM',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build formatted WhatsApp message as direct instant confirmation option
    const text = `*New Appointment Request - DELAQUA Salon*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service || 'General Consultation'}%0A*Date:* ${formData.preferredDate}%0A*Time:* ${formData.preferredTime}%0A*Notes:* ${formData.message || 'None'}`;
    
    // Automatically prepare link
    setTimeout(() => {
      const waUrl = `https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`;
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
        id="appointment-modal-overlay"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-xl w-full bg-[#121218] rounded-3xl border border-pink-500/30 p-6 sm:p-8 shadow-2xl my-8"
          id="appointment-modal-content"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-pink-600 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-[11px] font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Reserve Your Session</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Book an Appointment
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  DELAQUA Beauty Salon • Signature By Asma, Faisalabad
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" id="appointment-modal-form">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/70 transition-colors"
                      id="modal-input-name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="0321 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/70 transition-colors"
                      id="modal-input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Select Service or Deal *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/70 transition-colors"
                    id="modal-select-service"
                  >
                    <option value="">-- Choose a Service or Deal --</option>
                    <optgroup label="Winter Deals">
                      <option value="Single Process Hair Dye with Blow Dry">Single Process Hair Dye with Blow Dry</option>
                      <option value="Keratin Smoothing Treatment">Keratin Smoothing Treatment</option>
                      <option value="Fruit Radiance Package (Rs. 2,500)">Fruit Radiance Package (Rs. 2,500)</option>
                      <option value="French Whitening Glow (Rs. 3,000)">French Whitening Glow (Rs. 3,000)</option>
                      <option value="24K Gold Facial Deal (Rs. 5,000)">24K Gold Facial Deal (Rs. 5,000)</option>
                      <option value="Hydra Facial Package (Rs. 8,000)">Hydra Facial Package (Rs. 8,000)</option>
                      <option value="Thalgo French Marine Facial (Rs. 12,000)">Thalgo French Marine Facial (Rs. 12,000)</option>
                      <option value="Wax Deal 1 (Rs. 1,400)">Wax Deal 1 (Rs. 1,400)</option>
                      <option value="Wax Deal 2 (Rs. 1,800)">Wax Deal 2 (Rs. 1,800)</option>
                      <option value="Wax Deal 3 (Rs. 2,500)">Wax Deal 3 (Rs. 2,500)</option>
                    </optgroup>
                    <optgroup label="All Signature Services">
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.category})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/70 transition-colors"
                        id="modal-input-date"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/70 transition-colors"
                        id="modal-select-time"
                      >
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Special Request / Notes
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                    <textarea
                      rows={2}
                      placeholder="Hair length, specific artist preference, or skin sensitivities..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/70 transition-colors"
                      id="modal-input-message"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white font-semibold text-sm tracking-wider uppercase shadow-xl shadow-pink-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all mt-2"
                  id="modal-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST APPOINTMENT</span>
                </button>

                <p className="text-[11px] text-neutral-400 text-center">
                  Or call directly: <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-pink-400 underline font-medium">{SALON_INFO.phone}</a>
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-pink-600/20 border border-pink-500 text-pink-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-2">
                Thank You, {formData.name}!
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto mb-4">
                Your appointment request for <strong className="text-pink-400">{formData.service}</strong> on <strong className="text-white">{formData.preferredDate} at {formData.preferredTime}</strong> has been received.
              </p>
              <p className="text-xs text-neutral-400 mb-6">
                We are opening WhatsApp to instantly connect you with our salon desk coordinator at 0321 7664078.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
