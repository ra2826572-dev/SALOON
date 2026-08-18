import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Calendar, Sparkles, ChevronDown, Star, MapPin, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay & Pink Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_INFO.images.hero}
          alt="DELAQUA Beauty Salon Faisalabad Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Multilayer gradient for optimal readability & luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/75 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-950/30 via-transparent to-black/90" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#f43f8e_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-6">
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-pink-500/30 backdrop-blur-md mb-6 shadow-lg shadow-pink-950/40"
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-pink-200">
            {SALON_INFO.tagline}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          <span className="text-xs tracking-wider text-neutral-300">People's Colony No. 1</span>
        </motion.div>

        {/* Brand Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-2 mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-white drop-shadow-2xl">
            DELAQUA
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-pink-400 font-medium font-sans">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <span>BEAUTY SALON & SPA</span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-neutral-100 max-w-3xl leading-snug mt-3 font-normal"
        >
          “Your Beauty. Your Confidence. Your Signature.”
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed"
        >
          {SALON_INFO.heroSubheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 text-white font-medium text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-pink-600/40 hover:shadow-pink-600/70 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border border-pink-400/40 cursor-pointer"
            id="hero-book-btn"
          >
            <Calendar className="w-5 h-5" />
            <span>Book an Appointment</span>
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/60 hover:bg-neutral-900 text-white font-medium text-sm sm:text-base tracking-wider uppercase border border-white/20 hover:border-pink-400/50 backdrop-blur-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            id="hero-explore-btn"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Explore Services</span>
          </button>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold text-white text-base">
                <span>4.6 / 5.0</span>
              </div>
              <p className="text-[11px] text-neutral-400">133 Google Reviews</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Signature</div>
              <p className="text-[11px] text-neutral-400">By Asma Artistry</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Women Only</div>
              <p className="text-[11px] text-neutral-400">Private & Serene Spa</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-base truncate">Faisalabad</div>
              <p className="text-[11px] text-neutral-400 truncate">People's Colony No. 1</p>
            </div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 cursor-pointer text-neutral-400 hover:text-pink-400 transition-colors"
          onClick={onExploreServices}
          id="hero-scroll-indicator"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Discover</span>
            <ChevronDown className="w-4 h-4 text-pink-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
