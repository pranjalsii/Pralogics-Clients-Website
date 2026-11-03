/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  serviceType?: 'salon' | 'home';
  address?: string;
  stylist?: string;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'waxing' | 'nails' | 'hammam' | 'home';
  price: number;
  duration: string;
  badge?: string;
  shortDesc: string;
  included: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'nails' | 'interior';
  description: string;
  image: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  headline: string;
  quote: string;
  serviceUsed: string;
  source: 'Google Verified Review' | 'Fresha 5.0★ Review';
  date: string;
  type: 'salon' | 'home';
}

export const SALON_INFO = {
  name: 'Slender Ladies Salon',
  legalName: 'Slender Ladies Salon | Salon & Home Service',
  category: 'Beauty salon & VIP Home Service',
  address: '22 3A St - Al Souq Al Kabeer - Al Fahidi - Bur Dubai',
  fullAddress: 'Shop No. 6, Majed Bin Sultan Building, 22 3A St, Al Souq Al Kabeer, Al Fahidi, Bur Dubai, Dubai, United Arab Emirates',
  landmark: 'Near Meena Bazaar & Al Ghubaiba Metro Station',
  plusCode: '777R+FP Dubai - United Arab Emirates',
  city: 'Dubai',
  country: 'United Arab Emirates',
  phone: '+971 4 351 5745',
  mobile: '+971 50 915 2969',
  whatsappRaw: '971509152969',
  googleMapsUrl: 'https://maps.app.goo.gl/9zSLHT8JEMkvRzLS6',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2046467389454!2d55.2892388!3d25.2637375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f435ce061dfe7%3A0x7da898dd390e4fba!2sSlender%20Ladies%20Salon!5e0!3m2!1sen!2sae!4v1730000000000!5m2!1sen!2sae',
  freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer',
  instagramUrl: 'https://www.instagram.com/slenderladiessalon/',
  linkedinUrl: 'https://www.linkedin.com/company/slender-ladies-salon-dubai/',
  facebookUrl: 'https://www.facebook.com/slenderladiessalon/',
  hoursDaily: 'Daily: 09:00 AM – 10:00 PM',
  hoursWeekday: 'Monday – Friday: 09:00 AM – 10:00 PM',
  hoursWeekend: 'Saturday – Sunday: 09:00 AM – 10:00 PM',
  rating: 4.8,
  reviewsCount: 131,
  yearsEstablished: '10+ Years in Dubai',
  isWomenOwned: true
};

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'fruit-cleanup',
    name: 'Herbal Fruit Clean-Up & Radiant Glow',
    category: 'skin',
    price: 55,
    duration: '35 Mins',
    badge: 'Popular Choice',
    shortDesc: 'Gentle pore cleansing with cold-pressed natural fruit enzymes, clarifying steam, exfoliation, and a refreshing cucumber soothing masque.',
    included: [
      'Pore deep cleansing & botanical steam',
      'Natural fruit enzyme scrub exfoliation',
      'Blackhead & whitehead gentle extraction',
      'Hydrating cucumber & rose water toner'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'dr-renaud-facial',
    name: 'Dr. Renaud Paris Radiance Facial',
    category: 'skin',
    price: 160,
    duration: '60 Mins',
    badge: 'Signature Facial',
    shortDesc: 'French luxury botanical facial therapy targeting uneven tone, fatigue, and dullness with organic raspberry extracts and anti-aging peptides.',
    included: [
      'Double cleansing with French organic milk & lotion',
      'Dr. Renaud ultrasonic peel & thermal steam',
      'Lymphatic drainage facial & neck massage',
      'Hydrating peel-off radiance mask with SPF protection'
    ],
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gold-diamond-facial',
    name: '24K Gold & Diamond Luxury Polishing Facial',
    category: 'skin',
    price: 220,
    duration: '75 Mins',
    badge: 'VIP Bridal Care',
    shortDesc: 'The ultimate royal skin indulgence infused with microscopic diamond dust and pure 24K gold foil for instant bridal luminescence and collagen firming.',
    included: [
      'Micro-diamond dermabrasion polish',
      '24K Gold foil serum infusion with microcurrent stimulation',
      'Relaxing shoulder, nape & cranial acupressure massage',
      '24K Gold restorative hydro-jelly seal mask'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'threading-combo',
    name: 'Full Face Threading & Eyebrow Architecture',
    category: 'waxing',
    price: 89,
    duration: '30 Mins',
    badge: 'Daily Favorite',
    shortDesc: 'Hypoallergenic organic thread sculpting for precise eyebrow symmetry, forehead, upper lip, chin, and sides with calming aloe vera gel finish.',
    included: [
      'Facial cranial mapping for ideal brow curvature',
      'Full face threading (brows, upper lip, chin, sides)',
      'High-frequency anti-bump antiseptic treatment',
      'Chilled organic aloe vera & rose water compress'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'rica-waxing-full',
    name: 'Full Body Silky Rica Waxing Ritual',
    category: 'waxing',
    price: 190,
    duration: '60 Mins',
    badge: 'Silky Smooth',
    shortDesc: 'Italian Rica liposoluble waxing infused with titanium dioxide and zinc oxide for painless, silky-soft results on sensitive skin.',
    included: [
      'Full arms, full legs & underarms waxing',
      'Italian Rica white chocolate / avocado formulation',
      'Pre-wax antiseptic lotion & powder preparation',
      'Post-wax soothing argan oil massage to prevent ingrowns'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'haircut-blowdry',
    name: 'Signature Ladies Haircut & Argan Blowdry',
    category: 'hair',
    price: 120,
    duration: '45 Mins',
    badge: 'Stylist Choice',
    shortDesc: 'Custom hair consultation, architectural layered haircut tailored to face shape, botanical shampoo wash, and bouncy Moroccan blowdry styling.',
    included: [
      'Personalized texture & face shape consultation',
      'Nourishing argan oil shampoo & deep conditioning wash',
      'Precision scissor styling, split-end removal & layering',
      'Bespoke voluminous blowout with anti-humidity gloss'
    ],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'keratin-protein',
    name: 'Organic Keratin & Protein Smoothing Therapy',
    category: 'hair',
    price: 350,
    duration: '120 Mins',
    badge: 'Frizz-Free',
    shortDesc: 'Formaldehyde-free deep protein restructuring treatment that eliminates 99% of Dubai humidity frizz, leaving hair glossy and manageable for up to 6 months.',
    included: [
      'Clarifying detox wash & microscopic cuticle prep',
      'Nanotechnology keratin & amino-acid infusion',
      'Titanium heat sealing with thermal protection',
      'Complimentary after-care Moroccan oil miniature'
    ],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'moroccan-bath',
    name: 'Traditional Royal Moroccan Bath (Hammam)',
    category: 'hammam',
    price: 210,
    duration: '60 Mins',
    badge: 'Deep Detox',
    shortDesc: 'Authentic steamy Hammam ritual using olive-derived black soap, deep Kessa glove exfoliation to remove dead skin, and mineral-rich Ghassoul clay wrap.',
    included: [
      'Private eucalyptus aromatherapy steam chamber',
      'Beldi black soap application and thermal activation',
      'Vigorous head-to-toe Kessa glove exfoliation',
      'Ghassoul volcanic clay mask & orange blossom rinse'
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'spa-mani-pedi',
    name: 'Classic Spa Manicure & Pedicure Ritual',
    category: 'nails',
    price: 90,
    duration: '50 Mins',
    badge: 'Pampering',
    shortDesc: 'Aromatic sea-salt foot soak, cuticle detailing, calluses smoothing, nourishing hand massage, and flawless polish application with top coat.',
    included: [
      'Dead Sea lavender salt bath & whirlpool soak',
      'Precision nail shaping, buffing, and cuticle care',
      'Exfoliating botanical sugar scrub for hands & feet',
      'Hydrating massage & choice of long-wear polish'
    ],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'glow-queen-combo',
    name: 'The Dubai Glow Queen Package (Full Combo)',
    category: 'home',
    price: 320,
    duration: '120 Mins',
    badge: 'Best Value Bundle',
    shortDesc: 'Our most requested package available both in-salon and at your doorstep: Full arms & legs waxing, full face threading, fruit clean-up, and spa mani-pedi.',
    included: [
      'Full arms, underarms & full legs waxing',
      'Full face threading with eyebrow shaping',
      'Herbal fruit glow facial clean-up',
      'Classic spa manicure & pedicure with polish'
    ],
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'doorstep-home-service',
    name: 'VIP Doorstep Home Service Experience',
    category: 'home',
    price: 250,
    duration: 'Custom Duration',
    badge: 'At-Home Luxury',
    shortDesc: 'Enjoy full five-star salon amenities directly in the comfort of your Dubai home, villa, or hotel. Available across Bur Dubai, Downtown, Jumeirah, Marina, and Deira.',
    included: [
      'Sanitized mobile salon equipment & disposable kits',
      'Two certified female therapists dispatched to your door',
      'Flexible bundling of waxing, facials, hair & nails',
      'Zero travel hassle with direct WhatsApp coordination'
    ],
    image: 'https://images.unsplash.com/photo-1522337094345-8613e3f74b4b?q=80&w=1000&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Layered Styling',
    category: 'hair',
    description: 'Bespoke cuts and bouncy blowout finished with Moroccan argan oil.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'gal-2',
    title: 'Dr. Renaud Radiance Therapy',
    category: 'skin',
    description: 'French botanical skin therapy for a luminous, hydrated complexion.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-3',
    title: 'Artisan Gel Nail Art',
    category: 'nails',
    description: 'Chic pastels, chrome finishes, and precision Russian cuticle prep.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-4',
    title: 'Royal Moroccan Hammam Bay',
    category: 'interior',
    description: 'Warm steam suite with traditional eucalyptus Beldi soap treatment.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'gal-5',
    title: 'Keratin Gloss & Smoothing',
    category: 'hair',
    description: 'Silky, weather-resistant shine engineered for Dubai humidity.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-6',
    title: 'Bur Dubai Atelier Interior',
    category: 'interior',
    description: 'Peaceful private ladies sanctuary with plush velvet seating.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-7',
    title: 'Herbal Eyebrow Architecture',
    category: 'skin',
    description: 'Flawless symmetry and clean lines crafted with organic threading.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-8',
    title: 'Luxury Spa Pedicure Lounge',
    category: 'nails',
    description: 'Aromatherapy whirlpool soak with lavender salts and paraffin wrap.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Pooja Mehta',
    role: 'Bur Dubai Resident',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    headline: 'Flawless Dr. Renaud Facial & Most Precise Brows in Meena Bazaar',
    quote: 'Slender Ladies Salon has been my absolute go-to salon in Bur Dubai for over 4 years. Their Dr. Renaud botanical facial left my skin glowing for weeks, and their eyebrow threading is always impeccably symmetrical. Super clean, calm, and honest AED pricing.',
    serviceUsed: 'Dr. Renaud Paris Radiance Facial',
    source: 'Google Verified Review',
    date: '3 days ago',
    type: 'salon'
  },
  {
    id: 'test-2',
    name: 'Fatima Al-Nuaimi',
    role: 'Downtown Dubai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    headline: 'Punctual, Spotless & Five-Star VIP Home Service for My Bridal Prep',
    quote: 'I booked their VIP Home Service for my bridal preps in Downtown Dubai. Two certified therapists arrived right on time with sterilized instruments, disposable bed covers, and delivered the smoothest Rica wax and manicure. Zero stress, pure five-star luxury.',
    serviceUsed: 'The Dubai Glow Queen Package (Full Combo)',
    source: 'Google Verified Review',
    date: '1 week ago',
    type: 'home'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Dubai Marina Expat',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    headline: 'The Keratin Smoothing Completely Rescued My Frizzy Hair',
    quote: 'Dubai humidity used to destroy my hair daily. Fatima did the organic keratin smoothing treatment and now my hair dries pin-straight and silky soft in 10 minutes flat! No harsh chemical fumes either. Worth every single dirham.',
    serviceUsed: 'Organic Keratin & Protein Smoothing Therapy',
    source: 'Fresha 5.0★ Review',
    date: '2 weeks ago',
    type: 'salon'
  },
  {
    id: 'test-4',
    name: 'Zainab Al-Hashemi',
    role: 'Jumeirah 1 Regular',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    headline: 'Authentic Moroccan Hammam That Rivals Luxury 5-Star Hotel Spas',
    quote: 'Their traditional Moroccan bath with eucalyptus Beldi soap and Kessa scrub is therapeutic heaven. Leila is so attentive and respectful. You walk out with baby-soft skin and deep tranquility. A true hidden sanctuary.',
    serviceUsed: 'Traditional Royal Moroccan Bath (Hammam)',
    source: 'Google Verified Review',
    date: 'October 2026',
    type: 'salon'
  },
  {
    id: 'test-5',
    name: 'Sarah Jenkins',
    role: 'Business Bay Executive',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    headline: 'Long-Lasting Russian Gel Nails & Relaxing Lavender Pedicure',
    quote: 'After work, having an unhurried spa manicure and pedicure here is pure joy. My gel polish stayed chip-free for over 3 weeks. The therapists take their time with cuticle care and never rush like other Dubai salons.',
    serviceUsed: 'Classic Spa Manicure & Pedicure Ritual',
    source: 'Fresha 5.0★ Review',
    date: 'October 2026',
    type: 'salon'
  },
  {
    id: 'test-6',
    name: 'Ananya Krishnan',
    role: 'Al Fahidi Local Resident',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
    rating: 5,
    headline: '24K Gold Facial Gave Me the Ultimate Festive Glow',
    quote: 'I booked the 24K Gold & Diamond Facial before Diwali celebrations. The acupressure face and shoulder massage melted away all my fatigue, and the natural glow in photos was incredible. Everyone asked me where I got it done!',
    serviceUsed: '24K Gold & Diamond Luxury Polishing Facial',
    source: 'Google Verified Review',
    date: 'September 2026',
    type: 'salon'
  }
];

export const STYLISTS_LIST = [
  { id: 'any', name: 'First Available Senior Beautician', role: 'Fastest availability' },
  { id: 'fatima', name: 'Fatima Al-Zahra', role: 'Master Hair Stylist & Keratin Specialist' },
  { id: 'priya', name: 'Priya Sharma', role: 'Senior Skin Therapist & Eyebrow Artist' },
  { id: 'leila', name: 'Leila Bensalem', role: 'Moroccan Hammam & Body Waxing Expert' },
  { id: 'marina', name: 'Marina Rostova', role: 'Nail Artist & Russian Manicure Specialist' }
];

export const TIME_SLOTS = [
  '10:00 AM',
  '11:15 AM',
  '12:30 PM',
  '02:00 PM',
  '03:15 PM',
  '04:30 PM',
  '05:45 PM',
  '07:00 PM',
  '08:15 PM',
  '09:00 PM'
];

export const DUBAI_AREAS = [
  'Bur Dubai / Meena Bazaar',
  'Al Fahidi / Al Ghubaiba',
  'Downtown Dubai / Business Bay',
  'Jumeirah / Al Wasl',
  'Dubai Marina / JBR',
  'Deira / Al Rigga',
  'Al Barsha / Dubai Hills',
  'Other Dubai Area (Specify in Notes)'
];

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: Partial<BookingData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const phoneClean = (data.phone || '').replace(/\D/g, '');
  if (!phoneClean || phoneClean.length < 9) {
    errors.phone = 'Please provide a valid phone number (at least 9 digits).';
  }

  if (!data.service || data.service.trim() === '') {
    errors.service = 'Please select a salon or home service.';
  }

  if (!data.date || data.date.trim() === '') {
    errors.date = 'Please pick a preferred appointment date.';
  }

  if (!data.time || data.time.trim() === '') {
    errors.time = 'Please select a preferred time slot.';
  }

  if (data.serviceType === 'home' && (!data.address || data.address.trim().length < 5)) {
    errors.address = 'Please provide your Dubai delivery address or area for Home Service.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export const SALON_WHATSAPP = '971509152969';

export function formatPrice(amount: number): string {
  return `AED ${amount.toLocaleString('en-US')}`;
}

export function generateWhatsAppMessage(data: {
  service: string;
  date: string;
  time: string;
  name?: string;
  phone?: string;
  serviceType?: 'salon' | 'home';
  address?: string;
  stylist?: string;
  notes?: string;
}): string {
  const typeText = data.serviceType === 'home' ? ' [VIP Home Service]' : ' [In-Salon Appointment]';
  let message = `Hi Slender Ladies Salon, I want to book an appointment for ${data.service} on ${data.date} at ${data.time}${typeText}.`;
  
  if (data.name && data.name.trim()) {
    message += `\nName: ${data.name.trim()}`;
  }
  if (data.phone && data.phone.trim()) {
    message += `\nPhone: ${data.phone.trim()}`;
  }
  if (data.serviceType === 'home' && data.address && data.address.trim()) {
    message += `\nDubai Address: ${data.address.trim()}`;
  }
  if (data.stylist && data.stylist !== 'any') {
    const stylistObj = STYLISTS_LIST.find(s => s.id === data.stylist);
    if (stylistObj) {
      message += `\nPreferred Beautician: ${stylistObj.name}`;
    }
  }
  if (data.notes && data.notes.trim()) {
    message += `\nNotes: ${data.notes.trim()}`;
  }

  return message;
}

export function generateWhatsAppUrl(data: {
  service: string;
  date: string;
  time: string;
  name?: string;
  phone?: string;
  serviceType?: 'salon' | 'home';
  address?: string;
  stylist?: string;
  notes?: string;
}, salonPhone: string = SALON_WHATSAPP): string {
  const message = generateWhatsAppMessage(data);
  const cleanPhone = salonPhone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
