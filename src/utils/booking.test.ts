import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  generateWhatsAppMessage,
  generateWhatsAppUrl,
  generateDirectInquiryWhatsAppUrl,
  WHATSAPP_QUICK_INQUIRIES,
  DEFAULT_WHATSAPP_INQUIRY,
  formatPrice,
  SALON_SERVICES,
  COMPLETE_FRESHA_PRICE_LIST,
  STYLISTS_LIST,
  SALON_INFO,
  TESTIMONIALS,
  GALLERY_ITEMS,
  SEO_METADATA,
  generateLocalBusinessSchema
} from './booking';

test('formatPrice formats AED currency correctly', () => {
  assert.equal(formatPrice(19), 'AED 19');
  assert.equal(formatPrice(29), 'AED 29');
  assert.equal(formatPrice(55), 'AED 55');
  assert.equal(formatPrice(160), 'AED 160');
  assert.equal(formatPrice(350), 'AED 350');
});

test('validateBookingForm flags empty fields', () => {
  const result = validateBookingForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.service);
  assert.ok(result.errors.date);
  assert.ok(result.errors.time);
});

test('validateBookingForm requires address for home service', () => {
  const result = validateBookingForm({
    name: 'Sarah Jenkins',
    phone: '0509152969',
    service: 'Full Transformation Bundle (Fresha Top Seller)',
    date: '2026-11-10',
    time: '11:15 AM',
    serviceType: 'home',
    address: ''
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.address);
});

test('validateBookingForm accepts valid booking details', () => {
  const validData = {
    name: 'Fatima Al Mansoori',
    phone: '0509152969',
    service: 'Dr. Renaud Paris Radiance Facial',
    date: '2026-11-10',
    time: '11:15 AM',
    serviceType: 'salon' as const
  };
  const result = validateBookingForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateBookingForm rejects short phone numbers', () => {
  const result = validateBookingForm({
    name: 'Amina Khan',
    phone: '12345',
    service: 'Herbal Fruit Clean-Up & Radiant Glow',
    date: '2026-11-10',
    time: '02:00 PM'
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.phone);
});

test('generateWhatsAppMessage creates the exact required template', () => {
  const msg = generateWhatsAppMessage({
    service: 'Dr. Renaud Paris Radiance Facial',
    date: '2026-11-12',
    time: '04:30 PM',
    serviceType: 'salon'
  });

  assert.equal(
    msg,
    'Hi Slender Ladies Salon, I want to book an appointment for Dr. Renaud Paris Radiance Facial on 2026-11-12 at 04:30 PM [In-Salon Appointment].'
  );
});

test('generateWhatsAppUrl builds valid wa.me URL with UAE country code and encoded query', () => {
  const url = generateWhatsAppUrl({
    service: 'Full Body Massage & Moroccan Spa Rituals',
    date: '2026-11-15',
    time: '10:00 AM',
    serviceType: 'salon'
  }, '971509152969');

  assert.ok(url.startsWith('https://wa.me/971509152969?text='));
  assert.ok(url.includes(encodeURIComponent('Hi Slender Ladies Salon, I want to book an appointment for Full Body Massage & Moroccan Spa Rituals on 2026-11-15 at 10:00 AM [In-Salon Appointment].')));
});

test('services list and complete Fresha rate card include verified Dubai treatments and real staff', () => {
  const cleanup = SALON_SERVICES.find(s => s.name.includes('Herbal Fruit Clean-Up'));
  assert.ok(cleanup);
  assert.equal(cleanup?.price, 55);

  const facial = SALON_SERVICES.find(s => s.name.includes('Dr. Renaud Paris'));
  assert.ok(facial);
  assert.equal(facial?.price, 160);

  const keratin = SALON_SERVICES.find(s => s.name.includes('Organic Keratin'));
  assert.ok(keratin);
  assert.equal(keratin?.price, 350);

  const threading = SALON_SERVICES.find(s => s.name.includes('Full Face Threading'));
  assert.ok(threading);
  assert.equal(threading?.price, 89);

  assert.equal(COMPLETE_FRESHA_PRICE_LIST.length, 6);
  const stylistNames = STYLISTS_LIST.map(s => s.name);
  assert.ok(stylistNames.includes('Fatima'));
  assert.ok(stylistNames.includes('Savya'));
  assert.ok(stylistNames.includes('Purnam'));
});

test('salon info contains valid Google Maps URL, Fresha URL, real coordinates, and social profiles', () => {
  assert.equal(SALON_INFO.googleMapsUrl, 'https://maps.app.goo.gl/9zSLHT8JEMkvRzLS6');
  assert.ok(SALON_INFO.freshaUrl.includes('fresha.com/a/slender-ladies-salon'));
  assert.ok(SALON_INFO.address.includes('Bur Dubai'));
  assert.equal(SALON_INFO.rating, 4.8);
  assert.equal(SALON_INFO.reviewsCount, 131);
  assert.equal(SALON_INFO.isWomenOwned, true);
  assert.equal(SALON_INFO.plusCode, '777R+FP Dubai - United Arab Emirates');
  assert.ok(SALON_INFO.instagramUrl.includes('instagram.com/slenderladiessaloon'));
  assert.ok(SALON_INFO.instagramHomeUrl.includes('instagram.com/slenderhomeservicesaloon'));
  assert.ok(SALON_INFO.linkedinUrl.includes('linkedin.com/company/slender-ladies-salon-dubai'));
  assert.ok(SALON_INFO.facebookUrl.toLowerCase().includes('facebook.com/slenderladiessalon'));
});

test('testimonials dataset has valid reviews and every serviceUsed matches SALON_SERVICES', () => {
  assert.ok(TESTIMONIALS.length >= 5);
  const validServiceNames = new Set(SALON_SERVICES.map(s => s.name));
  for (const item of TESTIMONIALS) {
    assert.ok(item.id, 'id is required');
    assert.ok(item.name.length >= 2, 'name must be realistic');
    assert.ok(item.role.length >= 3, 'role/location required');
    assert.ok(item.avatar.startsWith('https://images.unsplash.com/'), 'avatar must be valid unsplash URL');
    assert.equal(item.rating, 5, 'all featured reviews have 5-star rating');
    assert.ok(item.headline.length > 10, 'headline must be descriptive');
    assert.ok(item.quote.length > 30, 'review quote must provide real detail');
    assert.ok(validServiceNames.has(item.serviceUsed), `serviceUsed "${item.serviceUsed}" must exist in SALON_SERVICES`);
    assert.ok(['salon', 'home'].includes(item.type), 'type must be salon or home');
    assert.ok(item.source.includes('Review'), 'source should identify review platform');
  }
});

test('zero duplicate image URLs exist in SALON_SERVICES or GALLERY_ITEMS', () => {
  const serviceImages = SALON_SERVICES.map(s => s.image);
  const uniqueServiceImages = new Set(serviceImages);
  assert.equal(uniqueServiceImages.size, serviceImages.length, 'Every service in SALON_SERVICES must have a unique image');

  const galleryImages = GALLERY_ITEMS.map(g => g.image);
  const uniqueGalleryImages = new Set(galleryImages);
  assert.equal(uniqueGalleryImages.size, galleryImages.length, 'Every item in GALLERY_ITEMS must have a unique image');
});

test('WHATSAPP_QUICK_INQUIRIES and generateDirectInquiryWhatsAppUrl build encoded pre-filled chat links', () => {
  assert.ok(WHATSAPP_QUICK_INQUIRIES.length >= 4);
  for (const preset of WHATSAPP_QUICK_INQUIRIES) {
    assert.ok(preset.id.length > 0);
    assert.ok(preset.label.length > 0);
    assert.ok(preset.message.includes('Slender Ladies Salon'));
  }

  const customUrl = generateDirectInquiryWhatsAppUrl(
    'Hi Slender Ladies Salon, do you have a slot at 4 PM today?',
    '+971 50 915 2969'
  );
  assert.equal(
    customUrl,
    `https://wa.me/971509152969?text=${encodeURIComponent('Hi Slender Ladies Salon, do you have a slot at 4 PM today?')}`
  );

  const fallbackUrl = generateDirectInquiryWhatsAppUrl('   ');
  assert.equal(
    fallbackUrl,
    `https://wa.me/971509152969?text=${encodeURIComponent(DEFAULT_WHATSAPP_INQUIRY)}`
  );
});

test('all 61 items in COMPLETE_FRESHA_PRICE_LIST match real Fresha AED pricing (AED 14 to AED 599)', () => {
  const allItems = COMPLETE_FRESHA_PRICE_LIST.flatMap((cat) => cat.items);
  assert.equal(allItems.length, 61, 'Total verified a-la-carte and combo items must be 61');

  for (const item of allItems) {
    assert.ok(item.price >= 14 && item.price <= 599, `Price for ${item.name} (${item.price}) must be within AED 14–599`);
    if (item.originalPrice) {
      assert.ok(item.originalPrice > item.price, `Original price for ${item.name} must exceed discounted price`);
    }
  }
});

test('SEO_METADATA adheres to optimal title (30-60 chars) and meta description (120-160 chars) length guidelines', () => {
  assert.ok(
    SEO_METADATA.title.length >= 30 && SEO_METADATA.title.length <= 60,
    `SEO title length (${SEO_METADATA.title.length}) must be between 30 and 60 characters`
  );
  assert.ok(
    SEO_METADATA.description.length >= 120 && SEO_METADATA.description.length <= 160,
    `SEO description length (${SEO_METADATA.description.length}) must be between 120 and 160 characters`
  );
  assert.equal(SEO_METADATA.geoRegion, 'AE-DU');
  assert.equal(SEO_METADATA.geoPlacename, 'Bur Dubai, Dubai');
});

test('generateLocalBusinessSchema produces valid Schema.org LocalBusiness JSON-LD for the Dubai salon', () => {
  const schema = generateLocalBusinessSchema('http://localhost:3000/');
  assert.equal(schema['@context'], 'https://schema.org');
  assert.ok(Array.isArray(schema['@type']));
  assert.ok(schema['@type'].includes('LocalBusiness'));
  assert.ok(schema['@type'].includes('BeautySalon'));
  assert.equal(schema['@id'], 'http://localhost:3000/#localbusiness');
  assert.equal(schema.name, 'Slender Ladies Salon');
  assert.equal(schema.url, 'http://localhost:3000');
  assert.equal(schema.telephone, '+971 50 915 2969');
  assert.equal(schema.priceRange, 'AED 14 - AED 599');
  assert.equal(schema.currenciesAccepted, 'AED');
  assert.equal(schema.address['@type'], 'PostalAddress');
  assert.ok(schema.address.streetAddress.includes('Shop No. 6'));
  assert.ok(schema.address.streetAddress.includes('Bur Dubai'));
  assert.equal(schema.address.addressLocality, 'Dubai');
  assert.equal(schema.address.postalCode, '122022');
  assert.equal(schema.address.addressCountry, 'AE');
  assert.equal(schema.geo['@type'], 'GeoCoordinates');
  assert.equal(schema.geo.latitude, 25.263643);
  assert.equal(schema.geo.longitude, 55.291489);
  assert.equal(schema.aggregateRating.ratingValue, '4.8');
  assert.equal(schema.aggregateRating.reviewCount, '131');
  assert.equal(schema.openingHoursSpecification.length, 2);
  assert.ok(schema.sameAs.includes(SALON_INFO.googleMapsUrl));
  assert.ok(schema.sameAs.includes(SALON_INFO.freshaUrl));
  assert.equal(schema.hasOfferCatalog['@type'], 'OfferCatalog');
  assert.equal(schema.hasOfferCatalog.itemListElement.length, SALON_SERVICES.length);
});



