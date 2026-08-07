import { z } from 'zod';
import { siteConfigBaseSchema, faqSchema } from '../base';

export const doctorSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  qualification: z.string().min(1),
  /** Medical council registration number — shown, not decorative; patients check it. */
  registrationNumber: z.string().min(1),
  role: z.string().min(1),
  experienceYears: z.number().min(0),
  languages: z.array(z.string().min(1)).default([]),
  availability: z.string().min(1),
  bio: z.string().min(1),
  photo: z.string().optional(),
  education: z.array(z.string().min(1)).default([]),
  awards: z.array(z.string().min(1)).default([]),
  specialties: z.array(z.string().min(1)).default([]),
});

export const serviceSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  tagline: z.string().min(1),
  overview: z.string().min(1),
  symptoms: z.array(z.string().min(1)).default([]),
  procedure: z.array(z.string().min(1)).default([]),
  benefits: z.array(z.string().min(1)).default([]),
  recovery: z.string().optional(),
  faqs: z.array(faqSchema).default([]),
  relatedServiceSlugs: z.array(z.string().min(1)).default([]),
});

export const insurancePartnerSchema = z.object({
  name: z.string().min(1),
  logo: z.string().optional(),
});

export const departmentSchema = z.object({
  name: z.string().min(1),
  doctorSlugs: z.array(z.string().min(1)).default([]),
});

export const clinicTypeSchema = z.enum([
  'dental',
  'orthopedic',
  'gynecology',
  'pediatric',
  'general-physician',
  'ent',
  'eye',
  'dermatology',
  'physiotherapy',
  'ivf',
  'multi-speciality',
]);

export const healthcareSiteConfigSchema = siteConfigBaseSchema.extend({
  industry: z.literal('healthcare'),
  clinicType: clinicTypeSchema,
  doctors: z.array(doctorSchema).min(1),
  services: z.array(serviceSchema).min(1),
  departments: z.array(departmentSchema).default([]),
  insurancePartners: z.array(insurancePartnerSchema).default([]),
  emergencyPhone: z.string().optional(),
});

export type Doctor = z.infer<typeof doctorSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type InsurancePartner = z.infer<typeof insurancePartnerSchema>;
export type Department = z.infer<typeof departmentSchema>;
export type ClinicType = z.infer<typeof clinicTypeSchema>;
export type HealthcareSiteConfig = z.infer<typeof healthcareSiteConfigSchema>;
