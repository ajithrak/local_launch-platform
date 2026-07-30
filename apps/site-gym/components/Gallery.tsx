'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { GalleryImage } from '@locallaunch/config-schema';

export function Gallery({ images }: { images: GalleryImage[] }) {
  const categories = Array.from(new Set(images.map((img) => img.category)));
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mb-6 flex flex-wrap gap-1.5">
        {['All', ...categories].map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <motion.div
            key={image.caption}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`flex h-40 flex-col justify-end p-4 ${image.swatchClassName}`}
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <p className="text-sm font-medium text-slate-800">{image.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
