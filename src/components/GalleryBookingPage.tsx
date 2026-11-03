/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  GALLERY_ITEMS,
  SALON_SERVICES,
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
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  MapPin,
  CheckCircle2,
  ExternalLink,
  X,
  MessageCircle,
  ShieldCheck,
  Home as HomeIcon,
  Navigation,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

interface GalleryBookingPageProps {
  initialService?: string;
}

export const GalleryBookingPage: React.FC<GalleryBookingPageProps> = ({ initialService }) => {
  // Form State
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
  
  // Validation & UI State
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

  // Gallery Filter & Lightbox State
  const [galleryFilter, setGalleryFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const defaultDateStr = `${yyyy}-${mm}-${dd}`;
    setDate(defaultDateStr);
  }, []);

  // Update service if prop changes
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  const fullHomeAddress = `${selectedArea}${address ? `, ${address.trim()}` : ''}`;

  // Calculate live preview message
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

    // Automatically trigger WhatsApp redirect
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 space-y-24 bg-[#FAF7F5]">
      
      {/* SECTION 1: VISUAL PORTFOLIO (GALLERY) */}
      <section id="gallery-section" className="max-w-7xl mx-auto space-y-12 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#BA4961] font-bold">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E2421]">
            The Slender Gallery
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#D96B82] to-[#82AF89] mx-auto mt-4" />
          <p className="text-[#52605B] text-sm sm:text-base leading-relaxed">
            A visual showcase of glowing French facials, organic eyebrow shaping, Russian manicures, and our serene Bur Dubai salon sanctuary.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'hair', label: 'Hair Couture' },
            { id: 'skin', label: 'Radiant Skin' },
            { id: 'nails', label: 'Spa Nails' },
            { id: 'interior', label: 'Salon Interior' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setGalleryFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 cursor-pointer shadow-xs ${
                galleryFilter === tab.id
                  ? 'rose-gradient-bg text-white shadow-[0_4px_16px_rgba(217,107,130,0.35)]'
                  : 'border border-[#82AF89]/40 text-[#2C4832] bg-white hover:bg-[#EDF7EF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4-Column Modern Visual Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (idx % 4) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E88295]/20 h-80 cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-2xl"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                category={item.category as any}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#F7D6DE]">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white mt-1 group-hover:text-[#F7D6DE] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#E5E7EB] mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.featured && (
                <span className="absolute top-4 right-4 bg-white/90 text-[#BA4961] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                  Featured
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: SMART BOOKING FORM & DIRECT CONTACT */}
      <section className="max-w-7xl mx-auto scroll-mt-28" id="booking-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Salon Concierge & Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#BA4961] font-bold">
                Private Concierge
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2421]">
                Reserve Your Chair or VIP Home Service
              </h3>
              <p className="text-[#52605B] text-sm leading-relaxed">
                We cater to in-salon appointments in Bur Dubai and doorstep VIP home beauty treatments across Dubai.
              </p>
            </div>

            {/* Quick Contact & Google Map Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E88295]/25 shadow-xl space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1E2421]">
                    Studio Address (Bur Dubai)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52605B] mt-1 leading-relaxed">
                    {SALON_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-[#2C4832] font-semibold mt-0.5">
                    Plus Code: {SALON_INFO.plusCode}
                  </p>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#2C4832] font-bold mt-2 hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#4E7A56]" />
                    <span>Open in Google Maps ({SALON_INFO.rating} ★ · {SALON_INFO.reviewsCount} Reviews)</span>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E88295]/15">
                <div className="w-10 h-10 rounded-full bg-[#EDF7EF] border border-[#82AF89]/30 flex items-center justify-center text-[#2C4832] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1E2421]">
                    Operational Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E2421] font-semibold mt-1">
                    {SALON_INFO.hoursDaily}
                  </p>
                  <p className="text-xs text-[#52605B]">
                    Open All 7 Days (In-Salon Suites & VIP Doorstep Service)
                  </p>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E88295]/15">
                <div className="w-10 h-10 rounded-full bg-[#FFF0F3] border border-[#D96B82]/30 flex items-center justify-center text-[#BA4961] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1E2421]">
                    Direct Concierge Lines
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E2421] font-semibold mt-1">
                    Landline: <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#BA4961]">{SALON_INFO.phone}</a>
                  </p>
                  <p className="text-xs sm:text-sm text-[#BA4961] font-bold">
                    WhatsApp: <a href={`https://wa.me/${SALON_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{SALON_INFO.mobile}</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Slender Guarantee */}
            <div className="p-6 rounded-3xl bg-[#EDF7EF] border border-[#82AF89]/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2C4832]">
                <ShieldCheck className="w-4 h-4 text-[#4E7A56]" />
                <span>The Slender Dubai Guarantee</span>
              </div>
              <p className="text-xs text-[#52605B] leading-relaxed">
                100% certified female therapists, hospital-grade sanitized instruments, disposable waxing and manicure kits, and transparent AED pricing with zero hidden surcharges.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Smart Booking Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#E88295]/30 shadow-2xl relative">
              
              {/* Form Title */}
              <div className="mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF7EF] border border-[#82AF89]/30 text-[#2C4832] text-[11px] font-bold uppercase tracking-wider">
                  <MessageCircle className="w-3.5 h-3.5 text-[#2C4832]" />
                  <span>Direct WhatsApp Reservation</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2421]">
                  Book Studio or Home Service
                </h3>
                <p className="text-xs sm:text-sm text-[#52605B]">
                  Confirming formats your booking and opens WhatsApp directly with our Dubai concierge team.
                </p>
              </div>

              {/* Service Type Switcher */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2">
                  Select Appointment Type <span className="text-[#BA4961]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType('salon')}
                    className={`py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer ${
                      serviceType === 'salon'
                        ? 'rose-gradient-bg text-white shadow-md'
                        : 'bg-[#FAF7F5] border border-[#E88295]/30 text-[#52605B] hover:bg-[#FFF0F3]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>In-Salon (Bur Dubai)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('home')}
                    className={`py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer ${
                      serviceType === 'home'
                        ? 'bg-[#2C4832] text-white shadow-md'
                        : 'bg-[#FAF7F5] border border-[#82AF89]/30 text-[#52605B] hover:bg-[#EDF7EF]'
                    }`}
                  >
                    <HomeIcon className="w-4 h-4" />
                    <span>VIP Home Service</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2" htmlFor="fullName">
                    Full Name <span className="text-[#BA4961]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8A9691] absolute left-4 top-3.5" />
                    <input
                      id="fullName"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Sarah Al Mansoori"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#FAF7F5] border text-sm text-[#1E2421] placeholder-[#8A9691] focus:outline-none focus:ring-2 transition ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-[#E88295]/30 focus:border-[#D96B82] focus:ring-[#D96B82]/20'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2" htmlFor="phone">
                    UAE Mobile Number <span className="text-[#BA4961]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-xs font-bold text-[#BA4961]">+971</span>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="50 915 2969"
                      className={`w-full pl-14 pr-4 py-3.5 rounded-2xl bg-[#FAF7F5] border text-sm text-[#1E2421] placeholder-[#8A9691] focus:outline-none focus:ring-2 transition ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-[#E88295]/30 focus:border-[#D96B82] focus:ring-[#D96B82]/20'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* If Home Service: Dubai Area & Address */}
                {serviceType === 'home' && (
                  <div className="p-4 rounded-2xl bg-[#EDF7EF] border border-[#82AF89]/40 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2C4832] uppercase tracking-wider">
                      <HomeIcon className="w-4 h-4 text-[#4E7A56]" />
                      <span>Home Delivery Location in Dubai</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#1E2421] font-semibold mb-1">
                          Dubai Area
                        </label>
                        <select
                          value={selectedArea}
                          onChange={e => setSelectedArea(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#82AF89]/40 text-xs text-[#1E2421] focus:outline-none focus:border-[#2C4832]"
                        >
                          {DUBAI_AREAS.map(area => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#1E2421] font-semibold mb-1">
                          Building / Villa / Flat No. <span className="text-[#BA4961]">*</span>
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={e => setAddress(e.target.value)}
                          placeholder="e.g. Villa 14, Al Wasl Road"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#82AF89]/40 text-xs text-[#1E2421] focus:outline-none focus:border-[#2C4832]"
                        />
                      </div>
                    </div>
                    {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
                  </div>
                )}

                {/* Select Service Dropdown */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2" htmlFor="service">
                    Select Beauty Service <span className="text-[#BA4961]">*</span>
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5] border border-[#E88295]/30 text-sm text-[#1E2421] focus:outline-none focus:border-[#D96B82] focus:ring-2 focus:ring-[#D96B82]/20 transition cursor-pointer"
                  >
                    {SALON_SERVICES.map(s => (
                      <option key={s.id} value={s.name}>
                        {s.name} — AED {s.price} ({s.duration})
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Date and Time Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2" htmlFor="date">
                      Preferred Date <span className="text-[#BA4961]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5] border border-[#E88295]/30 text-sm text-[#1E2421] focus:outline-none focus:border-[#D96B82] focus:ring-2 focus:ring-[#D96B82]/20 transition cursor-pointer"
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2" htmlFor="time">
                      Preferred Time Slot <span className="text-[#BA4961]">*</span>
                    </label>
                    <select
                      id="time"
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5] border border-[#E88295]/30 text-sm text-[#1E2421] focus:outline-none focus:border-[#D96B82] focus:ring-2 focus:ring-[#D96B82]/20 transition cursor-pointer"
                    >
                      {TIME_SLOTS.map(slot => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Preferred Senior Beautician */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1E2421] font-bold mb-2" htmlFor="stylist">
                    Preferred Senior Beautician (Optional)
                  </label>
                  <select
                    id="stylist"
                    value={stylist}
                    onChange={e => setStylist(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F5] border border-[#E88295]/30 text-sm text-[#1E2421] focus:outline-none focus:border-[#D96B82] focus:ring-2 focus:ring-[#D96B82]/20 transition cursor-pointer"
                  >
                    {STYLISTS_LIST.map(b => (
                      <option key={b.id} value={b.id}>
                        {b.name} — {b.role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Real-Time WhatsApp Dispatch Preview */}
                <div className="p-4 rounded-2xl bg-[#EDF7EF] border border-[#82AF89]/40 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[#2C4832] font-bold text-[11px] uppercase tracking-wider">
                    <span>WhatsApp Dispatch Preview:</span>
                    <span className="font-mono text-[#3B6343]">wa.me/{SALON_INFO.whatsappRaw}</span>
                  </div>
                  <p className="text-[#1E2421] font-mono text-[11.5px] leading-relaxed break-words bg-white p-3 rounded-xl border border-[#82AF89]/25 shadow-2xs">
                    "{previewMessage}"
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full rose-gradient-bg text-white font-bold text-xs uppercase tracking-[0.22em] shadow-[0_10px_25px_rgba(217,107,130,0.35)] hover:shadow-[0_15px_35px_rgba(217,107,130,0.5)] active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm Booking via WhatsApp</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E88295]/30"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-96 sm:h-[480px] bg-black">
              <SafeImage
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                category={activeLightboxItem.category as any}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#BA4961]">
                {activeLightboxItem.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E2421]">
                {activeLightboxItem.title}
              </h3>
              <p className="text-sm text-[#52605B] leading-relaxed">
                {activeLightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {submittedBooking && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 space-y-6 shadow-2xl border border-[#E88295]/40 text-center relative">
            
            <div className="w-16 h-16 rounded-full bg-[#EDF7EF] border-2 border-[#82AF89] flex items-center justify-center mx-auto text-[#2C4832]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#BA4961]">
                Reservation Dispatched
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E2421]">
                WhatsApp Window Opened!
              </h3>
              <p className="text-xs sm:text-sm text-[#52605B] leading-relaxed">
                Your booking template was created for <strong>{submittedBooking.details.service}</strong> on <strong>{submittedBooking.details.date}</strong> at <strong>{submittedBooking.details.time}</strong> ({submittedBooking.details.serviceType === 'home' ? 'VIP Home Service' : 'In-Salon Bur Dubai'}).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#E88295]/20 text-left text-xs font-mono text-[#52605B] space-y-1">
              <p><strong>Name:</strong> {submittedBooking.details.name}</p>
              <p><strong>Phone:</strong> +971 {submittedBooking.details.phone}</p>
              {submittedBooking.details.address && (
                <p><strong>Location:</strong> {submittedBooking.details.address}</p>
              )}
            </div>

            <div className="space-y-3">
              <a
                href={submittedBooking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full rose-gradient-bg text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Re-Open WhatsApp Link</span>
              </a>

              <button
                onClick={() => setSubmittedBooking(null)}
                className="w-full py-3 rounded-full border border-[#52605B]/30 text-xs uppercase tracking-widest font-semibold text-[#52605B] hover:bg-[#FAF7F5] transition"
              >
                Close & Return
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
