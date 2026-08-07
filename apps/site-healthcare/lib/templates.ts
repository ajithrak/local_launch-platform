import { notFound } from 'next/navigation';
import { healthcareSiteConfigSchema, type HealthcareSiteConfig } from '@locallaunch/config-schema';
import mednovaRaw from '../content/templates/mednova.json';
import careplusRaw from '../content/templates/careplus.json';
import orthoedgeRaw from '../content/templates/orthoedge.json';
import smilecraftRaw from '../content/templates/smilecraft.json';
import mothercareRaw from '../content/templates/mothercare.json';

export const TEMPLATE_SLUGS = ['mednova', 'careplus', 'orthoedge', 'smilecraft', 'mothercare'] as const;
export type TemplateSlug = (typeof TEMPLATE_SLUGS)[number];

export interface TemplateMeta {
  label: string;
  inspiration: string;
  feeling: string;
}

export const TEMPLATE_META: Record<TemplateSlug, TemplateMeta> = {
  mednova: { label: 'MedNova', inspiration: 'Private hospital lobby', feeling: 'Premium & Glassy' },
  careplus: { label: 'CarePlus', inspiration: "Children's clinic", feeling: 'Friendly & Bright' },
  orthoedge: { label: 'OrthoEdge', inspiration: 'Sports performance lab', feeling: 'Bold & Structured' },
  smilecraft: { label: 'SmileCraft', inspiration: 'Boutique dental studio', feeling: 'Clean & Rounded' },
  mothercare: { label: 'MotherCare', inspiration: "Women's wellness suite", feeling: 'Warm & Elegant' },
};

const RAW_CONFIGS: Record<TemplateSlug, unknown> = {
  mednova: mednovaRaw,
  careplus: careplusRaw,
  orthoedge: orthoedgeRaw,
  smilecraft: smilecraftRaw,
  mothercare: mothercareRaw,
};

export function isTemplateSlug(value: string): value is TemplateSlug {
  return (TEMPLATE_SLUGS as readonly string[]).includes(value);
}

/** Parses and validates a template's config. Throws if the JSON ever drifts from the schema. */
export function getTemplateConfig(slug: TemplateSlug): HealthcareSiteConfig {
  return healthcareSiteConfigSchema.parse(RAW_CONFIGS[slug]);
}

/** For use in page/layout components: validates the route param and 404s on anything unknown. */
export function requireTemplateConfig(templateParam: string): HealthcareSiteConfig {
  if (!isTemplateSlug(templateParam)) {
    notFound();
  }
  return getTemplateConfig(templateParam);
}
