/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SALON_SERVICES, formatPrice, ServiceItem } from '../utils/booking';
import { Clock, Check, Sparkles, ArrowRight, Leaf, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SafeImage } from './SafeImage';

interface ServicesPageProps {
  onSelectServiceAndBook: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectServiceAndBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = SALON_SERVICES.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'skin', label: 'Facials & Skin' },
    { id: 'waxing', label: 'Waxing & Threading' },
    { id: 'hair', label: 'Hair & Keratin' },
    { id: 'hammam', label: 'Moroccan Hammam' },
    { id: 'nails', label: 'Spa Nails' },
    { id: 'home', label: 'VIP Home Packages' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative bg-gradient-to-b from-[#FAF7F5] to-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#BA4961] font-bold">
            The Bespoke Menu
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E2421]">
            Services & Transparent AED Pricing
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#D96B82] to-[#82AF89] mx-auto mt-4" />
          <p className="text-[#52605B] text-sm sm:text-base leading-relaxed">
            Every ritual is conducted in private chambers with French skincare apothecary, Italian Rica waxes, single-use sterilized kits, or delivered directly to your Dubai home.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 cursor-pointer shadow-xs ${
                selectedCategory === tab.id
                  ? 'rose-gradient-bg text-white shadow-[0_6px_20px_rgba(217,107,130,0.35)]'
                  : 'border border-[#82AF89]/40 text-[#2C4832] bg-white hover:bg-[#EDF7EF] hover:border-[#82AF89]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visual Grid Menu with Framer Motion scroll entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: (idx % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-3xl overflow-hidden bg-white border border-[#E88295]/20 flex flex-col justify-between hover:border-[#D96B82]/50 hover:shadow-[0_20px_40px_rgba(217,107,130,0.12)] shadow-md transition-shadow duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden bg-[#FAF7F5]">
                <SafeImage
                  src={service.image}
                  alt={service.name}
                  category={service.category as any}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                
                {service.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 text-[#BA4961] border border-[#D96B82]/30 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                    {service.badge}
                  </div>
                )}

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-[#82AF89]/40 text-xs px-3.5 py-1.5 rounded-full text-[#2C4832] font-semibold flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#4E7A56]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E2421] group-hover:text-[#BA4961] transition leading-snug">
                      {service.name}
                    </h3>
                    <span className="font-serif text-2xl font-bold rose-gradient-text flex-shrink-0">
                      {formatPrice(service.price)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#52605B] mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* What's Included */}
                  <div className="mt-5 pt-4 border-t border-[#E88295]/20 space-y-2.5">
                    <p className="text-[11px] font-bold tracking-wider text-[#BA4961] uppercase flex items-center gap-1">
                      <Leaf className="w-3 h-3 text-[#82AF89]" />
                      <span>What’s Included:</span>
                    </p>
                    <ul className="text-xs text-[#52605B] space-y-2">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#4E7A56] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectServiceAndBook(service.name)}
                  className="w-full py-3.5 rounded-full border-2 border-[#D96B82] text-[#BA4961] bg-[#FFF5F7] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#D96B82] hover:text-white transition duration-300 cursor-pointer flex items-center justify-center gap-2 group-hover:shadow-[0_4px_18px_rgba(217,107,130,0.25)] active:scale-95"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Special Package Note */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-10 rounded-3xl rose-sage-blend border border-[#82AF89]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2C4832]">
              <HomeIcon className="w-4 h-4 text-[#4E7A56]" />
              <span>Doorstep Dubai Concierge</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1E2421]">
              Need a Custom Home Pampering Package or Bridal Group Booking?
            </h4>
            <p className="text-xs sm:text-sm text-[#52605B]">
              We offer bespoke group packages for brides, mothers & daughters, and pamper parties directly in your Dubai home or hotel suite.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceAndBook('The Dubai Glow Queen Package (Full Combo)')}
            className="px-7 py-3.5 rounded-full rose-gradient-bg text-white font-bold text-xs uppercase tracking-widest whitespace-nowrap cursor-pointer hover:shadow-[0_6px_20px_rgba(217,107,130,0.4)] transition active:scale-95 flex-shrink-0"
          >
            Inquire Combo Package
          </button>
        </motion.div>

      </div>
    </section>
  );
};
