import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  generateWhatsAppMessage,
  generateWhatsAppUrl,
  formatPrice,
  SALON_SERVICES,
  SALON_INFO,
  TESTIMONIALS
} from './booking';

test('formatPrice formats AED currency correctly', () => {
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
    service: 'The Dubai Glow Queen Package (Full Combo)',
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
    service: 'Traditional Royal Moroccan Bath (Hammam)',
    date: '2026-11-15',
    time: '10:00 AM',
    serviceType: 'salon'
  }, '971509152969');

  assert.ok(url.startsWith('https://wa.me/971509152969?text='));
  assert.ok(url.includes(encodeURIComponent('Hi Slender Ladies Salon, I want to book an appointment for Traditional Royal Moroccan Bath (Hammam) on 2026-11-15 at 10:00 AM [In-Salon Appointment].')));
});

test('services list includes signature Dubai treatments with accurate pricing', () => {
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
});

test('salon info contains valid Google Maps URL, rating, reviews count and plus code', () => {
  assert.equal(SALON_INFO.googleMapsUrl, 'https://maps.app.goo.gl/9zSLHT8JEMkvRzLS6');
  assert.ok(SALON_INFO.address.includes('Bur Dubai'));
  assert.equal(SALON_INFO.rating, 4.8);
  assert.equal(SALON_INFO.reviewsCount, 131);
  assert.equal(SALON_INFO.isWomenOwned, true);
  assert.equal(SALON_INFO.plusCode, '777R+FP Dubai - United Arab Emirates');
  assert.ok(SALON_INFO.instagramUrl.includes('instagram.com/slenderladiessalon'));
  assert.ok(SALON_INFO.linkedinUrl.includes('linkedin.com/company/slender-ladies-salon-dubai'));
  assert.ok(SALON_INFO.facebookUrl.includes('facebook.com/slenderladiessalon'));
});

test('testimonials dataset has valid reviews with high ratings and portraits', () => {
  assert.ok(TESTIMONIALS.length >= 5);
  for (const item of TESTIMONIALS) {
    assert.ok(item.id, 'id is required');
    assert.ok(item.name.length >= 2, 'name must be realistic');
    assert.ok(item.role.length >= 3, 'role/location required');
    assert.ok(item.avatar.startsWith('https://images.unsplash.com/'), 'avatar must be valid unsplash URL');
    assert.equal(item.rating, 5, 'all featured reviews have 5-star rating');
    assert.ok(item.headline.length > 10, 'headline must be descriptive');
    assert.ok(item.quote.length > 30, 'review quote must provide real detail');
    assert.ok(item.serviceUsed.length > 5, 'serviceUsed must be identified');
    assert.ok(['salon', 'home'].includes(item.type), 'type must be salon or home');
    assert.ok(item.source.includes('Review'), 'source should identify review platform');
  }
});

