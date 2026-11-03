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
  CheckCircle2
} from 'lucide-react';
import {
  TESTIMONIALS,
  TestimonialItem,
  TestimonialFilterType,
  SALON_INFO,
  SALON_SERVICES,
  formatPrice,
  filterTestimonials,
  getNextTestimonialIndex,
  getPrevTestimonialIndex,
  getClientInitials
} from '../utils/booking';

interface TestimonialSliderProps {
  onBookService?: (serviceName?: string) => void;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ onBookService }) => {
  const [activeFilter, setActiveFilter] = useState<TestimonialFilterType>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const filteredTestimonials: TestimonialItem[] = filterTestimonials(activeFilter, TESTIMONIALS);
  const salonCount = filterTestimonials('salon', TESTIMONIALS).length;
  const homeCount = filterTestimonials('home', TESTIMONIALS).length;

  useEffect(() => {
    if (currentIndex >= filteredTestimonials.length) {
      setCurrentIndex(0);
    }
  }, [activeFilter, filteredTestimonials.length, currentIndex]);

  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => getNextTestimonialIndex(prev, filteredTestimonials.length));
    }, 6500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => getPrevTestimonialIndex(prev, filteredTestimonials.length));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => getNextTestimonialIndex(prev, filteredTestimonials.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = touchStartXRef.current - touchEndX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  const current = filteredTestimonials[currentIndex] || filteredTestimonials[0];
  const matchedService = current
    ? SALON_SERVICES.find((s) => s.name === current.serviceUsed)
    : undefined;

  return (
    <section
      className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-10 space-y-5 sm:space-y-8 scroll-mt-24 focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Client Testimonials Carousel"
      data-testid="testimonial-carousel-section"
    >
      {/* Minimal High-End Editorial Header */}
      <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#8E3046]" />
          <span className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.24em] text-[#8E3046] font-semibold">
            Verified Client Reflections
          </span>
          <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#8E3046]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#161314] tracking-[-0.015em] leading-[1.1]">
          Words from Our Dubai Patrons
        </h2>

        {/* Unboxed Credibility Strip (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:text-[13px] text-[#5C5055] pt-0.5 editorial-num">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#161314] hover:text-[#8E3046] transition-colors inline-flex items-center gap-1"
          >
            <span className="text-[#C88A2B]">★</span>
            <span>{SALON_INFO.rating} Google Rating ({SALON_INFO.reviewsCount}+ Reviews)</span>
          </a>
          <span className="text-[#C9A99A]" aria-hidden="true">·</span>
          <a
            href={SALON_INFO.freshaVenueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#8E3046] hover:underline transition-colors inline-flex items-center gap-1"
          >
            <span>5.0 ★ Rated on Fresha Dubai</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="hidden sm:inline text-[#C9A99A]" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-[#5C5055]">
            Bur Dubai Sanctuary &amp; VIP Home Service
          </span>
        </div>
      </div>

      {/* Minimal Filter Bar & Carousel Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE0D9] pb-3.5 sm:pb-4">
        {/* Experience Filter Tabs — Full fit on 390px mobile */}
        <div
          className="grid grid-cols-3 sm:flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto"
          role="tablist"
          aria-label="Filter client testimonials by experience"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => {
              setActiveFilter('all');
              setCurrentIndex(0);
            }}
            className={`min-h-[40px] px-2.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap text-center editorial-num ${
              activeFilter === 'all'
                ? 'bg-[#161314] text-white shadow-2xs'
                : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:border-[#161314] hover:text-[#161314]'
            }`}
          >
            All Reviews ({TESTIMONIALS.length})
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'salon'}
            onClick={() => {
              setActiveFilter('salon');
              setCurrentIndex(0);
            }}
            className={`min-h-[40px] px-2.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap text-center editorial-num ${
              activeFilter === 'salon'
                ? 'bg-[#161314] text-white shadow-2xs'
                : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:border-[#161314] hover:text-[#161314]'
            }`}
          >
            Bur Dubai ({salonCount})
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'home'}
            onClick={() => {
              setActiveFilter('home');
              setCurrentIndex(0);
            }}
            className={`min-h-[40px] px-2.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap text-center editorial-num ${
              activeFilter === 'home'
                ? 'bg-[#161314] text-white shadow-2xs'
                : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:border-[#161314] hover:text-[#161314]'
            }`}
          >
            Home Service ({homeCount})
          </button>
        </div>

        {/* Minimalist Carousel Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="w-10 h-10 rounded-full border border-[#E6DCD5] bg-white text-[#5C5055] hover:text-[#8E3046] hover:border-[#8E3046] transition-colors flex items-center justify-center cursor-pointer"
              title={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
              aria-label={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            <span
              className="text-xs font-semibold text-[#5C5055] tracking-[0.18em] px-2 editorial-num"
              aria-live="polite"
            >
              {String(currentIndex + 1).padStart(2, '0')} / {String(filteredTestimonials.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#E6DCD5] bg-white text-[#161314] hover:bg-[#8E3046] hover:text-white hover:border-[#8E3046] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Previous testimonial"
              title="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#E6DCD5] bg-white text-[#161314] hover:bg-[#8E3046] hover:text-white hover:border-[#8E3046] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Next testimonial"
              title="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main High-End Minimalist Editorial Quote Showcase */}
      {current && (
        <article
          key={current.id}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-[24px] sm:rounded-[34px] bg-white border border-[#EAE0D9] shadow-[0_24px_60px_-28px_rgba(22,19,20,0.07)] px-4 py-6 sm:px-12 sm:py-11 lg:px-16 lg:py-13 overflow-hidden transition-all duration-300"
        >
          {/* Subtle Warm Champagne Accent Hairline at Top */}
          <div
            className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8E3046]/45 to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-7">
            {/* Top Unboxed Rating & Source Line */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10.5px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#5C5055] font-semibold">
              <span className="inline-flex items-center gap-0.5 text-[#C88A2B]" aria-label={`${current.rating} out of 5 stars`}>
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="text-[#161314] editorial-num">5.0</span>
              <span className="text-[#C9A99A]" aria-hidden="true">·</span>
              <span className="text-[#8E3046]">{current.source}</span>
              <span className="text-[#C9A99A]" aria-hidden="true">·</span>
              <span>{current.type === 'home' ? 'VIP Home Service' : 'Bur Dubai Salon'}</span>
            </div>

            {/* Clean, Elegant Editorial Serif Quote */}
            <blockquote className="space-y-2.5 sm:space-y-3.5">
              <p className="text-[10.5px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#7A6C72] font-semibold">
                {current.headline}
              </p>
              <p
                className="font-serif italic font-normal text-[21px] sm:text-[30px] lg:text-[35px] text-[#161314] leading-[1.38] sm:leading-[1.38] tracking-[-0.01em] max-w-[46ch] mx-auto"
                data-testid="active-testimonial-quote"
              >
                “{current.quote}”
              </p>
            </blockquote>

            {/* Hairline Divider */}
            <div className="w-full h-[1px] bg-[#EFE6E0]" aria-hidden="true" />

            {/* Patron Attribution & Treatment Action Bar */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-left">
              {/* Patron Identity — Inline on both Mobile & Desktop */}
              <div className="flex items-center gap-3 sm:gap-3.5 w-full md:w-auto justify-center md:justify-start">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF6F2] border border-[#E2D3C8] text-[#8E3046] font-serif text-base sm:text-lg font-semibold flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  {getClientInitials(current.name)}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#161314] leading-none truncate">
                      {current.name}
                    </h3>
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-[#8E3046] shrink-0"
                      aria-label="Verified Patron"
                    />
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-[#5C5055] truncate">
                    {current.role} <span className="text-[#C9A99A]">·</span> {current.date}
                  </p>
                </div>
              </div>

              {/* Treatment Booked & Direct CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full md:w-auto justify-center md:justify-end border-t md:border-t-0 border-[#F2EAE4] pt-3 md:pt-0">
                <div className="text-center sm:text-right">
                  <span className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] text-[#7A6C72] font-semibold">
                    Treatment Reviewed
                  </span>
                  <p className="font-serif text-[15px] sm:text-lg font-medium text-[#161314] leading-snug">
                    {current.serviceUsed}
                    {matchedService ? (
                      <span className="text-[#8E3046] font-sans text-xs font-semibold ml-1.5 editorial-num">
                        · {formatPrice(matchedService.price)}
                      </span>
                    ) : null}
                  </p>
                </div>

                {onBookService && (
                  <button
                    type="button"
                    onClick={() => onBookService(current.serviceUsed)}
                    className="w-full sm:w-auto min-h-[42px] px-5 py-2.5 rounded-full bg-[#161314] hover:bg-[#8E3046] text-white text-xs uppercase tracking-[0.14em] font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Book This Treatment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Minimalist Editorial Slide Selector Strip */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3"
        role="group"
        aria-label="Select client review"
      >
        {filteredTestimonials.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`group relative pt-3 pb-2.5 px-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                isActive
                  ? 'bg-white border-[#8E3046]/50 shadow-2xs'
                  : 'bg-white/50 border-[#EAE0D9] hover:bg-white hover:border-[#C9A99A]'
              }`}
              title={`Read review by ${item.name}`}
              aria-label={`Jump to review by ${item.name}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {/* Minimal Top Progress Hairline */}
              <span
                className={`absolute inset-x-3.5 top-0 h-[2px] rounded-full transition-colors ${
                  isActive ? 'bg-[#8E3046]' : 'bg-transparent group-hover:bg-[#E2D3C8]'
                }`}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between gap-1.5">
                <p className="font-serif text-base font-medium text-[#161314] truncate">
                  {item.name}
                </p>
                <span className="text-[10px] font-semibold text-[#C88A2B] shrink-0 editorial-num">
                  5.0 ★
                </span>
              </div>
              <p className="text-[11px] text-[#7A6C72] truncate mt-0.5">
                {item.type === 'home' ? 'VIP Home Service' : 'Bur Dubai Salon'}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};
