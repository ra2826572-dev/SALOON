import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="flex flex-col items-end gap-3 pointer-events-auto">
        {/* Quick Booking Button Pill */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenBooking}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-xl shadow-pink-600/40 border border-pink-400/40 backdrop-blur-md cursor-pointer"
          id="floating-book-pill"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </motion.button>

        {/* WhatsApp Floating Chat Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Hello DELAQUA Beauty Salon! I want to ask about services and book an appointment.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-500/40 border-2 border-white/20 relative group cursor-pointer"
          aria-label="Chat on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-black/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
            Chat on WhatsApp
          </span>
          {/* Notification ping */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-pink-500 border-2 border-white animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-pink-500 border-2 border-white" />
        </motion.a>

        {/* Back To Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-neutral-900/90 hover:bg-pink-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              aria-label="Scroll to top"
              id="floating-back-to-top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
