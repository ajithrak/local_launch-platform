import Link from 'next/link';
import { TEMPLATE_META, TEMPLATE_SLUGS, getTemplateConfig } from '@/lib/templates';

const ACCENT_BY_THEME: Record<string, string> = {
  mednova: '#17A2B8',
  careplus: '#3AA7E0',
  orthoedge: '#1B4B8F',
  smilecraft: '#12B8C4',
  mothercare: '#E8879F',
};

export default function TemplateGalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-neutral-50 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">Healthcare Templates</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Five clinics. Same information, different soul.</h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Every template covers the same pages a clinic actually needs — home, doctors, services, appointments,
          gallery, contact. What changes is the visual identity, layout, and feel.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATE_SLUGS.map((slug) => {
            const meta = TEMPLATE_META[slug];
            const config = getTemplateConfig(slug);
            const accent = ACCENT_BY_THEME[config.theme];

            return (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-neutral-700"
              >
                <div className="mb-4 h-2 w-10 rounded-full" style={{ backgroundColor: accent }} />
                <h2 className="text-xl font-semibold">{meta.label}</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  {meta.feeling} — inspired by {meta.inspiration}
                </p>
                <p className="mt-3 text-sm text-neutral-500">{config.business.name}</p>
                <span className="mt-6 text-sm font-medium text-neutral-300 group-hover:underline">
                  View live site →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
