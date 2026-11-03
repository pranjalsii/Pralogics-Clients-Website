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
import { Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'booking'>('home');
  const [preselectedService, setPreselectedService] = useState<string>('Dr. Renaud Paris Radiance Facial');

  // Scroll to top whenever page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectServiceAndBook = (serviceName: string) => {
    setPreselectedService(serviceName);
    setCurrentPage('booking');
    // Scroll directly to the booking section
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#1E2421] selection:bg-[#F7D6DE] selection:text-[#BA4961]">
      
      {/* Floating Glassmorphism Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Main Content Area with proper fixed header offset */}
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        {currentPage === 'home' && (
          <HomePage onNavigate={setCurrentPage} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onSelectServiceAndBook={handleSelectServiceAndBook} />
        )}

        {currentPage === 'booking' && (
          <GalleryBookingPage initialService={preselectedService} />
        )}
      </main>

      {/* Floating Quick Action Button on Mobile */}
      {currentPage !== 'booking' && (
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <button
            onClick={() => setCurrentPage('booking')}
            className="p-4 rounded-full rose-gradient-bg text-white shadow-[0_6px_25px_rgba(217,107,130,0.45)] active:scale-95 transition flex items-center justify-center cursor-pointer"
            aria-label="Book Appointment"
          >
            <Calendar className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Sleek Footer with direct verified social media channels */}
      <Footer
        onNavigate={setCurrentPage}
      />

    </div>
  );
}
