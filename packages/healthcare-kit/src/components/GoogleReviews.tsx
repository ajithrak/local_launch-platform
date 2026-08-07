'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { BusinessInfo, GoogleReviews as GoogleReviewsConfig } from '@locallaunch/config-schema';

function GoogleG({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18A13.87 13.87 0 0 1 10.95 24c0-1.45.25-2.86.74-4.18v-5.7H4.34A21.94 21.94 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

export function GoogleReviews({ reviews, business }: { reviews: GoogleReviewsConfig; business: BusinessInfo }) {
  const query = encodeURIComponent(business.address ? `${business.name}, ${business.address}` : `${business.name}, ${business.city}`);
  const mapsUrl = `https://www.google.com/maps?q=${query}`;
  const fullStars = Math.round(reviews.rating);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="px-6 py-14 md:px-10"
    >
      <div
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
        style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <GoogleG size={32} />
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--color-foreground)' }}>{reviews.rating.toFixed(1)}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < fullStars ? '#FBBC05' : 'none'} color={i < fullStars ? '#FBBC05' : 'var(--color-border)'} />
                ))}
              </div>
            </div>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Based on {reviews.reviewCount.toLocaleString()} Google reviews</p>
          </div>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition hover:brightness-110"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', fontFamily: 'var(--font-body)' }}
        >
          Read our reviews
        </a>
      </div>
    </motion.section>
  );
}
