/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { handleImageError } from '../utils/imageFallback';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  category?: 'skin' | 'dr_renaud' | 'gold_facial' | 'waxing' | 'hair' | 'keratin' | 'hammam' | 'nails' | 'home' | 'interior' | 'avatar' | 'generic';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Slender Ladies Salon Dubai',
  category,
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Subtle shimmer skeleton until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F5] via-[#FFF0F3] to-[#EDF7EF] animate-pulse pointer-events-none" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          setIsLoaded(true);
          handleImageError(e, category);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
