/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SALON_SERVICES, COMPLETE_FRESHA_PRICE_LIST, SALON_INFO, formatPrice } from '../utils/booking';
import { Check, ArrowRight, ArrowUpRight, Search, ExternalLink } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ServicesPageProps {
  onSelectServiceAndBook: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectServiceAndBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SALON_SERVICES.filter(service => {
    const matchesCat = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.included.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const categories = [
    { id: 'all', label: 'All Packages (12)' },
    { id: 'skin', label: 'Facials & Skin' },
    { id: 'waxing', label: 'Waxing & Threading' },
    { id: 'hair', label: 'Hair, Keratin & Braids' },
    { id: 'hammam', label: 'Massage & Spa' },
    { id: 'nails', label: 'Nails, Lashes & Henna' },
    { id: 'home', label: 'Fresha Combos & Home' }
  ];

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Minimalist Editorial Header with Entrance Reveal */}
        <div className="reveal-stagger-1 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#EAE0D9] pb-8">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E3046] font-bold block">
              OFFICIAL FRESHA &amp; SALON MENU
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#161314] leading-[1.06]">
              Verified Services &amp; AED Price List
            </h1>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-[#5C5055] text-sm sm:text-[15px] leading-relaxed">
              100% verified pricing from our Bur Dubai salon (Shop No. 6, Majed Bin Sultan Bldg) and official Fresha profile. Available In-Salon or via VIP Home Service across Dubai.
            </p>
            <a
              href={SALON_INFO.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E3046] hover:underline"
            >
              <span>View Official Fresha Menu (5.0★ Rated)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Bar + Search Input */}
        <div className="reveal-stagger-2 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#161314] text-white'
                    : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:text-[#161314] hover:border-[#8E3046]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#7A6C72] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search threading, RICA, facial..."
              aria-label="Search treatments"
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white border border-[#E6DCD5] text-xs text-[#161314] placeholder-[#7A6C72] focus:outline-none focus:border-[#8E3046]"
            />
          </div>
        </div>

        {/* 3-Column Minimalist Luxury Service Grid (Zero scroll-jank observers) */}
        <div className="reveal-stagger-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group rounded-3xl glass-card-2026 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE6E0]">
                  <SafeImage
                    src={service.image}
                    alt={service.name}
                    category={service.category as any}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Unboxed Clean Metadata */}
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#7A6C72] font-semibold editorial-num">
                    <span className="text-[#8E3046]">{service.badge || service.category}</span>
                    <span>{service.duration}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-medium text-[#161314] group-hover:text-[#8E3046] transition-colors leading-snug">
                    {service.name}
                  </h2>

                  <p className="text-xs sm:text-[13px] text-[#5C5055] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Protocol Inclusions */}
                  <div className="pt-3 border-t border-[#F0E7E1] space-y-2.5">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#8E3046] uppercase">
                      VERIFIED OPTIONS &amp; INCLUSIONS:
                    </p>
                    <ul className="text-xs text-[#161314] space-y-2">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#1F7A54] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#F0E7E1] flex items-center justify-between gap-2">
                <div className="flex items-baseline gap-2 editorial-num">
                  <span className="font-serif text-2xl font-semibold text-[#161314]">
                    {formatPrice(service.price)}
                  </span>
                  {service.originalPrice && (
                    <span className="text-xs text-[#8A7E84] line-through">
                      AED {service.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {service.freshaUrl && (
                    <a
                      href={service.freshaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on Official Fresha"
                      className="text-xs font-medium text-[#7A6C72] hover:text-[#8E3046] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Fresha</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={() => onSelectServiceAndBook(service.name)}
                    className="px-4 py-2 rounded-full rose-gold-gradient text-white font-semibold text-xs uppercase tracking-[0.12em] transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* COMPLETE A-LA-CARTE FRESHA DIRECTORY (ALL 6 CATEGORIES) */}
        <div className="pt-8 space-y-8">
          <div className="space-y-2 border-b border-[#EAE0D9] pb-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E3046] font-bold block">
              COMPLETE FRESHA A-LA-CARTE DIRECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#161314]">
              Every Individual Service &amp; Combo Price (AED 14 – AED 599)
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5055]">
              Click any individual treatment or package below to book immediately via WhatsApp or in-salon reservation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {COMPLETE_FRESHA_PRICE_LIST.map((category) => (
              <div
                key={category.id}
                className="rounded-3xl bg-white border border-[#EAE0D9] p-6 sm:p-7 space-y-4"
              >
                <div className="border-b border-[#EFE6E0] pb-3.5">
                  <h3 className="font-serif text-2xl font-medium text-[#161314]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#5C5055] mt-0.5">{category.subtitle}</p>
                </div>

                <div className="divide-y divide-[#EFE6E0]">
                  {category.items.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => onSelectServiceAndBook(`${item.name} (AED ${item.price})`)}
                      className="w-full py-3 text-left flex items-center justify-between gap-3 group hover:bg-[#FAF8F5] px-2 transition-colors cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs sm:text-sm font-medium text-[#161314] group-hover:text-[#8E3046] transition-colors">
                            {item.name}
                          </span>
                          {item.note && (
                            <span className="text-[10px] uppercase tracking-wider font-bold text-[#8E3046]">
                              · {item.note}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#7A6C72] editorial-num">{item.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 editorial-num">
                        {item.originalPrice && (
                          <span className="text-xs text-[#8A7E84] line-through">
                            AED {item.originalPrice}
                          </span>
                        )}
                        <span className="font-serif text-base font-semibold text-[#161314] group-hover:text-[#8E3046]">
                          AED {item.price}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6C72] group-hover:text-[#8E3046]" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Luxury Bridal & Private Residence Commission Banner */}
        <div className="p-8 sm:p-12 rounded-[36px] luxury-dark-surface text-white border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#C89D66] block">
              FRESHA #1 TOP SELLER · SAVE AED 199
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-medium text-white">
              Full Transformation Bundle — AED 350 (Was AED 549)
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              4 Hours 10 Mins of complete head-to-toe pampering: Full hand, full leg &amp; underarm wax, upper lip &amp; eyebrow threading, rejuvenating Diamond Facial, and classic manicure &amp; pedicure.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceAndBook('Full Transformation Bundle (Fresha Top Seller)')}
            className="px-7 py-4 rounded-full rose-gold-gradient text-white font-semibold text-xs uppercase tracking-[0.18em] whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Book Full Bundle (AED 350)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
