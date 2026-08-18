import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Phone, Calendar, Menu, X, Star, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'packages', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Notice */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="bg-black/90 text-xs py-1.5 px-4 border-b border-white/5 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-neutral-300">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-pink-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                Winter Deals & Bridal Bookings Now Open
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400">
                {SALON_INFO.shortAddress}
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400">
                🕒 {SALON_INFO.openingHours}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.6</span>
                <span className="text-neutral-400 font-normal">({SALON_INFO.totalReviews} Google Reviews)</span>
              </div>
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="flex items-center gap-1 text-neutral-300 hover:text-pink-400 transition-colors"
                id="topbar-call-link"
              >
                <Phone className="w-3 h-3 text-pink-400" />
                <span>{SALON_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0e0e12]/95 backdrop-blur-xl shadow-2xl shadow-black/80 border-b border-pink-500/20 py-3'
              : 'bg-gradient-to-b from-black/80 to-transparent py-4'
          }`}
          id="main-navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              id="nav-brand-logo"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold font-serif text-xl shadow-lg shadow-pink-500/20 border border-white/20 group-hover:scale-105 transition-transform">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-white group-hover:text-pink-300 transition-colors">
                  DELAQUA
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-pink-400 font-medium">
                  Signature By Asma
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-neutral-900/60 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                    id={`nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Actions: WhatsApp + Book Appointment */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Hello DELAQUA Salon! I would like to inquire about booking an appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-full border border-green-500/30 bg-green-950/30 text-green-300 hover:bg-green-600 hover:text-white transition-all text-xs font-medium flex items-center gap-1.5 shadow-sm"
                id="nav-whatsapp-btn"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-size-200 hover:bg-pos-100 text-white font-medium text-xs tracking-wider uppercase shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 hover:scale-[1.02] transition-all flex items-center gap-2 border border-pink-400/30 cursor-pointer"
                id="nav-book-appointment-btn"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-full bg-pink-600 text-white text-xs font-medium flex items-center gap-1 sm:hidden"
                id="mobile-nav-quick-book"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white hover:border-pink-500/40 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
                id="nav-mobile-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-pink-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
            id="mobile-drawer"
          >
            <div className="space-y-2 mt-4">
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-pink-500/20 mb-6 text-center">
                <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold block mb-1">
                  Women's Salon & Spa
                </span>
                <h3 className="text-xl font-serif text-white font-bold">DELAQUA Beauty Salon</h3>
                <p className="text-xs text-neutral-400 mt-1">Signature By Asma • Faisalabad</p>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-pink-600/20 text-pink-300 border border-pink-500/30'
                      : 'text-neutral-200 hover:bg-neutral-800'
                  }`}
                  id={`mobile-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2"
                id="mobile-drawer-book-btn"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Hello DELAQUA Salon! I would like to book an appointment.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-green-950/60 border border-green-500/30 text-green-300 text-xs font-semibold flex items-center justify-center gap-2"
                  id="mobile-drawer-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2"
                  id="mobile-drawer-call-btn"
                >
                  <Phone className="w-4 h-4 text-pink-400" />
                  Call Now
                </a>
              </div>

              <div className="text-center text-xs text-neutral-500 pt-2">
                50-A Nizami Street, People's Colony 1, Faisalabad
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
