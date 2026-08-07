// Layout shell — used by every app's [template]/layout.tsx (or root layout.tsx
// for a standalone client site).
export { ClinicShell } from './components/ClinicShell';

// Page-content components — one per route. Each app's page.tsx resolves its
// own config (from a multi-template registry, or a single business.json)
// and slug-based lookups (calling notFound() itself), then renders one of
// these with the resolved data.
export { HomePageContent } from './pages/HomePageContent';
export { AboutPageContent } from './pages/AboutPageContent';
export { DoctorsListPageContent } from './pages/DoctorsListPageContent';
export { DoctorDetailPageContent } from './pages/DoctorDetailPageContent';
export { ServicesListPageContent } from './pages/ServicesListPageContent';
export { ServiceDetailPageContent } from './pages/ServiceDetailPageContent';
export { AppointmentPageContent } from './pages/AppointmentPageContent';
export { GalleryPageContent } from './pages/GalleryPageContent';
export { TestimonialsPageContent } from './pages/TestimonialsPageContent';
export { ContactPageContent } from './pages/ContactPageContent';
export { BlogListPageContent } from './pages/BlogListPageContent';
export { BlogPostPageContent } from './pages/BlogPostPageContent';
export { LegalPageContent } from './pages/LegalPageContent';
