import { z } from 'zod';
import { siteConfigBaseSchema } from '../base';

export const trainerSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().min(1),
  photo: z.string().optional(),
  certifications: z.array(z.string().min(1)).default([]),
  specialties: z.array(z.string().min(1)).default([]),
});

export const classScheduleItemSchema = z.object({
  day: z.string().min(1),
  time: z.string().min(1),
  className: z.string().min(1),
  trainer: z.string().min(1),
});

export const programSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  duration: z.string().min(1),
  features: z.array(z.string().min(1)).min(1),
});

export const transformationSchema = z.object({
  memberName: z.string().min(1),
  duration: z.string().min(1),
  description: z.string().min(1),
  /** Short punchy result callout, e.g. "-22 lbs" or "+80 lbs deadlift". */
  statLabel: z.string().min(1),
  beforeSwatchClassName: z.string().min(1),
  afterSwatchClassName: z.string().min(1),
  /** Real before/after photo URLs. When present, render instead of the color-block placeholders. */
  beforeSrc: z.string().optional(),
  afterSrc: z.string().optional(),
});

export const gymSiteConfigSchema = siteConfigBaseSchema.extend({
  industry: z.literal('gym'),
  trainers: z.array(trainerSchema).min(1),
  classSchedule: z.array(classScheduleItemSchema).default([]),
  programs: z.array(programSchema).min(1),
  transformations: z.array(transformationSchema).default([]),
});

export type Trainer = z.infer<typeof trainerSchema>;
export type ClassScheduleItem = z.infer<typeof classScheduleItemSchema>;
export type Program = z.infer<typeof programSchema>;
export type Transformation = z.infer<typeof transformationSchema>;
export type GymSiteConfig = z.infer<typeof gymSiteConfigSchema>;
