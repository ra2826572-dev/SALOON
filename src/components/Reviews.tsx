import React from 'react';
import { REVIEWS, SALON_INFO } from '../data/salonData';
import { Star, Sparkles, CheckCircle2, MessageSquarePlus, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#09090c] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Overall Google Rating Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Loved by Women Across <span className="text-gradient-pink italic font-normal">Faisalabad</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full mb-8" />

          {/* Big Score Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-pink-500/30 backdrop-blur-xl shadow-2xl inline-flex flex-col sm:flex-row items-center justify-between gap-6 max-w-2xl w-full"
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl font-serif font-black text-white flex items-baseline gap-1">
                <span>{SALON_INFO.rating}</span>
                <span className="text-2xl text-pink-400 font-sans font-medium">/ 5</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-300 font-semibold mt-1">
                  Based on {SALON_INFO.totalReviews} Google Reviews
                </p>
                <p className="text-[11px] text-pink-400 font-medium">
                  Verified Top Rated Women Salon in People's Colony 1
                </p>
              </div>
            </div>

            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-pink-600 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 border border-white/10 shrink-0 cursor-pointer shadow-md"
              id="write-google-review-btn"
            >
              <MessageSquarePlus className="w-4 h-4 text-pink-300" />
              <span>Write a Review</span>
            </a>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-pink-500/40 backdrop-blur-md shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-pink-500/20 group-hover:text-pink-500/40 transition-colors" />
                </div>

                {/* Review Quote */}
                <p className="text-neutral-200 text-sm italic font-serif leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-white text-sm">
                    <span>{review.author}</span>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    )}
                  </div>
                  {review.service && (
                    <span className="text-[11px] text-pink-400 font-medium block">
                      {review.service}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-neutral-400 font-normal">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
