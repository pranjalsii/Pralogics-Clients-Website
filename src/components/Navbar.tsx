/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Sparkles,
  ChevronRight,
  Home as HomeIcon,
  Image as ImageIcon
} from 'lucide-react';
import { SALON_INFO } from '../utils/booking';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'booking';
  onNavigate: (page: 'home' | 'services' | 'booking') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubSection, setActiveSubSection] = useState<'gallery' | 'booking'>('booking');

  // Monitor scroll for shadow and styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNav = (page: 'home' | 'services' | 'booking', sectionId?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-panel-light shadow-[0_4px_25px_rgba(217,107,130,0.12)] border-b border-[#E88295]/25 py-2 sm:py-2.5' 
            : 'glass-panel-light border-b border-[#E88295]/20 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[52px] sm:min-h-[58px]">
          
          {/* Brand Logo (Left) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
            aria-label="Slender Ladies Salon Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D96B82]/40 flex items-center justify-center bg-gradient-to-br from-[#FFF5F7] via-white to-[#EDF7EF] group-hover:border-[#D96B82] group-hover:shadow-[0_0_15px_rgba(217,107,130,0.3)] transition-all duration-300 shadow-xs shrink-0">
              <span className="font-cinzel text-[#BA4961] text-base sm:text-lg font-bold">S</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-cinzel tracking-[0.16em] sm:tracking-[0.2em] text-sm sm:text-base font-bold text-[#1E2421] group-hover:text-[#BA4961] transition-colors whitespace-nowrap">
                  SLENDER
                </span>
                <span className="font-cinzel text-[11px] sm:text-xs text-[#BA4961] tracking-widest font-semibold">
                  SALON
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.22em] text-[#52605B] uppercase font-semibold flex items-center gap-1 mt-0.5">
                <span>DUBAI · BUR DUBAI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#82AF89] inline-block animate-pulse"></span>
              </span>
            </div>
          </button>

          {/* Desktop & Tablet Navigation Menu - All Single Words (md screens and above) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-9 text-xs sm:text-[13px] font-medium tracking-[0.18em] uppercase">
            <button
              onClick={() => handleNav('home')}
              className={`transition-all duration-200 py-1.5 cursor-pointer relative font-semibold ${
                currentPage === 'home'
                  ? 'text-[#BA4961] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#BA4961] after:rounded-full'
                  : 'text-[#52605B] hover:text-[#BA4961]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('services')}
              className={`transition-all duration-200 py-1.5 cursor-pointer relative font-semibold ${
                currentPage === 'services'
                  ? 'text-[#BA4961] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#BA4961] after:rounded-full'
                  : 'text-[#52605B] hover:text-[#BA4961]'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => {
                setActiveSubSection('gallery');
                handleNav('booking', 'gallery-section');
              }}
              className={`transition-all duration-200 py-1.5 cursor-pointer relative font-semibold ${
                currentPage === 'booking' && activeSubSection === 'gallery'
                  ? 'text-[#BA4961] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#BA4961] after:rounded-full'
                  : 'text-[#52605B] hover:text-[#BA4961]'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className={`transition-all duration-200 py-1.5 cursor-pointer relative font-semibold ${
                currentPage === 'booking' && activeSubSection === 'booking'
                  ? 'text-[#BA4961] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#BA4961] after:rounded-full'
                  : 'text-[#52605B] hover:text-[#BA4961]'
              }`}
            >
              Booking
            </button>
          </nav>

          {/* Desktop Right Action Buttons (lg screens and above) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Direct Google Maps */}
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Google Maps (Bur Dubai)"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#82AF89]/40 text-[#2C4832] bg-[#F2F9F4] hover:bg-[#E3F0E6] transition text-[11px] uppercase tracking-wider font-semibold cursor-pointer shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#4E7A56]" />
              <span>Bur Dubai</span>
            </a>

            {/* Direct Phone */}
            <a
              href={`tel:${SALON_INFO.phone}`}
              title={`Call Salon: ${SALON_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#E88295]/40 text-[#BA4961] bg-[#FFF0F3] hover:bg-[#FFE3E8] transition text-[11px] uppercase tracking-wider font-semibold cursor-pointer shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{SALON_INFO.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Direct WhatsApp Concierge */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I'd like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+971 50 915 2969)"
              className="p-2.5 rounded-full border border-[#82AF89]/50 text-[#2C4832] bg-[#EDF7EF] hover:bg-[#E0F3E3] transition cursor-pointer shadow-2xs"
              aria-label="WhatsApp Concierge"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>

            {/* Main Booking CTA */}
            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className="ml-1 px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-bold text-white rose-gradient-bg transition-all duration-300 hover:shadow-[0_6px_25px_rgba(217,107,130,0.35)] active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Medium Screen / Tablet Right CTA (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#82AF89]/40 bg-[#EDF7EF] text-[#2C4832]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>

            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className="px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-white rose-gradient-bg shadow-sm"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Action Buttons & Hamburger (under md) */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Call Button */}
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="p-2 sm:p-2.5 rounded-full border border-[#E88295]/30 bg-[#FFF0F3] text-[#BA4961] active:scale-95 transition"
              aria-label="Call Salon"
              title="Call Salon"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick WhatsApp Button */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full border border-[#82AF89]/40 bg-[#EDF7EF] text-[#2C4832] active:scale-95 transition"
              aria-label="WhatsApp Salon"
              title="WhatsApp Salon"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-full border border-[#52605B]/20 bg-white text-[#1E2421] active:scale-95 transition focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#BA4961]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu Panel */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-[58px] sm:top-[68px] left-0 right-0 z-50 bg-[#FAF7F5] border-b border-[#E88295]/20 shadow-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 md:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
        >
          {/* Navigation Links - Single Words */}
          <div className="space-y-1.5">
            <button
              onClick={() => handleNav('home')}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-between transition ${
                currentPage === 'home'
                  ? 'bg-[#FFF0F3] text-[#BA4961] border border-[#E88295]/30 shadow-2xs'
                  : 'text-[#1E2421] hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <HomeIcon className={`w-4 h-4 ${currentPage === 'home' ? 'text-[#BA4961]' : 'text-[#82AF89]'}`} />
                <span>Home</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-between transition ${
                currentPage === 'services'
                  ? 'bg-[#FFF0F3] text-[#BA4961] border border-[#E88295]/30 shadow-2xs'
                  : 'text-[#1E2421] hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className={`w-4 h-4 ${currentPage === 'services' ? 'text-[#BA4961]' : 'text-[#82AF89]'}`} />
                <span>Services</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>

            <button
              onClick={() => {
                setActiveSubSection('gallery');
                handleNav('booking', 'gallery-section');
              }}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-between transition ${
                currentPage === 'booking' && activeSubSection === 'gallery'
                  ? 'bg-[#FFF0F3] text-[#BA4961] border border-[#E88295]/30 shadow-2xs'
                  : 'text-[#1E2421] hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <ImageIcon className={`w-4 h-4 ${currentPage === 'booking' && activeSubSection === 'gallery' ? 'text-[#BA4961]' : 'text-[#82AF89]'}`} />
                <span>Gallery</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>

            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-between transition ${
                currentPage === 'booking' && activeSubSection === 'booking'
                  ? 'bg-[#FFF0F3] text-[#BA4961] border border-[#E88295]/30 shadow-2xs'
                  : 'text-[#1E2421] hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className={`w-4 h-4 ${currentPage === 'booking' && activeSubSection === 'booking' ? 'text-[#BA4961]' : 'text-[#BA4961]'}`} />
                <span>Booking</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>

          {/* Quick Info Pill */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E88295]/20 text-xs space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#BA4961] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bur Dubai Atelier & VIP Home Service</span>
            </div>
            <p className="text-[11px] text-[#52605B]">
              Shop No. 6, Majed Bin Sultan Building, 22 3A St (Near Meena Bazaar)
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#2C4832] font-semibold pt-0.5">
              <Clock className="w-3.5 h-3.5 text-[#4E7A56]" />
              <span>Open Daily: 09:00 AM – 10:00 PM</span>
            </div>
          </div>

          {/* Action Buttons in Drawer */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-white rose-gradient-bg shadow-md active:scale-98 transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment (Salon / Home)</span>
            </button>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border border-[#82AF89]/50 text-[#2C4832] bg-[#EDF7EF] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Concierge</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="py-2.5 rounded-xl border border-[#E88295]/40 text-[#BA4961] bg-white text-[11px] uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Salon</span>
              </a>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl border border-[#82AF89]/40 text-[#2C4832] bg-white text-[11px] uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#4E7A56]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
