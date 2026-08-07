'use client';

import { buttonVariants } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTemplateBasePath } from './TemplateBasePath';

export function HomeCta() {
  const basePath = useTemplateBasePath();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="px-6 py-16 text-center md:px-10"
    >
      <h2 className="mb-3 text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
        Ready to See a Doctor?
      </h2>
      <p className="mx-auto mb-8 max-w-md" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
        Book an appointment online, or call the clinic directly — our team will confirm your slot within the day.
      </p>
      <Link href={`${basePath}/appointment`} className={buttonVariants({ size: 'md' })} style={{ fontFamily: 'var(--font-body)' }}>
        Book an Appointment
      </Link>
    </motion.section>
  );
}
