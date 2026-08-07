'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { GalleryImage } from '@locallaunch/config-schema';
import { useAssetBasePath } from './TemplateBasePath';

interface HeroCarouselProps {
  images: GalleryImage[];
  className?: string;
  intervalMs?: number;
  rounded?: boolean;
}

export function HeroCarousel({ images, className = '', intervalMs = 4000, rounded = true }: HeroCarouselProps) {
  const assetBasePath = useAssetBasePath();
  const slides = images.slice(0, 5);
  const slidesKey = JSON.stringify(slides.map((s) => s.src ?? s.caption));
  const [index, setIndex] = useState(0);

  // Warm the browser cache for every slide up front so a slide transition never has to wait on a network fetch — that wait is what caused the blank flash before the image painted in.
  useEffect(() => {
    slides.forEach((slide) => {
      if (!slide.src) return;
      const img = new window.Image();
      img.src = `${assetBasePath}${slide.src}`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetBasePath, slidesKey]);

  // A carousel instance can persist across a client-side nav that swaps `images`
  // (e.g. switching between template previews) — reset to slide 0 whenever the
  // gallery itself changes, rather than resuming mid-sequence on unrelated content.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIndex(0), [slidesKey]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius: rounded ? 'var(--radius-lg)' : 0 }}
    >
      {/* Every slide stays mounted the whole time and we just animate its own opacity
          in or out based on whether it's the active one — no AnimatePresence, no
          mount/unmount reconciliation to get wrong. This also means every slide's
          <img> starts downloading immediately on first render, not on its turn to
          appear, so there's never a network wait sitting in the middle of a crossfade. */}
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <motion.div
            key={slide.src ?? slide.caption}
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`absolute inset-0 flex items-end justify-between gap-2 p-5 ${active ? 'z-10 pointer-events-auto' : 'z-0 pointer-events-none'} ${slide.src ? '' : slide.swatchClassName}`}
          >
            {slide.src && (
              <>
                <img src={`${assetBasePath}${slide.src}`} alt={slide.caption} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </>
            )}
            <p className={`text-sm font-medium ${slide.src ? 'text-white' : 'text-slate-800'}`}>{slide.caption}</p>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                slide.src ? 'bg-white/20 text-white' : 'bg-black/10 text-slate-800'
              }`}
            >
              {slide.category}
            </span>
          </motion.div>
        );
      })}

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 md:left-auto md:right-3 md:translate-x-0">
          {slides.map((slide, i) => (
            <button
              key={slide.src ?? slide.caption}
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
