/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * High-reliability fallback images with category-specific curated photography
 * and embedded architectural monogram SVG fallbacks so broken images NEVER appear on screen.
 */

const createLuxurySvg = (title: string, subtitle: string, accentColor: string = '#7A2E3E') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none">
    <rect width="800" height="600" fill="#F2EDE4"/>
    <rect x="32" y="32" width="736" height="536" stroke="#D8CFC2" stroke-width="1"/>
    <rect x="44" y="44" width="712" height="512" stroke="#E4DDD3" stroke-width="1"/>
    <circle cx="400" cy="240" r="64" stroke="${accentColor}" stroke-width="1"/>
    <text x="400" y="254" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="44" font-style="italic" fill="${accentColor}">S</text>
    <text x="400" y="370" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="26" font-weight="600" fill="#171412" letter-spacing="6">${title.toUpperCase()}</text>
    <text x="400" y="405" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="500" fill="#7A2E3E" letter-spacing="4">${subtitle.toUpperCase()}</text>
    <text x="400" y="440" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" fill="#8A8179" letter-spacing="3">SLENDER ATELIER · BUR DUBAI</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const LUXURY_FALLBACKS: Record<string, string> = {
  skin: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85',
  dr_renaud: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85',
  gold_facial: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
  waxing: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
  hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85',
  keratin: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85',
  hammam: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85',
  nails: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85',
  home: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=85',
  interior: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
  generic: createLuxurySvg('Slender Ladies Salon', 'Bespoke Beauty Sanctuary', '#7A2E3E')
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: string
) => {
  const target = e.currentTarget;
  const fallback = (category && LUXURY_FALLBACKS[category]) || LUXURY_FALLBACKS.generic;

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
