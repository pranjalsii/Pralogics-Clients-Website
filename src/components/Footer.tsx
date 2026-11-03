/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Phone,
  Star,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { SALON_INFO } from '../utils/booking';
import { SlenderLogoMark } from './SlenderLogo';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'booking') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1D0D13] text-white mt-10 sm:mt-12 pt-12 sm:pt-14 pb-20 sm:pb-12 px-4 sm:px-6 lg:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-9 sm:space-y-10">
        
        {/* Clean, Minimal 4-Column High-Trust Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1 (4 Cols): Brand Identity & Verified Trust Badges */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <SlenderLogoMark size="md" showWordmarkInside={true} />
              <div className="leading-tight">
                <span className="block text-xs font-bold tracking-[0.18em] uppercase text-white">
                  SLENDER
                </span>
                <span className="block text-lg font-bold text-[#F3B8C4]">
                  Ladies Salon
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed max-w-sm">
              100% ladies-only beauty sanctuary in Bur Dubai (Shop No. 6, Near Meena Bazaar) &amp; VIP Home Service across Dubai.
            </p>

            {/* Compact Verified Trust Badges */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 pt-1">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition inline-flex items-center justify-center gap-1.5 text-xs"
              >
                <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24] shrink-0" />
                <span className="font-semibold text-white editorial-num truncate">{SALON_INFO.rating} Google ({SALON_INFO.reviewsCount}+)</span>
              </a>

              <a
                href={SALON_INFO.freshaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition inline-flex items-center justify-center gap-1.5 text-xs"
              >
                <Star className="w-3.5 h-3.5 fill-[#F3B8C4] text-[#F3B8C4] shrink-0" />
                <span className="font-semibold text-white editorial-num truncate">5.0★ Fresha Partner</span>
              </a>
            </div>
          </div>

          {/* Column 2 (2 Cols): Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#F3B8C4]">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-2.5 text-xs sm:text-[13px] text-white/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services &amp; Price List
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
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Salon Gallery
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
                  className="text-[#F3B8C4] hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 (3 Cols): Verified Bur Dubai Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#F3B8C4]">
              Location &amp; Hours
            </h4>
            <div className="space-y-2 text-xs text-white/75 leading-relaxed">
              <p className="text-white font-medium">
                Shop No. 6, Majed Bin Sultan Bldg, 22 3A St, Al Souq Al Kabeer (Meena Bazaar), Bur Dubai
              </p>
              <p className="flex items-center gap-1.5 text-white/80 editorial-num">
                <Clock className="w-3.5 h-3.5 text-[#F3B8C4] shrink-0" />
                <span>Open Daily: 10:00 AM – 10:00 PM</span>
              </p>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#F3B8C4] hover:underline font-semibold pt-0.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions on Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 4 (3 Cols): Instant Booking & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#F3B8C4]">
              Instant Booking
            </h4>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1F7A54] hover:bg-[#186343] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors editorial-num"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {SALON_INFO.mobile}</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors editorial-num"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3B8C4]" />
                <span>Call Salon: {SALON_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Clean Bottom Bar with Copyright & Social Icons */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/55">
          <p>© {new Date().getFullYear()} Slender Ladies Salon | Salon &amp; Home Service Dubai. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Slender Ladies Salon Instagram"
              title="@slenderladiessaloon"
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#8E3046] text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SALON_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Slender Ladies Salon Facebook"
              title="Facebook"
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#8E3046] text-white flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={SALON_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Slender Ladies Salon LinkedIn"
              title="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#8E3046] text-white flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={SALON_INFO.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-[#8E3046] text-white text-[11px] font-semibold transition-colors"
            >
              Fresha 5.0★
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
