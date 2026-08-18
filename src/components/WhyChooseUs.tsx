import React from 'react';
import { WHY_CHOOSE_US } from '../data/salonData';
import { Sparkles, Crown, ShieldCheck, HeartHandshake, UserCheck, CalendarCheck2, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Crown':
        return Crown;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'UserCheck':
        return UserCheck;
      case 'CalendarCheck2':
        return CalendarCheck2;
      default:
        return Star;
    }
  };

  return (
    <section className="py-24 bg-[#09090c] relative overflow-hidden border-y border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#f43f8e_1px,transparent_1px)] [background-size:40px_40px] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>The DELAQUA Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Why Faisalabad Chooses <span className="text-gradient-pink italic font-normal">DELAQUA</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            We are dedicated to elevating your salon journey through uncompromising hygiene, elite products, and master artistry.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-900/60 border border-white/5 hover:border-pink-500/30 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-pink-950/20 transition-all group hover:-translate-y-1"
              >
                <div className="p-3.5 w-fit rounded-2xl bg-gradient-to-br from-pink-950 to-neutral-900 border border-pink-500/30 text-pink-400 mb-6 group-hover:scale-110 group-hover:border-pink-400 transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
