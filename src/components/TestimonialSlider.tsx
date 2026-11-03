/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause,
  Play,
  ArrowUpRight,
  Star,
  Quote
} from 'lucide-react';
import { TESTIMONIALS, TestimonialItem, SALON_INFO } from '../utils/booking';
import { SafeImage } from './SafeImage';

interface TestimonialSliderProps {
  onBookService?: (serviceName?: string) => void;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ onBookService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'salon' | 'home'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials: TestimonialItem[] = TESTIMONIALS.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  useEffect(() => {
    if (currentIndex >= filteredTestimonials.length) {
      setCurrentIndex(0);
    }
  }, [activeFilter, filteredTestimonials.length, currentIndex]);

  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
  };

  const current = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Client Testimonials Carousel"
    >
      {/* Minimalist Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE0D9] pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E3046] font-bold block">
            04 · VERIFIED CLIENT STORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#161314]">
            Loved by Women Across Dubai
          </h2>
        </div>

        <a
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-xs self-start md:self-auto"
        >
          <div className="pr-4 border-r border-[#E6DCD5] text-right">
            <span className="font-serif text-2xl font-semibold text-[#161314] block leading-none editorial-num">
              {SALON_INFO.rating} ★
            </span>
          </div>
          <div>
            <p className="font-semibold text-[#161314] uppercase tracking-wider editorial-num">
              {SALON_INFO.reviewsCount}+ Google Reviews
            </p>
            <p className="text-[11px] text-[#5C5055] mt-0.5">
              5.0 ★ on Fresha Dubai
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#8E3046] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Filter Tabs & Carousel Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer editorial-num ${
              activeFilter === 'all'
                ? 'bg-[#161314] text-white'
                : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:text-[#161314]'
            }`}
          >
            All Reviews ({TESTIMONIALS.length})
          </button>

          <button
            onClick={() => setActiveFilter('salon')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              activeFilter === 'salon'
                ? 'bg-[#161314] text-white'
                : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:text-[#161314]'
            }`}
          >
            Bur Dubai Salon
          </button>

          <button
            onClick={() => setActiveFilter('home')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              activeFilter === 'home'
                ? 'bg-[#161314] text-white'
                : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:text-[#161314]'
            }`}
          >
            VIP Home Service
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-10 h-10 rounded-full border border-[#E6DCD5] bg-white text-[#5C5055] hover:text-[#8E3046] hover:border-[#8E3046] transition-colors flex items-center justify-center cursor-pointer"
            title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
            aria-label={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <span className="text-xs font-semibold text-[#5C5055] tracking-widest px-2 editorial-num">
            {String(currentIndex + 1).padStart(2, '0')} / {String(filteredTestimonials.length).padStart(2, '0')}
          </span>

          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#E6DCD5] bg-white text-[#161314] hover:bg-[#8E3046] hover:text-white hover:border-[#8E3046] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#E6DCD5] bg-white text-[#161314] hover:bg-[#8E3046] hover:text-white hover:border-[#8E3046] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Minimalist Review Card */}
      {current && (
        <div className="rounded-[32px] bg-white border border-[#EAE0D9] overflow-hidden">
          <div
            key={current.id}
            className="grid grid-cols-1 lg:grid-cols-12 items-stretch transition-opacity duration-300"
          >
            
            {/* Left Column: Patron Profile (4 Cols) */}
            <div className="lg:col-span-4 p-7 sm:p-9 bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-[#EFE6E0] flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#E6DCD5] shrink-0">
                  <SafeImage
                    src={current.avatar}
                    alt={current.name}
                    category="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-medium text-[#161314] leading-none">
                    {current.name}
                  </h3>
                  <p className="text-xs text-[#5C5055]">
                    {current.role}
                  </p>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8E3046]">
                    {current.source}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#EAE0D9] border-t border-[#EAE0D9] text-xs">
                <div className="py-2.5 flex items-center justify-between text-[#5C5055]">
                  <span className="uppercase tracking-wider text-[10px] font-semibold">EXPERIENCE</span>
                  <span className="font-semibold text-[#161314]">
                    {current.type === 'home' ? 'VIP Home Service' : 'Bur Dubai Salon'}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-[#5C5055]">
                  <span className="uppercase tracking-wider text-[10px] font-semibold">VERIFIED</span>
                  <span className="editorial-num font-medium">{current.date}</span>
                </div>
                <div className="pt-3">
                  <span className="uppercase tracking-wider text-[10px] font-semibold text-[#7A6C72] block">
                    TREATMENT BOOKED
                  </span>
                  <p className="font-serif text-base font-medium text-[#8E3046] mt-0.5">
                    {current.serviceUsed}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Review Quote & Action (8 Cols) */}
            <div className="lg:col-span-8 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 relative">
              <Quote className="w-10 h-10 text-[#8E3046]/10 absolute top-6 right-8 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#D97706]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs font-semibold text-[#161314]">5.0 Verified Client Rating</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-medium text-[#161314] leading-snug">
                  “{current.headline}”
                </h4>

                <p className="text-sm sm:text-base text-[#5C5055] leading-[1.8]">
                  “{current.quote}”
                </p>
              </div>

              <div className="pt-5 border-t border-[#EFE6E0] flex flex-wrap items-center justify-between gap-4">
                {onBookService && (
                  <button
                    onClick={() => onBookService(current.serviceUsed)}
                    className="px-6 py-3 rounded-full rose-gold-gradient text-white text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Book This Treatment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={SALON_INFO.freshaVenueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#8E3046] hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>Fresha 5.0★ Reviews</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#5C5055] hover:text-[#8E3046] flex items-center gap-1 transition-colors"
                  >
                    <span>Google Maps ({SALON_INFO.reviewsCount}+)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Patron Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {filteredTestimonials.map((item, idx) => {
          const isActive = idx === currentIndex;
          const initials = item.name.split(' ').map(n => n[0]).join('').slice(0, 2);
          return (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                isActive
                  ? 'border-[#8E3046] bg-white shadow-2xs'
                  : 'border-[#EAE0D9] bg-white/60 hover:bg-white'
              }`}
              title={`Read review by ${item.name}`}
              aria-label={`Jump to review by ${item.name}`}
            >
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold ${
                isActive ? 'bg-[#8E3046] text-white' : 'bg-[#EFE6E0] text-[#8E3046]'
              }`}>
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#161314] truncate">
                  {item.name}
                </p>
                <p className="text-[10px] text-[#7A6C72] truncate">
                  {item.role}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
