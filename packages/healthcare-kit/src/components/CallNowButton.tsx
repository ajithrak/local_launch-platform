'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export function CallNowButton({ phone }: { phone: string }) {
  return (
    <motion.a
      href={`tel:${phone.replace(/[^\d+]/g, '')}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold md:hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-foreground)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 8px 24px -8px rgba(0,0,0,0.3)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Phone size={18} style={{ color: 'var(--color-accent)' }} /> Call Now
    </motion.a>
  );
}
