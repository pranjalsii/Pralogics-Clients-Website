/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { GalleryBookingPage } from './components/GalleryBookingPage';
import { Footer } from './components/Footer';
import { WhatsAppFloatingChat } from './components/WhatsAppFloatingChat';
import { SlenderLogoMark } from './components/SlenderLogo';
import { generateLocalBusinessSchema, SEO_METADATA } from './utils/booking';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'booking'>('home');
  const [preselectedService, setPreselectedService] = useState<string>('Dr. Renaud Paris Radiance Facial');
  const [showIntroVeil, setShowIntroVeil] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroVeil(false);
    }, 980);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = SEO_METADATA.title;
    const currentUrl = window.location.origin + window.location.pathname;

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    let ogUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', currentUrl);

    let schemaScript = document.getElementById('local-business-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'local-business-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(generateLocalBusinessSchema(window.location.origin));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);

  const handleSelectServiceAndBook = (serviceName: string) => {
    setPreselectedService(serviceName);
    setCurrentPage('booking');
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div className="min-h-screen flex flex-col luxury-ambient-bg text-[#161314] selection:bg-[#8E3046] selection:text-white">
      
      {/* Signature Luxury Page Load Entrance Veil (Non-blocking pointer-events-none) */}
      {showIntroVeil && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[60] pointer-events-none luxury-dark-surface flex flex-col items-center justify-center luxury-loader-veil"
        >
          <div className="text-center space-y-4 px-6 flex flex-col items-center">
            <SlenderLogoMark size="lg" showWordmarkInside={false} />
            <span className="block text-[10px] uppercase tracking-[0.35em] text-[#C89D66] font-medium">
              BUR DUBAI SANCTUARY &amp; VIP HOME ATELIER
            </span>
            <p className="font-cinzel text-2xl sm:text-3xl tracking-[0.28em] text-white font-medium">
              SLENDER
            </p>
            <div className="w-36 h-[1px] bg-white/15 mx-auto overflow-hidden">
              <div className="w-full h-full bg-[#C89D66] luxury-loader-bar" />
            </div>
          </div>
        </div>
      )}

      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main className="flex-grow pt-16 sm:pt-20">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onSelectServiceAndBook={handleSelectServiceAndBook}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onSelectServiceAndBook={handleSelectServiceAndBook} />
        )}

        {currentPage === 'booking' && (
          <GalleryBookingPage initialService={preselectedService} />
        )}
      </main>

      {/* Persistent Minimal WhatsApp Floating Action Button & Pre-filled Chat Window */}
      <WhatsAppFloatingChat
        onOpenBooking={() => setCurrentPage('booking')}
      />

      <Footer
        onNavigate={setCurrentPage}
      />

    </div>
  );
}

