import React from 'react';

interface SlenderLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmarkInside?: boolean;
  className?: string;
}

/**
 * High-Definition SVG Vector recreation of the official Slender Ladies Salon logo
 * (Crimson-rose emblem, left-facing woman profile with S-curve flowing hair & crown pearl,
 * and geometric SLENDER lettering). Crisp at any Retina / 4K resolution.
 */
export const SlenderLogoMark: React.FC<SlenderLogoProps> = ({
  size = 'md',
  showWordmarkInside = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  }[size];

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 select-none shadow-[0_4px_14px_rgba(196,29,56,0.28)] ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <defs>
          <linearGradient
            id="slenderCrimsonGrad"
            x1="12"
            y1="8"
            x2="108"
            y2="112"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#E62943" />
            <stop offset="55%" stopColor="#C81E37" />
            <stop offset="100%" stopColor="#8E1A2E" />
          </linearGradient>
        </defs>

        {/* Crimson Circular Emblem Base */}
        <circle
          cx="60"
          cy="60"
          r="59"
          fill="url(#slenderCrimsonGrad)"
        />
        <circle
          cx="60"
          cy="60"
          r="56.5"
          stroke="#FFFFFF"
          strokeOpacity="0.18"
          strokeWidth="1.2"
        />

        {/* Woman Silhouette Group (Centered Slightly Higher when Wordmark is Shown) */}
        <g transform={showWordmarkInside ? 'translate(0, -1)' : 'translate(0, 7) scale(1.08)'} style={{ transformOrigin: '60px 52px' }}>
          {/* Top Crown Pearl Dot */}
          <circle cx="59.8" cy="16.5" r="4.4" fill="#FFFFFF" />

          {/* Outer S-Wave Flowing Hair Strand */}
          <path
            d="M55.4 13.5C49.4 19.4 49.6 31.0 56.9 41.6C64.5 52.8 71.0 62.6 67.5 73.4C64.6 82.2 54.6 85.6 46.5 81.6C53.2 82.4 59.6 78.8 61.0 72.2C62.6 64.2 56.6 55.0 49.8 45.2C43.1 35.4 43.3 22.0 55.4 13.5Z"
            fill="#FFFFFF"
          />

          {/* Woman Side Profile Facing Left + Inner Flowing Hair Wave */}
          <path
            d="M49.6 20.4C43.5 25.2 41.6 33.0 41.9 39.8C42.0 42.3 41.0 44.1 38.9 46.2C37.4 47.7 37.5 49.0 39.3 49.7C40.2 50.1 40.5 51.0 39.8 52.0C39.2 52.8 39.4 53.8 40.5 54.4C39.8 55.2 40.0 56.3 41.2 56.8C41.9 57.2 41.7 58.6 41.5 60.2C41.2 62.9 43.0 64.7 46.1 64.4C49.5 64.1 52.8 61.6 55.7 63.2C59.0 65.0 59.8 70.5 56.5 74.8C53.5 78.6 48.1 79.0 44.2 76.4C47.7 81.8 55.8 82.6 60.6 77.4C65.4 72.1 63.6 63.4 56.7 53.6C49.8 43.8 44.4 33.0 49.6 20.4Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Crisp Vector SLENDER Wordmark Inside Emblem */}
        {showWordmarkInside && (
          <text
            x="60"
            y="100"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="13.5"
            fontWeight="700"
            letterSpacing="2.4"
          >
            SLENDER
          </text>
        )}
      </svg>
    </div>
  );
};
