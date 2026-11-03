/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  Clock, 
  Home as HomeIcon, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Heart,
  Award,
  ChevronRight,
  CheckCircle2,
  Navigation,
  Compass
} from 'lucide-react';
import { SALON_INFO, SALON_SERVICES, formatPrice } from '../utils/booking';
import { TestimonialSlider } from './TestimonialSlider';
import { SafeImage } from './SafeImage';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'booking') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeHeroMode, setActiveHeroMode] = useState<'salon' | 'home'>('salon');
  const featuredServices = SALON_SERVICES.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* ULTRA-PREMIUM HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FAF7F5] via-white to-[#F8FBF9]">
        
        {/* Soft Ambient Radiance */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[480px] bg-[#E88295]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[520px] h-[420px] bg-[#82AF89]/14 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-[420px] h-[360px] bg-[#FFF0F3]/70 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Story, Credentials & Dual-Service Interactive Switcher */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D96B82]/30 bg-white/95 shadow-xs backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#BA4961] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#BA4961]">
                BUR DUBAI · EST. 2014 · 10+ YEARS IN DUBAI
              </span>
            </motion.div>

            {/* Master Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.1] tracking-tight text-[#1E2421]">
                Dubai’s Premier <br />
                <span className="rose-gradient-text italic font-normal">Ladies Sanctuary</span> & <br />
                <span className="text-[#2C4832] font-semibold">VIP Home Concierge</span>
              </h1>
              
              <p className="text-[#52605B] text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience bespoke French Dr. Renaud facials, Italian Rica waxing, traditional Moroccan hammam rituals, and frizz-free keratin restructuring. Visit our serene Bur Dubai salon or enjoy five-star doorstep beauty pampering across Dubai.
              </p>
            </motion.div>

            {/* Dual Interactive Experience Switcher (Salon vs Home) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-1.5 rounded-2xl bg-white border border-[#E88295]/25 shadow-md max-w-xl mx-auto lg:mx-0"
            >
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveHeroMode('salon')}
                  className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    activeHeroMode === 'salon'
                      ? 'rose-gradient-bg text-white shadow-sm'
                      : 'text-[#52605B] hover:text-[#BA4961] hover:bg-[#FAF7F5]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Bur Dubai Atelier</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveHeroMode('home')}
                  className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    activeHeroMode === 'home'
                      ? 'bg-[#2C4832] text-white shadow-sm'
                      : 'text-[#52605B] hover:text-[#2C4832] hover:bg-[#FAF7F5]'
                  }`}
                >
                  <HomeIcon className="w-3.5 h-3.5" />
                  <span>VIP Home Service</span>
                </button>
              </div>

              {/* Dynamic Mode Details Pill */}
              <div className="p-4 rounded-xl mt-1.5 bg-[#FAF7F5] border border-[#E88295]/15 text-xs text-left space-y-1.5">
                {activeHeroMode === 'salon' ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#BA4961] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Shop No. 6, Majed Bin Sultan Bldg, Bur Dubai</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EDF7EF] text-[#2C4832]">
                        Open Daily 9am–10pm
                      </span>
                    </div>
                    <p className="text-[#52605B] text-[11.5px] leading-relaxed">
                      Near Meena Bazaar & Al Ghubaiba Metro. Private facial suites, authentic Moroccan steam hammam, and complimentary Arabian hospitality.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#2C4832] flex items-center gap-1.5">
                        <HomeIcon className="w-3.5 h-3.5" />
                        <span>Doorstep Concierge Across Dubai</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0F3] text-[#BA4961]">
                        All Week Available
                      </span>
                    </div>
                    <p className="text-[#52605B] text-[11.5px] leading-relaxed">
                      Downtown, Jumeirah, Marina, Palm, Deira, Business Bay & Bur Dubai. Two certified female therapists arrive with sterile disposable kits.
                    </p>
                  </>
                )}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1"
            >
              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent(
                  activeHeroMode === 'home'
                    ? "Hi Slender Ladies Salon Dubai, I would like to book VIP Home Service."
                    : "Hi Slender Ladies Salon Dubai, I would like to book an appointment at your Bur Dubai Salon."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full rose-gradient-bg text-white font-bold text-xs tracking-[0.2em] uppercase transition duration-300 hover:shadow-[0_10px_30px_rgba(217,107,130,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Book via WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-4 rounded-full border-2 border-[#82AF89] text-[#2C4832] bg-white hover:bg-[#EDF7EF] font-bold text-xs tracking-[0.2em] uppercase transition duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View AED Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-4 rounded-full border border-[#D96B82]/30 text-[#BA4961] bg-[#FFF0F3] hover:bg-[#FFE3E8] font-bold text-xs tracking-wider uppercase transition flex items-center justify-center gap-2"
                title={`Call Salon: ${SALON_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+971 4 351 5745</span>
              </a>
            </motion.div>

            {/* Trust Signals Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 sm:gap-6 border-t border-[#E88295]/20 text-center lg:text-left"
            >
              <div>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block"
                  title="View on Google Maps"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2421] group-hover:text-[#BA4961] transition">
                      {SALON_INFO.rating}
                    </span>
                    <div className="flex text-[#D4AF37]">
                      <Star className="w-4 h-4 fill-[#D4AF37]" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#52605B] uppercase tracking-wider mt-0.5 group-hover:underline">
                    Google Maps ({SALON_INFO.reviewsCount} Reviews)
                  </p>
                </a>
              </div>

              <div>
                <a
                  href={SALON_INFO.freshaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block"
                  title="View on Fresha"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#BA4961]">
                      5.0★
                    </span>
                    <Award className="w-4 h-4 text-[#BA4961]" />
                  </div>
                  <p className="text-[11px] text-[#52605B] uppercase tracking-wider mt-0.5 group-hover:underline">
                    Fresha Top-Rated Partner
                  </p>
                </a>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C4832]">10,000+</p>
                <p className="text-[11px] text-[#52605B] uppercase tracking-wider mt-0.5">
                  Happy Dubai Ladies
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Layered Luxury Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Luxury Card - Colorful, Vibrant & Mode-Aware */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E88295]/30 shadow-2xl bg-white aspect-[4/5] group">
                <SafeImage
                  src={
                    activeHeroMode === 'salon'
                      ? "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
                      : "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=85"
                  }
                  alt={
                    activeHeroMode === 'salon'
                      ? "Slender Ladies Salon Dubai Luxury Atelier Interior"
                      : "Slender Ladies Salon VIP Home Service Dubai"
                  }
                  category="interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vibrant Top Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E88295]/40 shadow-xs text-[11px] font-bold text-[#BA4961]">
                  <Sparkles className="w-3.5 h-3.5 text-[#BA4961]" />
                  <span>{activeHeroMode === 'salon' ? 'Bur Dubai Luxury Atelier' : 'VIP Doorstep Concierge'}</span>
                </div>

                {/* Soft warm luxury gradient to preserve image vibrant colors */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                
                {/* Floating Studio Card inside Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl glass-card-light backdrop-blur-md space-y-2 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#82AF89] animate-pulse" />
                      <p className="text-xs font-bold text-[#1E2421] uppercase tracking-widest">
                        Bur Dubai Salon & VIP Home Service
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EDF7EF] text-[#2C4832] border border-[#82AF89]/30">
                      Open Today
                    </span>
                  </div>
                  <p className="text-xs text-[#52605B] leading-relaxed">
                    Shop No. 6, Majed Bin Sultan Bldg, Al Souq Al Kabeer (Near Meena Bazaar & Al Ghubaiba Metro)
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#E88295]/20 text-[11px]">
                    <span className="text-[#BA4961] font-semibold">{SALON_INFO.hoursDaily}</span>
                    <a
                      href={SALON_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2C4832] font-bold hover:underline flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-[#4E7A56]" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Treatment Highlight Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="absolute -top-6 -right-4 sm:-right-8 bg-white p-3.5 rounded-2xl border border-[#D96B82]/30 shadow-xl hidden sm:flex items-center gap-3 max-w-[260px]"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E88295]/30">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=250&q=80"
                    alt="Dr. Renaud Paris Facial"
                    category="skin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#BA4961] tracking-wider block">
                    Signature Ritual
                  </span>
                  <p className="text-xs font-bold text-[#1E2421] truncate">
                    Dr. Renaud Paris Facial
                  </p>
                  <p className="text-[10px] text-[#2C4832] font-semibold">
                    French Botanical Glow
                  </p>
                </div>
              </motion.div>

              {/* Floating Verified Client Review Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-2xl border border-[#82AF89]/40 shadow-xl hidden sm:flex items-center gap-3.5 max-w-[310px]"
              >
                <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#BA4961] to-[#82AF89] shrink-0">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Pooja M."
                    category="avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
                    ))}
                    <span className="text-[10px] text-[#1E2421] font-bold ml-1">5.0</span>
                  </div>
                  <p className="text-[11.5px] font-serif font-bold text-[#1E2421] line-clamp-1">
                    “Flawless Dr. Renaud facial & brow threading!”
                  </p>
                  <p className="text-[10px] text-[#52605B]">
                    Pooja M. · Google Verified Review
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* SIGNATURE TREATMENTS HIGHLIGHTS TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-12">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#E88295]/25 shadow-lg grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E88295]/20">
          <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1E2421]">Dr. Renaud Paris</p>
              <p className="text-[11px] text-[#52605B]">French Botanical Skincare</p>
            </div>
          </div>

          <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EDF7EF] border border-[#82AF89]/30 flex items-center justify-center text-[#2C4832] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1E2421]">Italian Rica Waxing</p>
              <p className="text-[11px] text-[#52605B]">Liposoluble & Sensitive</p>
            </div>
          </div>

          <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1E2421]">Moroccan Hammam</p>
              <p className="text-[11px] text-[#52605B]">Eucalyptus Beldi Steam</p>
            </div>
          </div>

          <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EDF7EF] border border-[#82AF89]/30 flex items-center justify-center text-[#2C4832] shrink-0">
              <HomeIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1E2421]">Doorstep Concierge</p>
              <p className="text-[11px] text-[#52605B]">Across All Dubai Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PILLARS: SALON SANCTUARY & VIP HOME SERVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#BA4961] font-bold">The Slender Advantage</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2421]">Two Ways to Experience Pure Pampering</h2>
          <p className="text-[#52605B] text-sm sm:text-base leading-relaxed">
            Whether you desire the tranquil ambiance of our Bur Dubai salon or the comfort of beauty services at your residence, we bring perfection to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Option 1: In-Salon Studio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E88295]/30 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF0F3] border border-[#D96B82]/40 flex items-center justify-center text-[#BA4961] shadow-2xs group-hover:scale-105 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-[#BA4961] font-bold">Bur Dubai Atelier</span>
                <h3 className="font-serif text-2xl font-bold text-[#1E2421]">Visit Our Salon Suite</h3>
                <p className="text-sm text-[#52605B] leading-relaxed">
                  Located in the heart of Bur Dubai near Meena Bazaar. Enjoy dedicated private treatment rooms, sterilized equipment, relaxing Moroccan bath steam suites, and warm Arabic hospitality.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[#52605B]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BA4961] flex-shrink-0" />
                  <span>Private facial suites and certified female estheticians</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BA4961] flex-shrink-0" />
                  <span>Full traditional Moroccan hammam bath facilities</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#BA4961] flex-shrink-0" />
                  <span>Steps away from Al Ghubaiba Metro Station & Meena Bazaar</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E88295]/20 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#BA4961]">From AED 29 (Threading)</span>
              <button
                onClick={() => onNavigate('booking')}
                className="text-xs uppercase tracking-widest font-bold text-[#1E2421] group-hover:text-[#BA4961] flex items-center gap-1 transition cursor-pointer"
              >
                <span>Book In-Salon</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Option 2: VIP Home Service */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#82AF89]/40 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#EDF7EF] border border-[#82AF89]/50 flex items-center justify-center text-[#2C4832] shadow-2xs group-hover:scale-105 transition-transform">
                <HomeIcon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-[#2C4832] font-bold">Doorstep Concierge</span>
                <h3 className="font-serif text-2xl font-bold text-[#1E2421]">VIP Home Service Across Dubai</h3>
                <p className="text-sm text-[#52605B] leading-relaxed">
                  Why commute in Dubai traffic? Our certified female beauty therapists bring the entire salon setup to your villa, apartment, or hotel with disposable kits and supreme hygiene.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[#52605B]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#2C4832] flex-shrink-0" />
                  <span>Coverage: Bur Dubai, Downtown, Jumeirah, Marina, Deira & beyond</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#2C4832] flex-shrink-0" />
                  <span>Complete waxing, Dr. Renaud facials, hair & nail services</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#2C4832] flex-shrink-0" />
                  <span>Flexible timing & instant WhatsApp coordination</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#82AF89]/20 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2C4832]">Combos from AED 250</span>
              <button
                onClick={() => onNavigate('booking')}
                className="text-xs uppercase tracking-widest font-bold text-[#1E2421] group-hover:text-[#2C4832] flex items-center gap-1 transition cursor-pointer"
              >
                <span>Book Home Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURED SIGNATURE SERVICES */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-12 border-y border-[#E88295]/20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#BA4961] font-bold">Client Favorites</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2421]">Signature Treatments & Pricing</h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs uppercase tracking-widest font-bold text-[#BA4961] hover:text-[#D96B82] flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rounded-3xl overflow-hidden bg-[#FAF7F5] border border-[#E88295]/25 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <SafeImage
                    src={service.image} 
                    alt={service.name} 
                    category={service.category as any}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {service.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/95 text-[#BA4961] shadow-xs">
                      {service.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 text-white backdrop-blur-md">
                    {service.duration}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#1E2421] leading-snug">{service.name}</h3>
                      <span className="text-xl font-serif font-bold text-[#BA4961] ml-2">{formatPrice(service.price)}</span>
                    </div>
                    <p className="text-xs text-[#52605B] leading-relaxed line-clamp-3">{service.shortDesc}</p>
                  </div>

                  <button
                    onClick={() => onNavigate('booking')}
                    className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold rose-gradient-bg text-white hover:shadow-md transition active:scale-95 cursor-pointer"
                  >
                    Book This Ritual
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* GOOGLE MAPS & LOCATION SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E88295]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Details Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF7EF] border border-[#82AF89]/40 text-[#2C4832] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#4E7A56]" />
                  <span>Google Maps: {SALON_INFO.rating} ★ ({SALON_INFO.reviewsCount} Reviews)</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF0F3] border border-[#D96B82]/30 text-[#BA4961] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Women-Owned Salon</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-bold text-[#1E2421]">
                  Visit Slender Ladies Salon in Bur Dubai
                </h3>
                <p className="text-sm text-[#52605B] leading-relaxed">
                  Conveniently situated in Shop No. 6, Majed Bin Sultan Building, 22 3A Street, Al Souq Al Kabeer in Al Fahidi. Just steps from Al Ghubaiba Metro Station and Meena Bazaar shopping hub.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2421]">Exact Address & Plus Code</h4>
                    <p className="text-xs sm:text-sm text-[#52605B] mt-0.5">{SALON_INFO.fullAddress}</p>
                    <p className="text-[11px] text-[#2C4832] font-semibold mt-0.5">Plus Code: {SALON_INFO.plusCode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EDF7EF] border border-[#82AF89]/30 flex items-center justify-center text-[#2C4832] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2421]">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-[#1E2421] font-semibold mt-0.5">{SALON_INFO.hoursDaily}</p>
                    <p className="text-[11px] text-[#52605B]">Open all 7 days for In-Salon & VIP Home Services</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2421]">Direct Contact</h4>
                    <p className="text-xs sm:text-sm text-[#1E2421] font-semibold mt-0.5">
                      Landline: <a href={`tel:${SALON_INFO.phone}`} className="hover:underline">{SALON_INFO.phone}</a>
                    </p>
                    <p className="text-xs sm:text-sm text-[#BA4961] font-semibold">
                      WhatsApp: <a href={`https://wa.me/${SALON_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{SALON_INFO.mobile}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E88295]/20 flex flex-wrap gap-3">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full rose-gradient-bg text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:shadow-md transition active:scale-95"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={SALON_INFO.freshaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-[#BA4961] text-[#BA4961] bg-[#FFF0F3] hover:bg-[#FFE4E9] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
              >
                <span>Book on Fresha (5.0★)</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon, I want to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-[#82AF89] text-[#2C4832] bg-[#EDF7EF] hover:bg-[#E0F3E3] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#2C4832]" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed Column */}
          <div className="lg:col-span-6 bg-[#EDF7EF] min-h-[350px] lg:min-h-full relative overflow-hidden flex flex-col justify-between">
            <iframe
              title="Slender Ladies Salon Dubai Google Map"
              src={SALON_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-grow"
            />
            <div className="p-3 bg-white/95 border-t border-[#82AF89]/30 text-center text-xs">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C4832] font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#4E7A56]" />
                <span>Open Direct Driving Directions (Google Maps 4.8★ 131 Reviews)</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* VERIFIED CLIENT REVIEWS SLIDER */}
      <TestimonialSlider onBookService={() => onNavigate('booking')} />

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl rose-sage-blend border border-[#E88295]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#BA4961] font-bold">Ready to Be Pampered?</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1E2421]">
              Reserve Your Salon Chair or Book Home Service Today
            </h3>
            <p className="text-xs sm:text-sm text-[#52605B] leading-relaxed">
              Fast, seamless booking via WhatsApp with our friendly concierge team. Special packages and doorstep pampering available all week.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full rose-gradient-bg text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#82AF89] text-[#2C4832] bg-white hover:bg-[#EDF7EF] font-bold text-xs uppercase tracking-widest transition flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +971 4 3515745</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
