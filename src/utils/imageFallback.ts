/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * High-reliability fallback images with category-specific curated photography
 * and embedded SVG fallbacks so broken images NEVER appear on screen.
 */

// Embedded luxury SVG data URLs as ultimate 100% fail-proof fallbacks
const createLuxurySvg = (title: string, subtitle: string, accentColor: string = '#BA4961') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FAF7F5"/>
        <stop offset="0.5" stop-color="#FFF0F3"/>
        <stop offset="1" stop-color="#EDF7EF"/>
      </linearGradient>
      <linearGradient id="rose" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#E88295"/>
        <stop offset="1" stop-color="${accentColor}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#bg)"/>
    <circle cx="400" cy="240" r="110" fill="white" stroke="${accentColor}" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="400" cy="240" r="95" fill="#FFF5F7"/>
    <path d="M400 180 L408 215 L440 220 L414 238 L422 270 L395 250 L368 270 L376 238 L350 220 L382 215 Z" fill="${accentColor}" opacity="0.85"/>
    <text x="400" y="390" text-anchor="middle" font-family="Cinzel, serif" font-size="28" font-weight="700" fill="#1E2421" letter-spacing="4">${title.toUpperCase()}</text>
    <text x="400" y="425" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="600" fill="#BA4961" letter-spacing="3">${subtitle.toUpperCase()}</text>
    <text x="400" y="460" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#52605B" letter-spacing="1.5">SLENDER LADIES SALON · BUR DUBAI</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const LUXURY_FALLBACKS: Record<string, string> = {
  skin: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  dr_renaud: 'https://images.unsplash.com/photo-1512290900672-1f02e6a9f4c0?auto=format&fit=crop&w=800&q=80',
  gold_facial: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  waxing: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
  keratin: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
  hammam: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
  nails: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  home: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
  interior: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  generic: createLuxurySvg('Slender Ladies Salon', 'Luxury Beauty Experience', '#BA4961')
};

// Safe image error handler to prevent infinite reload loops and guarantee clean graceful fallbacks
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: string
) => {
  const target = e.currentTarget;
  const fallback = (category && LUXURY_FALLBACKS[category]) || LUXURY_FALLBACKS.generic;

  // Prevent infinite loops if fallback itself fails
  if (target.dataset.triedFallback === 'secondary') {
    target.src = LUXURY_FALLBACKS.generic;
    target.dataset.triedFallback = 'svg';
    return;
  }

  if (target.dataset.triedFallback === 'primary') {
    target.src = LUXURY_FALLBACKS.generic;
    target.dataset.triedFallback = 'secondary';
    return;
  }

  target.dataset.triedFallback = 'primary';
  target.src = fallback;
};
