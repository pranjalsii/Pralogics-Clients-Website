/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { SALON_INFO } from '../utils/booking';
import { SlenderLogoMark } from './SlenderLogo';

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
  const [activeSubSection, setActiveSubSection] = useState<'gallery' | 'booking' | 'specialists'>('booking');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
          scrolled 
            ? 'bg-white/95 border-[#E6DCD5] py-3 shadow-[0_4px_20px_rgba(22,19,20,0.04)]' 
            : 'bg-[#FAF8F5] border-[#EDE4DE] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
          
          {/* Zone 1: Official High-Definition Slender Ladies Salon Emblem & Brand Name */}
          <div className="flex items-center gap-5 shrink-0">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
              aria-label="Slender Ladies Salon Home"
            >
              <SlenderLogoMark
                size="md"
                showWordmarkInside={true}
                className="group-hover:scale-105 transition-transform duration-200"
              />
              <div className="leading-tight">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#161314]">
                  SLENDER
                </span>
                <span className="block text-base sm:text-lg font-bold tracking-tight text-[#8E3046]">
                  Ladies Salon
                </span>
              </div>
            </button>

            <span className="hidden lg:block h-7 w-[1px] bg-[#E2D6CE]" aria-hidden="true" />
          </div>

          {/* Zone 2: Clean Modern Navigation Links Matching Reference */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            <button
              onClick={() => handleNav('home')}
              className={`relative py-1.5 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'home'
                  ? 'text-[#8E3046] font-semibold'
                  : 'text-[#3D3438] hover:text-[#8E3046]'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#8E3046]" />
              )}
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`relative py-1.5 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'services'
                  ? 'text-[#8E3046] font-semibold'
                  : 'text-[#3D3438] hover:text-[#8E3046]'
              }`}
            >
              <span>Services</span>
              {currentPage === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#8E3046]" />
              )}
            </button>

            <button
              onClick={() => {
                setActiveSubSection('specialists');
                handleNav('home', 'experience-section');
              }}
              className="relative py-1.5 text-sm font-medium text-[#3D3438] hover:text-[#8E3046] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Our Specialists</span>
            </button>

            <button
              onClick={() => {
                setActiveSubSection('gallery');
                handleNav('booking', 'gallery-section');
              }}
              className={`relative py-1.5 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'booking' && activeSubSection === 'gallery'
                  ? 'text-[#8E3046] font-semibold'
                  : 'text-[#3D3438] hover:text-[#8E3046]'
              }`}
            >
              <span>Gallery</span>
              {currentPage === 'booking' && activeSubSection === 'gallery' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#8E3046]" />
              )}
            </button>

            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className={`relative py-1.5 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'booking' && activeSubSection === 'booking'
                  ? 'text-[#8E3046] font-semibold'
                  : 'text-[#3D3438] hover:text-[#8E3046]'
              }`}
            >
              <span>Contact</span>
              {currentPage === 'booking' && activeSubSection === 'booking' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#8E3046]" />
              )}
            </button>
          </nav>

          {/* Zone 3: Pill CTA Button Matching Reference (`Book Appointment →`) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Concierge"
              aria-label="WhatsApp Concierge"
              className="w-9 h-9 rounded-full border border-[#E2D6CE] text-[#1F7A54] hover:border-[#1F7A54] hover:bg-[#1F7A54] hover:text-white flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className="px-5 py-2.5 rounded-full bg-[#6B1D32] hover:bg-[#8E3046] text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap inline-flex items-center gap-2 shadow-xs"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="w-9 h-9 rounded-full border border-[#E2D6CE] bg-white text-[#161314] flex items-center justify-center active:scale-95 transition"
              aria-label="Call Salon"
              title="Call Salon"
            >
              <Phone className="w-4 h-4 text-[#8E3046]" />
            </a>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Slender Ladies Salon Dubai, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#1F7A54]/30 bg-[#1F7A54]/10 text-[#1F7A54] flex items-center justify-center active:scale-95 transition"
              aria-label="WhatsApp Salon"
              title="WhatsApp Salon"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full border border-[#E2D6CE] bg-white text-[#161314] flex items-center justify-center active:scale-95 transition focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#8E3046]" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#161314]/40 transition-opacity duration-200 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-[64px] left-3 right-3 z-50 bg-white rounded-3xl border border-[#E6DCD5] shadow-2xl p-6 space-y-5 md:hidden max-h-[calc(100vh-84px)] overflow-y-auto"
        >
          <div className="divide-y divide-[#EFE6E0]">
            <button
              onClick={() => handleNav('home')}
              className={`w-full py-3.5 text-left text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'home' ? 'text-[#8E3046]' : 'text-[#161314]'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`w-full py-3.5 text-left text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'services' ? 'text-[#8E3046]' : 'text-[#161314]'
              }`}
            >
              <span>Services</span>
            </button>

            <button
              onClick={() => {
                setActiveSubSection('gallery');
                handleNav('booking', 'gallery-section');
              }}
              className={`w-full py-3.5 text-left text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'booking' && activeSubSection === 'gallery' ? 'text-[#8E3046]' : 'text-[#161314]'
              }`}
            >
              <span>Gallery</span>
            </button>

            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className={`w-full py-3.5 text-left text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'booking' && activeSubSection === 'booking' ? 'text-[#8E3046]' : 'text-[#161314]'
              }`}
            >
              <span>Contact &amp; Booking</span>
            </button>
          </div>

          <div className="pt-2 border-t border-[#EFE6E0] space-y-1.5 text-xs text-[#5C5055]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8E3046] font-bold">
              Bur Dubai Sanctuary &amp; VIP Home Service
            </p>
            <p className="leading-relaxed text-[#161314] font-medium">
              Shop No. 6, Majed Bin Sultan Building, 22 3A St, Al Souq Al Kabeer (Near Meena Bazaar)
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#5C5055] pt-0.5 editorial-num">
              <Clock className="w-3.5 h-3.5 text-[#8E3046]" />
              <span>Open Daily · Until 10:00 PM</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => {
                setActiveSubSection('booking');
                handleNav('booking', 'booking-section');
              }}
              className="w-full py-3.5 rounded-full bg-[#6B1D32] text-white text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="py-2.5 rounded-full border border-[#E2D6CE] text-[#161314] bg-white text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#8E3046]" />
                <span>Call Salon</span>
              </a>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-full border border-[#E2D6CE] text-[#161314] bg-white text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8E3046]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
