import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, Phone, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface AppointmentSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#09090c] via-[#140b12] to-[#09090c]">
      {/* Background Graphic & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl bg-neutral-900/80 border border-pink-500/30 backdrop-blur-xl shadow-2xl relative"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Signature By Asma • Faisalabad</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Ready for Your <span className="text-gradient-pink italic font-normal">Beauty Transformation?</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Book your appointment with Delaqua Beauty Salon today.
          </p>

          {/* Three CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Now */}
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs sm:text-sm tracking-wider uppercase border border-white/10 flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              id="cta-call-now-btn"
            >
              <Phone className="w-4 h-4 text-pink-400" />
              <span>Call Now ({SALON_INFO.phone})</span>
            </a>

            {/* WhatsApp Us */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Hello DELAQUA Beauty Salon! I want to book an appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-green-950/80 hover:bg-green-700 text-green-200 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase border border-green-500/40 flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              id="cta-whatsapp-us-btn"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>WhatsApp Us</span>
            </a>

            {/* Book Appointment */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-pink-600/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 border border-pink-400/30 cursor-pointer"
              id="cta-book-appointment-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span>🕒 Open 7 Days: 11:00 AM – 8:00 PM</span>
            <span>•</span>
            <span>📍 50-A Nizami Street, Block A, People's Colony 1</span>
            <span>•</span>
            <span>⭐ 4.6 Google Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
