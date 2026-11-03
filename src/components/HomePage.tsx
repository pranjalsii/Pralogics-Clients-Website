/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  Heart
} from 'lucide-react';
import { SALON_INFO, SALON_SERVICES, formatPrice } from '../utils/booking';
import { TestimonialSlider } from './TestimonialSlider';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'booking') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredServices = SALON_SERVICES.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FAF7F5] via-white to-[#F8FBF9]">
        
        {/* Soft Ambient Radiance */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[450px] bg-[#E88295]/12 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[380px] bg-[#82AF89]/14 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Brand Story & Call to Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D96B82]/30 bg-white/95 shadow-xs backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BA4961] animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#BA4961]">
                Bur Dubai · {SALON_INFO.yearsEstablished} · Salon & Home Service
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight text-[#1E2421]">
                Elegance Redefined, <br />
                <span className="rose-gradient-text italic font-normal">Luxury Delivered.</span>
              </h1>
              
              <p className="text-[#52605B] text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience Dubai’s premier ladies sanctuary. From French Dr. Renaud facials and Italian Rica waxing to authentic Moroccan hammam and VIP doorstep home service across Dubai.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('booking')}
                className="w-full sm:w-auto px-8 py-4 rounded-full rose-gradient-bg text-white font-bold text-xs tracking-[0.2em] uppercase transition duration-300 hover:shadow-[0_10px_30px_rgba(217,107,130,0.38)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book In-Salon or Home Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-4 rounded-full border-2 border-[#82AF89] text-[#2C4832] font-bold text-xs tracking-[0.2em] uppercase transition duration-300 hover:bg-[#EDF7EF] active:scale-95 cursor-pointer"
              >
                View Services & AED Prices
              </button>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#E88295]/20 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2421]">{SALON_INFO.rating}</span>
                  <div className="flex text-[#D4AF37]">
                    <Star className="w-4 h-4 fill-[#D4AF37]" />
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-[#52605B] uppercase tracking-wider mt-1">
                  Google Maps ({SALON_INFO.reviewsCount} Reviews)
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#BA4961]">10,000+</p>
                <p className="text-[11px] sm:text-xs text-[#52605B] uppercase tracking-wider mt-1">
                  Ladies Pampered in Dubai
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C4832]">100%</p>
                <p className="text-[11px] sm:text-xs text-[#52605B] uppercase tracking-wider mt-1">
                  Certified Female Therapists
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E88295]/30 shadow-2xl bg-white aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop" 
                  alt="Slender Ladies Salon Dubai Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Floating Studio Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card-light backdrop-blur-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#82AF89] animate-pulse"></span>
                      <p className="text-xs font-bold text-[#1E2421] uppercase tracking-widest">
                        Bur Dubai Salon Suite & VIP Home Service
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

              {/* Decorative Corner Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-[#D96B82]/30 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF0F3] border border-[#D96B82]/40 flex items-center justify-center text-[#BA4961]">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1E2421] uppercase tracking-wider">VIP Home Service</p>
                  <p className="text-[11px] text-[#52605B]">Available across all Dubai</p>
                </div>
              </div>

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
                className="text-xs uppercase tracking-widest font-bold text-[#1E2421] group-hover:text-[#BA4961] flex items-center gap-1 transition"
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
                className="text-xs uppercase tracking-widest font-bold text-[#1E2421] group-hover:text-[#2C4832] flex items-center gap-1 transition"
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
                  <img 
                    src={service.image} 
                    alt={service.name} 
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
          <div className="lg:col-span-6 bg-[#EDF7EF] min-h-[350px] lg:min-h-full relative overflow-hidden">
            <iframe
              title="Slender Ladies Salon Dubai Google Map"
              src={SALON_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
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
            <button
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto px-8 py-4 rounded-full rose-gradient-bg text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer"
            >
              Book via WhatsApp Now
            </button>
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
