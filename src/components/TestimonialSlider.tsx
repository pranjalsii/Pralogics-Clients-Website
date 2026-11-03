/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Home as HomeIcon,
  Pause,
  Play,
  ExternalLink
} from 'lucide-react';
import { TESTIMONIALS, TestimonialItem, SALON_INFO } from '../utils/booking';
import { motion, AnimatePresence } from 'motion/react';
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

  // Clamp currentIndex if filter changes
  useEffect(() => {
    if (currentIndex >= filteredTestimonials.length) {
      setCurrentIndex(0);
    }
  }, [activeFilter, filteredTestimonials.length, currentIndex]);

  // Auto-play timer (advances every 5.5 seconds unless paused)
  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
    }, 5500);

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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Client Testimonials Carousel"
    >
      {/* Header with Title and Trust Metrics - Subtle Scroll Entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2"
      >
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F3] border border-[#D96B82]/30 text-[#BA4961] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2421]">
            Loved by Dubai Ladies
          </h2>
          <p className="text-[#52605B] text-sm sm:text-base leading-relaxed">
            Real stories from our Bur Dubai atelier guests and private VIP home service patrons across the UAE.
          </p>
        </div>

        {/* Aggregate Trust Badge */}
        <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#E88295]/25 shadow-sm self-start md:self-auto">
          <div className="w-12 h-12 rounded-xl bg-[#EDF7EF] border border-[#82AF89]/40 flex flex-col items-center justify-center text-[#2C4832] shrink-0">
            <span className="text-base font-bold font-serif leading-none">{SALON_INFO.rating}</span>
            <div className="flex text-[#D4AF37] mt-0.5">
              <Star className="w-2.5 h-2.5 fill-[#D4AF37]" />
            </div>
          </div>
          <div className="text-xs">
            <div className="flex items-center gap-1 font-bold text-[#1E2421]">
              <span>{SALON_INFO.reviewsCount} Google Reviews</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A56]" />
            </div>
            <p className="text-[11px] text-[#6B7C75]">Google Maps Verified Profile</p>
          </div>
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-lg text-[#BA4961] hover:bg-[#FFF0F3] transition"
            title="View on Google Maps"
            aria-label="View Google Maps Reviews"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Filter Tabs & Navigation Controls Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E88295]/20 pb-4"
      >
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0" role="tablist">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeFilter === 'all'
                ? 'rose-gradient-bg text-white shadow-sm'
                : 'bg-white text-[#52605B] border border-[#E88295]/25 hover:border-[#BA4961]'
            }`}
          >
            <span>All Reviews</span>
            <span className="text-[10px] opacity-80">({TESTIMONIALS.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('salon')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeFilter === 'salon'
                ? 'rose-gradient-bg text-white shadow-sm'
                : 'bg-white text-[#52605B] border border-[#E88295]/25 hover:border-[#BA4961]'
            }`}
          >
            <span>In-Salon (Bur Dubai)</span>
          </button>

          <button
            onClick={() => setActiveFilter('home')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeFilter === 'home'
                ? 'rose-gradient-bg text-white shadow-sm'
                : 'bg-white text-[#52605B] border border-[#E88295]/25 hover:border-[#BA4961]'
            }`}
          >
            <span>VIP Home Service</span>
          </button>
        </div>

        {/* Carousel Action Buttons */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Pause / Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-full border border-[#E88295]/30 bg-white text-[#52605B] hover:text-[#BA4961] hover:border-[#BA4961] transition cursor-pointer shadow-2xs"
            title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
            aria-label={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          {/* Slide Indicator Text */}
          <span className="text-xs font-semibold text-[#52605B] tracking-wider px-1">
            {String(currentIndex + 1).padStart(2, '0')} / {String(filteredTestimonials.length).padStart(2, '0')}
          </span>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-[#E88295]/30 bg-white text-[#1E2421] hover:text-[#BA4961] hover:border-[#BA4961] hover:bg-[#FFF0F3] transition cursor-pointer shadow-2xs active:scale-95"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-[#E88295]/30 bg-white text-[#1E2421] hover:text-[#BA4961] hover:border-[#BA4961] hover:bg-[#FFF0F3] transition cursor-pointer shadow-2xs active:scale-95"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Main Showcase Carousel Card with Scroll Entrance and Slide Transition */}
      {current && (
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-white border border-[#E88295]/30 shadow-xl overflow-hidden"
        >
          {/* Decorative ambient gradient backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFF0F3] via-transparent to-transparent pointer-events-none rounded-bl-full opacity-70" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Left Column: Client Avatar & Identity Card */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 border-b lg:border-b-0 lg:border-r border-[#E88295]/20 pb-6 lg:pb-0 lg:pr-8">
                {/* Avatar with luxury layered ring */}
                <div className="relative group">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#BA4961] via-[#D96B82] to-[#82AF89] shadow-lg overflow-hidden">
                    <SafeImage
                      src={current.avatar}
                      alt={current.name}
                      category="avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-1 w-9 h-9 rounded-full bg-white border border-[#E88295]/40 shadow-md flex items-center justify-center text-[#BA4961]">
                    {current.type === 'home' ? (
                      <HomeIcon className="w-4 h-4 text-[#2C4832]" />
                    ) : (
                      <MapPin className="w-4 h-4 text-[#BA4961]" />
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E2421]">
                    {current.name}
                  </h3>
                  <p className="text-xs text-[#52605B] font-medium flex items-center justify-center gap-1.5">
                    <span>{current.role}</span>
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF7EF] border border-[#82AF89]/40 text-[#2C4832] text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A56]" />
                  <span>{current.source}</span>
                </div>

                {/* Service Tag */}
                <div className="pt-2 w-full">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B7C75] block mb-1">
                    Experienced Treatment:
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FAF7F5] border border-[#E88295]/25 text-xs font-semibold text-[#BA4961]">
                    {current.serviceUsed}
                  </span>
                </div>
              </div>

              {/* Right Column: Review Quote & Headline */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-[#1E2421]">5.0 Out of 5.0</span>
                  </div>

                  <div className="text-[11px] text-[#6B7C75] font-medium">
                    {current.date}
                  </div>
                </div>

                {/* Headline */}
                <div className="relative">
                  <Quote className="absolute -top-3 -left-3 sm:-left-5 w-8 h-8 text-[#BA4961]/15 -z-10" />
                  <h4 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E2421] leading-snug">
                    “{current.headline}”
                  </h4>
                </div>

                {/* Detailed Quote */}
                <p className="text-sm sm:text-base text-[#52605B] leading-relaxed italic">
                  "{current.quote}"
                </p>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {onBookService && (
                    <button
                      onClick={() => onBookService(current.serviceUsed)}
                      className="px-6 py-2.5 rounded-full rose-gradient-bg text-white text-xs uppercase tracking-widest font-bold shadow-xs hover:shadow-md transition active:scale-95 cursor-pointer"
                    >
                      Book This Service
                    </button>
                  )}
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-[#82AF89]/50 text-[#2C4832] bg-[#EDF7EF]/50 hover:bg-[#EDF7EF] text-xs uppercase tracking-widest font-bold transition flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Verify on Google Maps</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}

      {/* Direct Jump Thumbnails & Pagination Dots - Subtle Scroll Entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4"
      >
        {/* Client Thumbnail Quick Jump */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {filteredTestimonials.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <motion.button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-2 border-[#BA4961] shadow-md scale-105'
                    : 'bg-white/70 border border-[#E88295]/25 hover:border-[#BA4961]/50 opacity-80 hover:opacity-100'
                }`}
                title={`Read review by ${item.name}`}
                aria-label={`Jump to review by ${item.name}`}
              >
                <SafeImage
                  src={item.avatar}
                  alt={item.name}
                  category="avatar"
                  className="w-6 h-6 rounded-full object-cover shrink-0"
                />
                <span className={`text-[11px] font-semibold hidden md:inline ${isActive ? 'text-[#BA4961]' : 'text-[#52605B]'}`}>
                  {item.name.split(' ')[0]}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {filteredTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-[#BA4961]'
                  : 'w-2 bg-[#E88295]/40 hover:bg-[#BA4961]/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
