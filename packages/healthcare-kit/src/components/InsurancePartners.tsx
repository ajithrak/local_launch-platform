'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import type { InsurancePartner } from '@locallaunch/config-schema';
import { useAssetBasePath } from './TemplateBasePath';

export function InsurancePartners({ partners }: { partners: InsurancePartner[] }) {
  const assetBasePath = useAssetBasePath();
  if (partners.length === 0) return null;

  return (
    <section className="px-6 py-12 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}>
          Cashless &amp; Insurance Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-2"
              style={{ color: 'var(--color-muted)' }}
            >
              {partner.logo ? (
                <img src={`${assetBasePath}${partner.logo}`} alt={partner.name} className="h-7 w-auto object-contain grayscale" />
              ) : (
                <>
                  <ShieldCheck size={16} style={{ color: 'var(--color-accent)' }} />
                  <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>{partner.name}</span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
