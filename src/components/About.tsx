import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, Users, Crown, HeartHandshake, CheckCircle2, Clock, MapPin, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const featureCards = [
    {
      title: 'Professional Team',
      description: 'Experienced beauty professionals dedicated to quality service, trend-setting styling and hygienic care.',
      icon: Users,
      highlight: 'Certified Experts'
    },
    {
      title: 'Premium Experience',
      description: 'A luxurious, comfortable and relaxing salon environment designed exclusively for women’s privacy and serenity.',
      icon: Crown,
      highlight: 'Luxury Atmosphere'
    },
    {
      title: 'Personalized Care',
      description: "Services selected according to each client's individual needs, hair texture, skin conditions and personal style.",
      icon: HeartHandshake,
      highlight: 'Custom Consultations'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0e0e12] relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-pink-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Welcome to DELAQUA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Faisalabad’s Premier Destination for <span className="text-gradient-pink italic font-normal">Timeless Elegance</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid: Narrative & Dual Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Photos Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Main Interior Photo */}
              <div className="sm:col-span-8 overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                <img
                  src={SALON_INFO.images.hero}
                  alt="DELAQUA Salon Luxury Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-300 block">
                    Luxury Interior
                  </span>
                  <p className="text-sm text-neutral-200 font-medium">
                    Modern styling stations & relaxing spa zone
                  </p>
                </div>
              </div>

              {/* Exterior Storefront Photo */}
              <div className="sm:col-span-4 flex flex-col gap-4">
                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl group relative">
                  <img
                    src={SALON_INFO.images.exterior}
                    alt="DELAQUA Salon Storefront Exterior Faisalabad"
                    referrerPolicy="no-referrer"
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-3 right-2 text-white">
                    <span className="text-[10px] font-semibold text-pink-300 uppercase tracking-widest block">Storefront</span>
                    <span className="text-xs text-neutral-200">50-A Nizami Street</span>
                  </div>
                </div>

                {/* Experience Badge Card */}
                <div className="p-4 rounded-3xl bg-gradient-to-br from-pink-950/80 to-neutral-900 border border-pink-500/30 text-white flex flex-col justify-center">
                  <div className="text-3xl font-serif font-bold text-pink-300">4.6 ★</div>
                  <p className="text-xs text-neutral-300 font-medium mt-1">
                    Rated by 130+ happy clients in People's Colony 1
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background outline */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-[2.5rem] blur-xl -z-10" />
          </motion.div>

          {/* Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-widest text-pink-400 uppercase">
                Signature By Asma
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal leading-snug">
                “At Delaqua Beauty Salon, we believe beauty is personal.”
              </h3>
              <p className="text-neutral-300 text-base leading-relaxed">
                Our professional team combines modern beauty techniques, premium international products and personalized care to create an experience that makes every client feel confident, refreshed, and radiant.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Located conveniently on 50-A Nizami Street in People’s Colony No. 1, DELAQUA provides a peaceful, sterile, and upscale atmosphere where your self-care is always treated with the highest standard of artistic care.
              </p>
            </div>

            {/* Key Salon Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-neutral-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>100% Women-Only Space</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Sterilized Tools & Disposables</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Original Brand Cosmetics</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Open 7 Days (11 AM – 8 PM)</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-medium text-xs tracking-wider uppercase shadow-lg shadow-pink-600/30 transition-all cursor-pointer"
                id="about-book-btn"
              >
                Book Your Visit
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-pink-400" />
                <span>Mon–Sun: 11:00 AM – 8:00 PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Prominent Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-pink-500/40 backdrop-blur-md shadow-xl transition-all group hover:-translate-y-1 relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-pink-600/10 border border-pink-500/30 text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-widest bg-pink-950/60 px-3 py-1 rounded-full border border-pink-500/20">
                    {card.highlight}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
