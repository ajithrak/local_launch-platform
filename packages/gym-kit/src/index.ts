// Layout shell — used by every app's [template]/layout.tsx (or root layout.tsx
// for a standalone client site).
export { GymShell } from './components/GymShell';

// Page-content components — one per route. Each app's page.tsx resolves its
// own config (from a multi-template registry, or a single business.json)
// and slug-based lookups (calling notFound() itself), then renders one of
// these with the resolved data.
export { HomePageContent } from './pages/HomePageContent';
export { AboutPageContent } from './pages/AboutPageContent';
export { BlogListPageContent } from './pages/BlogListPageContent';
export { BlogPostPageContent } from './pages/BlogPostPageContent';
export { ContactPageContent } from './pages/ContactPageContent';
export { GalleryPageContent } from './pages/GalleryPageContent';
export { MembershipPageContent } from './pages/MembershipPageContent';
export { LegalPageContent } from './pages/LegalPageContent';
export { ProgramsListPageContent } from './pages/ProgramsListPageContent';
export { ProgramDetailPageContent } from './pages/ProgramDetailPageContent';
export { SchedulePageContent } from './pages/SchedulePageContent';
export { TestimonialsPageContent } from './pages/TestimonialsPageContent';
export { TrainersListPageContent } from './pages/TrainersListPageContent';
export { TrainerDetailPageContent } from './pages/TrainerDetailPageContent';
