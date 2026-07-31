'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { GalleryImage } from '@locallaunch/config-schema';
import { useAssetBasePath } from './TemplateBasePath';

interface HeroCarouselProps {
  images: GalleryImage[];
  className?: string;
  intervalMs?: number;
  rounded?: boolean;
}

export function HeroCarousel({ images, className = '', intervalMs = 6000, rounded = true }: HeroCarouselProps) {
  const assetBasePath = useAssetBasePath();
  const slides = images.slice(0, 5);
  const [index, setIndex] = useState(0);

  // Warm the browser cache for every slide up front so a slide transition never has to wait on a network fetch — that wait is what caused the blank flash before the image painted in.
  useEffect(() => {
    slides.forEach((slide) => {
      if (!slide.src) return;
      const img = new window.Image();
      img.src = `${assetBasePath}${slide.src}`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetBasePath, JSON.stringify(slides.map((s) => s.src))]);

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
      {/* No `mode="wait"` — the exiting and entering slides overlap and crossfade instead of
          unmounting-then-mounting, so the outgoing photo stays visible the whole time instead
          of leaving a blank gap while the next one loads. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className={`absolute inset-0 flex items-end justify-between gap-2 p-5 ${active.src ? '' : active.swatchClassName}`}
        >
          {active.src && (
            <>
              <img src={`${assetBasePath}${active.src}`} alt={active.caption} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </>
          )}
          <p className={`text-sm font-medium ${active.src ? 'text-white' : 'text-slate-800'}`}>{active.caption}</p>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
              active.src ? 'bg-white/20 text-white' : 'bg-black/10 text-slate-800'
            }`}
          >
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
