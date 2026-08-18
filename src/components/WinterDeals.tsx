import React, { useState } from 'react';
import {
  HAIR_DEALS_MATRIX,
  SKIN_CARE_DEALS,
  FACIAL_PACKAGES,
  WAX_DEALS,
  SALON_INFO
} from '../data/salonData';
import { Sparkles, Scissors, Sparkle, Flame, Check, Tag, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WinterDealsProps {
  onSelectDealForBooking: (dealTitle: string) => void;
}

export const WinterDeals: React.FC<WinterDealsProps> = ({ onSelectDealForBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'facial' | 'skin' | 'wax'>('all');

  return (
    <section id="packages" className="py-24 bg-[#0e0e12] relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-950/80 to-rose-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-lg shadow-pink-950/50">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>Limited Time Offers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            WINTER <span className="text-gradient-pink italic font-normal">DEALS & PACKAGES</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Exclusive promotional prices on single process hair dyes, Brazilian Keratin, French whitening facials, Hydra clinical therapies and silk waxing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {[
            { id: 'all', label: 'All Winter Deals' },
            { id: 'hair', label: 'Hair & Keratin Deals' },
            { id: 'facial', label: 'Facial Packages' },
            { id: 'skin', label: 'Skin Care Deals' },
            { id: 'wax', label: 'Wax Deals' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/40 border border-pink-400/40'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
              }`}
              id={`deal-tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Hair & Keratin Matrix Section */}
        {(activeTab === 'all' || activeTab === 'hair') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/30">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Hair Color & Keratin Deals</h3>
                <p className="text-xs text-neutral-400">Fixed rate length-wise pricing based on hair density</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {HAIR_DEALS_MATRIX.map((matrix) => (
                <motion.div
                  key={matrix.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-pink-500/20 hover:border-pink-500/40 backdrop-blur-md shadow-2xl relative flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        {matrix.badge && (
                          <span className="inline-block px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/30 text-[10px] uppercase font-bold tracking-wider text-pink-300 mb-2">
                            {matrix.badge}
                          </span>
                        )}
                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                          {matrix.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                      {matrix.description}
                    </p>

                    {/* Table */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 mb-6">
                      <div className="grid grid-cols-3 bg-neutral-800/80 p-3 text-[11px] font-bold text-neutral-300 uppercase tracking-wider border-b border-white/5">
                        <span>Hair Length</span>
                        <span className="text-center text-pink-300">Thin Density</span>
                        <span className="text-right text-rose-300">Thick Density</span>
                      </div>
                      <div className="divide-y divide-white/5 text-xs sm:text-sm">
                        {matrix.pricing.map((row, rIdx) => (
                          <div key={rIdx} className="grid grid-cols-3 p-3.5 items-center hover:bg-white/5 transition-colors">
                            <span className="font-medium text-neutral-200 text-xs">{row.length.split(' – ')[0]}</span>
                            <span className="text-center font-bold text-pink-400">{row.thinPrice}</span>
                            <span className="text-right font-bold text-rose-400">{row.thickPrice}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => onSelectDealForBooking(matrix.title)}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-pink-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                      id={`book-hair-deal-${matrix.id}`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </button>
                    <a
                      href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello DELAQUA! I want to inquire about ${matrix.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-green-950/60 border border-green-500/30 text-green-400 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
                      title="WhatsApp Inquiry"
                      id={`whatsapp-hair-deal-${matrix.id}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Skin Care Deals (Deal 1 Rs 2,500 & Deal 2 Rs 3,000) */}
        {(activeTab === 'all' || activeTab === 'skin') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/30">
                <Sparkle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Skin Care Deals</h3>
                <p className="text-xs text-neutral-400">Complete multi-step facial + mani/pedi combinations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKIN_CARE_DEALS.map((deal) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border backdrop-blur-md shadow-2xl relative flex flex-col justify-between ${
                    deal.popular
                      ? 'border-pink-500/50 ring-1 ring-pink-500/30 bg-gradient-to-b from-neutral-900/90 to-[#170e14]'
                      : 'border-white/10 hover:border-pink-500/30'
                  }`}
                >
                  {deal.popular && (
                    <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="text-xs uppercase font-semibold tracking-widest text-pink-400 block mb-1">
                          {deal.subtitle}
                        </span>
                        <h4 className="text-2xl font-serif font-bold text-white">{deal.title}</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-pink-300">
                          {deal.price}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 my-4" />

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {deal.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300 bg-black/30 p-2 rounded-xl border border-white/5">
                          <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                          <span className="font-medium truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectDealForBooking(`${deal.subtitle} (${deal.price})`)}
                    className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    id={`book-skin-deal-${deal.id}`}
                  >
                    <span>Book This Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Luxury Facial Packages (24K Gold, Hydra, Thalgo) */}
        {(activeTab === 'all' || activeTab === 'facial') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Luxury Facial Packages</h3>
                <p className="text-xs text-neutral-400">Clinical aesthetic hydro-dermabrasion & royal gold treatments</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FACIAL_PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 sm:p-7 rounded-3xl bg-neutral-900/80 border backdrop-blur-md shadow-2xl relative flex flex-col justify-between ${
                    pkg.popular
                      ? 'border-pink-500 ring-2 ring-pink-500/30 bg-gradient-to-b from-[#190e16] to-[#0f0e13]'
                      : 'border-white/10 hover:border-pink-500/40'
                  }`}
                >
                  {pkg.tag && (
                    <span className="inline-block self-start px-3 py-1 rounded-full bg-pink-950 border border-pink-500/30 text-[10px] uppercase font-bold tracking-wider text-pink-300 mb-3">
                      {pkg.tag}
                    </span>
                  )}

                  <div>
                    <h4 className="text-xl font-serif font-bold text-white">{pkg.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1 mb-4">{pkg.subtitle}</p>

                    <div className="p-4 rounded-2xl bg-black/50 border border-white/5 mb-6 text-center">
                      <span className="text-xs text-neutral-400 uppercase tracking-widest block mb-1">Package Price</span>
                      <span className="text-3xl font-serif font-bold text-gradient-pink">{pkg.price}</span>
                    </div>

                    <ul className="space-y-2 mb-6 text-xs text-neutral-300">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectDealForBooking(`${pkg.title} (${pkg.price})`)}
                    className={`w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/40'
                        : 'bg-neutral-800 hover:bg-pink-600 text-white border border-white/10'
                    }`}
                    id={`book-facial-pkg-${pkg.id}`}
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Wax Deals (Deal 1, 2, 3) */}
        {(activeTab === 'all' || activeTab === 'wax') && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/30">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Silk Wax Deals</h3>
                <p className="text-xs text-neutral-400">Gentle, hygienic hair removal with calming aftercare</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WAX_DEALS.map((wax) => (
                <motion.div
                  key={wax.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-pink-500/30 backdrop-blur-md shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-serif font-bold text-white">{wax.title}</h4>
                      <span className="text-xl font-serif font-bold text-pink-300">{wax.price}</span>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 my-3" />

                    <ul className="space-y-2 mb-6 text-xs text-neutral-300">
                      {wax.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectDealForBooking(`${wax.title} (${wax.price})`)}
                    className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-pink-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    id={`book-wax-deal-${wax.id}`}
                  >
                    Book Deal
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
