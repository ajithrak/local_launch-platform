'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { GalleryImage } from '@locallaunch/config-schema';

interface HeroCarouselProps {
  images: GalleryImage[];
  className?: string;
  intervalMs?: number;
  rounded?: boolean;
}

export function HeroCarousel({ images, className = '', intervalMs = 4200, rounded = true }: HeroCarouselProps) {
  const slides = images.slice(0, 5);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const active = slides[index];
  if (!active) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius: rounded ? 'var(--radius-lg)' : 0 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.caption}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className={`absolute inset-0 flex items-end justify-between gap-2 p-5 ${active.swatchClassName}`}
        >
          <p className="text-sm font-medium text-slate-800">{active.caption}</p>
          <span className="rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-800">
            {active.category}
          </span>
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 md:left-auto md:right-3 md:translate-x-0">
          {slides.map((slide, i) => (
            <button
              key={slide.caption}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 18 : 6,
                backgroundColor: i === index ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0.25)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
