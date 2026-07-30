'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { GalleryImage } from '@locallaunch/config-schema';

export function Gallery({ images }: { images: GalleryImage[] }) {
  const theme = useTheme();
  const categories = Array.from(new Set(images.map((img) => img.category)));
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory);

  if (theme.key === 'minimal') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mb-8 flex flex-wrap gap-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
          {['All', ...categories].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative pb-3 text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: isActive ? 'var(--color-foreground)' : 'var(--color-muted)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {category}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-px" style={{ backgroundColor: 'var(--color-foreground)' }} />
                )}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: 'var(--color-border)' }}>
          {filtered.map((image, index) => (
            <motion.div
              key={image.caption}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex h-44 flex-col justify-end p-4 ${image.swatchClassName}`}
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <p className="text-sm font-medium text-slate-800">{image.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', ...categories].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-3 py-1.5 text-xs font-semibold uppercase"
                style={{
                  fontFamily: 'var(--font-body)',
                  border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  color: isActive ? 'var(--color-accent)' : 'var(--color-muted)',
                  letterSpacing: 1,
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((image, index) => (
            <motion.div
              key={image.caption}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex h-44 flex-col justify-end border p-4 ${image.swatchClassName}`}
              style={{ borderColor: 'var(--color-border)' }}
            >
              <p className="text-sm font-medium text-slate-800">{image.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', ...categories].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="rounded px-3 py-1.5 text-xs font-medium"
                style={{
                  fontFamily: 'var(--font-body)',
                  border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  color: isActive ? 'var(--color-accent)' : 'var(--color-muted)',
                  boxShadow: isActive ? '0 0 12px color-mix(in srgb, var(--color-accent) 40%, transparent)' : 'none',
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
              className={`flex h-44 flex-col justify-end p-4 ${image.swatchClassName}`}
              style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent)' }}
            >
              <p className="text-sm font-medium text-slate-800">{image.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'gold') {
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

  // orange (Titan)
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mb-6 flex flex-wrap gap-1.5">
        {['All', ...categories].map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface-alt)',
                color: isActive ? 'var(--color-accent-contrast)' : 'var(--color-muted)',
                letterSpacing: 0.5,
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
            className={`flex h-44 flex-col justify-end p-4 transition hover:-translate-y-1 ${image.swatchClassName}`}
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <p className="text-sm font-medium text-slate-800">{image.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
