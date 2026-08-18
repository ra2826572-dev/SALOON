import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onBookLook: (title: string) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onSelectNext,
  onSelectPrev,
  onBookLook,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
        id="gallery-lightbox-overlay"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-colors z-50 cursor-pointer"
          aria-label="Close Lightbox"
          id="lightbox-close-btn"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-pink-600 text-white border border-white/10 transition-all z-50 cursor-pointer"
          aria-label="Previous Image"
          id="lightbox-prev-btn"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-pink-600 text-white border border-white/10 transition-all z-50 cursor-pointer"
          aria-label="Next Image"
          id="lightbox-next-btn"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-4xl w-full bg-neutral-900/90 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Main Image */}
          <div className="md:w-2/3 bg-black flex items-center justify-center p-2">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="max-h-[50vh] md:max-h-[75vh] w-full object-contain rounded-2xl"
            />
          </div>

          {/* Details Sidebar */}
          <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-neutral-950/80">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-pink-950 text-pink-300 text-[10px] font-bold uppercase tracking-widest border border-pink-500/30">
                  {item.category}
                </span>
                <span className="text-xs text-neutral-400">DELAQUA Faisalabad</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.caption}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onBookLook(item.title);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-pink-600/40 flex items-center justify-center gap-2 cursor-pointer transition-all"
                id="lightbox-book-look-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Look / Service</span>
              </button>

              <p className="text-[11px] text-neutral-500 text-center">
                50-A Nizami Street, People's Colony 1
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
