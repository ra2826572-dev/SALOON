import React, { useState } from 'react';
import { SERVICES } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types';
import { Sparkles, Scissors, Sparkle, HandMetal, Flame, Palette, Clock, Check, Search, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory; name: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'hair', name: 'Hair', icon: Scissors },
    { id: 'skin', name: 'Skin & Facial', icon: Sparkle },
    { id: 'nails', name: 'Nails', icon: HandMetal },
    { id: 'waxing', name: 'Waxing', icon: Flame },
    { id: 'makeup', name: 'Makeup & Bridal', icon: Palette },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-[#09090c] relative">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Signature Salon Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Crafted for <span className="text-gradient-pink italic font-normal">Every Hair & Skin Need</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            From precision styling and Brazilian Keratin to European marine facials and royal bridal makeovers in Faisalabad.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30 border border-pink-400/40'
                      : 'bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/5'
                  }`}
                  id={`service-tab-${cat.id}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search hair, facial, bridal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-neutral-900/90 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-pink-500/50 transition-colors"
              id="service-search-input"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-3xl bg-neutral-900/70 border border-white/10 hover:border-pink-500/40 overflow-hidden backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-pink-950/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/40" />

                    {/* Category / Popular Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-pink-300 border border-pink-500/30">
                        {service.category}
                      </span>
                      {service.popular && (
                        <span className="px-2.5 py-1 rounded-full bg-rose-600 text-[10px] uppercase font-bold tracking-wider text-white shadow-md">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Duration badge */}
                    {service.duration && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] text-neutral-300 flex items-center gap-1 border border-white/10">
                        <Clock className="w-3 h-3 text-pink-400" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pink-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    {service.details && (
                      <ul className="mt-4 space-y-1.5 text-xs text-neutral-300">
                        {service.details.slice(0, 3).map((det, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                            <span className="truncate">{det}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Footer with Price & Book Now */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Starting Price
                    </span>
                    <span className="text-sm sm:text-base font-bold text-pink-300 font-serif">
                      {service.price || 'Consultation'}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-pink-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    id={`service-book-btn-${service.id}`}
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-neutral-900/40 rounded-3xl border border-white/5">
            <p className="text-neutral-400 text-sm">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-pink-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
