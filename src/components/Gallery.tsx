import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';
import { Sparkles, Eye, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryProps {
  onBookLook: (title: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onBookLook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon & Exterior' },
    { id: 'makeup', label: 'Bridal & Makeup' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'skin', label: 'Facial & Skin' },
    { id: 'nails', label: 'Nails & Pedicure' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleSelectNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handleSelectPrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0e0e12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Salon Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The <span className="text-gradient-pink italic font-normal">DELAQUA Atmosphere</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our state-of-the-art Faisalabad interior, signature bridal transformations, nail spa bar and treatment lounges.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
              }`}
              id={`gallery-filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-neutral-900 shadow-xl h-80"
                id={`gallery-item-${item.id}`}
              >
                {/* Image with zoom on hover */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-pink-600/90 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-lg shadow-pink-900/50 scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                    <span>View Image</span>
                  </div>
                </div>

                {/* Bottom Caption & Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelectNext={handleSelectNext}
        onSelectPrev={handleSelectPrev}
        onBookLook={onBookLook}
      />
    </section>
  );
};
