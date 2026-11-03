/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Star, 
  ArrowRight,
  ArrowUpRight,
  Navigation,
  Calendar,
  ShieldCheck,
  Scissors,
  Sparkles,
  Layers,
  Wind,
  Flower2,
  Gem,
  Leaf,
  CheckCircle2
} from 'lucide-react';
import { SALON_INFO, SALON_SERVICES, formatPrice } from '../utils/booking';
import { TestimonialSlider } from './TestimonialSlider';
import { SafeImage } from './SafeImage';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'booking') => void;
  onSelectServiceAndBook?: (serviceName: string) => void;
}

const SERVICE_CATEGORIES_STRIP = [
  {
    id: 'cat-haircut',
    title: 'Haircut & Style',
    priceHint: 'From AED 50',
    serviceName: 'Signature Haircut, Hair Spa & Blowdry',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=640&q=80',
    icon: Scissors,
    category: 'hair' as const
  },
  {
    id: 'cat-threading',
    title: 'Threading & Wax',
    priceHint: 'From AED 19',
    serviceName: 'Full Face Threading & Eyebrow Architecture',
    image: '/assets/salon/hero-spa.jpg',
    icon: Sparkles,
    category: 'waxing' as const
  },
  {
    id: 'cat-skin',
    title: 'Skin & Facials',
    priceHint: 'From AED 55',
    serviceName: 'Dr. Renaud Paris Radiance Facial',
    image: '/assets/salon/hero-facial.jpg',
    icon: Layers,
    category: 'skin' as const
  },
  {
    id: 'cat-styling',
    title: 'Keratin & Colour',
    priceHint: 'From AED 120',
    serviceName: 'Organic Keratin, Botox & Protein Therapy',
    image: '/assets/salon/cat-styling.jpg',
    icon: Wind,
    category: 'hair' as const
  },
  {
    id: 'cat-spa',
    title: 'Spa & Nails',
    priceHint: 'From AED 59',
    serviceName: 'Spa Manicure, Pedicure, Nail Extensions & Henna',
    image: '/assets/salon/hero-nails.jpg',
    icon: Flower2,
    category: 'nails' as const
  }
];

const WHY_CHOOSE_US = [
  {
    icon: Gem,
    title: 'Expert Beauticians',
    subtitle: 'Skilled Fresha-verified specialists Fatima, Savya & Purnam'
  },
  {
    icon: Leaf,
    title: 'Premium Products',
    subtitle: 'French Dr. Renaud, Italian RICA wax & skin-friendly care'
  },
  {
    icon: Calendar,
    title: 'Easy Booking',
    subtitle: 'Quick and hassle-free appointments via WhatsApp & Fresha'
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic & Safe',
    subtitle: 'Clean, sanitized and comfortable 100% ladies-only space'
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectServiceAndBook }) => {
  const [mapInteractive, setMapInteractive] = useState<boolean>(false);

  const featuredServices = SALON_SERVICES.slice(0, 6);

  const handleBookService = (serviceName?: string) => {
    if (serviceName && onSelectServiceAndBook) {
      onSelectServiceAndBook(serviceName);
    } else {
      onNavigate('booking');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24 pb-12 sm:pb-16">
      
      {/* =====================================================================
          SECTION 1: HERO SECTION (EXACT REFERENCE LAYOUT + MOBILE ALIGNMENT)
          ===================================================================== */}
      <section className="px-3.5 sm:px-6 lg:px-10 pt-2 sm:pt-6">
        <div className="max-w-7xl mx-auto rounded-[26px] sm:rounded-[32px] overflow-hidden bg-white border border-[#EAE0D9] shadow-[0_20px_60px_-20px_rgba(22,19,20,0.08)] relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:min-h-[560px]">
            
            {/* Left Column (6 Cols): Clean Reference Typography, Dual Pill CTAs & 3-Icon Bar */}
            <div className="lg:col-span-6 p-5 sm:p-11 lg:p-14 flex flex-col justify-between z-10 bg-white lg:bg-transparent">
              
              <div className="space-y-4 sm:space-y-6 my-auto">
                {/* Kicker with Horizontal Line (`PREMIUM LADIES SALON & HOME SERVICE ——`) */}
                <div className="reveal-stagger-1 flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#161314]">
                    PREMIUM LADIES SALON &amp; HOME SERVICE
                  </span>
                  <span className="h-[1.5px] w-8 sm:w-16 bg-[#8E3046]/60 inline-block shrink-0" aria-hidden="true" />
                </div>

                {/* Bold Two-Line Headline (`Modern Beauty for Modern Women`) */}
                <div className="reveal-stagger-2 space-y-2.5 sm:space-y-3">
                  <h1 className="text-[32px] sm:text-5xl lg:text-[54px] font-bold leading-[1.08] tracking-[-0.02em] text-[#161314]">
                    Modern Beauty
                    <span className="block mt-1">
                      for <span className="text-[#8E3046]">Modern Women</span>
                    </span>
                  </h1>

                  <p className="text-[#4E4347] text-[13.5px] sm:text-base leading-relaxed max-w-[44ch] pt-0.5">
                    Facials, Hair Care, Italian RICA Waxing, Nail Art &amp; Complete Beauty Services in Bur Dubai (Shop No. 6) &amp; At Home Across Dubai.
                  </p>
                </div>

                {/* Dual Pill CTA Buttons (`Book Appointment →` + `Our Services`) — Equal 2-Col on Mobile */}
                <div className="reveal-stagger-3 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
                  <button
                    onClick={() => handleBookService('Dr. Renaud Paris Radiance Facial')}
                    className="px-4 sm:px-7 py-3.5 rounded-full bg-[#6B1D32] hover:bg-[#8E3046] text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 sm:gap-2 shadow-md whitespace-nowrap"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="px-4 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#161314] border border-[#161314]/35 hover:border-[#8E3046] font-semibold text-xs sm:text-sm transition-colors cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Our Services
                  </button>
                </div>
              </div>

              {/* Bottom 3-Column Trust Icon Strip Separated by Vertical Dividers */}
              <div className="reveal-stagger-4 pt-5 mt-6 sm:pt-8 sm:mt-8 border-t border-[#EFE6E0] grid grid-cols-3 divide-x divide-[#E2D6CE]">
                <div className="pr-2 sm:pr-5 flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E3046] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#161314] leading-tight">Easy Booking</span>
                </div>

                <div className="px-2 sm:px-5 flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E3046] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#161314] leading-tight">Expert Stylists</span>
                </div>

                <div className="pl-2 sm:pl-5 flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E3046] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#161314] leading-tight">Hygienic &amp; Safe</span>
                </div>
              </div>

            </div>

            {/* Right Column (6 Cols): Women's Luxury Salon Portrait with Seamless Framing */}
            <div className="lg:col-span-6 relative aspect-[4/3.2] sm:aspect-[16/11] lg:aspect-auto lg:min-h-full overflow-hidden bg-[#F5ECE6]">
              <SafeImage
                src="/assets/salon/hero-hair.jpg"
                alt="Female Hair Stylist Styling Woman Client at Slender Ladies Salon Dubai"
                category="hair"
                priority={true}
                className="w-full h-full object-cover object-top sm:object-center hero-portrait-reveal"
              />

              {/* Seamless Left Gradient Fade matching the Reference Hero on Desktop */}
              <div
                className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/75 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Centered on Mobile, Bottom-Right on Desktop Real Brand Verification Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-xs border border-[#E6DCD5] rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-lg flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
                <div className="flex items-center gap-1 text-[#D97706] font-bold text-[11px] sm:text-xs editorial-num">
                  <Star className="w-3.5 h-3.5 fill-[#D97706] shrink-0" />
                  <span>{SALON_INFO.rating} Google ({SALON_INFO.reviewsCount}+)</span>
                </div>
                <span className="h-3.5 w-[1px] bg-[#E2D6CE]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#8E3046] editorial-num">5.0★ Fresha</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 2: "OUR SERVICES" 5-CARD VISUAL STRIP (SYMMETRICAL ON MOBILE)
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-10 space-y-8 sm:space-y-12">
        
        {/* Centered Heading with Flanking Lines (`—— Our Services ——`) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-center">
          <span className="h-[1.5px] w-10 sm:w-20 bg-[#8E3046]/40" aria-hidden="true" />
          <h2 className="text-2xl sm:text-4xl font-bold text-[#161314] tracking-tight">
            Our Services
          </h2>
          <span className="h-[1.5px] w-10 sm:w-20 bg-[#8E3046]/40" aria-hidden="true" />
        </div>

        {/* 5 Visual Category Cards — 2x2 + Full-Width 5th Card on Mobile so Zero Empty Grid Hole */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {SERVICE_CATEGORIES_STRIP.map((cat, idx) => {
            const IconComponent = cat.icon;
            const isFifthCard = idx === 4;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleBookService(cat.serviceName)}
                className={`group rounded-[22px] sm:rounded-[26px] overflow-hidden bg-white border border-[#E6DCD5] shadow-xs hover:shadow-md transition-all flex flex-col text-center cursor-pointer ${
                  isFifthCard ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#EFE6E0] ${
                    isFifthCard
                      ? 'aspect-[16/7.5] sm:aspect-[4/3.6]'
                      : 'aspect-[4/3.4] sm:aspect-[4/3.6]'
                  }`}
                >
                  <SafeImage
                    src={cat.image}
                    alt={cat.title}
                    category={cat.category}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Sculpted Deep Rose-Burgundy Bottom Tab Matching Reference */}
                <div className="w-full bg-gradient-to-b from-[#5A1829] to-[#3B0F1B] text-white px-2.5 py-3 sm:px-3 sm:py-4 -mt-3 relative z-10 rounded-t-[18px] sm:rounded-t-[20px] flex flex-col items-center justify-center gap-1 flex-grow">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8B4B8] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-white leading-tight">
                    {cat.title}
                  </span>
                  <span className="text-[10.5px] text-white/75 editorial-num">
                    {cat.priceHint}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean 6 Most Popular Packages Grid (Minimal & Easy to Book) */}
        <div className="pt-2 sm:pt-4 space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3 border-b border-[#EAE0D9] pb-4">
            <div>
              <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.2em] text-[#8E3046] font-bold block">
                MOST POPULAR FRESHA &amp; SALON OFFERS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#161314]">
                Featured Ladies Beauty Packages
              </h3>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs uppercase tracking-[0.14em] font-semibold text-[#8E3046] hover:text-[#161314] inline-flex items-center gap-1.5 cursor-pointer transition-colors self-start sm:self-auto"
            >
              <span>View Full 61-Item AED Rate Card</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <article 
                key={service.id} 
                className="rounded-[24px] sm:rounded-3xl bg-white border border-[#EAE0D9] hover:border-[#8E3046]/40 transition-all overflow-hidden flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE6E0]">
                    <SafeImage
                      src={service.image} 
                      alt={service.name} 
                      category={service.category as any}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-6 space-y-2">
                    <div className="flex items-center justify-between gap-2 text-[10.5px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#7A6C72] font-semibold editorial-num">
                      <span className="text-[#8E3046] truncate">{service.badge || service.category}</span>
                      <span className="shrink-0">{service.duration}</span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-medium text-[#161314] group-hover:text-[#8E3046] transition-colors leading-snug">
                      {service.name}
                    </h4>

                    <p className="text-xs text-[#5C5055] leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3.5 border-t border-[#F0E7E1] flex items-center justify-between gap-2">
                  <div className="flex items-baseline gap-2 editorial-num">
                    <span className="font-serif text-xl font-semibold text-[#161314]">
                      {formatPrice(service.price)}
                    </span>
                    {service.originalPrice && (
                      <span className="text-xs text-[#8A7E84] line-through">
                        AED {service.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleBookService(service.name)}
                    className="px-4 py-2 rounded-full bg-[#6B1D32] hover:bg-[#8E3046] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </section>

      {/* =====================================================================
          SECTION 3: "THE SLENDER SALON EXPERIENCE" SPLIT BANNER (REFERENCE)
          ===================================================================== */}
      <section id="experience-section" className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-10 scroll-mt-24">
        <div className="rounded-[26px] sm:rounded-[32px] overflow-hidden bg-gradient-to-r from-[#2D0C16] via-[#4A1424] to-[#2D0C16] text-white border border-[#8E3046]/30 shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Panel (5 Cols): Stacked Title & Experience Description */}
          <div className="lg:col-span-5 p-6 sm:p-11 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold leading-[1.1] tracking-tight text-white">
              The
              <span className="block">Slender Salon</span>
              <span className="block text-[#F3B8C4]">Experience</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              A modern, comfortable ladies-only space at <strong className="text-white">Shop No. 6, Majed Bin Sultan Building, Bur Dubai</strong>—plus 5.0★ rated VIP Home Service across Dubai by specialists <strong className="text-white">Fatima, Savya &amp; Purnam</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-[#F3B8C4] font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span>In-Salon (Bur Dubai)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span>All-Dubai VIP Home Service</span>
              </span>
            </div>
          </div>

          {/* Right Panel (7 Cols): Luxury Salon Mirrors & Styling Chairs Interior */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-auto sm:min-h-[320px] overflow-hidden bg-[#1D080E]">
            <SafeImage
              src="/assets/salon/hero-sanctuary.jpg"
              alt="Slender Ladies Salon Bur Dubai Mirrors and Styling Chairs Interior"
              category="interior"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#3D101E] to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 4: "WHY CHOOSE US" 2x2 MOBILE / 4-COL DESKTOP STRIP
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-10 space-y-7 sm:space-y-10">
        
        {/* Centered Heading with Flanking Lines (`—— Why Choose Us ——`) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-center">
          <span className="h-[1.5px] w-10 sm:w-20 bg-[#8E3046]/40" aria-hidden="true" />
          <h2 className="text-2xl sm:text-4xl font-bold text-[#161314] tracking-tight">
            Why Choose Us
          </h2>
          <span className="h-[1.5px] w-10 sm:w-20 bg-[#8E3046]/40" aria-hidden="true" />
        </div>

        {/* 2x2 Symmetrical Grid on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E6DCD5] rounded-[24px] sm:rounded-3xl border border-[#EAE0D9] overflow-hidden shadow-2xs">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-4 sm:p-7 flex flex-col items-center text-center space-y-2"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#8E3046]/10 text-[#8E3046] flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#161314] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5C5055] leading-relaxed max-w-[24ch]">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* =====================================================================
          SECTION 5: VERIFIED CLIENT REVIEWS CAROUSEL
          ===================================================================== */}
      <TestimonialSlider onBookService={handleBookService} />

      {/* =====================================================================
          SECTION 6: "BOOK YOUR BEAUTY SESSION" CTA BANNER (REFERENCE) + MAP
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-10 space-y-8 sm:space-y-10">
        
        {/* Bottom CTA Banner Matching Reference Image (`Book Your Beauty Session`) */}
        <div className="rounded-[26px] sm:rounded-[32px] overflow-hidden bg-gradient-to-r from-[#2D0C16] via-[#4A1424] to-[#2D0C16] text-white border border-[#8E3046]/30 shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Spa Products Photo (6 Cols) */}
          <div className="lg:col-span-6 relative aspect-[16/9.5] sm:aspect-auto sm:min-h-[300px] overflow-hidden bg-[#1D080E]">
            <SafeImage
              src="/assets/salon/spa-towels.jpg"
              alt="Luxury Spa Towels and Botanical Care at Slender Ladies Salon"
              category="hammam"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#3B101D] to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Right CTA Content (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-11 lg:p-12 flex flex-col justify-center items-start lg:items-end lg:text-right space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-white">
                Book Your
                <span className="block text-[#F3B8C4]">Beauty Session</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-md">
                Reserve your appointment at our Bur Dubai salon (Open Daily till 10:00 PM) or book VIP Home Service anywhere in Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleBookService('Full Transformation Bundle (Fresha Top Seller)')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#F3B8C4] hover:bg-white text-[#2D0C16] font-bold text-xs sm:text-sm transition-colors cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 editorial-num"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3B8C4]" />
                <span>{SALON_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Clean, Minimal Verified Bur Dubai Location & Map Card */}
        <div className="rounded-[24px] sm:rounded-[28px] bg-white border border-[#EAE0D9] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-6 p-5 sm:p-10 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-3.5 sm:space-y-4">
              <span className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8E3046] font-bold block">
                VERIFIED BUR DUBAI LOCATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#161314]">
                Shop No. 6, Majed Bin Sultan Building
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5055] leading-relaxed">
                {SALON_INFO.fullAddress}
              </p>

              <div className="pt-3 border-t border-[#EFE6E0] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs editorial-num">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E3046] font-bold block">
                    OPENING HOURS
                  </span>
                  <p className="font-semibold text-[#161314] mt-0.5">Mon–Sun: Until 10:00 PM</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E3046] font-bold block">
                    DIRECT CONTACTS
                  </span>
                  <p className="font-semibold text-[#161314] mt-0.5">{SALON_INFO.phone} · {SALON_INFO.mobile}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#6B1D32] hover:bg-[#8E3046] text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[300px] bg-[#EFE6E0] border-t lg:border-t-0 lg:border-l border-[#EAE0D9]">
            <iframe
              title="Slender Ladies Salon Bur Dubai Official Google Map"
              src={SALON_INFO.googleMapsEmbed}
              className={`w-full h-full min-h-[240px] sm:min-h-[300px] border-0 ${
                mapInteractive ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {!mapInteractive && (
              <div
                onClick={() => setMapInteractive(true)}
                className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors flex items-end justify-start p-3.5 sm:p-4 cursor-pointer"
                title="Click to interact with Google Map"
              >
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#161314] text-xs font-semibold shadow-sm border border-[#E6DCD5] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8E3046]" />
                  <span>Click to Interact with Map</span>
                </span>
              </div>
            )}
          </div>

        </div>

      </section>

    </div>
  );
};

