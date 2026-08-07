'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { GalleryImage } from '@locallaunch/config-schema';
import { useAssetBasePath } from './TemplateBasePath';

/** Real photo (when provided) with a bottom scrim for caption legibility, else the color-block placeholder's own caption styling. */
function GalleryTileContent({ image }: { image: GalleryImage }) {
  const assetBasePath = useAssetBasePath();
  if (image.src) {
    return (
      <>
        <img src={`${assetBasePath}${image.src}`} alt={image.caption} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <p className="relative text-sm font-medium text-white">{image.caption}</p>
      </>
    );
  }
  return <p className="text-sm font-medium text-slate-800">{image.caption}</p>;
}

export function Gallery({ images, limit }: { images: GalleryImage[]; limit?: number }) {
  const theme = useTheme();
  const categories = Array.from(new Set(images.map((img) => img.category)));
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = (activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory)).slice(0, limit);

  const tileRadius = theme.key === 'orthoedge' ? '0px' : 'var(--radius-lg)';

  return (
    <section className="px-6 pb-16 md:px-10">
      {!limit && (
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', ...categories].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface-alt)',
                  color: isActive ? 'var(--color-accent-contrast)' : 'var(--color-muted)',
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <motion.div
            key={image.caption}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`relative flex h-44 flex-col justify-end overflow-hidden p-4 ${image.src ? '' : image.swatchClassName}`}
            style={{ borderRadius: tileRadius, border: theme.card.border }}
          >
            <GalleryTileContent image={image} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
