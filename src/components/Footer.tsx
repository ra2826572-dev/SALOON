import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, MapPin, Phone, Clock, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold font-serif text-xl shadow-lg shadow-pink-500/20 border border-white/20">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-wider text-white">
                  DELAQUA
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-pink-400 font-semibold">
                  Signature By Asma
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Premium women’s beauty salon & spa in Faisalabad. Dedicated to exceptional hair artistry, clinical skin care, bridal elegance and luxury relaxation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-neutral-800 transition-all"
                aria-label="Instagram"
                id="footer-social-instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-neutral-800 transition-all"
                aria-label="Facebook"
                id="footer-social-facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Hello DELAQUA Beauty Salon!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-green-400 hover:border-green-500 hover:bg-green-950/60 transition-all"
                aria-label="WhatsApp"
                id="footer-social-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-pink-400 transition-colors inline-block py-0.5"
                    id={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Featured Deals
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-neutral-400 hover:text-white transition-colors">Hair Dye with Blow Dry</li>
              <li className="text-neutral-400 hover:text-white transition-colors">Keratin Smoothing</li>
              <li className="text-neutral-400 hover:text-white transition-colors">Fruit Radiance Deal (Rs. 2.5k)</li>
              <li className="text-neutral-400 hover:text-white transition-colors">French Whitening Glow (Rs. 3k)</li>
              <li className="text-neutral-400 hover:text-white transition-colors">Hydra Facial (Rs. 8k)</li>
              <li className="text-neutral-400 hover:text-white transition-colors">24K Gold Facial (Rs. 5k)</li>
              <li className="text-neutral-400 hover:text-white transition-colors">Silk Wax Packages</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Salon Location
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>50-A Nizami Street, Block A, People’s Colony No. 1, Faisalabad, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-white hover:text-pink-400 font-medium">
                  {SALON_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <span>11:00 AM – 8:00 PM (Mon–Sun)</span>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-[11px] text-pink-300 font-semibold px-2.5 py-1 rounded-full bg-pink-950/60 border border-pink-500/20">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  ⭐ 4.6 Rating (133 Google Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Delaqua Beauty Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Signature By Asma</span>
            <span>•</span>
            <span className="text-neutral-400">Faisalabad, Pakistan</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-900 hover:bg-pink-600 text-white transition-colors border border-white/10 flex items-center justify-center cursor-pointer ml-2"
              title="Back to Top"
              id="footer-back-to-top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
