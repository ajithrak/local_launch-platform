'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ whatsapp }: { whatsapp: string }) {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
      style={{
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-accent-contrast)',
        boxShadow: 'var(--shadow-glow, 0 8px 24px -8px rgba(0,0,0,0.4))',
        fontFamily: 'var(--font-body)',
      }}
    >
      <MessageCircle size={18} /> WhatsApp Us
    </motion.a>
  );
}
