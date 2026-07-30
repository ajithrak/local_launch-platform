import { Clock, MapPin } from 'lucide-react';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { MapEmbed } from './MapEmbed';

export function LocationSection({ business }: { business: BusinessInfo }) {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="min-w-0">
          <h2 className="mb-4 text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
            Visit Us
          </h2>
          <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
              {business.address ? `${business.address}` : business.city}
            </p>
            <p className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
              {business.hours}
            </p>
          </div>
        </div>
        <MapEmbed address={business.address} city={business.city} businessName={business.name} className="h-64 md:h-80" />
      </div>
    </section>
  );
}
