import { notFound } from 'next/navigation';
import { gymSiteConfigSchema, type GymSiteConfig } from '@locallaunch/config-schema';
import titanRaw from '../content/templates/titan.json';
import apexRaw from '../content/templates/apex.json';
import forgeRaw from '../content/templates/forge.json';
import pulseRaw from '../content/templates/pulse.json';
import eliteRaw from '../content/templates/elite.json';

export const TEMPLATE_SLUGS = ['titan', 'apex', 'forge', 'pulse', 'elite'] as const;
export type TemplateSlug = (typeof TEMPLATE_SLUGS)[number];

export interface TemplateMeta {
  label: string;
  inspiration: string;
  feeling: string;
}

export const TEMPLATE_META: Record<TemplateSlug, TemplateMeta> = {
  titan: { label: 'Titan', inspiration: 'Nike', feeling: 'Bold & Energetic' },
  apex: { label: 'Apex', inspiration: 'Apple', feeling: 'Minimal & Elegant' },
  forge: { label: 'Forge', inspiration: 'CrossFit', feeling: 'Industrial & Strong' },
  pulse: { label: 'Pulse', inspiration: 'Figma', feeling: 'Clean & Modern' },
  elite: { label: 'Elite', inspiration: 'Luxury Hotel', feeling: 'Premium & Exclusive' },
};

const RAW_CONFIGS: Record<TemplateSlug, unknown> = {
  titan: titanRaw,
  apex: apexRaw,
  forge: forgeRaw,
  pulse: pulseRaw,
  elite: eliteRaw,
};

export function isTemplateSlug(value: string): value is TemplateSlug {
  return (TEMPLATE_SLUGS as readonly string[]).includes(value);
}

/** Parses and validates a template's config. Throws if the JSON ever drifts from the schema. */
export function getTemplateConfig(slug: TemplateSlug): GymSiteConfig {
  return gymSiteConfigSchema.parse(RAW_CONFIGS[slug]);
}

/** For use in page/layout components: validates the route param and 404s on anything unknown. */
export function requireTemplateConfig(templateParam: string): GymSiteConfig {
  if (!isTemplateSlug(templateParam)) {
    notFound();
  }
  return getTemplateConfig(templateParam);
}
