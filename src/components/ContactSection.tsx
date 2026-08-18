import React, { useState } from 'react';
import { SALON_INFO, SERVICES } from '../data/salonData';
import { BookingFormData } from '../types';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Sparkles, User, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: 'Single Process Hair Dye with Blow Dry',
    preferredDate: '',
    preferredTime: '02:00 PM',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Appointment Request - DELAQUA Salon*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.preferredDate}%0A*Time:* ${formData.preferredTime}%0A*Message:* ${formData.message || 'None'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Visit Us or Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Contact <span className="text-gradient-pink italic font-normal">DELAQUA Beauty Salon</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Located in the heart of People’s Colony No. 1, Faisalabad. We look forward to welcoming you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Layout: Details + Map vs Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Salon Info Card */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-pink-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-pink-400">
                    Women's Salon & Spa
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                    Delaqua Beauty Salon
                  </h3>
                  <p className="text-xs text-pink-300 font-medium">Signature By Asma</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-pink-600/30">
                  D
                </div>
              </div>

              <div className="space-y-4 text-sm text-neutral-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-600/10 text-pink-400 border border-pink-500/20 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block font-semibold">Address</span>
                    <p className="text-white font-medium">
                      50-A Nizami Street, Block A, People's Colony No. 1, Faisalabad, 38000, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-600/10 text-pink-400 border border-pink-500/20 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block font-semibold">Phone & WhatsApp</span>
                    <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-white font-bold hover:text-pink-400 transition-colors text-base block">
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-600/10 text-pink-400 border border-pink-500/20 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block font-semibold">Opening Hours</span>
                    <p className="text-white font-medium">
                      11:00 AM – 8:00 PM, Monday–Sunday
                    </p>
                    <span className="text-[11px] text-green-400 font-semibold">Open 7 Days a Week</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
                  id="contact-call-btn"
                >
                  <Phone className="w-3.5 h-3.5 text-pink-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Hello DELAQUA Salon! I would like to inquire about appointments.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-green-950/80 hover:bg-green-700 text-green-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-green-500/30 transition-all cursor-pointer"
                  id="contact-whatsapp-btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-64 relative group">
              <iframe
                title="Delaqua Beauty Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.978184305807!2d73.09848527581172!3d31.414768374263057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242b934b15093%3A0xe5a1e2f8dc4e8c56!2sPeople&#39;s%20Colony%20No%201%2C%20Faisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 grayscale-[40%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-white flex items-center gap-1.5 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>People's Colony No. 1, Faisalabad</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Appointment Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-2xl relative">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase font-bold tracking-widest text-pink-400 block mb-1">
                      Online Booking Form
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Request Your Appointment
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      Fill out your preferred details below and our team will immediately confirm your salon booking.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="contact-appointment-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Fatima Ali"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/80 transition-colors"
                            id="contact-form-name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="0321 7664078"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/80 transition-colors"
                            id="contact-form-phone"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Selected Service or Deal *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/80 transition-colors"
                        id="contact-form-service"
                      >
                        <optgroup label="Popular Winter Deals">
                          <option value="Single Process Hair Dye with Blow Dry">Single Process Hair Dye with Blow Dry</option>
                          <option value="Keratin Smoothing Treatment">Keratin Smoothing Treatment</option>
                          <option value="Fruit Radiance Deal 1 (Rs. 2,500)">Fruit Radiance Deal 1 (Rs. 2,500)</option>
                          <option value="French Whitening Deal 2 (Rs. 3,000)">French Whitening Deal 2 (Rs. 3,000)</option>
                          <option value="24K Gold Luxury Facial Deal (Rs. 5,000)">24K Gold Luxury Facial Deal (Rs. 5,000)</option>
                          <option value="Signature Hydra Facial Package (Rs. 8,000)">Signature Hydra Facial Package (Rs. 8,000)</option>
                          <option value="Thalgo French Marine Facial (Rs. 12,000)">Thalgo French Marine Facial (Rs. 12,000)</option>
                          <option value="Full Body Wax Deal 3 (Rs. 2,500)">Full Body Wax Deal 3 (Rs. 2,500)</option>
                        </optgroup>
                        <optgroup label="All Salon Services">
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/80 transition-colors"
                            id="contact-form-date"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Preferred Time Slot *
                        </label>
                        <div className="relative">
                          <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/80 transition-colors"
                            id="contact-form-time"
                          >
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="01:00 PM">01:00 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                            <option value="05:00 PM">05:00 PM</option>
                            <option value="06:00 PM">06:00 PM</option>
                            <option value="07:00 PM">07:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Message / Inquiries
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                        <textarea
                          rows={3}
                          placeholder="Tell us any specific requirements, bridal party count, or styling reference..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500/80 transition-colors"
                          id="contact-form-message"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm tracking-widest uppercase shadow-xl shadow-pink-600/40 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] border border-pink-400/30"
                      id="contact-submit-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>REQUEST APPOINTMENT</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-pink-600/20 border border-pink-500 text-pink-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-white mb-2">
                    Booking Request Sent!
                  </h4>
                  <p className="text-base text-neutral-300 max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you <strong className="text-white">{formData.name}</strong>. We have prepared your appointment for <strong className="text-pink-400">{formData.service}</strong> on <strong className="text-white">{formData.preferredDate} at {formData.preferredTime}</strong>.
                  </p>
                  <p className="text-xs text-neutral-400 mb-6">
                    Redirecting to WhatsApp (0321 7664078) for immediate confirmation...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
