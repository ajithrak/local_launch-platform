import { z } from 'zod';

/**
 * Every industry's site config extends this. Keep this schema generic and
 * free of anything industry-specific (a "trainer" belongs in gym.ts, not
 * here) so adding a new industry never requires touching this file.
 */

export const themeKeySchema = z.enum(['dark', 'gold', 'minimal', 'orange', 'neon']);

export const socialLinksSchema = z.object({
  instagram: z.string().url().optional(),
  facebook: z.string().url().optional(),
  youtube: z.string().url().optional(),
});

export const businessInfoSchema = z.object({
  name: z.string().min(1),
  city: z.string().min(1),
  phone: z.string().min(1),
  whatsapp: z.string().min(1),
  email: z.string().email().optional(),
  address: z.string().optional(),
  hours: z.string().min(1),
  socials: socialLinksSchema.default({}),
  /** URL to a real logo image. Falls back to the styled business name text when absent. */
  logo: z.string().optional(),
});

export const ctaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const heroSchema = z.object({
  eyebrow: z.string().optional(),
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
});

export const statSchema = z.object({
  icon: z.string().min(1),
  value: z.string().min(1),
  label: z.string().min(1),
});

export const membershipPlanSchema = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  period: z.string().min(1),
  features: z.array(z.string().min(1)).min(1),
  featured: z.boolean().default(false),
});

export const googleReviewsSchema = z.object({
  rating: z.number().min(0).max(5),
  reviewCount: z.number().min(0),
});

export const testimonialSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1),
  rating: z.number().min(1).max(5).default(5),
});

export const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  ogImage: z.string().optional(),
});

export const aboutSchema = z.object({
  title: z.string().min(1),
  body: z.array(z.string().min(1)).min(1),
  highlights: z.array(z.string().min(1)).default([]),
});

export const galleryImageSchema = z.object({
  caption: z.string().min(1),
  category: z.string().min(1),
  /** Tailwind class used as a color-block placeholder when `src` isn't provided. */
  swatchClassName: z.string().min(1),
  /** URL to a real photo. When present, renders instead of the color-block placeholder. */
  src: z.string().optional(),
});

export const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.array(z.string().min(1)).min(1),
  author: z.string().min(1),
  date: z.string().min(1),
});

export const legalSectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
});

export const legalPageSchema = z.object({
  title: z.string().min(1),
  lastUpdated: z.string().min(1),
  sections: z.array(legalSectionSchema).min(1),
});

export const whyChooseUsItemSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const siteConfigBaseSchema = z.object({
  business: businessInfoSchema,
  theme: themeKeySchema,
  hero: heroSchema,
  about: aboutSchema,
  stats: z.array(statSchema).default([]),
  whyChooseUs: z.array(whyChooseUsItemSchema).default([]),
  plans: z.array(membershipPlanSchema).default([]),
  testimonials: z.array(testimonialSchema).default([]),
  googleReviews: googleReviewsSchema.optional(),
  faqs: z.array(faqSchema).default([]),
  gallery: z.array(galleryImageSchema).default([]),
  blogPosts: z.array(blogPostSchema).default([]),
  privacyPolicy: legalPageSchema,
  termsAndConditions: legalPageSchema,
  seo: seoSchema,
});

export type ThemeKeyValue = z.infer<typeof themeKeySchema>;
export type BusinessInfo = z.infer<typeof businessInfoSchema>;
export type Hero = z.infer<typeof heroSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Stat = z.infer<typeof statSchema>;
export type MembershipPlan = z.infer<typeof membershipPlanSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type GoogleReviews = z.infer<typeof googleReviewsSchema>;
export type Faq = z.infer<typeof faqSchema>;
export type GalleryImage = z.infer<typeof galleryImageSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;
export type LegalPage = z.infer<typeof legalPageSchema>;
export type WhyChooseUsItem = z.infer<typeof whyChooseUsItemSchema>;
export type Seo = z.infer<typeof seoSchema>;
export type SiteConfigBase = z.infer<typeof siteConfigBaseSchema>;
