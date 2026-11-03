/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  GALLERY_ITEMS,
  SALON_SERVICES,
  COMPLETE_FRESHA_PRICE_LIST,
  STYLISTS_LIST,
  TIME_SLOTS,
  DUBAI_AREAS,
  SALON_INFO,
  validateBookingForm,
  generateWhatsAppMessage,
  generateWhatsAppUrl,
  GalleryItem
} from '../utils/booking';
import {
  CheckCircle2,
  ExternalLink,
  X,
  MessageCircle,
  ShieldCheck,
  Navigation,
  ArrowUpRight,
  Sparkles,
  Home
} from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

interface GalleryBookingPageProps {
  initialService?: string;
}

export const GalleryBookingPage: React.FC<GalleryBookingPageProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(
    initialService || SALON_SERVICES[0]?.name || 'Herbal Fruit Clean-Up & Radiant Glow'
  );
  const [serviceType, setServiceType] = useState<'salon' | 'home'>('salon');
  const [address, setAddress] = useState('');
  const [selectedArea, setSelectedArea] = useState(DUBAI_AREAS[0]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:15 AM');
  const [stylist, setStylist] = useState('any');
  const [notes, setNotes] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{
    message: string;
    whatsappUrl: string;
    details: { 
      name: string; 
      phone: string; 
      service: string; 
      serviceType: 'salon' | 'home'; 
      address?: string; 
      date: string; 
      time: string; 
      stylist: string;
    };
  } | null>(null);

  const [galleryFilter, setGalleryFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const defaultDateStr = `${yyyy}-${mm}-${dd}`;
    setDate(defaultDateStr);
  }, []);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const isCustomAlaCarte = !SALON_SERVICES.some(s => s.name === service);

  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  const fullHomeAddress = `${selectedArea}${address ? `, ${address.trim()}` : ''}`;

  const previewMessage = generateWhatsAppMessage({
    service,
    date: date || '[Select Date]',
    time,
    name,
    phone,
    serviceType,
    address: serviceType === 'home' ? (address ? fullHomeAddress : selectedArea) : undefined,
    stylist,
    notes
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const homeAddressFinal = serviceType === 'home' ? (address ? fullHomeAddress : selectedArea) : undefined;

    const validation = validateBookingForm({
      name,
      phone,
      service,
      date,
      time,
      serviceType,
      address: homeAddressFinal
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});

    const whatsappUrl = generateWhatsAppUrl({
      service,
      date,
      time,
      name,
      phone,
      serviceType,
      address: homeAddressFinal,
      stylist,
      notes
    });

    setSubmittedBooking({
      message: previewMessage,
      whatsappUrl,
      details: {
        name,
        phone,
        service,
        serviceType,
        address: homeAddressFinal,
        date,
        time,
        stylist
      }
    });
  };

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-10 space-y-24">
      
      {/* SECTION 1: MINIMALIST LOOKBOOK GALLERY */}
      <section id="gallery-section" className="max-w-7xl mx-auto space-y-10 scroll-mt-28">
        <div className="reveal-stagger-1 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#EAE0D9] pb-8">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E3046] font-bold block">
              SALON SANCTUARY &amp; LOOKBOOK
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#161314]">
              The Slender Lookbook
            </h1>
          </div>
          <p className="text-[#5C5055] text-sm sm:text-[15px] leading-relaxed max-w-md">
            Explore our Bur Dubai ladies sanctuary alongside our signature hair styling, Dr. Renaud facials, nail extensions, and spa rituals.
          </p>
        </div>

        {/* Lookbook Category Filter Tabs */}
        <div className="reveal-stagger-2 flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Moments (8)' },
            { id: 'hair', label: 'Hair Studio' },
            { id: 'skin', label: 'Facial & Threading' },
            { id: 'nails', label: 'Nail & Lash Bar' },
            { id: 'interior', label: 'Salon Sanctuary' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setGalleryFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                galleryFilter === tab.id
                  ? 'bg-[#161314] text-white'
                  : 'bg-white text-[#5C5055] border border-[#E6DCD5] hover:text-[#161314]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4-Column Minimalist Gallery Grid (Zero scroll-jank observers) */}
        <div className="reveal-stagger-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <figure
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group rounded-3xl glass-card-2026 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/4.2] overflow-hidden bg-[#EFE6E0]">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  category={item.category as any}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center text-[#161314] group-hover:bg-[#8E3046] group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <figcaption className="p-5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8E3046] font-bold block">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl font-medium text-[#161314] group-hover:text-[#8E3046] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5C5055] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SECTION 2: 2026 CONCIERGE RESERVATION STUDIO */}
      <section className="max-w-7xl mx-auto scroll-mt-28 pt-6" id="booking-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Concierge Details & Hygiene Charter (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full champagne-badge text-[11px] uppercase tracking-[0.2em] text-[#7A4B2A] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#9E3B52]" />
                <span>Concierge Reservation</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#161215] leading-tight">
                Book Your Salon Visit or VIP Home Service
              </h2>
              <p className="text-[#5C5055] text-sm leading-relaxed">
                Confirm your appointment immediately with Fatima, Savya, or Purnam via WhatsApp (+971 50 915 2969), direct landline (+971 4 351 5745), or our official Fresha booking portal.
              </p>
            </div>

            {/* Rounded-3xl Contact Bento Card */}
            <div className="rounded-3xl bg-white border border-[#E8D8D0] p-6 sm:p-7 space-y-5 shadow-xs">
              
              <div className="space-y-1.5 pb-4 border-b border-[#EFE3DD]">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#9E3B52] font-bold block">
                  BUR DUBAI FLAGSHIP ADDRESS
                </span>
                <p className="text-sm font-semibold text-[#161215] leading-relaxed">
                  {SALON_INFO.fullAddress}
                </p>
                <p className="text-xs text-[#5C5055]">
                  Plus Code: {SALON_INFO.plusCode} · Near Meena Bazaar
                </p>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#9E3B52] font-semibold pt-1 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps ({SALON_INFO.rating} ★ · {SALON_INFO.reviewsCount} Reviews)</span>
                </a>
              </div>

              <div className="space-y-1 pb-4 border-b border-[#EFE3DD]">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#9E3B52] font-bold block">
                  OFFICIAL WORKING HOURS
                </span>
                <p className="text-sm font-semibold text-[#161215] editorial-num">
                  Mon–Fri: 10:00 AM – 10:00 PM
                </p>
                <p className="text-sm font-semibold text-[#161215] editorial-num">
                  Sat–Sun: 09:05 AM – 10:00 PM
                </p>
                <p className="text-xs text-[#5C5055]">
                  Payments: {SALON_INFO.paymentAccepted}
                </p>
              </div>

              <div className="space-y-1.5 editorial-num">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#9E3B52] font-bold block">
                  DIRECT CONCIERGE LINES
                </span>
                <p className="text-sm font-semibold text-[#161215]">
                  Landline: <a href={`tel:${SALON_INFO.phone}`} className="underline hover:text-[#9E3B52]">{SALON_INFO.phone}</a>
                </p>
                <p className="text-sm font-semibold text-[#1F7A54]">
                  WhatsApp: <a href={`https://wa.me/${SALON_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="underline">{SALON_INFO.mobile}</a>
                </p>
              </div>

            </div>

            {/* Hygiene Charter */}
            <div className="p-6 rounded-3xl luxury-dark-surface text-white space-y-2 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8B4B8]">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span>Verified Fresha & Salon Guarantee</span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Woman-owned & Asian-owned licensed Dubai salon. 100% female staff (Fatima, Savya & Purnam), hospital-grade sterilization, and verified AED pricing from AED 14 to AED 599.
              </p>
            </div>
          </div>

          {/* Right Column: Sculpted Rounded-[36px] Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-11 rounded-[36px] bg-white border border-[#E8D8D0] shadow-md">
              
              <div className="mb-7 pb-5 border-b border-[#EFE3DD] space-y-1.5">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#9E3B52] font-bold block">
                  INSTANT WHATSAPP & FRESHA CONFIRMATION
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#161215]">
                  Schedule Your Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5055]">
                  Select your treatment and preferred time below to confirm instantly with our Bur Dubai desk.
                </p>
              </div>

              {/* Service Mode Selector */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2.5">
                  Select Experience Mode <span className="text-[#9E3B52]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#F5ECE7]">
                  <button
                    type="button"
                    onClick={() => setServiceType('salon')}
                    className={`py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      serviceType === 'salon'
                        ? 'bg-white text-[#9E3B52] shadow-xs'
                        : 'text-[#5C5055] hover:text-[#161215]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>In-Salon (Shop No. 6)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('home')}
                    className={`py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      serviceType === 'home'
                        ? 'bg-[#161215] text-white shadow-xs'
                        : 'text-[#5C5055] hover:text-[#161215]'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5 text-[#C89D66]" />
                    <span>VIP Home Service</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                
                {/* Full Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2" htmlFor="fullName">
                      Your Full Name <span className="text-[#9E3B52]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Sarah Al Mansoori"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-[#161215] placeholder-[#8A7E84] focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-600 bg-red-50/40'
                          : 'border-[#E6D6CE] focus:border-[#9E3B52] bg-[#FAF7F5]/60 focus:bg-white'
                      }`}
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2" htmlFor="phone">
                      UAE Mobile Number <span className="text-[#9E3B52]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-xs font-bold text-[#9E3B52] editorial-num">+971</span>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="50 915 2969"
                        className={`w-full pl-14 pr-4 py-3.5 rounded-2xl border text-sm text-[#161215] placeholder-[#8A7E84] focus:outline-none transition-colors editorial-num ${
                          errors.phone
                            ? 'border-red-600 bg-red-50/40'
                            : 'border-[#E6D6CE] focus:border-[#9E3B52] bg-[#FAF7F5]/60 focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Home Service Address Fields */}
                {serviceType === 'home' && (
                  <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#E6D6CE] space-y-4">
                    <span className="text-xs font-bold text-[#9E3B52] uppercase tracking-wider block">
                      Dubai Residence or Hotel Suite Details
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#161215] mb-1.5">
                          Dubai Area
                        </label>
                        <select
                          value={selectedArea}
                          onChange={e => setSelectedArea(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E6D6CE] text-xs text-[#161215] focus:outline-none focus:border-[#9E3B52]"
                        >
                          {DUBAI_AREAS.map(area => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#161215] mb-1.5">
                          Building / Villa / Apt No. <span className="text-[#9E3B52]">*</span>
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={e => setAddress(e.target.value)}
                          placeholder="e.g. Apt 402, Al Mankhool"
                          className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E6D6CE] text-xs text-[#161215] focus:outline-none focus:border-[#9E3B52]"
                        />
                      </div>
                    </div>
                    {errors.address && <p className="text-red-600 text-xs">{errors.address}</p>}
                  </div>
                )}

                {/* Select Service (Includes both Signature Packages & All Fresha A-La-Carte Services) */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2" htmlFor="service">
                    Select Beauty Ritual or Package <span className="text-[#9E3B52]">*</span>
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5]/60 focus:bg-white border border-[#E6D6CE] text-sm text-[#161215] focus:outline-none focus:border-[#9E3B52] transition-colors cursor-pointer"
                  >
                    {isCustomAlaCarte && (
                      <option value={service}>{service}</option>
                    )}
                    <optgroup label="Featured Packages & Signature Treatments">
                      {SALON_SERVICES.map(s => (
                        <option key={s.id} value={s.name}>
                          {s.name} — AED {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    {COMPLETE_FRESHA_PRICE_LIST.map(cat => (
                      <optgroup key={cat.id} label={cat.title}>
                        {cat.items.map(item => {
                          const labelVal = `${item.name} (AED ${item.price})`;
                          return (
                            <option key={labelVal} value={labelVal}>
                              {item.name} — AED {item.price} ({item.duration})
                            </option>
                          );
                        })}
                      </optgroup>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2" htmlFor="date">
                      Preferred Date <span className="text-[#9E3B52]">*</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5]/60 focus:bg-white border border-[#E6D6CE] text-sm text-[#161215] focus:outline-none focus:border-[#9E3B52] transition-colors cursor-pointer editorial-num"
                    />
                    {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2" htmlFor="time">
                      Preferred Time Slot <span className="text-[#9E3B52]">*</span>
                    </label>
                    <select
                      id="time"
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5]/60 focus:bg-white border border-[#E6D6CE] text-sm text-[#161215] focus:outline-none focus:border-[#9E3B52] transition-colors cursor-pointer editorial-num"
                    >
                      {TIME_SLOTS.map(slot => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-600 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Senior Specialist (Real Fresha Staff: Fatima, Savya, Purnam) */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#161215] font-bold mb-2" htmlFor="stylist">
                    Preferred Beautician (Fresha Verified Staff)
                  </label>
                  <select
                    id="stylist"
                    value={stylist}
                    onChange={e => setStylist(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5]/60 focus:bg-white border border-[#E6D6CE] text-sm text-[#161215] focus:outline-none focus:border-[#9E3B52] transition-colors cursor-pointer"
                  >
                    {STYLISTS_LIST.map(b => (
                      <option key={b.id} value={b.id}>
                        {b.name} — {b.role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Live WhatsApp Dispatch Preview */}
                <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE3DD] text-xs space-y-2">
                  <div className="flex items-center justify-between text-[#5C5055] font-bold text-[10px] uppercase tracking-wider">
                    <span>WHATSAPP CONCIERGE PREVIEW</span>
                    <span className="font-mono text-[#1F7A54]">wa.me/{SALON_INFO.whatsappRaw}</span>
                  </div>
                  <p className="text-[#161215] font-mono text-[11.5px] leading-relaxed break-words bg-white p-3.5 rounded-xl border border-[#EFE3DD]">
                    "{previewMessage}"
                  </p>
                </div>

                {/* Dual Submit CTAs: WhatsApp + Official Fresha */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <button
                    type="submit"
                    className="sm:col-span-8 py-4 px-6 rounded-full rose-gold-gradient text-white font-semibold text-xs uppercase tracking-[0.16em] shadow-lg shadow-[#9E3B52]/20 hover:shadow-[#9E3B52]/35 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </button>

                  <a
                    href={SALON_INFO.freshaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:col-span-4 py-4 px-4 rounded-full bg-[#FAF7F5] hover:bg-[#161215] text-[#161215] hover:text-white border border-[#E6D6CE] font-semibold text-xs uppercase tracking-[0.12em] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Fresha 5.0★</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* ROUNDED-3XL LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#130F12]/80 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white p-5 sm:p-7 rounded-[32px] border border-[#E8D8D0] shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-7 right-7 z-10 w-10 h-10 rounded-full bg-[#161215]/85 text-white flex items-center justify-center hover:bg-[#9E3B52] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-96 sm:h-[460px] rounded-2xl overflow-hidden bg-[#EFE6E0]">
              <SafeImage
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                category={activeLightboxItem.category as any}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-5 space-y-1.5">
              <span className="text-[10.5px] uppercase font-bold tracking-[0.2em] text-[#9E3B52] block">
                {activeLightboxItem.isRealSalonPhoto ? '★ Official Slender Ladies Salon Photo' : activeLightboxItem.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#161215]">
                {activeLightboxItem.title}
              </h3>
              <p className="text-sm text-[#5C5055] leading-relaxed">
                {activeLightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ROUNDED-3XL CONFIRMATION MODAL */}
      {submittedBooking && (
        <div className="fixed inset-0 z-50 bg-[#130F12]/75 flex items-center justify-center p-4 sm:p-6">
          <div className="max-w-md w-full bg-white p-8 rounded-[32px] space-y-6 shadow-2xl border border-[#E8D8D0] text-center relative">
            
            <div className="w-14 h-14 rounded-2xl bg-[#1F7A54]/10 border border-[#1F7A54]/25 flex items-center justify-center mx-auto text-[#1F7A54]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[#9E3B52] block">
                RESERVATION PREPARED
              </span>
              <h3 className="font-serif text-3xl font-semibold text-[#161215]">
                Ready for WhatsApp Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5055] leading-relaxed">
                Your appointment request for <strong>{submittedBooking.details.service}</strong> on <strong>{submittedBooking.details.date}</strong> at <strong>{submittedBooking.details.time}</strong> ({submittedBooking.details.serviceType === 'home' ? 'VIP Home Service' : 'In-Salon Bur Dubai'}) is ready.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE3DD] text-left text-xs font-mono text-[#161215] space-y-1">
              <p><strong>Client:</strong> {submittedBooking.details.name}</p>
              <p><strong>Mobile:</strong> +971 {submittedBooking.details.phone}</p>
              {submittedBooking.details.address && (
                <p><strong>Address:</strong> {submittedBooking.details.address}</p>
              )}
            </div>

            <div className="space-y-2.5">
              <a
                href={submittedBooking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full rose-gold-gradient text-white font-semibold text-xs uppercase tracking-[0.18em] shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open WhatsApp Concierge</span>
              </a>

              <button
                onClick={() => setSubmittedBooking(null)}
                className="w-full py-3 rounded-full border border-[#E6D6CE] text-xs uppercase tracking-[0.16em] font-semibold text-[#5C5055] hover:text-[#161215] hover:bg-[#FAF7F5] transition-colors cursor-pointer"
              >
                Back to Booking Studio
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
