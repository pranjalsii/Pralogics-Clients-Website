/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Leaf, 
  Instagram, 
  Linkedin, 
  Facebook, 
  ExternalLink,
  Calendar,
  Clock,
  Sparkles,
  Award,
  ShieldCheck,
  Heart,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { SALON_INFO } from '../utils/booking';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'booking') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: '100% Women-Only',
      description: 'Private chambers, total privacy & certified female beauticians'
    },
    {
      icon: Sparkles,
      title: 'Authentic Luxury Brands',
      description: 'French Dr. Renaud Paris, Italian Rica, Olaplex & OPI'
    },
    {
      icon: CheckCircle2,
      title: 'Sterilized Hygiene',
      description: 'Single-use disposable towels & Dubai Municipality standard'
    },
    {
      icon: Award,
      title: 'VIP Home Service',
      description: 'Doorstep concierge dispatched anywhere across Dubai'
    }
  ];

  const socialLinks = [
    {
      name: 'WhatsApp Concierge',
      handle: '+971 50 915 2969',
      subtitle: 'Instant WhatsApp Booking & Inquiries',
      url: `https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`,
      icon: MessageCircle,
      color: 'bg-[#25D366] text-white',
      badgeClass: 'hover:border-[#25D366]/60 hover:bg-[#EDF7EF]'
    },
    {
      name: 'Instagram',
      handle: '@slenderladiessalon',
      subtitle: 'Latest Hair, Skin & Nail Transformations',
      url: SALON_INFO.instagramUrl,
      icon: Instagram,
      color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white',
      badgeClass: 'hover:border-[#DD2A7B]/60 hover:bg-[#FFF0F3]'
    },
    {
      name: 'LinkedIn',
      handle: 'Slender Ladies Salon Dubai',
      subtitle: 'Corporate & Hospitality Wellness Services',
      url: SALON_INFO.linkedinUrl,
      icon: Linkedin,
      color: 'bg-[#0A66C2] text-white',
      badgeClass: 'hover:border-[#0A66C2]/60 hover:bg-[#F0F7FF]'
    },
    {
      name: 'Facebook',
      handle: 'Slender Ladies Salon Dubai',
      subtitle: 'Client Stories, Reviews & Updates',
      url: SALON_INFO.facebookUrl,
      icon: Facebook,
      color: 'bg-[#1877F2] text-white',
      badgeClass: 'hover:border-[#1877F2]/60 hover:bg-[#F0F7FF]'
    },
    {
      name: 'Google Maps Profile',
      handle: `${SALON_INFO.rating} ★ (${SALON_INFO.reviewsCount} Reviews)`,
      subtitle: 'Verified Bur Dubai Location & Directions',
      url: SALON_INFO.googleMapsUrl,
      icon: MapPin,
      color: 'bg-[#4E7A56] text-white',
      badgeClass: 'hover:border-[#4E7A56]/60 hover:bg-[#EDF7EF]'
    },
    {
      name: 'Fresha Online Booking',
      handle: '5.0 ★ Top Rated Partner',
      subtitle: 'Verified Booking Calendar & Instant Confirmation',
      url: SALON_INFO.freshaUrl,
      icon: Calendar,
      color: 'bg-[#BA4961] text-white',
      badgeClass: 'hover:border-[#BA4961]/60 hover:bg-[#FFF0F3]'
    }
  ];

  return (
    <footer className="border-t border-[#E88295]/20 bg-gradient-to-b from-[#FAF7F5] via-[#FFFBF9] to-[#F5ECE9] pt-16 pb-12 px-4 sm:px-6 lg:px-12 relative text-[#1E2421]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP TRUST & EXCELLENCE PILLARS (5-STAR ASSURANCE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#E88295]/25 shadow-sm">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 p-2">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2421]">{pillar.title}</h4>
                  <p className="text-[11px] text-[#52605B] mt-0.5 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN 4-COLUMN LUXURY FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Identity & Verification */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl border border-[#D96B82]/40 flex items-center justify-center bg-white shadow-xs">
                <span className="font-cinzel text-[#BA4961] text-xl font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel tracking-[0.22em] text-lg font-bold text-[#1E2421]">
                  SLENDER LADIES SALON
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#52605B] uppercase font-semibold flex items-center gap-1">
                  <span>Dubai · Atelier & VIP Home Concierge</span>
                  <Leaf className="w-2.5 h-2.5 text-[#82AF89]" />
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#52605B] max-w-sm leading-relaxed">
              Dubai’s acclaimed ladies sanctuary for French Dr. Renaud facials, Italian Rica waxing, organic threading, authentic Moroccan hammam rituals, and 5-star doorstep beauty pampering across Dubai.
            </p>

            {/* Quick Ratings & Verification Badges */}
            <div className="pt-1 flex flex-wrap gap-2">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View verified reviews on Google Maps"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#82AF89]/40 text-[#2C4832] text-xs font-semibold shadow-2xs hover:border-[#4E7A56] hover:bg-[#EDF7EF] transition"
              >
                <span className="text-[#D4AF37] font-bold">★</span>
                <span>Google: {SALON_INFO.rating} ({SALON_INFO.reviewsCount} Reviews)</span>
              </a>

              <a
                href={SALON_INFO.freshaUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View verified rating on Fresha"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E88295]/40 text-[#BA4961] text-xs font-semibold shadow-2xs hover:border-[#BA4961] hover:bg-[#FFF0F3] transition"
              >
                <Award className="w-3.5 h-3.5 text-[#BA4961]" />
                <span>Fresha: 5.0 ★ Top Rated</span>
              </a>
            </div>

            {/* Working Hours with Live Status */}
            <div className="flex items-center gap-2 text-xs text-[#52605B] pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#82AF89] animate-pulse" />
              <span className="font-semibold text-[#1E2421]">Working Hours:</span>
              <span>{SALON_INFO.hoursDaily}</span>
            </div>
          </div>

          {/* Col 2: Navigation & Popular Rituals */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs uppercase tracking-[0.25em] font-bold text-[#1E2421]">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs text-[#52605B]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#BA4961] transition cursor-pointer text-left font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#BA4961] transition cursor-pointer text-left font-medium"
                >
                  Bespoke Menu & AED Prices
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('booking');
                    setTimeout(() => {
                      const el = document.getElementById('gallery-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#BA4961] transition cursor-pointer text-left font-medium"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('booking');
                    setTimeout(() => {
                      const el = document.getElementById('booking-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#BA4961] transition cursor-pointer text-left text-[#BA4961] font-bold"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon, I would like to book VIP Home Service.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2C4832] transition cursor-pointer text-[#2C4832] font-semibold flex items-center gap-1"
                >
                  <span>VIP Home Concierge</span>
                  <ExternalLink className="w-3 h-3 text-[#4E7A56]" />
                </a>
              </li>
              <li>
                <a
                  href={SALON_INFO.freshaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#BA4961] transition cursor-pointer text-[#BA4961] font-semibold flex items-center gap-1"
                >
                  <span>Fresha Instant Booking</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Bur Dubai Atelier Location & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs uppercase tracking-[0.25em] font-bold text-[#1E2421]">
              Bur Dubai Atelier
            </h5>
            <div className="space-y-2 text-xs text-[#52605B]">
              <p className="text-[#1E2421] font-semibold">
                Shop No. 6, Ground Floor, Majed Bin Sultan Building
              </p>
              <p className="leading-relaxed">
                22 3A Street, Al Souq Al Kabeer, Al Fahidi, Bur Dubai, Dubai, UAE
              </p>
              <p className="text-[#BA4961] font-semibold text-[11px]">
                Near Meena Bazaar & Al Ghubaiba Metro Station
              </p>
              <p className="text-[#2C4832] font-medium text-[11px]">
                Plus Code: {SALON_INFO.plusCode}
              </p>

              <div className="pt-2 space-y-1.5 border-t border-[#E88295]/20">
                <p>
                  <span className="text-[#1E2421] font-bold">Landline:</span>{' '}
                  <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#BA4961] font-semibold transition">
                    {SALON_INFO.phone}
                  </a>
                </p>
                <p>
                  <span className="text-[#BA4961] font-bold">WhatsApp:</span>{' '}
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon, I would like to book an appointment.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#BA4961] font-bold transition"
                  >
                    {SALON_INFO.mobile}
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2C4832] hover:text-[#1E2421] font-bold underline"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#4E7A56]" />
                  <span>Get Driving Directions on Google Maps ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Social Profiles & Direct Redirection */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs uppercase tracking-[0.25em] font-bold text-[#1E2421] flex items-center gap-1.5">
              <span>Connect & Follow</span>
              <Sparkles className="w-3.5 h-3.5 text-[#BA4961]" />
            </h5>
            <p className="text-xs text-[#52605B]">
              Follow our verified channels for daily beauty transformations, bridal packages, and exclusive seasonal promotions.
            </p>

            <div className="grid grid-cols-1 gap-2 pt-1">
              {socialLinks.slice(0, 4).map((s) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 p-2 rounded-xl bg-white border border-[#E88295]/30 shadow-2xs transition-all duration-200 group ${s.badgeClass}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${s.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#1E2421] group-hover:text-[#BA4961] truncate flex items-center gap-1">
                        <span>{s.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                      </span>
                      <span className="text-[10px] text-[#52605B] truncate">{s.handle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* DEDICATED SOCIAL MEDIA ACTION BAR (INSTANT CLICK REDIRECTION) */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E88295]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFF0F3] border border-[#E88295]/40 flex items-center justify-center text-[#BA4961] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1E2421]">Instant Direct Redirection & Online Concierge</p>
              <p className="text-[11px] text-[#52605B]">Click any channel to open our verified official profile or chat directly with our team.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+971 50 915 2969)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EDF7EF] border border-[#82AF89]/50 text-[#2C4832] text-xs font-bold hover:bg-[#E0F3E3] transition shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Follow @slenderladiessalon on Instagram"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF0F3] border border-[#E88295]/40 text-[#BA4961] text-xs font-bold hover:bg-[#FFE3E8] transition shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#DD2A7B]" />
              <span>Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href={SALON_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Slender Ladies Salon on LinkedIn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F7FF] border border-[#0A66C2]/30 text-[#0A66C2] text-xs font-bold hover:bg-[#E5F1FF] transition shadow-2xs"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            {/* Facebook */}
            <a
              href={SALON_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Follow Slender Ladies Salon on Facebook"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F7FF] border border-[#1877F2]/30 text-[#1877F2] text-xs font-bold hover:bg-[#E5F1FF] transition shadow-2xs"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook</span>
            </a>

            {/* Google Maps */}
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Google Maps Profile (4.8★ 131 Reviews)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EDF7EF] border border-[#82AF89]/50 text-[#2C4832] text-xs font-bold hover:bg-[#E0F3E3] transition shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#4E7A56]" />
              <span>Google Maps ({SALON_INFO.reviewsCount} Reviews)</span>
            </a>

            {/* Fresha */}
            <a
              href={SALON_INFO.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Book on Fresha (5.0★)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF0F3] border border-[#E88295]/40 text-[#BA4961] text-xs font-bold hover:bg-[#FFE3E8] transition shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#BA4961]" />
              <span>Fresha (5.0★)</span>
            </a>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 border-t border-[#E88295]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52605B]">
          <p>© 2026 Slender Ladies Salon Dubai. All Rights Reserved. Licensed by Dubai Economy & Tourism.</p>
          
          <div className="flex flex-wrap items-center gap-4 text-[#52605B]">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon, I want to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BA4961] transition flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-[#E88295]/40">•</span>
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BA4961] transition flex items-center gap-1 font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-[#4E7A56]" />
              <span>Google Maps (131 Reviews)</span>
            </a>
            <span className="text-[#E88295]/40">•</span>
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BA4961] transition flex items-center gap-1 font-medium"
            >
              <Instagram className="w-3.5 h-3.5 text-[#DD2A7B]" />
              <span>Instagram</span>
            </a>
            <span className="text-[#E88295]/40">•</span>
            <a
              href={SALON_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BA4961] transition flex items-center gap-1 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
