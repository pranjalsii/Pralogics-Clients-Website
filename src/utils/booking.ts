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
  originalPrice?: number;
  duration: string;
  badge?: string;
  shortDesc: string;
  included: string[];
  image: string;
  freshaUrl?: string;
}

export interface AlaCarteCategory {
  id: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    duration: string;
    price: number;
    originalPrice?: number;
    note?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'nails' | 'interior';
  description: string;
  image: string;
  featured?: boolean;
  isRealSalonPhoto?: boolean;
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
  category: 'Ladies Beauty Salon & All-Dubai Home Service',
  address: 'Shop No. 6, 22 3A St - Al Souq Al Kabeer - Al Fahidi - Bur Dubai',
  fullAddress: 'Shop No. 6, Ground Floor, Majed Bin Sultan Building, 22 3A Street, Al Souq Al Kabeer, Al Fahidi (Near Meena Bazaar), Bur Dubai, Dubai 122022, UAE',
  landmark: 'Near Meena Bazaar, Old Textile Market & Al Ghubaiba Metro Station',
  plusCode: '777R+FP Dubai - United Arab Emirates',
  postalCode: '122022',
  coordinates: {
    lat: 25.263643,
    lng: 55.291489
  },
  city: 'Dubai',
  country: 'United Arab Emirates',
  phone: '+971 4 351 5745',
  mobile: '+971 50 915 2969',
  whatsappRaw: '971509152969',
  whatsappPhone: '971509152969',
  googleMapsUrl: 'https://maps.app.goo.gl/9zSLHT8JEMkvRzLS6',
  googleMapsEmbed: 'https://maps.google.com/maps?q=25.263643,55.291489+(Slender+Ladies+Salon+Shop+No+6+Bur+Dubai)&t=&z=16&ie=UTF8&iwloc=B&output=embed',
  freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer',
  freshaVenueUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao',
  instagramUrl: 'https://www.instagram.com/slenderladiessaloon/',
  instagramHomeUrl: 'https://www.instagram.com/slenderhomeservicesaloon/',
  instagramAltUrl: 'https://www.instagram.com/slenderladiessalon/',
  linkedinUrl: 'https://www.linkedin.com/company/slender-ladies-salon-dubai/',
  facebookUrl: 'https://www.facebook.com/Slenderladiessalon/',
  hoursDaily: 'Mon–Fri: 10:00 AM – 10:00 PM · Sat–Sun: 09:05 AM – 10:00 PM',
  hoursWeekday: 'Monday – Friday: 10:00 AM – 10:00 PM',
  hoursWeekend: 'Saturday – Sunday: 09:05 AM – 10:00 PM',
  priceRange: 'AED 14 – AED 800',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Apple Pay & Google Pay',
  rating: 4.8,
  reviewsCount: 131,
  freshaRating: 5.0,
  yearsEstablished: '10+ Years in Bur Dubai',
  isWomenOwned: true
};

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'fruit-cleanup',
    name: 'Herbal Fruit Clean-Up & Radiant Glow',
    category: 'skin',
    price: 55,
    duration: '45 Mins',
    badge: 'Fresha Featured · AED 55',
    shortDesc: 'Verified Fresha favorite: gentle pore cleansing with natural fruit enzymes or turmeric clean-up, botanical steam, blackhead removal, and soothing mask.',
    included: [
      'Deep pore cleansing & gentle botanical steam',
      'Choice of Fruit Clean-Up or Turmeric Clean-Up (AED 55)',
      'Blackhead & whitehead gentle extraction',
      'Soothing toning compress & SPF finish'
    ],
    image: '/assets/salon/slender-real-3.jpg',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/booking?offerItemId=s:20733566'
  },
  {
    id: 'dr-renaud-facial',
    name: 'Dr. Renaud Paris Radiance Facial',
    category: 'skin',
    price: 160,
    duration: '60 Mins',
    badge: 'Signature Facial · AED 159–160',
    shortDesc: 'Authentic French Dr. Renaud botanical facial therapy targeting uneven skin tone, dehydration, and fatigue with organic fruit extracts and lymphatic massage.',
    included: [
      'Double cleansing with French Dr. Renaud milk & toner',
      'Ultrasonic exfoliation & warm ozone steam',
      'Face, neck & shoulder lymphatic drainage massage',
      'Dr. Renaud radiance mask (Also in AED 285 Mani-Pedi Combo)'
    ],
    image: '/assets/salon/brow-care.jpg',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'gold-diamond-facial',
    name: '24K Gold, Diamond & Korean Glass Facial',
    category: 'skin',
    price: 200,
    originalPrice: 250,
    duration: '60 Mins',
    badge: 'Bridal Glow · AED 149–200',
    shortDesc: 'Choose between our Gold Facial (AED 149), Diamond Polishing Facial (AED 199), or 60-min Korean Glass Skin Facial (AED 200) for luminous bridal skin.',
    included: [
      'Micro-polishing exfoliation & deep pore detox',
      'Choice of 24K Gold (AED 149), Diamond (AED 199) or Korean Facial (AED 200)',
      'Relaxing facial & cranial acupressure massage',
      'Collagen-boosting brightening hydro-mask'
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'threading-combo',
    name: 'Full Face Threading & Eyebrow Architecture',
    category: 'waxing',
    price: 89,
    duration: '40 Mins',
    badge: 'Fresha Verified · AED 89',
    shortDesc: 'Precision organic cotton threading: Full Face Threading (AED 89), or book individually for Eyebrows (AED 29), Upper Lip (AED 19), Chin (AED 19), and Forehead (AED 29).',
    included: [
      'Eyebrows Threading (AED 29 · 20 mins) & Upper Lip (AED 19 · 15 mins)',
      'Forehead Threading (AED 29) & Chin/Jawline (AED 19)',
      'Complete Full Face Threading Package (AED 89 · 40 mins)',
      'Soothing cooling aloe vera & rose water gel finish'
    ],
    image: '/assets/salon/cat-threading.jpg',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/booking?offerItemId=s:25335113'
  },
  {
    id: 'rica-waxing-full',
    name: 'Italian RICA & Honey Full Body Waxing',
    category: 'waxing',
    price: 169,
    originalPrice: 229,
    duration: '70 Mins',
    badge: 'Silky Smooth · AED 49–229',
    shortDesc: 'Gentle hair removal in private suites: Half Legs Wax (AED 49), Full Legs (AED 79), Full Arms + Underarms (AED 89), Full Body Honey Wax (AED 169) or Italian RICA Full Body (AED 229).',
    included: [
      'Half Legs (AED 49), Full Legs (AED 79), Full Hand RICA (AED 69)',
      'Underarms Wax (AED 25 Honey / AED 29 RICA) & Bikini Wax (AED 75)',
      'Full Body without Bikini: AED 169 (Regular) / AED 229 (Italian RICA)',
      'Pre-wax antiseptic care & post-wax soothing oil'
    ],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/booking?offerItemId=s:25335459'
  },
  {
    id: 'haircut-blowdry',
    name: 'Signature Haircut, Hair Spa & Blowdry',
    category: 'hair',
    price: 150,
    duration: '45 Mins',
    badge: 'Real Salon Care · AED 50–159',
    shortDesc: 'Official Fresha hair care by Fatima & team: Creative Haircut (AED 50), Hot Oil Massage (AED 89), Root Touch-Up (AED 120), Hair Spa (AED 149), Basic Cut & Style (AED 150), or Wash & Blowdry (AED 159).',
    included: [
      'Creative Haircut (AED 50) or Basic Haircut & Style (AED 150)',
      'Nourishing Hair Spa (AED 149) & Hot Oil Head Massage (AED 89)',
      'Hair Wash with Voluminous Blow Dry (AED 159)',
      'Root Touch Up (AED 120), Highlights Crown (AED 130) & Global Colour (AED 200)'
    ],
    image: '/assets/salon/slender-real-2.jpg',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'keratin-protein',
    name: 'Organic Keratin, Botox & Protein Therapy',
    category: 'hair',
    price: 350,
    originalPrice: 499,
    duration: '120 Mins',
    badge: 'Frizz-Free · AED 200–599',
    shortDesc: 'Long-lasting smoothing & African/Boho braiding: Keratin Straightening (AED 200), Protein Straightening (AED 300), Boho Braids (from AED 250), Hair Botox (AED 399), Full Keratin (AED 499), and Hair Protein (AED 599).',
    included: [
      'Keratin Iron Straightening (AED 200) & Protein Straightening (AED 300)',
      'Deep Hair Botox (AED 399), Full Keratin (AED 499) & Protein (AED 599)',
      'Custom Cornrows & Boho Braids (AED 250 – AED 600)',
      'Eliminates frizz and restores mirror shine in Dubai humidity'
    ],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'moroccan-bath',
    name: 'Full Body Massage & Moroccan Spa Rituals',
    category: 'hammam',
    price: 179,
    duration: '60 Mins',
    badge: 'Relaxation · AED 159–399',
    shortDesc: 'Unwind in our private ladies spa rooms with 60-min or 90-min Swedish Massage (AED 159), Balinese Massage (AED 179), Deep Tissue Massage (AED 189), Thai Massage (AED 199), or Couple Massage (from AED 309).',
    included: [
      '60-Min Swedish (AED 159), Balinese (AED 179) & Deep Tissue (AED 189)',
      '60-Min Authentic Thai Massage (AED 199) or 90-Min Sessions',
      'Full Hand & Leg De-Tan / Bleaching Rituals (AED 20 – AED 70)',
      'Private temperature-controlled ladies therapy suites'
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'spa-mani-pedi',
    name: 'Spa Manicure, Pedicure, Nail Extensions & Henna',
    category: 'nails',
    price: 109,
    originalPrice: 149,
    duration: '90 Mins',
    badge: 'Nails & Lashes · AED 59–269',
    shortDesc: 'Complete nail & lash bar: Classic Manicure (AED 59), Classic Pedicure (AED 69), Mani-Pedi Combo (AED 109), Gel Mani-Pedi (AED 149), Hard Gel/Polygel/Acrylic Extensions (AED 229–249), Eyelash Extensions (AED 249), and Henna (AED 100).',
    included: [
      'Classic Manicure (AED 59), Classic Pedicure (AED 69) & Paraffin Spa (AED 69)',
      'Gel Mani-Pedi (AED 149) & French Mani-Pedi (AED 169)',
      'Hard Gel (AED 229), Polygel (AED 240) & Acrylic Extensions (AED 249)',
      'Classic/Volume Eyelash Extensions (AED 249–269) & Henna (AED 100)'
    ],
    image: '/assets/salon/slender-real-1.jpg',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'full-transformation-bundle',
    name: 'Full Transformation Bundle (Fresha Top Seller)',
    category: 'home',
    price: 350,
    originalPrice: 549,
    duration: '4 Hrs 10 Mins',
    badge: 'Save 36% · AED 350 (Was 549)',
    shortDesc: 'Official Fresha #1 Best-Seller Package: Full hand wax, full leg wax, underarm wax, upper lip & eyebrow threading, luxury Diamond Facial, and classic manicure & pedicure.',
    included: [
      'Full hand, full leg & underarm waxing',
      'Precision upper lip & eyebrow threading',
      'Rejuvenating luxury Diamond Facial',
      'Complete manicure & pedicure (Available In-Salon or Home Service)'
    ],
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/booking?offerItemId=p:1905904'
  },
  {
    id: 'gold-combo-bundle',
    name: 'Gold Facial & Full Grooming Combo (Fresha Deal)',
    category: 'home',
    price: 304,
    originalPrice: 434,
    duration: '3 Hrs 15 Mins',
    badge: 'Save 30% · AED 304 (Was 434)',
    shortDesc: 'Verified Fresha 5-in-1 Package: Radiant Gold Facial, eyebrow threading, classic manicure & pedicure, half-leg wax, and hygienic bikini waxing.',
    included: [
      '24K Gold skin brightening facial treatment',
      'Precision eyebrow threading & shaping',
      'Classic spa manicure and pedicure',
      'Half-leg waxing & hygienic bikini waxing'
    ],
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  },
  {
    id: 'doorstep-home-service',
    name: 'VIP Doorstep Home Service & Fresha Combos',
    category: 'home',
    price: 225,
    originalPrice: 275,
    duration: '2 Hrs 50 Mins+',
    badge: 'Home & Salon Combos · From AED 225',
    shortDesc: 'Book any combo at our Bur Dubai salon or at your home across Dubai: Herbal Facial + Wax + Threading Combo (AED 225), Dr. Renaud Facial + Mani-Pedi Combo (AED 285), or Haircut + Wax + Mani-Pedi Combo (AED 379).',
    included: [
      'Combo 1 (AED 225): Herbal Facial, Full Arm & Underarm Wax, Brow & Lip Threading, Gel Removal',
      'Combo 2 (AED 285): Dr. Renaud Facial, Classic Mani-Pedi & Underarm Waxing',
      'Combo 3 (AED 300): Herbal Facial, Gel Mani-Pedi, Bikini & Side-Lock Wax, Eyebrow Threading',
      'Combo 4 (AED 379): Basic Haircut & Style, Mani-Pedi, Half Leg, Full Arm & Bikini Wax'
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=720&q=78',
    freshaUrl: 'https://www.fresha.com/a/slender-ladies-salon-salon-home-service-dubai-slender-ladies-salon-q1ici0ao/all-offer'
  }
];

export const COMPLETE_FRESHA_PRICE_LIST: AlaCarteCategory[] = [
  {
    id: 'combos',
    title: 'Official Fresha Value Packages & Combos',
    subtitle: 'Available In-Salon (Bur Dubai) & VIP Home Service',
    items: [
      { name: 'Full Transformation: Full Hand, Full Leg & Underarm Wax + Upper Lip & Brow Threading + Diamond Facial + Mani-Pedi', duration: '4h 10m', price: 350, originalPrice: 549, note: 'Fresha #1 Best Seller' },
      { name: 'Gold Glow Combo: Gold Facial + Eyebrow Threading + Classic Mani-Pedi + Half Leg Wax + Bikini Wax', duration: '3h 15m', price: 304, originalPrice: 434, note: 'Save AED 130' },
      { name: 'Hair & Beauty Combo: Basic Haircut & Style + Mani-Pedi + Half Leg, Full Arm & Bikini Wax', duration: '3h 15m', price: 379, originalPrice: 491, note: 'Save AED 112' },
      { name: 'Gel & Herbal Combo: Herbal Facial + Gel Mani-Pedi + Bikini & Side-Lock Wax + Eyebrow Threading', duration: '3h 30m', price: 300, originalPrice: 381 },
      { name: 'Parisian Combo: Dr. Renaud Facial + Classic Mani-Pedi + Underarm Waxing', duration: '3h 00m', price: 285, originalPrice: 312 },
      { name: 'Essential Glow Combo: Herbal Facial + Full Arm & Underarm Wax + Brow & Lip Threading + Gel Removal', duration: '2h 50m', price: 225, originalPrice: 275 }
    ]
  },
  {
    id: 'threading-bleach',
    title: 'Threading, Bleaching & De-Tan',
    subtitle: 'Precision Organic Threading & Skin Brightening',
    items: [
      { name: 'Upper Lip Threading', duration: '15 Mins', price: 19, note: 'Fresha Popular' },
      { name: 'Chin & Jawline Threading', duration: '20 Mins', price: 19 },
      { name: 'Eyebrows Threading & Shaping', duration: '20 Mins', price: 29, note: 'Fresha Featured' },
      { name: 'Forehead Threading', duration: '15 Mins', price: 29 },
      { name: 'Full Face Threading', duration: '40 Mins', price: 89 },
      { name: 'Face De-Tan Pack', duration: '20 Mins', price: 20 },
      { name: 'Face Bleach', duration: '15 Mins', price: 25 },
      { name: 'Full Hand Bleach', duration: '25 Mins', price: 60 },
      { name: 'Full Leg Bleach', duration: '30 Mins', price: 70 }
    ]
  },
  {
    id: 'facials',
    title: 'Facials & Skin Clean-Up',
    subtitle: 'Dr. Renaud Paris, Korean Glass & Herbal Therapies',
    items: [
      { name: 'Fruit Clean Up', duration: '45 Mins', price: 55, note: 'Fresha Featured' },
      { name: 'Turmeric Clean Up', duration: '45 Mins', price: 55 },
      { name: 'Herbal Facial', duration: '45 Mins', price: 99 },
      { name: 'Gold Facial', duration: '45 Mins', price: 149 },
      { name: 'Dr. Renaud Paris Facial', duration: '60 Mins', price: 159, note: 'Signature Facial' },
      { name: 'Diamond Facial', duration: '45 Mins', price: 199 },
      { name: 'Korean Glass Skin Facial', duration: '60 Mins', price: 200 }
    ]
  },
  {
    id: 'waxing',
    title: 'Waxing (Regular Honey & Italian RICA)',
    subtitle: 'Gentle, Hygienic Single-Use Waxing Protocols',
    items: [
      { name: 'Upper Lip Wax (RICA)', duration: '10 Mins', price: 14 },
      { name: 'Lower Chin / Jawline Wax (RICA)', duration: '15 Mins', price: 19 },
      { name: 'Underarms Waxing (Regular / RICA)', duration: '20 Mins', price: 25, note: 'RICA AED 29' },
      { name: 'Side-Lock / Forehead Wax (RICA)', duration: '20 Mins', price: 29 },
      { name: 'Back Wax (RICA)', duration: '20 Mins', price: 44 },
      { name: 'Half Legs Waxing', duration: '15 Mins', price: 49, note: 'Fresha Featured' },
      { name: 'Full Hand Wax (RICA)', duration: '20 Mins', price: 69 },
      { name: 'Bikini Waxing / Full Face RICA Wax', duration: '30 Mins', price: 75 },
      { name: 'Full Legs Waxing (Regular / RICA)', duration: '30 Mins', price: 79 },
      { name: 'Full Arms with Underarms Wax', duration: '30 Mins', price: 89 },
      { name: 'Full Body Wax Excluding Bikini (Regular)', duration: '70 Mins', price: 169 },
      { name: 'Full Body Wax Excluding Bikini (Italian RICA)', duration: '70 Mins', price: 229 },
      { name: 'Full Body Wax Including Bikini (Italian RICA)', duration: '70 Mins', price: 359 }
    ]
  },
  {
    id: 'hair',
    title: 'Hair Care, Colour, Keratin & Braiding',
    subtitle: 'Styling, Straightening, Highlights & Boho Braids',
    items: [
      { name: 'Creative Haircut', duration: '60 Mins', price: 50 },
      { name: 'Hot Oil Head Massage', duration: '30 Mins', price: 89 },
      { name: 'Root Touch Up Colour', duration: '45 Mins', price: 120 },
      { name: 'Highlights Crown', duration: '45 Mins', price: 130 },
      { name: 'Hair Spa / Basic Haircut & Style', duration: '45 Mins', price: 149, note: 'Cut & Style AED 150' },
      { name: 'Hair Wash with Blow Dry', duration: '45 Mins', price: 159 },
      { name: 'Cap Highlights', duration: '60 Mins', price: 179 },
      { name: 'Global Hair Colour / Keratin Iron Straightening', duration: '90 Mins', price: 200 },
      { name: 'Ombre Colour / Boho Braids (Short/Medium)', duration: '120 Mins', price: 250 },
      { name: 'Protein Straightening / Kids Braids', duration: '120 Mins', price: 300 },
      { name: 'Hair Botox Treatment', duration: '5 Hrs', price: 399 },
      { name: 'Full Keratin Treatment', duration: '5.5 Hrs', price: 499 },
      { name: 'Full Hair Protein Restructuring', duration: '5 Hrs', price: 599 }
    ]
  },
  {
    id: 'nails-massage',
    title: 'Nails, Eyelashes, Henna & Full Body Massage',
    subtitle: 'Nail Extensions, Lash Artistry & Spa Body Therapy',
    items: [
      { name: 'French / Cat-Eye / Chrome / 3D Nail Art', duration: '20 Mins', price: 28, note: 'AED 28 – AED 39' },
      { name: 'Classic Manicure', duration: '45 Mins', price: 59 },
      { name: 'Classic Pedicure / Spa Paraffin Manicure', duration: '45 Mins', price: 69 },
      { name: 'Traditional Henna Session', duration: '60 Mins', price: 100 },
      { name: 'Manicure & Pedicure Combo', duration: '90 Mins', price: 109 },
      { name: 'Gel Manicure & Pedicure Combo', duration: '90 Mins', price: 149 },
      { name: 'French Manicure & Pedicure Combo', duration: '100 Mins', price: 169 },
      { name: 'Hard Gel / Polygel / Acrylic Extensions', duration: '3 Hrs', price: 229, note: 'AED 229 – AED 249' },
      { name: 'Classic / Volume / Mega Eyelash Extensions', duration: '90 Mins', price: 249, note: 'AED 249 – AED 269' },
      { name: 'Swedish Massage (60 Mins / 90 Mins)', duration: '60 Mins', price: 159, note: '90m AED 179' },
      { name: 'Balinese Massage (60 Mins / 90 Mins)', duration: '60 Mins', price: 179, note: '90m AED 199' },
      { name: 'Deep Tissue Massage (60 Mins / 90 Mins)', duration: '60 Mins', price: 189, note: '90m AED 209' },
      { name: 'Thai Massage (60 Mins / 90 Mins)', duration: '60 Mins', price: 199, note: '90m AED 239' }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-real-1',
    title: 'Slender Salon Hair Styling & Blowdry Studio',
    category: 'hair',
    description: 'Expert hair styling, voluminous blowouts, and keratin care at Slender Ladies Salon Bur Dubai.',
    image: '/assets/salon/hero-hair.jpg',
    featured: true,
    isRealSalonPhoto: true
  },
  {
    id: 'gal-real-2',
    title: 'Slender Salon Facial & Skin Care Suite',
    category: 'skin',
    description: 'Relaxing Dr. Renaud Paris, Gold, Diamond, and Fruit Clean-Up facial massage in private suites.',
    image: '/assets/salon/hero-facial.jpg',
    featured: true,
    isRealSalonPhoto: true
  },
  {
    id: 'gal-real-3',
    title: 'Slender Salon Nail & Manicure Bar',
    category: 'nails',
    description: 'Precision spa manicure, gel extensions, chrome nail art, and cuticle care.',
    image: '/assets/salon/hero-nails.jpg',
    featured: true,
    isRealSalonPhoto: true
  },
  {
    id: 'gal-4',
    title: 'Dr. Renaud Radiance Therapy',
    category: 'skin',
    description: 'French botanical skin therapy for a luminous, hydrated complexion.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'gal-5',
    title: 'Artisan Gel & Polygel Nail Extensions',
    category: 'nails',
    description: 'Cat-eye, chrome art, French tips, and durable hard gel / acrylic extensions.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'gal-6',
    title: 'Swedish, Balinese & Thai Spa Suites',
    category: 'interior',
    description: 'Tranquil ladies-only massage and spa cabins in Al Souq Al Kabeer, Bur Dubai.',
    image: '/assets/salon/spa-towels.jpg'
  },
  {
    id: 'gal-7',
    title: 'Precision Eyebrow & Full Face Threading',
    category: 'skin',
    description: 'Flawless symmetry crafted with organic cotton thread (Eyebrows AED 29, Upper Lip AED 19).',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'gal-8',
    title: 'Bur Dubai Private Ladies Sanctuary',
    category: 'interior',
    description: 'Shop No. 6, Ground Floor, Majed Bin Sultan Building, 22 3A St, near Meena Bazaar.',
    image: '/assets/salon/hero-sanctuary.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Taradevi B.',
    role: 'Verified Fresha Client · Dubai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=75',
    rating: 5,
    headline: 'Beautiful Offer with Quality Staff — Must Recommend for Home Services!',
    quote: 'Beautiful offer with quality staff. Must recommend for home services. Just amazing! The team arrived on time with everything sanitized and completed the full package with total perfection.',
    serviceUsed: 'Full Transformation Bundle (Fresha Top Seller)',
    source: 'Fresha 5.0★ Review',
    date: 'Verified Fresha Booking',
    type: 'home'
  },
  {
    id: 'test-2',
    name: 'Rana S.',
    role: 'Verified Fresha Client · Dubai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=75',
    rating: 5,
    headline: 'Good Quick Service for Home Services & Comfortable Staff with Amazing Offers',
    quote: 'Good quick service for home services. Comfortable staff with amazing offers! Their combo deals on Fresha are the best value in Dubai and the beauticians are super polite and skilled.',
    serviceUsed: 'Gold Facial & Full Grooming Combo (Fresha Deal)',
    source: 'Fresha 5.0★ Review',
    date: 'Verified Fresha Booking',
    type: 'home'
  },
  {
    id: 'test-3',
    name: 'Binita G.',
    role: 'Verified Fresha Client · Bur Dubai',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=75',
    rating: 5,
    headline: 'Quick and Wonderful Service — Highly Recommend Slender Ladies Salon',
    quote: 'Quick and wonderful service. Would recommend for home service and salon visits alike. Fatima, Savya, and Purnam always make sure you leave feeling relaxed and pampered.',
    serviceUsed: 'VIP Doorstep Home Service & Fresha Combos',
    source: 'Fresha 5.0★ Review',
    date: 'Verified Fresha Booking',
    type: 'home'
  },
  {
    id: 'test-4',
    name: 'Pooja Mehta',
    role: 'Meena Bazaar / Bur Dubai Resident',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=75',
    rating: 5,
    headline: 'Flawless Dr. Renaud Facial & Most Precise AED 29 Brows in Bur Dubai',
    quote: 'Slender Ladies Salon in Majed Bin Sultan Building has been my go-to in Bur Dubai for years. Their Dr. Renaud facial leaves my skin glowing, and their eyebrow threading (AED 29) is always symmetrical.',
    serviceUsed: 'Dr. Renaud Paris Radiance Facial',
    source: 'Google Verified Review',
    date: 'Verified Google Local Guide',
    type: 'salon'
  },
  {
    id: 'test-5',
    name: 'Rina L.',
    role: 'Verified Fresha Client · Dubai',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=75',
    rating: 5,
    headline: 'Beautiful Home Service & Spotless Hygiene Standards',
    quote: 'Beautiful home service! Everything from the Italian RICA waxing to the classic manicure and pedicure was handled professionally in the comfort of my apartment.',
    serviceUsed: 'Spa Manicure, Pedicure, Nail Extensions & Henna',
    source: 'Fresha 5.0★ Review',
    date: 'Verified Fresha Booking',
    type: 'home'
  },
  {
    id: 'test-6',
    name: 'Ananya Krishnan',
    role: 'Al Fahidi Local Resident',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=240&q=75',
    rating: 5,
    headline: '24K Gold & Diamond Facial Gave Me the Ultimate Festive Glow',
    quote: 'I booked the Gold & Diamond Facial and Full Face Threading before family celebrations. The facial massage melted away all my stress and the pricing is so honest compared to other Dubai salons.',
    serviceUsed: '24K Gold, Diamond & Korean Glass Facial',
    source: 'Google Verified Review',
    date: 'Verified Google Review',
    type: 'salon'
  }
];

export const STYLISTS_LIST = [
  { id: 'any', name: 'First Available Senior Beautician', role: 'Fastest confirmation (Salon or Home)' },
  { id: 'fatima', name: 'Fatima', role: 'Senior Hair, Facial & Keratin Specialist (Fresha Verified)' },
  { id: 'savya', name: 'Savya', role: 'Beauty Expert — Skin, RICA Waxing & Nail Art (Fresha Verified)' },
  { id: 'purnam', name: 'Purnam', role: 'All-Rounder Senior Beautician — Combos, Threading & Home Service (Fresha Verified)' }
];

export const TIME_SLOTS = [
  '09:30 AM',
  '10:00 AM',
  '11:15 AM',
  '12:30 PM',
  '02:00 PM',
  '03:15 PM',
  '04:30 PM',
  '05:45 PM',
  '07:00 PM',
  '08:15 PM',
  '09:15 PM'
];

export const DUBAI_AREAS = [
  'Bur Dubai / Al Souq Al Kabeer / Meena Bazaar',
  'Al Fahidi / Al Ghubaiba / Old Textile Market',
  'Al Mankhool / Al Karama / Oud Metha',
  'Downtown Dubai / Business Bay / DIFC',
  'Jumeirah / Al Wasl / Umm Suqeim',
  'Dubai Marina / JBR / Palm Jumeirah',
  'Deira / Al Rigga / Al Nahda',
  'Al Barsha / Dubai Hills / JVC',
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

export interface WhatsAppQuickInquiry {
  id: string;
  label: string;
  message: string;
}

export const DEFAULT_WHATSAPP_INQUIRY =
  'Hi Slender Ladies Salon, I would like to inquire about booking a beauty appointment at your Bur Dubai salon (Majed Bin Sultan Bldg) or via VIP Home Service.';

export const WHATSAPP_QUICK_INQUIRIES: WhatsAppQuickInquiry[] = [
  {
    id: 'salon-visit',
    label: 'Bur Dubai Salon Visit',
    message:
      'Hi Slender Ladies Salon, I would like to check available slots today/tomorrow at your Bur Dubai salon (Shop No. 6, Majed Bin Sultan Bldg).'
  },
  {
    id: 'home-service',
    label: 'VIP Home Service',
    message:
      'Hi Slender Ladies Salon, I would like to book a Ladies VIP Home Service in Dubai. Could you share today’s available timings?'
  },
  {
    id: 'fresha-combos',
    label: 'Packages & Combos',
    message:
      'Hi Slender Ladies Salon, I am interested in your Full Transformation & Gold Glow combo packages (AED 225 – AED 350). Please share details.'
  },
  {
    id: 'facial-hair',
    label: 'Facial & Hair Care',
    message:
      'Hi Slender Ladies Salon, I have an inquiry regarding Dr. Renaud Facial (AED 160) and Organic Keratin / Hair Care treatments.'
  }
];

export function generateDirectInquiryWhatsAppUrl(
  customMessage: string,
  salonPhone: string = SALON_WHATSAPP
): string {
  const cleanPhone = salonPhone.replace(/\D/g, '');
  const trimmed = (customMessage || '').trim();
  const finalMessage = trimmed.length > 0 ? trimmed : DEFAULT_WHATSAPP_INQUIRY;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(finalMessage)}`;
}

export const SEO_METADATA = {
  title: 'Slender Ladies Salon Dubai | Bur Dubai & VIP Home Service',
  description:
    'Book facials, Italian RICA waxing, hair care & nails at Slender Ladies Salon in Bur Dubai (Shop No. 6) or VIP Home Service across Dubai. From AED 14.',
  siteName: 'Slender Ladies Salon',
  locale: 'en_AE',
  geoRegion: 'AE-DU',
  geoPlacename: 'Bur Dubai, Dubai',
  geoPosition: '25.263643;55.291489',
  icbm: '25.263643, 55.291489'
};

export function generateLocalBusinessSchema(siteUrl: string = 'https://slenderladiessalon.ae') {
  const cleanUrl = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'BeautySalon', 'HairSalon'],
    '@id': `${cleanUrl}/#localbusiness`,
    name: SALON_INFO.name,
    alternateName: SALON_INFO.legalName,
    description: SEO_METADATA.description,
    url: cleanUrl,
    logo: `${cleanUrl}/favicon.svg`,
    image: [
      `${cleanUrl}/assets/salon/hero-hair.jpg`,
      `${cleanUrl}/assets/salon/svc-facial.jpg`,
      `${cleanUrl}/assets/salon/svc-hair-styling.jpg`,
      `${cleanUrl}/assets/salon/experience-interior.jpg`
    ],
    telephone: SALON_INFO.mobile,
    priceRange: 'AED 14 - AED 599',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Apple Pay, Fresha Online Booking',
    hasMap: SALON_INFO.googleMapsUrl,
    isAccessibleForFree: false,
    slogan: SALON_INFO.category,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Shop No. 6, Ground Floor, Majed Bin Sultan Building, 22 3A Street, Al Souq Al Kabeer, Al Fahidi (Near Meena Bazaar), Bur Dubai',
      addressLocality: SALON_INFO.city,
      addressRegion: SALON_INFO.city,
      postalCode: SALON_INFO.postalCode,
      addressCountry: 'AE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SALON_INFO.coordinates.lat,
      longitude: SALON_INFO.coordinates.lng
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SALON_INFO.mobile,
        contactType: 'reservations',
        areaServed: 'AE',
        availableLanguage: ['English', 'Hindi', 'Arabic', 'Urdu', 'Tagalog']
      },
      {
        '@type': 'ContactPoint',
        telephone: SALON_INFO.phone,
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Hindi', 'Arabic']
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:05',
        closes: '22:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(SALON_INFO.rating),
      reviewCount: String(SALON_INFO.reviewsCount),
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Bur Dubai, Al Souq Al Kabeer, Meena Bazaar & Al Fahidi, Dubai'
      },
      {
        '@type': 'City',
        name: 'Dubai'
      }
    ],
    sameAs: [
      SALON_INFO.googleMapsUrl,
      SALON_INFO.freshaUrl,
      SALON_INFO.instagramUrl,
      SALON_INFO.instagramHomeUrl,
      SALON_INFO.facebookUrl,
      SALON_INFO.linkedinUrl
    ],
    employee: STYLISTS_LIST.filter((s) => s.id !== 'any').map((staff) => ({
      '@type': 'Person',
      name: staff.name,
      jobTitle: staff.role
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Slender Ladies Salon Treatments & VIP Home Services',
      itemListElement: SALON_SERVICES.map((service) => ({
        '@type': 'Offer',
        name: service.name,
        description: service.shortDesc,
        price: String(service.price),
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
        url: SALON_INFO.freshaUrl,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDesc,
          provider: {
            '@type': 'BeautySalon',
            name: SALON_INFO.name
          }
        }
      }))
    }
  };
}



